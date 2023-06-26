import React, { useState } from "react";
import {
    ButtonOutlinePrimary,
    Container,
    Divider,
    Input,
    InputWrapper,
    Label,
} from "../../globalStyles";
import { LoginFormWrapper } from "./styles";
import UseLogin from "./hooks/UseLogin";
import Spinner from "../../components/Spinner/Spinner";
import Toast from "../../components/Toast/Toast";

function Login() {
    const {
        email,
        setEmail,
        senha,
        setSenha,
        submitForm,
        loading,
        toast,
        toastMessage,
        setToast,
    } = UseLogin();

    const [validEmail, setValidEmail] = useState<boolean>(true);
    const [validSenha, setValidSenha] = useState<boolean>(true);

    if (loading) return <Spinner />;

    return (
        <LoginFormWrapper>
            <Toast
                mensagem={toastMessage}
                type="error"
                showToast={toast}
                setShowToast={setToast}
                fixed={true}
                duration={6000}
            />
            <InputWrapper>
                <Label>Email</Label>
                <Divider size={4} />
                <Input
                    id="email"
                    className={`${validEmail || "input-invalid"}`}
                    type="email"
                    value={email}
                    onChange={(e) => {
                        if (
                            e.target.value.trim() == "" ||
                            !e.target.value.includes("@")
                        ) {
                            setValidEmail(false);
                        } else {
                            setValidEmail(true);
                        }
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                />
                {validEmail || (
                    <li style={{ color: "lightcoral" }}>Email inválido</li>
                )}
            </InputWrapper>
            <Divider size={12} />
            <InputWrapper>
                <Label>Senha</Label>
                <Divider size={4} />
                <Input
                    id="senha"
                    className={`${validSenha || "input-invalid"}`}
                    type="password"
                    value={senha}
                    onChange={(e) => {
                        if (e.target.value.trim() === "") {
                            setValidSenha(false);
                        } else {
                            setValidSenha(true);
                        }
                        setSenha(e.target.value);
                    }}
                    placeholder="Senha"
                />
                {validSenha || (
                    <li style={{ color: "lightcoral" }}>Senha inválida</li>
                )}
            </InputWrapper>
            <Divider size={24} />
            <ButtonOutlinePrimary
                disabled={!validSenha || !validEmail ? true : false}
                type="button"
                onClick={() => {
                    if (!email || email.trim() === "") {
                        setValidEmail(false);
                        return;
                    }
                    if (!senha || senha.trim() === "") {
                        setValidSenha(false);
                        return;
                    }
                    submitForm();
                }}
            >
                Entrar
            </ButtonOutlinePrimary>
        </LoginFormWrapper>
    );
}

export default Login;
