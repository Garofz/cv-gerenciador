import React, { useState, useEffect } from "react";
import { ICliente, IClienteRequest } from "../../../interfaces/ICliente";
import {
    ButtonOutlinePrimary,
    ButtonPrimary,
    Col,
    Container,
    Divider,
    Input,
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

export interface Props {
    cliente?: ICliente;
    voltar: () => void;
    salvar: (cliente: IClienteRequest) => void;
}

const CadastraEditaClientes = ({ cliente, voltar, salvar }: Props) => {
    const selectClientes = useSelector(selectClientsData);
    const mockData = (): IClienteRequest => {
        let idAux = 0;
        const id = selectClientes?.map((x) => {
            if (idAux === 0) {
                idAux = x.idCliente;
            } else {
                if (idAux < x.idCliente) {
                    idAux = x.idCliente;
                }
            }
        });

        return {
            idCliente: idAux + 1,
            nome: "",
            ativo: true,
            tipoPessoa: 0,
            logo: "",
            inscricao: "",
        };
    };

    const [clienteContext, setClienteContext] =
        useState<IClienteRequest>(mockData);

    useEffect(() => {
        if (cliente)
            setClienteContext({
                idCliente: cliente.idCliente,
                ativo: cliente.ativo,
                inscricao: cliente.inscricao,
                logo: cliente.logo,
                nome: cliente.nome,
                tipoPessoa: cliente.tipoPessoa.idTipoPessoa,
                usuarioAlteracao: cliente.usuarioAlteracao?.idUsuario,
                usuarioInclusao: cliente.usuarioInclusao?.idUsuario,
            });
    }, []);

    return (
        <FormWrapper>
            <Row className="row">
                <Col className="col">
                    <InputWrapper className="inputWrapper">
                        <Label>Nome</Label>
                        <Input
                            placeholder="Nome"
                            value={clienteContext.nome}
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    nome: e.target.value,
                                }))
                            }
                        />
                    </InputWrapper>
                </Col>
                <Col className="col">
                    <InputWrapper className="inputWrapper">
                        <Label>Inscrição</Label>
                        <Input
                            placeholder="Inscrição"
                            value={clienteContext.inscricao}
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    inscricao: e.target.value,
                                }))
                            }
                        />
                    </InputWrapper>
                </Col>
            </Row>
            <Divider size={12} />
            <Row className="row">
                <Col className="col">
                    <SelectWrapper className="inputWrapper">
                        <Label>Tipo de Pessoa</Label>
                        <Select
                            value={clienteContext.tipoPessoa}
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    tipoPessoa: parseInt(e.target.value),
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
                        <Label>Ativo</Label>
                        <Select
                            value={clienteContext.ativo ? "true" : "false"}
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    ativo:
                                        e.target.value === "true"
                                            ? true
                                            : false,
                                }))
                            }
                        >
                            <Option value="true"> SIM</Option>
                            <Option value="false"> NÃO</Option>
                        </Select>
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
                        <ButtonPrimary
                            onClick={() => {
                                salvar(clienteContext);
                                voltar();
                            }}
                        >
                            Salvar
                        </ButtonPrimary>
                    </div>
                    <div style={{ padding: "4px", width: "50%" }}>
                        <ButtonOutlinePrimary onClick={() => voltar()}>
                            Voltar
                        </ButtonOutlinePrimary>
                    </div>
                </Col>
            </Row>
        </FormWrapper>
    );
};

export default CadastraEditaClientes;
