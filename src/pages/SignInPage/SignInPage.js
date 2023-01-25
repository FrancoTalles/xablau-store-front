import { ScreenContainer } from "../../components/ScreenContainer";
import signinBackground from "../../assets/signIn.jpg";
import { StyledForm } from "../../components/StyledForm";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignInPage(){

    const [form, setForm] = useState({ email: "", password: ""});
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    function handleSignIn(e) {
        e.preventDefault();
        
        navigate("/");
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

                    <StyledButton hover={"#c34167"} background={"#a2103b"} type="submit">Fazer Login</StyledButton>
                </form>
                <Link to="/signup">
                    Ainda não está cadastrado? Cadastre-se!
                </Link>
            </StyledForm>
        </ScreenContainer>
    );
}