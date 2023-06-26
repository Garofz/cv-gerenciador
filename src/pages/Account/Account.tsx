import React, { useState } from "react";
import {
    Divider,
    Subtitle1,
    Subtitle2,
    TitleH1,
    TitleH3,
} from "../../globalStyles";
import {
    AccountDetailLI,
    AccountDetailSpan,
    AccountDetailUL,
    DividerLine,
    ContainerAccountDiv,
    LogOutDiv,
    LogOutLink,
} from "./styles";
import useAccount from "./hooks/useAccount";
import { mascararCelular, mascararEmail } from "../../util/mask";
import { FaSignOutAlt } from "react-icons/fa";
import { useAsyncDispatch } from "../../redux/store";
import { logOut } from "../../redux/features/generalData/generalDataSlice";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function Account() {
    const { usuario } = useAccount();
    const dispatch = useAsyncDispatch();
    const [maskedEmail, setMaskedEmail] = useState<boolean>(true);
    if (!usuario) return <></>;
    return (
        <div style={{ height: "90%" }}>
            <TitleH1>Minha Conta</TitleH1>
            <DividerLine />

            <ContainerAccountDiv>
                <AccountDetailUL>
                    <AccountDetailLI>
                        <AccountDetailSpan>Nome:</AccountDetailSpan>
                        {usuario?.name}
                    </AccountDetailLI>
                    <AccountDetailLI>
                        <AccountDetailSpan>Email:</AccountDetailSpan>
                        {maskedEmail ? usuario?.maskedEmail : usuario?.email}
                        {maskedEmail ? (
                            <BsEyeFill
                                color="#888888"
                                style={{ cursor: "pointer", paddingLeft: 8 }}
                                onClick={() => setMaskedEmail(!maskedEmail)}
                            />
                        ) : (
                            <BsEyeSlashFill
                                color="#888888"
                                style={{ cursor: "pointer", paddingLeft: 8 }}
                                onClick={() => setMaskedEmail(!maskedEmail)}
                            />
                        )}
                    </AccountDetailLI>
                    <Divider size={24} />
                    <AccountDetailLI>
                        <div>
                            <TitleH3>Acessos</TitleH3>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "100%",
                                    padding: "1rem",
                                }}
                            >
                                {usuario?.agents.length === 0 && (
                                    <Subtitle2>
                                        Você não possúi nenhum acesso cadastrado
                                    </Subtitle2>
                                )}
                                {usuario?.agents.map((item, index) => {
                                    if (item.agent.active) {
                                        return (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                }}
                                                key={index}
                                            >
                                                <ul>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Nome:
                                                        </AccountDetailSpan>
                                                        {item.agent.name}
                                                    </li>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Documento:
                                                        </AccountDetailSpan>
                                                        {
                                                            item.agent.document
                                                                .maskedDocument
                                                        }
                                                    </li>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Tipo De Pessoa:
                                                        </AccountDetailSpan>
                                                        {
                                                            item.agent
                                                                .personCategory
                                                                .description
                                                        }
                                                    </li>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Ativo:
                                                        </AccountDetailSpan>
                                                        {item.agent.active
                                                            ? "Sim"
                                                            : "Não"}
                                                    </li>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Tipo Acesso:
                                                        </AccountDetailSpan>
                                                        {
                                                            item.agent.access
                                                                .description
                                                        }
                                                    </li>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Acesso Principal:
                                                        </AccountDetailSpan>
                                                        {item.agent.access
                                                            .mainAccess
                                                            ? "Sim"
                                                            : "Não"}
                                                    </li>
                                                    <li>
                                                        <AccountDetailSpan>
                                                            Primeiro Acesso:
                                                        </AccountDetailSpan>
                                                        {item.agent.access
                                                            .firstAccess
                                                            ? "Sim"
                                                            : "Não"}
                                                    </li>
                                                </ul>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <TitleH3>Produtos</TitleH3>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "100%",
                                    padding: "1rem",
                                }}
                            >
                                {usuario?.products.length === 0 && (
                                    <Subtitle2>
                                        Você não possúi nenhum produto
                                        cadastrado
                                    </Subtitle2>
                                )}
                                {usuario?.products.map((item, index) => {
                                    return (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            key={index}
                                        >
                                            <ul>
                                                <li>
                                                    <AccountDetailSpan>
                                                        Código:
                                                    </AccountDetailSpan>
                                                    {item.product._Id}
                                                </li>
                                                <li>
                                                    <AccountDetailSpan>
                                                        Descrição:
                                                    </AccountDetailSpan>
                                                    {item.product.description}
                                                </li>
                                                <li>
                                                    <AccountDetailSpan>
                                                        Nome:
                                                    </AccountDetailSpan>
                                                    {item.product.name}
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                })}
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
    );
}

export default Account;
