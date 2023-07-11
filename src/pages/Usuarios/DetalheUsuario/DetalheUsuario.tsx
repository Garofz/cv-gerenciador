import React, { useEffect, useState } from "react";
import {
    IUserCliente,
    IUserList,
} from "../../../interfaces/IUserClienteResponse";
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
    IconPlus,
    Label,
    Option,
    Row,
    Select,
    SelectWrapper,
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
import { Button, Datepicker, Tabs } from "ui-gds";
import ModalCadastraClienteUsuario from "./ModalCadastraClienteUsuario/ModalCadastraClienteUsuario";
import ModalCadastraProdutoUsuario from "./ModalCadastraProdutoUsuario/ModalCadastraProdutoUsuario";
import { Produto } from "../../../interfaces/IUserDetail";
import ModalEditaProdutoUsuario from "./ModalEditaProdutoUsuario/ModalEditaProdutoUsuario";
import { ICliente } from "../../../interfaces/ICliente";
import ModalEditaClienteUsuario from "./ModalEditaClienteUsuario/ModalEditaClienteUsuario";

export interface IProps {
    usuario: IUserList;
}

function DetalheUsuario({ usuario }: IProps) {
    const { clientes, produtos, detalheUsuario, consultaDetalhesUsuario } =
        useDetalheUsuario({
            usuario,
        });
    const [selectedTab, setSelectedTab] = useState(0);
    const [showModalCliente, setShowModalCliente] = useState<boolean>(false);
    const [showModalProduto, setShowModalProduto] = useState<boolean>(false);
    const [showModalEditaProduto, setShowModalEditaProduto] = useState<{
        produto: Produto | undefined;
        show: boolean;
    }>();
    const [showModalEditaCliente, setShowModalEditaCliente] = useState<{
        cliente: ICliente | undefined;
        acesso: IUserCliente | undefined;
        show: boolean;
    }>();

    useEffect(() => {
        consultaDetalhesUsuario();
    }, [
        showModalCliente,
        showModalProduto,
        showModalEditaCliente,
        showModalEditaProduto,
    ]);

    const handleTabClicked = (name: string, tabIndex: number) => {
        setSelectedTab(tabIndex);
    };

    const handleRedirectTo = (path: string) => {};

    return (
        <FadeIn duration={400}>
            {showModalCliente && clientes && detalheUsuario && (
                <ModalCadastraClienteUsuario
                    detalhe={detalheUsuario}
                    clientes={clientes}
                    setCloseModal={() => setShowModalCliente(false)}
                />
            )}
            {showModalProduto && produtos && detalheUsuario && (
                <ModalCadastraProdutoUsuario
                    detalhe={detalheUsuario}
                    produtos={produtos}
                    setCloseModal={() => setShowModalProduto(false)}
                />
            )}
            {showModalEditaProduto &&
                showModalEditaProduto.produto &&
                detalheUsuario && (
                    <ModalEditaProdutoUsuario
                        detalhe={detalheUsuario}
                        produto={showModalEditaProduto.produto}
                        setCloseModal={() =>
                            setShowModalEditaProduto({
                                produto: undefined,
                                show: false,
                            })
                        }
                    />
                )}
            {showModalEditaCliente &&
                showModalEditaCliente.cliente &&
                showModalEditaCliente.acesso &&
                detalheUsuario && (
                    <ModalEditaClienteUsuario
                        cliente={showModalEditaCliente.cliente}
                        acesso={showModalEditaCliente.acesso}
                        detalhe={detalheUsuario}
                        setCloseModal={() =>
                            setShowModalEditaCliente({
                                cliente: undefined,
                                acesso: undefined,
                                show: false,
                            })
                        }
                    />
                )}
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
            <Divider size={12} />
            <ContainerUsuarioBodyDiv>
                <Divider size={20} />
                <Tabs
                    initialTabIndex={0}
                    type="primary"
                    onTabClicked={handleTabClicked}
                    redirecTo={handleRedirectTo}
                    limit={5}
                    animation={true}
                    tabs={[
                        {
                            name: "Produtos Representados",
                            notificationNumber:
                                detalheUsuario?.produtos.length || 0,
                            path: "usuarios",
                            color: "info",
                        },
                        {
                            name: "Clientes Representados",
                            notificationNumber:
                                detalheUsuario?.clientes.length || 0,
                            path: "clientes",
                            color: "success",
                        },
                    ]}
                />
                {selectedTab === 0 && (
                    <Row
                        style={{
                            padding: 12,
                        }}
                    >
                        <Col>
                            <div
                                style={{
                                    textAlign: "left",
                                    width: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "end",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: 12,
                                        }}
                                    >
                                        <Button
                                            onClick={() =>
                                                setShowModalProduto(true)
                                            }
                                            text="Adicionar Produto"
                                            buttonType="primary"
                                            size="small"
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        padding: 8,
                                    }}
                                >
                                    <ListProdutosUsuario
                                        clickEditar={(res) => {
                                            setShowModalEditaProduto({
                                                show: true,
                                                produto: res,
                                            });
                                            return res;
                                        }}
                                        detalhe={detalheUsuario}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                )}
                {selectedTab === 1 && (
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
                                        justifyContent: "end",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: 12,
                                        }}
                                    >
                                        <Button
                                            onClick={() =>
                                                setShowModalCliente(true)
                                            }
                                            text="Adicionar Cliente"
                                            buttonType="primary"
                                            size="small"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: 8,
                                }}
                            >
                                <ListClientesUsuario
                                    clickEditar={(cliente, acesso) => {
                                        setShowModalEditaCliente({
                                            cliente: cliente,
                                            acesso: acesso,
                                            show: true,
                                        });
                                        return { cliente, acesso };
                                    }}
                                    detalhe={detalheUsuario}
                                />
                            </div>
                        </Col>
                    </Row>
                )}
                <Divider size={24} />
            </ContainerUsuarioBodyDiv>
        </FadeIn>
    );
}

export default DetalheUsuario;
