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
import { FaCheck, FaPen, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
    IUserCliente,
    IUserList,
} from "../../../../interfaces/IUserClienteResponse";
import { formatarData } from "../../../../util/format";
import { BsPencilFill } from "react-icons/bs";

export interface IListUsuariosProps {
    usuarios?: IUserList[] | undefined;
    layoutResumido: boolean;
    filtrarUsuario: (nome: string) => void;
    onClickSelectUser?: React.Dispatch<React.SetStateAction<IUserList>>;
    onClickEditUser?: () => void;
    nextPage?: () => void;
}

function ListAllUsuarios({
    usuarios,
    filtrarUsuario,
    layoutResumido = false,
    onClickSelectUser,
    onClickEditUser,
    nextPage,
}: IListUsuariosProps) {
    return (
        <ContainerContentDiv>
            {!layoutResumido && (
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
                </SubHeaderHandler>
            )}

            {!usuarios || usuarios?.length > 0 ? (
                usuarios?.map((usuario, index) => (
                    <div key={index}>
                        <ContainerUsuarioDiv>
                            <div
                                style={{
                                    width: "100%",
                                }}
                                onClick={() => {
                                    if (onClickSelectUser)
                                        onClickSelectUser(usuario);
                                    if (nextPage) nextPage();
                                }}
                            >
                                <UsuarioTitleDiv>
                                    <UsuarioTitle>
                                        <div
                                            style={{
                                                padding: "0.5rem",
                                            }}
                                        >
                                            <AvatarContainer size="small">
                                                <Avatar
                                                    shadow
                                                    name={usuario.nomeUsuario}
                                                />
                                            </AvatarContainer>
                                        </div>
                                        <Subtitle2>
                                            # {usuario.idUsuario}
                                        </Subtitle2>
                                        <DividerDiv color="#27374D" />
                                        <TitleH4 style={{ margin: 0 }}>
                                            {usuario.nomeUsuario}
                                        </TitleH4>
                                    </UsuarioTitle>
                                </UsuarioTitleDiv>
                                <UsuarioBody>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>
                                            <UsuarioTextWrapper>
                                                <UsuarioSpan>
                                                    Email:
                                                </UsuarioSpan>{" "}
                                                {usuario.emailUsuario}
                                            </UsuarioTextWrapper>
                                        </div>
                                    </div>
                                </UsuarioBody>
                            </div>
                            <div>
                                <FaPen
                                    style={{ cursor: "pointer", padding: 20 }}
                                    size={20}
                                    onClick={() => {
                                        if (onClickSelectUser)
                                            onClickSelectUser(usuario);
                                        if (onClickEditUser) onClickEditUser();
                                    }}
                                />
                            </div>
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

export default ListAllUsuarios;
