import React, { useState } from "react";
import { IUserList } from "../../../interfaces/IUserClienteResponse";
import FadeIn from "../../../components/Animations/FadeIn/FadeIn";
import {
    ContainerUsuarioBodyDiv,
    ContainerUsuarioTitle,
    DividerLine,
    UsuarioAvatar,
    UsuarioAvatarWrapper,
    UsuarioDetailLI,
    UsuarioDetailSpan,
    UsuarioDetailUL,
} from "./styles";
import {
    FaCheck,
    FaPen,
    FaPlug,
    FaPlus,
    FaTimes,
    FaTrash,
    FaUserAstronaut,
} from "react-icons/fa";
import {
    ButtonPrimary,
    Col,
    Divider,
    IconDelete,
    IconPlus,
    Row,
    Subtitle1,
    Table,
    TableBody,
    TableColumn,
    TableColumnHeader,
    TableFoot,
    TableHead,
    TableRow,
    TextBold,
    TextNormal,
    TitleH1,
    TitleH3,
    TitleH4,
} from "../../../globalStyles";
import Avatar from "../../../components/UserMenu/Avatar/Avatar";
import Modal from "../../../components/Modal/Modal";
import { formatarData } from "../../../util/format";
import useDetalheUsuario from "./hooks/useDetalheUsuario";
import ListProdutosUsuario from "./ListProdutosUsuario/ListProdutosUsuario";
import ListClientesUsuario from "./ListClientesUsuario/ListClientesUsuario";

export interface IProps {
    usuario: IUserList;
}

function DetalheUsuario({ usuario }: IProps) {
    const { clientes, produtos, detalheUsuario } = useDetalheUsuario({
        usuario,
    });
    return (
        <FadeIn duration={400}>
            <ContainerUsuarioTitle>
                <UsuarioAvatarWrapper>
                    <UsuarioAvatar>
                        <Avatar name={usuario.nomeUsuario} size="large" />
                    </UsuarioAvatar>
                    <div style={{ padding: "12px" }}>
                        <TitleH1 style={{ margin: 0 }}>
                            {usuario.nomeUsuario.toUpperCase()}
                        </TitleH1>
                        <Subtitle1>
                            #{usuario.idUsuario} - {usuario.emailUsuario}
                        </Subtitle1>
                    </div>
                </UsuarioAvatarWrapper>
            </ContainerUsuarioTitle>
            <ContainerUsuarioBodyDiv>
                <Divider size={24} />
                <Row
                    style={{
                        padding: 12,
                    }}
                >
                    <Col>
                        <div
                            style={{
                                textAlign: "left",
                                width: "70%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TitleH3>Produtos Representados</TitleH3>
                                <IconPlus
                                    style={{
                                        padding: 12,
                                    }}
                                />
                            </div>
                            <DividerLine />
                            <div
                                style={{
                                    padding: 8,
                                }}
                            >
                                <ListProdutosUsuario detalhe={detalheUsuario} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row
                    style={{
                        padding: 12,
                    }}
                >
                    <Col>
                        <div
                            style={{
                                textAlign: "left",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TitleH3>Clientes Representados</TitleH3>
                                <div
                                    style={{
                                        padding: 12,
                                    }}
                                >
                                    <IconPlus />
                                </div>
                            </div>
                            <DividerLine />
                        </div>
                        <div
                            style={{
                                padding: 8,
                            }}
                        >
                            <ListClientesUsuario detalhe={detalheUsuario} />
                        </div>
                    </Col>
                </Row>
            </ContainerUsuarioBodyDiv>
        </FadeIn>
    );
}

export default DetalheUsuario;
