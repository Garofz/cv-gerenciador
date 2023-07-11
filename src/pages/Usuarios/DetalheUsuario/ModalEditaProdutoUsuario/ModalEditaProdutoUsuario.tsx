import React, { useState } from "react";
import { Button, Datepicker, Warning, Tooltip, Toggle } from "ui-gds";
import {
    Col,
    Divider,
    Label,
    Option,
    Row,
    Select,
    SelectWrapper,
} from "../../../../globalStyles";
import Modal from "../../../../components/Modal/Modal";
import { IProduto } from "../../../../interfaces/IProduto";
import useModalCadastraProdutoUsuario from "./hooks/useModalEditaProdutoUsuario";
import { IDetalheUsuario, Produto } from "../../../../interfaces/IUserDetail";
import useModalEditaProdutoUsuario from "./hooks/useModalEditaProdutoUsuario";
import { useAsyncDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../../redux/features/generalData/generalDataSelectors";
import { atualizaSenhaUsuario } from "../../../../redux/features/clientsData/clientsDataThunk";

export interface IModalProps {
    setCloseModal: () => void;
    produto: Produto;
    detalhe: IDetalheUsuario;
}

interface IMessageProps {
    show: boolean;
    message?: string;
    type?: "error" | "success";
}

function ModalEditaProdutoUsuario({
    setCloseModal,
    produto,
    detalhe,
}: IModalProps) {
    const [message, setMessage] = useState<IMessageProps>({
        show: false,
    });
    const [selectedProduto, setSelectedProduto] = useState<Produto>(produto);
    const [showModalConfirma, setShowModalConfirma] = useState<boolean>(false);
    const { clickSalvar } = useModalEditaProdutoUsuario(produto);
    const dispatch = useAsyncDispatch();
    const user = useSelector(selectUsuario);
    const [messageError, setMessageError] = useState<string>("");
    const [showMessageError, setShowMessageError] = useState<boolean>(false);

    const handleClickSalvar = async (produto: Produto) => {
        if (await clickSalvar(produto)) {
            setCloseModal();
            return;
        }

        setMessage({
            show: true,
            message: "erro ao editar o acesso do usuário no produto",
            type: "error",
        });
    };

    const handleClickConfirmaModal = async (confirma: boolean) => {
        if (!user) return;
        if (confirma) {
            const response = await dispatch(
                atualizaSenhaUsuario({
                    userId: produto.idUsuario,
                    productId: 1,
                    password: `@aakl!20sErFf`,
                    token: user.accessToken.token,
                })
            )
                .unwrap()
                .then((res) => res);

            if (response?.usuario !== undefined) {
                setShowModalConfirma(false);
                setMessage({
                    show: true,
                    message: "reset do acesso do usuário realizado com sucesso",
                    type: "success",
                });
                return;
            }

            setMessage({
                show: true,
                message: "erro ao resetar o acesso do usuário",
                type: "error",
            });
        } else setShowModalConfirma(false);
    };
    return (
        <Modal title="Editar acesso a produto" closeModal={setCloseModal}>
            {showModalConfirma && (
                <Modal
                    title="Deseja resetar o acesso do usuário?"
                    closeModal={() => setShowModalConfirma(false)}
                >
                    <Row>
                        <Col>
                            <Button
                                buttonType="primary"
                                text="Sim"
                                size="medium"
                                onClick={() => handleClickConfirmaModal(true)}
                            />
                        </Col>
                        <Col>
                            <Button
                                buttonType="secundary"
                                text="Não"
                                size="medium"
                                onClick={() => handleClickConfirmaModal(false)}
                            />
                        </Col>
                    </Row>
                </Modal>
            )}
            <div style={{ width: "100%" }}>
                {message.show && (
                    <Row>
                        <Col>
                            <div>
                                <Warning
                                    type={message.type || "error"}
                                    message={message.message || ""}
                                />
                                <Divider size={12} />
                            </div>
                        </Col>
                    </Row>
                )}
                <Row>
                    <Col>
                        <SelectWrapper
                            className="inputWrapper"
                            style={{
                                width: "90%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Tooltip
                                iconHeight={16}
                                tipMessage="não é possível editar o produto para este acesso"
                            />
                            <Select
                                style={{ padding: "4px" }}
                                onChange={(e) => {
                                    if (e.target.value !== "0")
                                        setMessage({
                                            show: false,
                                        });
                                }}
                                disabled
                            >
                                <Option
                                    defaultValue={produto.produto.idProduto}
                                >
                                    {produto.produto.idProduto}# -{" "}
                                    {produto.produto.nome} -{" "}
                                    {produto.produto.descricao}
                                </Option>
                            </Select>
                        </SelectWrapper>
                    </Col>
                </Row>
                <Divider size={12} />
                <Row>
                    <Col>
                        <div style={{ padding: 12 }}>
                            <Toggle
                                title="Ativo"
                                checked={selectedProduto.ativo}
                                onChange={(e) =>
                                    setSelectedProduto((prev) => ({
                                        ...prev,
                                        ativo: e.target.checked,
                                    }))
                                }
                                labelText="Ativo"
                            />
                            <Divider size={4} />
                            <Toggle
                                title="Bloqueado"
                                checked={selectedProduto.bloqueado}
                                onChange={(e) =>
                                    setSelectedProduto((prev) => ({
                                        ...prev,
                                        bloqueado: e.target.checked,
                                    }))
                                }
                                labelText="Bloqueado"
                            />
                            <Divider size={8} />
                            <Button
                                text="Resetar Acesso"
                                size="small"
                                buttonType="secundary"
                                onClick={() => setShowModalConfirma(true)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                                onClick={() => {
                                    if (selectedProduto)
                                        handleClickSalvar(selectedProduto);
                                    else
                                        setMessage({
                                            show: true,
                                            message:
                                                "Escolha um produto válido",
                                        });
                                }}
                            />
                            <Button
                                type="button"
                                buttonType="secundary"
                                text="Voltar"
                                size="medium"
                                onClick={setCloseModal}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    );
}

export default ModalEditaProdutoUsuario;
