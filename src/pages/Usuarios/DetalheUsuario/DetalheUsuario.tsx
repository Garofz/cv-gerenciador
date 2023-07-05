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

export interface IProps {
    usuario: IUserList;
}

function DetalheUsuario({ usuario }: IProps) {
    const {} = useDetalheUsuario({ usuario });
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
                                <Table width={50}>
                                    <TableHead>
                                        <TableColumnHeader textAlign="right">
                                            #
                                        </TableColumnHeader>
                                        <TableColumnHeader>
                                            Nome
                                        </TableColumnHeader>
                                        <TableColumnHeader>
                                            Descrição
                                        </TableColumnHeader>
                                        <TableColumnHeader textAlign="center">
                                            Data Cadastro
                                        </TableColumnHeader>
                                        <TableColumnHeader></TableColumnHeader>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableColumn textAlign="right">
                                                <TextBold>1</TextBold>
                                            </TableColumn>
                                            <TableColumn>
                                                Gerenciador
                                            </TableColumn>
                                            <TableColumn>
                                                Sistema Gerenciador de Clientes
                                            </TableColumn>

                                            <TableColumn textAlign="center">
                                                {formatarData(
                                                    new Date("2021-02-02")
                                                )}
                                            </TableColumn>
                                            <TableColumn textAlign="center">
                                                <IconDelete />
                                            </TableColumn>
                                        </TableRow>
                                        <TableRow>
                                            <TableColumn textAlign="right">
                                                <TextBold>2</TextBold>
                                            </TableColumn>
                                            <TableColumn>Cardápio</TableColumn>
                                            <TableColumn>
                                                Sistema Cardápio Virtual
                                            </TableColumn>

                                            <TableColumn textAlign="center">
                                                {formatarData(
                                                    new Date("2021-02-02")
                                                )}
                                            </TableColumn>
                                            <TableColumn textAlign="center">
                                                <IconDelete />
                                            </TableColumn>
                                        </TableRow>
                                    </TableBody>
                                    <TableFoot>
                                        <TableColumnHeader
                                            colSpan={5}
                                            textAlign="center"
                                        >
                                            2 registros
                                        </TableColumnHeader>
                                    </TableFoot>
                                </Table>
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
                            <Table width={100}>
                                <TableHead>
                                    <TableColumnHeader textAlign="right">
                                        #
                                    </TableColumnHeader>
                                    <TableColumnHeader>Nome</TableColumnHeader>
                                    <TableColumnHeader>
                                        Inscrição
                                    </TableColumnHeader>
                                    <TableColumnHeader textAlign="center">
                                        Tipo Pessoa
                                    </TableColumnHeader>
                                    <TableColumnHeader textAlign="center">
                                        Ativo
                                    </TableColumnHeader>
                                    <TableColumnHeader textAlign="center">
                                        Data Cadastro
                                    </TableColumnHeader>
                                    <TableColumnHeader textAlign="center">
                                        Tipo Acesso
                                    </TableColumnHeader>
                                    <TableColumnHeader textAlign="center">
                                        Primeiro Acesso
                                    </TableColumnHeader>
                                    <TableColumnHeader textAlign="center">
                                        Data Inativação
                                    </TableColumnHeader>
                                    <TableColumnHeader></TableColumnHeader>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableColumn textAlign="right">
                                            <TextBold>1</TextBold>
                                        </TableColumn>
                                        <TableColumn>
                                            Tabacaria Santo André
                                        </TableColumn>
                                        <TableColumn>
                                            26.609.455/0001-00
                                        </TableColumn>
                                        <TableColumn textAlign="center">
                                            Pessoa Física
                                        </TableColumn>
                                        <TableColumn textAlign="center">
                                            Sim
                                        </TableColumn>
                                        <TableColumn textAlign="center">
                                            {formatarData(
                                                new Date("2021-02-02")
                                            )}
                                        </TableColumn>
                                        <TableColumn textAlign="center">
                                            Admin
                                        </TableColumn>
                                        <TableColumn textAlign="center">
                                            Sim
                                        </TableColumn>
                                        <TableColumn textAlign="center">
                                            {" "}
                                            N/I{" "}
                                        </TableColumn>
                                        <TableColumn>
                                            <IconDelete />
                                        </TableColumn>
                                    </TableRow>
                                </TableBody>
                                <TableFoot>
                                    <TableColumnHeader
                                        colSpan={9}
                                        textAlign="center"
                                    >
                                        1 registro
                                    </TableColumnHeader>
                                </TableFoot>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </ContainerUsuarioBodyDiv>
        </FadeIn>
    );
}

export default DetalheUsuario;
