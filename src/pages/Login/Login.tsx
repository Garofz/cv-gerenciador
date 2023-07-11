import React, { useState } from "react";
import {
    ButtonOutlinePrimary,
    Container,
    Divider,
    InputWrapper,
    Label,
} from "../../globalStyles";
import { LoginFormWrapper } from "./styles";
import UseLogin from "./hooks/UseLogin";
import Spinner from "../../components/Spinner/Spinner";
import Toast from "../../components/Toast/Toast";
import { Button, Input } from "ui-gds";

export interface IProps {
    nextlayout: () => void;
}

function Login({ nextlayout }: IProps) {
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
    } = UseLogin({ nextlayout });

    const [validEmail, setValidEmail] = useState<boolean>(true);
    const [validSenha, setValidSenha] = useState<boolean>(true);

    if (loading) return <Spinner />;

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Impede o comportamento padrão do formulário de ser disparado
            if (!email || email.trim() === "" || !email.includes("@")) {
                setValidEmail(false);
                return;
            }
            if (!senha || senha.trim() === "") {
                setValidSenha(false);
                return;
            }
            submitForm();
        }
    };

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
            <Input
                inputType="default"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                labelText="Email"
                labelStyle="bold"
                error={!validEmail}
                errorMessage="Email inválido"
                onKeyDown={handleKeyPress}
            />
            <Divider size={12} />
            <Input
                inputType="password"
                name="Senha"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                labelText="Senha"
                labelStyle="bold"
                error={!validSenha}
                errorMessage="Senha inválida"
                onKeyDown={handleKeyPress}
            />
            <Divider size={24} />
            <Button
                buttonType="secundary"
                text="Entrar"
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
            />
        </LoginFormWrapper>
    );
}

export default Login;
