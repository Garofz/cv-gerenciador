import React, { useState, useEffect } from "react";
import { ICliente, IClienteRequest } from "../../../interfaces/ICliente";
import {
    ButtonOutlinePrimary,
    ButtonPrimary,
    Col,
    Container,
    Divider,
    InputWrapper,
    Label,
    Option,
    Row,
    Select,
    SelectWrapper,
} from "../../../globalStyles";
import { FormWrapper } from "./styles";
import { useSelector } from "react-redux";
import { selectClientsData } from "../../../redux/features/clientsData/clientsDataSelectors";
import Toast from "../../../components/Toast/Toast";
import { Button, Input, Toggle } from "ui-gds";
interface IReturnEditAdd {
    validOperation: boolean;
    message: string;
}
export interface Props {
    cliente?: ICliente;
    voltar: () => void;
    salvar: (cliente: IClienteRequest) => Promise<IReturnEditAdd>;
}

const CadastraEditaClientes = ({ cliente, voltar, salvar }: Props) => {
    const selectClientes = useSelector(selectClientsData);

    const initialState = {
        idCliente: 0,
        nome: "",
        ativo: true,
        idtipoPessoa: 1,
        logo: "",
        inscricao: "",
    };

    const [clienteContext, setClienteContext] =
        useState<IClienteRequest>(initialState);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [showToast, setShowToast] = useState<boolean>(false);

    useEffect(() => {
        if (cliente)
            setClienteContext({
                idCliente: cliente.idCliente,
                ativo: cliente.ativo,
                inscricao: cliente.inscricao,
                logo: cliente.logo,
                nome: cliente.nome,
                idtipoPessoa: cliente.tipoPessoa.idTipoPessoa,
                usuarioAlteracao: cliente.usuarioAlteracao?.idUsuario,
                usuarioInclusao: cliente.usuarioInclusao?.idUsuario,
            });
    }, []);

    return (
        <FormWrapper>
            {showToast && (
                <Toast
                    mensagem={toastMessage}
                    setShowToast={setShowToast}
                    type="error"
                    duration={7000}
                    fixed={true}
                    showToast={showToast}
                />
            )}
            <Row className="row">
                <Col className="col">
                    <Input
                        type="default"
                        labelText="Nome"
                        name="Nome"
                        placeholder="Nome"
                        value={clienteContext.nome}
                        onChange={(e) =>
                            setClienteContext((prev) => ({
                                ...prev,
                                nome: e.target.value,
                            }))
                        }
                    />
                </Col>
                <Col className="col">
                    <Input
                        type="default"
                        labelText="Inscrição"
                        name="Inscrição"
                        placeholder="Inscrição"
                        value={clienteContext.inscricao}
                        onChange={(e) =>
                            setClienteContext((prev) => ({
                                ...prev,
                                inscricao: e.target.value,
                            }))
                        }
                    />
                </Col>
            </Row>
            <Divider size={16} />
            <Row className="row">
                <Col className="col">
                    <SelectWrapper className="inputWrapper">
                        <Label>Tipo de Pessoa</Label>
                        <Select
                            value={clienteContext.idtipoPessoa}
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    idtipoPessoa: parseInt(e.target.value),
                                }))
                            }
                        >
                            <Option value={1}> PF</Option>
                            <Option value={2}> PJ</Option>
                        </Select>
                    </SelectWrapper>
                </Col>
                <Col className="col">
                    <SelectWrapper className="inputWrapper">
                        <Toggle
                            checked={clienteContext.ativo}
                            labelText="Ativo"
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    ativo: e.target.checked,
                                }))
                            }
                        />
                    </SelectWrapper>
                </Col>
            </Row>
            <Divider size={24} />
            <Row className="row">
                <Col
                    className="col"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "200px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ padding: "4px", width: "50%" }}>
                        <Button
                            size="medium"
                            text="Salvar"
                            expandable
                            onClick={async () => {
                                const saveObj = await salvar(clienteContext);
                                if (!saveObj.validOperation) {
                                    setToastMessage(saveObj.message);
                                    setShowToast(true);
                                    return;
                                } else {
                                    setClienteContext(initialState);
                                    voltar();
                                }
                            }}
                        />
                    </div>
                    <div style={{ padding: "4px", width: "50%" }}>
                        <Button
                            size="medium"
                            buttonType="secundary"
                            text="Voltar"
                            expandable
                            onClick={() => voltar()}
                        />
                    </div>
                </Col>
            </Row>
        </FormWrapper>
    );
};

export default CadastraEditaClientes;
