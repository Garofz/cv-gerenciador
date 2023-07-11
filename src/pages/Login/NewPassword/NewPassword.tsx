import React, { useState } from "react";
import { Button, Input, PasswordStrength, Warning } from "ui-gds";
import { Divider, TitleH1 } from "../../../globalStyles";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../redux/features/generalData/generalDataSelectors";
import { atualizaSenhaUsuario } from "../../../redux/features/clientsData/clientsDataThunk";
import { useAsyncDispatch } from "../../../redux/store";
import { logIn } from "../../../redux/features/generalData/generalDataSlice";

export interface IProps {
    nextLayout: () => void;
}

function NewPassword({ nextLayout }: IProps) {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordValidate, setNewPasswordValidate] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");
    const [showMessageError, setShowMessageError] = useState<boolean>(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!user) return;

        setMessageError("");
        setShowMessageError(false);

        if (!validPassword) {
            setMessageError("A senha informada está inválida");
            setShowMessageError(true);
        }

        if (newPassword !== newPasswordValidate) {
            setMessageError("As senhas precisam estar iguais");
            setShowMessageError(true);
        }

        const response = await dispatch(
            atualizaSenhaUsuario({
                userId: user._Id,
                productId: 1,
                password: newPassword,
                token: user.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (response?.usuario === undefined) return;

        await dispatch(logIn());
    }

    return (
        <div>
            <TitleH1>Escolha uma nova senha</TitleH1>
            <Divider size={20} />
            <form
                onSubmit={async (e) => await handleSubmit(e)}
                style={{
                    width: "600px",
                    padding: "20px 20px 0px 20px",
                }}
            >
                {showMessageError && (
                    <div>
                        <Warning type="error" message={messageError} />
                        <Divider size={12} />
                    </div>
                )}
                <Input
                    autoComplete="new-password"
                    inputType="password"
                    name="new-password"
                    placeholder="Digite a Nova Senha"
                    labelText="Nova Senha"
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Divider size={12} />
                <PasswordStrength
                    isValid={(valid) => setValidPassword(valid)}
                    lengthStrength={8}
                    value={newPassword}
                />
                <Divider size={12} />
                <Input
                    autoComplete="new-password-verify"
                    id="new-password-verify"
                    inputType="password"
                    name="SenhaVerify"
                    placeholder="Digite Novamente a Senha"
                    labelText="Nova Senha"
                    onChange={(e) => setNewPasswordValidate(e.target.value)}
                />
                <Divider size={20} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Button
                        type="submit"
                        buttonType="primary"
                        text="Enviar"
                        size="medium"
                    />
                    <Button
                        type="button"
                        buttonType="secundary"
                        text="Voltar"
                        size="medium"
                        onClick={nextLayout}
                    />
                </div>
            </form>
        </div>
    );
}

export default NewPassword;
