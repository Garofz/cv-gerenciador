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
import useModalCadastraProdutoUsuario from "./hooks/useModalEditaClienteUsuario";
import { IDetalheUsuario, Produto } from "../../../../interfaces/IUserDetail";
import useModalEditaProdutoUsuario from "./hooks/useModalEditaClienteUsuario";
import { useAsyncDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../../redux/features/generalData/generalDataSelectors";
import { atualizaSenhaUsuario } from "../../../../redux/features/clientsData/clientsDataThunk";
import { ICliente } from "../../../../interfaces/ICliente";
import { IUserCliente } from "../../../../interfaces/IUserClienteResponse";

export interface IModalProps {
    setCloseModal: () => void;
    cliente: ICliente;
    acesso: IUserCliente;
    detalhe: IDetalheUsuario;
}

interface IMessageProps {
    show: boolean;
    message?: string;
    type?: "error" | "success";
}

function ModalEditaClienteUsuario({
    setCloseModal,
    cliente,
    acesso,
    detalhe,
}: IModalProps) {
    const [message, setMessage] = useState<IMessageProps>({
        show: false,
    });
    const [selectedCliente, setSelectedCliente] = useState<ICliente>(cliente);
    const [selectedAcesso, setSelectedAcesso] = useState<IUserCliente>(acesso);
    const { clickSalvar } = useModalEditaProdutoUsuario(cliente, acesso);

    const handleClickSalvar = async (
        cliente: ICliente,
        acesso: IUserCliente
    ) => {
        if (await clickSalvar(cliente, acesso)) {
            setCloseModal();
            return;
        }

        setMessage({
            show: true,
            message: "erro ao editar o acesso do usuário no cliente",
            type: "error",
        });
    };

    return (
        <Modal title="Editar acesso a produto" closeModal={setCloseModal}>
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
                                <Option defaultValue={cliente.idCliente}>
                                    {cliente.idCliente}# - {cliente.nome} -{" "}
                                    {cliente.inscricao}
                                </Option>
                            </Select>
                        </SelectWrapper>
                    </Col>
                </Row>
                <Divider size={12} />
                <Row>
                    <Col>
                        <div style={{ padding: 12 }}>
                            <SelectWrapper className="inputWrapper">
                                <Label>Tipo de Acesso</Label>
                                <Select
                                    value={selectedAcesso.tipoAcesso.id}
                                    style={{ padding: "4px" }}
                                    onChange={(e) => {
                                        if (e.target.value !== "0")
                                            setMessage({ show: false });

                                        setSelectedAcesso((prev) => ({
                                            ...prev,
                                            tipoAcesso: {
                                                id: parseInt(e.target.value),
                                                descricao: "",
                                            },
                                        }));
                                    }}
                                >
                                    <Option value={1}>Admin</Option>
                                    <Option value={2}>Comun</Option>
                                </Select>
                            </SelectWrapper>
                        </div>
                    </Col>
                    <Col>
                        <Divider size={20} />
                        <div
                            style={{
                                padding: 12,
                            }}
                        >
                            <Toggle
                                title="Acesso Principal"
                                checked={selectedAcesso.acessoPrincipal}
                                onChange={(e) =>
                                    setSelectedAcesso((prev) => ({
                                        ...prev,
                                        acessoPrincipal: e.target.checked,
                                    }))
                                }
                                labelText="Acesso Principal"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{
                                padding: 12,
                            }}
                        >
                            <Datepicker
                                onChange={(date) => {
                                    setSelectedAcesso((prev) => ({
                                        ...prev,
                                        dataInativacao: date,
                                    }));
                                }}
                                onClear={() =>
                                    setSelectedAcesso((prev) => ({
                                        ...prev,
                                        dataInativacao: null,
                                    }))
                                }
                                selected={
                                    selectedAcesso.dataInativacao &&
                                    new Date(selectedAcesso.dataInativacao)
                                }
                                labelText="Data de inativação do acesso"
                                fromToday
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
                                    if (selectedAcesso && selectedCliente)
                                        handleClickSalvar(
                                            selectedCliente,
                                            selectedAcesso
                                        );
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

export default ModalEditaClienteUsuario;
