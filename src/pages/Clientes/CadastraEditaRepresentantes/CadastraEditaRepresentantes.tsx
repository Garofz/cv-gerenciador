import React, { useState } from "react";
import {
    IUserCliente,
    IUserList,
} from "../../../interfaces/IUserClienteResponse";
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
    selectedUser: IUserList;
    selectUser: React.Dispatch<React.SetStateAction<IUserList>>;
    type: "Cadastra" | "Edita";
    onClickVoltar: () => void;
    onClickSalvar: () => void;
}
function CadastraEditaRepresentantes({
    selectedUser,
    selectUser,
    type,
    onClickVoltar,
    onClickSalvar,
}: IProps) {
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
                            value={selectedUser.nomeUsuario}
                            onChange={(e) =>
                                selectUser((prev) => ({
                                    ...prev,
                                    nomeUsuario: e.target.value,
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
                            value={selectedUser.emailUsuario}
                            onChange={(e) =>
                                selectUser((prev) => ({
                                    ...prev,
                                    emailUsuario: e.target.value,
                                }))
                            }
                        />
                    </InputWrapper>
                </Col>
            </Row>
            <Divider size={32} />
            <Row className="row" style={{ width: "50%", margin: "0 auto" }}>
                <Col className="col" onClick={onClickSalvar}>
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
