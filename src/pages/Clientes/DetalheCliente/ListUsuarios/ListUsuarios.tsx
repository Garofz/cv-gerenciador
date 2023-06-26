import React from "react";
import { IUsuario } from "../../../../interfaces/IUsuario";
import {
    ContainerContentDiv,
    ContainerUsuarioDiv,
    SubHeaderHandler,
    UsuarioBody,
    UsuarioSpan,
    UsuarioTextWrapper,
    UsuarioTitle,
    UsuarioTitleDiv,
} from "./styles";
import {
    ButtonOutlinePrimary,
    Divider,
    Input,
    InputWrapper,
    Label,
    Subtitle2,
    TitleH3,
    TitleH4,
    TitleH5,
} from "../../../../globalStyles";
import Avatar, {
    AvatarContainer,
} from "../../../../components/UserMenu/Avatar/Avatar";
import { DividerDiv } from "../../../../layouts/ApplicationLayout/styles";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export interface IListUsuariosProps {
    usuarios?: IUsuario[] | undefined;
    filtrarUsuario: (nome: string) => void;
    idCliente: number;
}

function ListUsuarios({
    usuarios,
    idCliente,
    filtrarUsuario,
}: IListUsuariosProps) {
    return (
        <ContainerContentDiv>
            <SubHeaderHandler>
                <InputWrapper>
                    <Label>Filtrar</Label>
                    <div className="filterInput">
                        <Input
                            type="text"
                            onChange={(e) => filtrarUsuario(e.target.value)}
                            placeholder="Digite o Nome"
                        />
                        <FiSearch />
                    </div>
                </InputWrapper>
                <div style={{ width: 200 }}>
                    <ButtonOutlinePrimary style={{ padding: 8 }}>
                        Cadastrar Representante
                    </ButtonOutlinePrimary>
                </div>
            </SubHeaderHandler>

            {!usuarios || usuarios?.length > 0 ? (
                usuarios?.map((usuario, index) => (
                    <div key={index}>
                        <ContainerUsuarioDiv>
                            <UsuarioTitleDiv>
                                <UsuarioTitle>
                                    <AvatarContainer>
                                        <Avatar shadow name={usuario.name} />
                                    </AvatarContainer>
                                    <TitleH4 style={{ margin: 0 }}>
                                        {usuario.name}
                                    </TitleH4>
                                    <DividerDiv color="#27374D" />
                                    <Subtitle2>#{usuario._Id}</Subtitle2>
                                </UsuarioTitle>
                            </UsuarioTitleDiv>
                            <UsuarioBody>
                                <div>
                                    <UsuarioTextWrapper>
                                        <UsuarioSpan>Email:</UsuarioSpan>{" "}
                                        {usuario.email}
                                    </UsuarioTextWrapper>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "end",
                                        alignContent: "flex-end",
                                        textAlign: "right",
                                    }}
                                ></div>
                            </UsuarioBody>
                        </ContainerUsuarioDiv>
                        <Divider size={4} />
                    </div>
                ))
            ) : (
                <ContainerContentDiv>
                    <Subtitle2>Nenhum usuário encontrado</Subtitle2>
                </ContainerContentDiv>
            )}
        </ContainerContentDiv>
    );
}

export default ListUsuarios;
