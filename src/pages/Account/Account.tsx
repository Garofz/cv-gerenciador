import React, { useState } from "react";
import {
    Divider,
    Subtitle1,
    Subtitle2,
    TextBold,
    TextNormal,
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH5,
} from "../../globalStyles";
import {
    AccountDetailLI,
    AccountDetailSpan,
    AccountDetailUL,
    DividerLine,
    ContainerAccountDiv,
    LogOutDiv,
    LogOutLink,
    PreferencesIcon,
} from "./styles";
import useAccount from "./hooks/useAccount";
import { mascararCelular, mascararEmail } from "../../util/mask";
import { FaLightbulb, FaSignOutAlt } from "react-icons/fa";
import { useAsyncDispatch } from "../../redux/store";
import {
    logIn,
    logOut,
} from "../../redux/features/generalData/generalDataSlice";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {
    BodyTextBold,
    Button,
    Input,
    PasswordStrength,
    ThemeSelector,
    Warning,
} from "ui-gds";
import Modal from "../../components/Modal/Modal";
import Toast from "../../components/Toast/Toast";
import { atualizaSenhaUsuario } from "../../redux/features/clientsData/clientsDataThunk";

function Account() {
    const { usuario } = useAccount();
    const dispatch = useAsyncDispatch();
    const [maskedEmail, setMaskedEmail] = useState<boolean>(true);
    const [showResetPassword, setShowResetPassword] = useState<boolean>(false);
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordValidate, setNewPasswordValidate] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");
    const [showMessageError, setShowMessageError] = useState<boolean>(false);
    if (!usuario) return <></>;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        if (!usuario) return;

        event.preventDefault();

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
                userId: usuario._Id,
                productId: 1,
                password: newPassword,
                token: usuario.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (response?.usuario !== undefined) {
            setShowResetPassword(false);
            await dispatch(logOut());
            return;
        }

        setMessageError("Não foi possível alterar a senha");
        setShowMessageError(true);
    }

    return (
        <>
            {showResetPassword && (
                <Modal
                    closeModal={() => setShowResetPassword(false)}
                    title="Alterar a senha"
                >
                    <form
                        onSubmit={(e) => handleSubmit(e)}
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
                            onChange={(e) =>
                                setNewPasswordValidate(e.target.value)
                            }
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
                                onClick={() => setShowResetPassword(false)}
                            />
                        </div>
                    </form>
                </Modal>
            )}
            <div style={{ height: "90%" }}>
                <TitleH1>Minha Conta</TitleH1>
                <DividerLine />

                <ContainerAccountDiv>
                    <AccountDetailUL>
                        <AccountDetailLI>
                            <TextBold style={{ padding: "0 4px" }}>
                                Nome:{" "}
                            </TextBold>
                            <TextNormal> {usuario?.name} </TextNormal>
                        </AccountDetailLI>
                        <AccountDetailLI>
                            <TextBold style={{ padding: "0 4px" }}>
                                Email:{" "}
                            </TextBold>
                            {maskedEmail ? (
                                <TextNormal>{usuario?.maskedEmail}</TextNormal>
                            ) : (
                                <TextNormal>{usuario?.email}</TextNormal>
                            )}
                            {maskedEmail ? (
                                <BsEyeFill
                                    color="#888888"
                                    style={{
                                        cursor: "pointer",
                                        paddingLeft: 8,
                                    }}
                                    onClick={() => setMaskedEmail(!maskedEmail)}
                                />
                            ) : (
                                <BsEyeSlashFill
                                    color="#888888"
                                    style={{
                                        cursor: "pointer",
                                        paddingLeft: 8,
                                    }}
                                    onClick={() => setMaskedEmail(!maskedEmail)}
                                />
                            )}
                        </AccountDetailLI>
                        <Divider size={20} />
                        <AccountDetailLI>
                            <Button
                                buttonType="secundary"
                                text="Alterar senha para esse acesso"
                                size="medium"
                                onClick={() => setShowResetPassword(true)}
                            />
                        </AccountDetailLI>
                        <Divider size={24} />
                        <AccountDetailLI style={{ flexDirection: "column" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: 180,
                                }}
                            >
                                <PreferencesIcon />
                                <TitleH2>Preferências</TitleH2>
                            </div>
                            <Divider size={12} />

                            <TitleH3>Tema</TitleH3>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <div style={{ padding: 12 }}>
                                    <ThemeSelector mode="Default" />
                                </div>
                                <div style={{ padding: 12 }}>
                                    <ThemeSelector mode="DarkBlack" />
                                </div>
                                <div style={{ padding: 12 }}>
                                    <ThemeSelector mode="DarkBlue" />
                                </div>
                            </div>
                        </AccountDetailLI>
                    </AccountDetailUL>

                    <LogOutDiv>
                        <LogOutLink onClick={() => dispatch(logOut())}>
                            Realizar LogOut <FaSignOutAlt size={24} />
                        </LogOutLink>
                    </LogOutDiv>
                </ContainerAccountDiv>
            </div>
        </>
    );
}

export default Account;
