import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { StyledButton } from "../../components/StyledButton";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { UserContext } from "../../context/UserContext";
import { ButtonDiv, ErrorParagraph, FormContainer, InputDiv, Item, ScreenContainer, StyledInput, Subtitle, Title } from "./styled";
import axios from "axios";

export default function CheckOutPage(){
 
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [sucess, setSucess] = useState(false)

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    const [form, setForm] = useState({ name: user.name, street:"", number:"", city:"", uf:"", cep:"", paymentMethod:"", items:carrinho});
    const [select, setSelect] = useState("");

    async function completePurchase(e){
        e.preventDefault();
        const body = {...form}
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/checkout`, body, config);
            console.log("compra feita com sucesso")
            setCarrinho([])
            localStorage.removeItem('carrinho');
            setSucess(true);
            setTimeout(() => {
                navigate("/")
            }, 4000)
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data);
        }
    }

    function cancelPurchase(){
        if(window.confirm("Tem certeza de que gostaria de cancelar a compra?")){
            setForm({ name: "", 
                street:"", number:"", city:"", uf:"", cep:"", paymentMethod:"", items:carrinho});
            setSelect("");
            navigate("/");
        }  
    }

    function handleForm(e) {
            setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handlePayement(value){
        setForm({...form, paymentMethod: value})
        setSelect(value)
    }

    return(
        <>
        <Header carrinho={carrinho}></Header>
        <ScreenContainer>
            {sucess ? 
            <div>
                <Title>Compra finalizada com sucesso!</Title>
                <Subtitle>Você será redirecionado à Home em poucos segundos...</Subtitle>
            </div>
            : 
            <FormContainer color={"#b41241"}>
            <h1>Finalizar compra</h1>
            <form onSubmit={completePurchase}>
                <InputDiv>
                    <h2>Endereço de entrega</h2>
                    <div>
                        <StyledInput colorPlaceholder={"#b41241"}
                        name="street"
                        type="text"
                        required
                        value={form.street}
                        onChange={handleForm}
                        placeholder="Nome da rua para a entrga" />

                        <StyledInput colorPlaceholder={"#b41241"}
                        name="number"
                        type="number"
                        required
                        value={form.number}
                        onChange={handleForm}
                        placeholder="Número da residência" />
                    </div> 
                    <div>
                        <StyledInput colorPlaceholder={"#b41241"}
                        name="city"
                        type="text"
                        required
                        value={form.city}
                        onChange={handleForm}
                        placeholder="Cidade" />

                        <StyledInput colorPlaceholder={"#b41241"}
                        name="uf"
                        type="text"
                        required
                        minLength={2}
                        maxLength={2}
                        value={form.uf}
                        onChange={handleForm}
                        placeholder="Unidade de Federação (Apenas a sigla)" />
                    </div> 
                    <div>
                    <StyledInput colorPlaceholder={"#b41241"}
                        name="cep"
                        type="text"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required
                        value={form.cep}
                        onChange={handleForm}
                        placeholder="CEP (XXXXX-XXX)" />
                    </div>
                </InputDiv>
                <InputDiv style={{marginBottom: 0}}>
                    <h2>Forma de pagamento</h2>
                    <div style={{marginBottom: 0}}>
                        <Item onClick={()=>handlePayement("credit-card")}>
                            Pagar com cartão de crédito
                        </Item>
                        <Item onClick={()=> handlePayement("PIX")}>
                            Pagar com PIX
                        </Item>
                    </div>
                </InputDiv>
                  
                {select ? 
                            select === "PIX" ? 
                            <InputDiv>
                                <h2>Chave PIX</h2>
                                <StyledInput colorPlaceholder={"#b41241"}
                                    name="pix"
                                    type="text"
                                    required
                                    placeholder="Digite sua chave PIX" />
                            </InputDiv> 
                            : 
                            <InputDiv>
                                <h2>Dados do cartão</h2>
                                <div>
                                <StyledInput
                                    name="cardName"
                                    type="text"
                                    placeholder="Nome impresso no cartão"
                                    required
                                />
                                <StyledInput
                                name="cardNumber"
                                type="text"
                                minLength={13}
                                maxLength={16}
                                pattern="[0-9]{13,16}"
                                placeholder="Dígitos do cartão (Apenas números)"
                                required
                                />
                                </div>
                                <div>
                                <StyledInput
                                name="securityNumber"
                                type="text"
                                pattern="[0-9]{3,4}"
                                minLength={3}
                                maxLength={4}
                                placeholder="CVC (3 ou 4 dígitos)"
                                required
                                />
                                <StyledInput
                                name="expirationDate"
                                type="text"
                                placeholder="Validade do cartão (MM/AA)"
                                pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
                                required
                                />
                                </div>
                            </InputDiv>
                            :
                            ""
                }
                <ButtonDiv>
                    {errorMessage && <ErrorParagraph>{errorMessage}</ErrorParagraph>}
                    <StyledButton hover={"#c34167"} background={"#a2103b"} type="submit">Finalizar compra</StyledButton>
                </ButtonDiv>
            </form>
            <StyledButton onClick={cancelPurchase} hover={"#c34167"} background={"#a2103b"}>Cancelar compra</StyledButton>
        </FormContainer>
            }
            
        </ScreenContainer>
        </>
    );
}