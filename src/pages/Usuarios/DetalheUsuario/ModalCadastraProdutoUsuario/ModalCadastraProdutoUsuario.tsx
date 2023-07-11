import React, { useState } from "react";
import { Button, Datepicker, Warning, Tooltip } from "ui-gds";
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
import useModalCadastraProdutoUsuario from "./hooks/useModalCadastraProdutoUsuario";
import { IDetalheUsuario } from "../../../../interfaces/IUserDetail";

export interface IModalProps {
    setCloseModal: () => void;
    produtos: IProduto[];
    detalhe: IDetalheUsuario;
}

interface IMessageProps {
    show: boolean;
    message?: string;
    type?: "error" | "success";
}

function ModalCadastraProdutoUsuario({
    setCloseModal,
    produtos,
    detalhe,
}: IModalProps) {
    const [message, setMessage] = useState<IMessageProps>({
        show: false,
    });
    const [selectedProduto, setSelectedProduto] = useState<IProduto>();
    const { clickSalvar } = useModalCadastraProdutoUsuario(detalhe);

    const handleClickSalvar = async (produto: IProduto) => {
        if (await clickSalvar(produto)) {
            setCloseModal();
            return;
        }

        setMessage({
            show: true,
            message: "erro ao cadastrar o acesso do usuário no produto",
            type: "error",
        });
    };

    const produtosNaoAtribuidos: IProduto[] = produtos.filter((produto) => {
        return !detalhe.produtos.some(
            (atribuido) => atribuido.produto.idProduto === produto.idProduto
        );
    });

    return (
        <Modal title="Cadastrar acesso a produto" closeModal={setCloseModal}>
            <div style={{ width: 650 }}>
                {message.show && (
                    <Row>
                        <Col>
                            <div>
                                <Warning
                                    type="error"
                                    message={message.message || ""}
                                />
                                <Divider size={12} />
                            </div>
                        </Col>
                    </Row>
                )}
                <Row>
                    <Col>
                        <SelectWrapper className="inputWrapper">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Tooltip
                                    iconHeight={16}
                                    tipMessage="Os produtos exibidos são apenas produtos que o usuário não possuí acesso"
                                />
                                <Label>Produto*</Label>
                            </div>
                            <Select
                                style={{ padding: "4px" }}
                                onChange={(e) => {
                                    if (e.target.value !== "0")
                                        setMessage({ show: false });

                                    setSelectedProduto(
                                        produtos.find(
                                            (x) =>
                                                x.idProduto ===
                                                parseInt(e.target.value)
                                        )
                                    );
                                }}
                            >
                                <Option defaultValue={0}></Option>
                                {produtosNaoAtribuidos.map((produto, index) => (
                                    <Option
                                        style={{ padding: "12rem" }}
                                        value={produto.idProduto}
                                        key={index}
                                    >
                                        {produto.idProduto}# - {produto.nome} -{" "}
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

export default ModalCadastraProdutoUsuario;
