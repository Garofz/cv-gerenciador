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
import { IUserCliente } from "../../../../interfaces/IUserClienteResponse";
import { formatarData } from "../../../../util/format";
import { BsPencilFill } from "react-icons/bs";

export interface IListUsuariosProps {
    usuarios?: IUserCliente[] | undefined;
    layoutResumido: boolean;
    filtrarUsuario: (nome: string) => void;
    onClickSelectUser?: React.Dispatch<React.SetStateAction<IUserCliente>>;
    nextPage?: () => void;
}

function ListUsuarios({
    usuarios,
    filtrarUsuario,
    layoutResumido = false,
    onClickSelectUser,
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
                        <ContainerUsuarioDiv
                            style={{
                                display: "block",
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
                                                name={usuario.nome}
                                            />
                                        </AvatarContainer>
                                    </div>
                                    <Subtitle2># {usuario.id}</Subtitle2>
                                    <DividerDiv color="#27374D" />
                                    <TitleH4 style={{ margin: 0 }}>
                                        {usuario.nome}
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
                                            <UsuarioSpan>Email:</UsuarioSpan>{" "}
                                            {usuario.email}
                                        </UsuarioTextWrapper>
                                        {!layoutResumido && (
                                            <>
                                                <UsuarioTextWrapper>
                                                    <UsuarioSpan>
                                                        Acesso Principal:
                                                    </UsuarioSpan>{" "}
                                                    {usuario.acessoPrincipal ? (
                                                        <FaCheck
                                                            size={18}
                                                            color="#27ca21"
                                                        />
                                                    ) : (
                                                        <FaTimes
                                                            size={18}
                                                            color="#f21515"
                                                        />
                                                    )}
                                                </UsuarioTextWrapper>
                                                <UsuarioTextWrapper>
                                                    <UsuarioSpan>
                                                        Primeiro Acesso:
                                                    </UsuarioSpan>{" "}
                                                    {usuario.pimeiroAcesso ? (
                                                        <FaCheck
                                                            size={18}
                                                            color="#27ca21"
                                                        />
                                                    ) : (
                                                        <FaTimes
                                                            size={18}
                                                            color="#f21515"
                                                        />
                                                    )}
                                                </UsuarioTextWrapper>
                                                <UsuarioTextWrapper>
                                                    <UsuarioSpan>
                                                        Tipo Acesso:
                                                    </UsuarioSpan>{" "}
                                                    {
                                                        usuario.tipoAcesso
                                                            .descricao
                                                    }
                                                </UsuarioTextWrapper>
                                            </>
                                        )}
                                    </div>
                                    <div>
                                        {!layoutResumido && (
                                            <>
                                                <UsuarioTextWrapper>
                                                    <UsuarioSpan>
                                                        Data Cadastro:
                                                    </UsuarioSpan>{" "}
                                                    {formatarData(
                                                        usuario.dataCadastro
                                                    )}
                                                </UsuarioTextWrapper>
                                                <UsuarioTextWrapper>
                                                    <UsuarioSpan>
                                                        Data Inativação:
                                                    </UsuarioSpan>{" "}
                                                    {formatarData(
                                                        usuario.dataInativacao
                                                    )}
                                                </UsuarioTextWrapper>
                                                <UsuarioTextWrapper>
                                                    <UsuarioSpan>
                                                        Data Ultimo Acesso:
                                                    </UsuarioSpan>{" "}
                                                    {formatarData(
                                                        usuario.dataUltimoAcesso
                                                    )}
                                                </UsuarioTextWrapper>
                                            </>
                                        )}
                                    </div>
                                </div>
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
