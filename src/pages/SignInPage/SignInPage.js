import { ScreenContainer } from "../../components/ScreenContainer";
import signinBackground from "../../assets/signIn.jpg";
import { StyledForm } from "../../components/StyledForm";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { ErrorParagraph } from "./styled";


export default function SignInPage(){

    const [form, setForm] = useState({ email: "", password: ""});
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState("");

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    async function handleSignIn(e) {
        e.preventDefault();
        const body = {...form};
        try {
            const userData = await axios.post(`${process.env.REACT_APP_API_URL}/signIn`, body);
            localStorage.setItem("user", JSON.stringify(userData.data))
            setUser(userData.data)
            navigate("/")
        } catch (error) {
            setErrorMessage(error.response.data);
        }
    }

    return (
        <ScreenContainer background ={signinBackground}>
            <StyledForm color={"#b41241"}>
                <h1>Login</h1>
                <form onSubmit={handleSignIn}>
                    <div>
                        <h2>Email</h2>
                        <StyledInput colorPlaceholder={"#b41241"}
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleForm}
                        placeholder="Digite seu e-mail" />
                    </div>
                    <div>
                        <h2>Senha</h2>
                        <StyledInput colorPlaceholder={"#b41241"}
                        name="password"
                        type="password"
                        required
                        value={form.password}
                        onChange={handleForm}
                        placeholder="Digite sua senha" />
                    </div>
                    {errorMessage && <ErrorParagraph>{errorMessage}</ErrorParagraph>}
                    <StyledButton hover={"#c34167"} background={"#a2103b"} type="submit">Fazer Login</StyledButton>
                </form>
                <Link to="/signup">
                    Ainda não está cadastrado? Cadastre-se!
                </Link>
            </StyledForm>
        </ScreenContainer>
    );
}