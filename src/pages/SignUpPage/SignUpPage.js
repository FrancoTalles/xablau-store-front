import { ScreenContainer } from "../../components/ScreenContainer";
import signupBackground from "../../assets/signup.jpg";
import { StyledForm } from "../../components/StyledForm";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { ErrorParagraph } from "./styled";

export default function SignUpPage(){

    const [form, setForm] = useState({ email: "", password: "", name: "", confirm_password: "" });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    async function handleSignUp(e) {
        e.preventDefault();
        const body = {...form};
        try {
            const promise = await axios.post(`${process.env.REACT_APP_API_URL}/signUp`, body);
            alert(promise.data);
            navigate("/signIn");
        } catch (error) {
            setErrorMessage(error.response.data);
        }
        
    }

    return (
        <ScreenContainer background ={signupBackground}>
            <StyledForm color={"#db7c4e"}>
                <h1>Cadastro</h1>
                <form onSubmit={handleSignUp}>
                    <div>
                        <h2>Nome</h2>
                        <StyledInput colorPlaceholder={"#db7c4e"}
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleForm}
                        placeholder="Digite seu nome de usuário" />
                    </div>
                    <div>
                        <h2>Email</h2>
                        <StyledInput colorPlaceholder={"#db7c4e"}
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleForm}
                        placeholder="Digite seu e-mail" />
                    </div>
                    <div>
                        <h2>Senha</h2>
                        <StyledInput colorPlaceholder={"#db7c4e"}
                        name="password"
                        type="password"
                        required
                        value={form.password}
                        onChange={handleForm}
                        placeholder="Digite sua senha" />
                    </div>
                    <div>
                        <h2>Confirmação de senha</h2>
                        <StyledInput colorPlaceholder={"#db7c4e"}
                        name="confirm_password"
                        type="password"
                        required
                        value={form.confirm_password}
                        onChange={handleForm}
                        placeholder="Confirme a senha" />
                    </div>
                    {errorMessage && <ErrorParagraph>{errorMessage}</ErrorParagraph>}
                    <StyledButton hover={"#db7c4e"} background={"#d76b38"} type="submit">Fazer Cadastro</StyledButton>
                </form>
                <Link to="/signin">
                    Já está cadastrado? Faça login!
                </Link>
            </StyledForm>
        </ScreenContainer>
    );
}