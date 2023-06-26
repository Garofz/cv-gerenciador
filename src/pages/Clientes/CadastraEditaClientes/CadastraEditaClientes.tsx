import React, { useState, useEffect } from "react";
import { ICliente } from "../../../interfaces/ICliente";
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
    salvar: (cliente: ICliente) => void;
}

const CadastraEditaClientes = ({ cliente, voltar, salvar }: Props) => {
    const selectClientes = useSelector(selectClientsData);
    const mockData = (): ICliente => {
        let idAux = 0;
        const id = selectClientes?.map((x) => {
            if (idAux === 0) {
                idAux = x.id;
            } else {
                if (idAux < x.id) {
                    idAux = x.id;
                }
            }
        });

        return {
            id: idAux + 1,
            nome: "",
            ativo: true,
            tipoPessoa: "PF",
            logo: "",
            inscricao: "",
        };
    };

    const [clienteContext, setClienteContext] = useState<ICliente>(mockData);

    useEffect(() => {
        if (cliente) setClienteContext(cliente);
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
                            value={
                                clienteContext.tipoPessoa === "PF" ? "1" : "2"
                            }
                            onChange={(e) =>
                                setClienteContext((prev) => ({
                                    ...prev,
                                    tipoPessoa:
                                        e.target.value === "1" ? "PF" : "PJ",
                                }))
                            }
                        >
                            <Option value={"1"}> PF</Option>
                            <Option value={"2"}> PJ</Option>
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
