import React, { useState } from "react";
import { IUserCliente } from "../../../interfaces/IUserClienteResponse";
import { FormWrapper } from "./styles";
import {
    ButtonOutlinePrimary,
    ButtonPrimary,
    Col,
    Divider,
    Input,
    InputWrapper,
    Label,
    Option,
    Row,
    Select,
    SelectWrapper,
} from "../../../globalStyles";
import { convertStringToDate, formatarData } from "../../../util/format";

export interface IProps {
    selectedUser?: IUserCliente;
    type: "Cadastra" | "Edita";
    onClickVoltar: () => void;
}
const initialStateUsuario = {
    id: 0,
    nome: "",
    email: "",
    tipoAcesso: {
        id: 0,
        descricao: "",
    },
    acessoPrincipal: false,
    dataCadastro: new Date(),
    pimeiroAcesso: false,
};
function CadastraEditaRepresentantes({
    selectedUser,
    type,
    onClickVoltar,
}: IProps) {
    const [userContext, setUserContext] = useState<IUserCliente>(
        selectedUser || initialStateUsuario
    );
    const [date, setDate] = useState<string>(
        selectedUser?.dataInativacao
            ? formatarData(selectedUser.dataInativacao, true, "input")
            : ""
    );

    const salvar = () => {
        const userAux = userContext;
        userAux.dataInativacao = convertStringToDate(date);

        console.log(userAux);
    };
    return (
        <FormWrapper>
            <Row className="row">
                <Col className="col">
                    <InputWrapper
                        className="inputWrapper"
                        style={{ width: "350px" }}
                    >
                        <Label>Nome</Label>
                        <Input
                            placeholder="Nome"
                            value={userContext.nome}
                            onChange={(e) =>
                                setUserContext((prev) => ({
                                    ...prev,
                                    nome: e.target.value,
                                }))
                            }
                        />
                    </InputWrapper>
                </Col>
                <Col className="col">
                    <InputWrapper
                        className="inputWrapper"
                        style={{ width: "400px" }}
                    >
                        <Label>Email</Label>
                        <Input
                            disabled={type === "Edita"}
                            placeholder="Email"
                            value={userContext.email}
                            onChange={(e) =>
                                setUserContext((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                    </InputWrapper>
                </Col>
            </Row>
            <Divider size={24} />
            <Row className="row">
                <Col className="col">
                    <SelectWrapper
                        className="inputWrapper"
                        style={{ width: "350px" }}
                    >
                        <Label>Acesso</Label>
                        <Select
                            value={userContext.tipoAcesso.id}
                            onChange={(e) =>
                                setUserContext((prev) => ({
                                    ...prev,
                                    tipoAcesso: {
                                        id: parseInt(e.target.value),
                                        descricao: "",
                                    },
                                }))
                            }
                        >
                            <Option value={0} defaultChecked>
                                --- Select ---
                            </Option>
                            <Option value={1}>Admin</Option>
                            <Option value={2}>Comun</Option>
                        </Select>
                    </SelectWrapper>
                </Col>
                <Col className="col">
                    <InputWrapper
                        className="inputWrapper"
                        style={{ width: "180px" }}
                    >
                        <Label>Data Inativação</Label>
                        <Input
                            type="date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                        />
                    </InputWrapper>
                </Col>
                <Col className="col">
                    <InputWrapper
                        className="inputWrapper"
                        style={{
                            width: "165px",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Label>Acesso Principal</Label>
                        <input
                            type="checkbox"
                            checked={userContext.acessoPrincipal}
                            onChange={(e) => {
                                setUserContext((prev) => ({
                                    ...prev,
                                    acessoPrincipal: e.target.checked,
                                }));
                            }}
                        />
                    </InputWrapper>
                </Col>
            </Row>
            <Divider size={32} />
            <Row className="row" style={{ width: "50%", margin: "0 auto" }}>
                <Col className="col" onClick={salvar}>
                    <ButtonPrimary>Salvar</ButtonPrimary>
                </Col>
                <Col className="col">
                    <ButtonOutlinePrimary onClick={onClickVoltar}>
                        Voltar
                    </ButtonOutlinePrimary>
                </Col>
            </Row>
        </FormWrapper>
    );
}

export default CadastraEditaRepresentantes;
