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

export interface IProps {
    usuario: IUserList;
}

function DetalheUsuario({ usuario }: IProps) {
    const { clientes, produtos, detalheUsuario } = useDetalheUsuario({
        usuario,
    });

    const [selectedTab, setSelectedTab] = useState(0);
    const [showModalCliente, setShowModalCliente] = useState<boolean>(false);
    const [showModalProduto, setShowModalProduto] = useState<boolean>(false);

    const handleTabClicked = (name: string, tabIndex: number) => {
        setSelectedTab(tabIndex);
        console.log("Aba clicada:", name);
        console.log("Índice da aba:", tabIndex);
    };

    const handleRedirectTo = (path: string) => {
        console.log("Redirecionar para:", path);
        // Adicione aqui a lógica de redirecionamento com base no caminho
    };

    // FIXME: Criar as modais em pastas separadas
    // TODO: Criar modais de edição de inativação, tipo de acesso e status do usuario no cliente/produto (ativo ou inativo)

    return (
        <FadeIn duration={400}>
            {showModalCliente && (
                <Modal
                    title="Cadastrar acesso a cliente"
                    closeModal={() => setShowModalCliente(false)}
                >
                    <div style={{ width: 600, padding: 12 }}>
                        <Row>
                            <Col>
                                <SelectWrapper className="inputWrapper">
                                    <Label>Cliente*</Label>
                                    <Select style={{ padding: "4px" }}>
                                        {clientes?.map((cliente, index) => (
                                            <Option
                                                style={{ padding: "12rem" }}
                                                value={cliente.idCliente}
                                                key={index}
                                            >
                                                {cliente.idCliente}# -{" "}
                                                {cliente.nome} -{" "}
                                                {cliente.inscricao}
                                            </Option>
                                        ))}
                                    </Select>
                                </SelectWrapper>
                                <Divider size={12} />
                                <SelectWrapper className="inputWrapper">
                                    <Label>Tipo de Acesso*</Label>
                                    <Select style={{ padding: "4px" }}>
                                        <Option value={1}>Admin</Option>
                                        <Option value={2}>Comun</Option>
                                    </Select>
                                </SelectWrapper>
                                <Divider size={12} />
                                <Datepicker
                                    labelText="Data de Inativação do acesso"
                                    onClear={() => console.log()}
                                    onChange={() => console.log()}
                                />
                                <Divider size={20} />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        buttonType="primary"
                                        text="Salvar"
                                        size="medium"
                                    />
                                    <Button
                                        type="button"
                                        buttonType="secundary"
                                        text="Voltar"
                                        size="medium"
                                        onClick={() =>
                                            setShowModalCliente(false)
                                        }
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            )}
            {showModalProduto && (
                <Modal
                    title="Cadastrar acesso a produto"
                    closeModal={() => setShowModalProduto(false)}
                >
                    <div style={{ width: 650 }}>
                        <Row>
                            <Col>
                                <SelectWrapper className="inputWrapper">
                                    <Label>Produto*</Label>
                                    <Select style={{ padding: "4px" }}>
                                        {produtos?.map((produto, index) => (
                                            <Option
                                                style={{ padding: "12rem" }}
                                                value={produto.idProduto}
                                                key={index}
                                            >
                                                {produto.idProduto}# -{" "}
                                                {produto.nome} -{" "}
                                                {produto.descricao}
                                            </Option>
                                        ))}
                                    </Select>
                                </SelectWrapper>

                                <Divider size={20} />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        buttonType="primary"
                                        text="Salvar"
                                        size="medium"
                                    />
                                    <Button
                                        type="button"
                                        buttonType="secundary"
                                        text="Voltar"
                                        size="medium"
                                        onClick={() =>
                                            setShowModalProduto(false)
                                        }
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal>
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
                                <ListClientesUsuario detalhe={detalheUsuario} />
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
