import React, { useState } from "react";
import { ICliente } from "../../../interfaces/ICliente";
import {
    ClienteAvatar,
    ClienteAvatarWrapper,
    ClienteDetailLI,
    ClienteDetailSpan,
    ClienteDetailUL,
    ContainerClienteBodyDiv,
    ContainerClienteDiv,
    ContainerClienteTitle,
    DividerLine,
} from "./styles";
import {
    ButtonOutlineSecondary,
    ButtonSecondary,
    Divider,
    Subtitle1,
    TextBold,
    TextNormal,
    TitleH1,
    TitleH3,
} from "../../../globalStyles";
import FadeIn from "../../../components/Animations/FadeIn/FadeIn";
import { FaCheck, FaPen, FaTimes, FaUserAstronaut } from "react-icons/fa";
import useModal from "../../../components/Modal/hooks/useModal";
import Modal from "../../../components/Modal/Modal";
import CadastraEditaClientes from "../CadastraEditaClientes/CadastraEditaClientes";
import useDetalheCliente from "./hooks/useDetalheCliente";
import ListUsuarios from "./ListUsuarios/ListUsuarios";
import Toast from "../../../components/Toast/Toast";
import { IUserCliente } from "../../../interfaces/IUserClienteResponse";
import CadastraEditaRepresentantes from "../CadastraEditaRepresentantes/CadastraEditaRepresentantes";
import { mascararDocumento } from "../../../util/mask";
import { formatarData } from "../../../util/format";
import { HighRiseBuildingIcon, UserIcon, UserProfileIcon } from "ui-gds";
import Avatar from "../../../components/UserMenu/Avatar/Avatar";

export interface IDetalheClienteProps {
    cliente: ICliente;
}

function DetalheCliente({ cliente }: IDetalheClienteProps) {
    const { filtrarUsuarios, usuarios, setShowToast, showToast, toastMessage } =
        useDetalheCliente(cliente.idCliente);

    return (
        <div>
            <ContainerClienteDiv>
                {showToast && (
                    <Toast
                        mensagem={toastMessage}
                        type="error"
                        setShowToast={setShowToast}
                        duration={5000}
                        fixed={true}
                        showToast={showToast}
                    />
                )}
                <FadeIn duration={400}>
                    <ContainerClienteTitle>
                        <ClienteAvatarWrapper>
                            <ClienteAvatar>
                                <Avatar name={cliente.nome} size="large" />
                            </ClienteAvatar>
                            <div style={{ padding: "12px" }}>
                                <TitleH1 style={{ margin: 0 }}>
                                    {cliente?.nome}
                                </TitleH1>
                                <Subtitle1>#{cliente?.idCliente}</Subtitle1>
                            </div>
                        </ClienteAvatarWrapper>
                    </ContainerClienteTitle>
                    <DividerLine />
                    <ContainerClienteBodyDiv>
                        <ClienteDetailUL>
                            <ClienteDetailLI>
                                <ClienteDetailSpan>
                                    <TextBold>Documento:</TextBold>
                                </ClienteDetailSpan>
                                <TextNormal>
                                    {mascararDocumento(
                                        cliente.tipoPessoa.idTipoPessoa,
                                        cliente.inscricao
                                    )}
                                </TextNormal>
                            </ClienteDetailLI>
                            <ClienteDetailLI>
                                <ClienteDetailSpan>
                                    {" "}
                                    <TextBold>Tipo: </TextBold>
                                </ClienteDetailSpan>
                                <TextNormal>
                                    {cliente?.tipoPessoa.descricao}
                                </TextNormal>
                            </ClienteDetailLI>
                            <ClienteDetailLI>
                                <ClienteDetailSpan>
                                    <TextBold> Ativa:</TextBold>
                                </ClienteDetailSpan>
                                {cliente?.ativo ? (
                                    <FaCheck size={18} color="#27ca21" />
                                ) : (
                                    <FaTimes size={18} color="#f21515" />
                                )}
                            </ClienteDetailLI>
                            <Divider size={20} />
                            <ClienteDetailLI>
                                <ClienteDetailSpan>
                                    <TextBold> Incluído em:</TextBold>
                                </ClienteDetailSpan>
                                <TextNormal>
                                    {formatarData(
                                        cliente?.usuarioInclusao?.dataInclusao
                                    )}
                                </TextNormal>
                            </ClienteDetailLI>
                            <ClienteDetailLI>
                                <ClienteDetailSpan>
                                    <TextBold> Por: </TextBold>
                                </ClienteDetailSpan>
                                <TextNormal>
                                    {cliente?.usuarioInclusao?.nome}
                                </TextNormal>
                            </ClienteDetailLI>
                            {cliente?.usuarioAlteracao?.dataAlteracao && (
                                <>
                                    <Divider size={20} />
                                    <ClienteDetailLI>
                                        <ClienteDetailSpan>
                                            <TextBold> Alterado em:</TextBold>
                                        </ClienteDetailSpan>
                                        <TextNormal>
                                            {formatarData(
                                                cliente?.usuarioAlteracao
                                                    ?.dataAlteracao
                                            )}
                                        </TextNormal>
                                    </ClienteDetailLI>
                                    <ClienteDetailLI>
                                        <ClienteDetailSpan>
                                            <TextBold> Por: </TextBold>
                                        </ClienteDetailSpan>
                                        <TextNormal>
                                            {cliente?.usuarioAlteracao?.nome}
                                        </TextNormal>
                                    </ClienteDetailLI>
                                </>
                            )}
                        </ClienteDetailUL>
                    </ContainerClienteBodyDiv>
                </FadeIn>
            </ContainerClienteDiv>
        </div>
    );
}

export default DetalheCliente;
