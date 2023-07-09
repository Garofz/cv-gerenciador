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
    InputWrapper,
    Subtitle2,
    TextBold,
    TextNormal,
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
import { BriefCard, Button, EditFileIcon, Input, SearchIcon } from "ui-gds";
import FadeIn from "../../../../components/Animations/FadeIn/FadeIn";
import { IconContainer } from "../../ListaClientes/styles";

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
                    <Input
                        customIcon={<SearchIcon />}
                        name="Filtrar"
                        placeholder="Informe o nome"
                        inputType="default"
                        labelText="Filtrar"
                        labelStyle="bold"
                        onChange={(e) => filtrarUsuario(e.target.value)}
                    />
                </SubHeaderHandler>
            )}

            {!usuarios || usuarios?.length > 0 ? (
                usuarios?.map((usuario, index) => (
                    <div key={index}>
                        <FadeIn duration={200}>
                            <BriefCard
                                title={`#${usuario.idUsuario} - ${usuario.nomeUsuario} `}
                                children={
                                    <ContainerUsuarioDiv>
                                        <div
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <div>
                                                <div>
                                                    <UsuarioTextWrapper>
                                                        <TextBold>
                                                            Email:
                                                        </TextBold>{" "}
                                                        <TextNormal>
                                                            {
                                                                usuario.emailUsuario
                                                            }
                                                        </TextNormal>
                                                    </UsuarioTextWrapper>
                                                </div>
                                                <div
                                                    style={{
                                                        padding: 8,
                                                    }}
                                                >
                                                    <Button
                                                        text="Ver detalhes"
                                                        size="small"
                                                        buttonType="secundary"
                                                        onClick={() => {
                                                            if (
                                                                onClickSelectUser
                                                            )
                                                                onClickSelectUser(
                                                                    usuario
                                                                );
                                                            if (nextPage)
                                                                nextPage();
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <IconContainer
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <EditFileIcon
                                                    onClick={() => {
                                                        if (onClickSelectUser)
                                                            onClickSelectUser(
                                                                usuario
                                                            );
                                                        if (onClickEditUser)
                                                            onClickEditUser();
                                                    }}
                                                />
                                            </IconContainer>
                                        </div>
                                    </ContainerUsuarioDiv>
                                }
                            />
                        </FadeIn>

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
