import React from "react";
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

export interface IDetalheClienteProps {
    cliente: ICliente;
}

function DetalheCliente({ cliente }: IDetalheClienteProps) {
    const { filtrarUsuarios, usuarios } = useDetalheCliente(cliente.id);
    return (
        <ContainerClienteDiv>
            <FadeIn duration={400}>
                <ContainerClienteTitle>
                    <ClienteAvatarWrapper>
                        <ClienteAvatar>
                            <FaUserAstronaut size={50} color="#27374D" />
                        </ClienteAvatar>
                        <div style={{ padding: "12px" }}>
                            <TitleH1 style={{ margin: 0 }}>
                                {cliente?.nome}
                            </TitleH1>
                            <Subtitle1>#{cliente?.id}</Subtitle1>
                        </div>
                    </ClienteAvatarWrapper>
                </ContainerClienteTitle>
                <DividerLine />
                <ContainerClienteBodyDiv>
                    <ClienteDetailUL>
                        <ClienteDetailLI>
                            <ClienteDetailSpan>Inscricao:</ClienteDetailSpan>
                            {cliente?.inscricao}
                        </ClienteDetailLI>
                        <ClienteDetailLI>
                            <ClienteDetailSpan> Tipo: </ClienteDetailSpan>
                            {cliente?.tipoPessoa}
                        </ClienteDetailLI>
                        <ClienteDetailLI>
                            <ClienteDetailSpan> Ativa:</ClienteDetailSpan>
                            {cliente?.ativo ? (
                                <FaCheck size={18} color="#27ca21" />
                            ) : (
                                <FaTimes size={18} color="#f21515" />
                            )}
                        </ClienteDetailLI>
                    </ClienteDetailUL>
                    <Divider size={24} />

                    <TitleH3>Representantes</TitleH3>
                    <DividerLine />
                    <ListUsuarios
                        filtrarUsuario={filtrarUsuarios}
                        usuarios={usuarios}
                        idCliente={cliente?.id}
                    />
                </ContainerClienteBodyDiv>
            </FadeIn>
        </ContainerClienteDiv>
    );
}

export default DetalheCliente;
