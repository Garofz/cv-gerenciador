import React, { useState } from "react";
import { Button, Datepicker, Toggle, Tooltip, Warning } from "ui-gds";
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
import { ICliente } from "../../../../interfaces/ICliente";
import useModalCadastraClienteUsuario from "./hooks/useModalCadastraClienteUsuario";
import { IDetalheUsuario } from "../../../../interfaces/IUserDetail";
import { formatarData } from "../../../../util/format";

export interface IModalProps {
    setCloseModal: () => void;
    clientes: ICliente[];
    detalhe: IDetalheUsuario;
}

interface IMessageProps {
    show: boolean;
    message?: string;
    type?: "error" | "success";
}

function ModalCadastraClienteUsuario({
    setCloseModal,
    clientes,
    detalhe,
}: IModalProps) {
    const [message, setMessage] = useState<IMessageProps>({
        show: false,
    });
    const [selectedCliente, setSelectedCliente] = useState<ICliente>();
    const [selectedTipoAcesso, setSelectedTipoAcesso] = useState<number>();
    const [selectAcessoPrincipal, setSelectAcessoPrincipal] =
        useState<boolean>(false);
    const [dataExpiracao, setDataExpiracao] = useState<Date | null>();
    const { clickSalvar } = useModalCadastraClienteUsuario();

    const handleClickSalvar = async (
        idUsuario: number,
        cliente: ICliente,
        acessoPrincipal: boolean,
        tipoAcesso: number,
        dataExpiracao?: Date | null
    ) => {
        if (
            await clickSalvar(
                idUsuario,
                cliente,
                acessoPrincipal,
                tipoAcesso,
                dataExpiracao
            )
        ) {
            setCloseModal();
            return;
        }

        setMessage({
            show: true,
            message: "erro ao cadastrar o acesso do usuário no produto",
            type: "error",
        });
    };

    const clientesNaoAtribuidos: ICliente[] = clientes.filter((cliente) => {
        return !detalhe.clientes.some(
            (atribuido) => atribuido.cliente.idCliente === cliente.idCliente
        );
    });

    return (
        <Modal title="Cadastrar acesso a cliente" closeModal={setCloseModal}>
            <div style={{ width: 600, padding: 12 }}>
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
                                    tipMessage="Os clientes exibidos são apenas clientes que o usuário não possuí acesso"
                                />
                                <Label>Cliente*</Label>
                            </div>
                            <Select
                                style={{ padding: "4px" }}
                                onChange={(e) => {
                                    if (e.target.value !== "0")
                                        setMessage({ show: false });

                                    setSelectedCliente(
                                        clientes.find(
                                            (x) =>
                                                x.idCliente ===
                                                parseInt(e.target.value)
                                        )
                                    );
                                }}
                            >
                                <Option defaultValue={0}></Option>
                                {clientesNaoAtribuidos.map((cliente, index) => (
                                    <Option
                                        style={{ padding: "12rem" }}
                                        value={cliente.idCliente}
                                        key={index}
                                    >
                                        {cliente.idCliente}# - {cliente.nome} -{" "}
                                        {cliente.inscricao}
                                    </Option>
                                ))}
                            </Select>
                        </SelectWrapper>
                        <Divider size={12} />
                        <SelectWrapper className="inputWrapper">
                            <Label>Tipo de Acesso*</Label>
                            <Select
                                style={{ padding: "4px" }}
                                onChange={(e) => {
                                    if (e.target.value !== "0")
                                        setMessage({ show: false });

                                    setSelectedTipoAcesso(
                                        parseInt(e.target.value)
                                    );
                                }}
                            >
                                <Option value={0}></Option>
                                <Option value={1}>Admin</Option>
                                <Option value={2}>Comun</Option>
                            </Select>
                        </SelectWrapper>
                        <Divider size={12} />
                        <div
                            className="col"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div style={{ width: "50%" }}>
                                <Datepicker
                                    onChange={(date) => setDataExpiracao(date)}
                                    onClear={() => setDataExpiracao(null)}
                                    selected={dataExpiracao}
                                    labelText="Data de Inativação do acesso"
                                    fromToday
                                />
                            </div>
                            <div style={{ width: "40%", padding: "12px" }}>
                                <Toggle
                                    checked={selectAcessoPrincipal}
                                    labelText="Acesso Principal"
                                    onChange={(e) =>
                                        setSelectAcessoPrincipal(
                                            e.target.checked
                                        )
                                    }
                                />
                            </div>
                        </div>

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
                                    if (!selectedCliente) {
                                        setMessage({
                                            show: true,
                                            message:
                                                "Escolha um cliente válido",
                                        });
                                        return;
                                    }
                                    if (!selectedTipoAcesso) {
                                        setMessage({
                                            show: true,
                                            message:
                                                "Escolha um tipo de acesso válido",
                                        });
                                        return;
                                    }

                                    handleClickSalvar(
                                        detalhe.usuario.idUsuario,
                                        selectedCliente,
                                        selectAcessoPrincipal,
                                        selectedTipoAcesso,
                                        dataExpiracao
                                    );
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

export default ModalCadastraClienteUsuario;
