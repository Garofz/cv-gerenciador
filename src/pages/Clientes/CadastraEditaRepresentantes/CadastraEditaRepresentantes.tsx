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
    InputWrapper,
    Label,
    Option,
    Row,
    Select,
    SelectWrapper,
} from "../../../globalStyles";
import { convertStringToDate, formatarData } from "../../../util/format";
import { Button, Input } from "ui-gds";

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
                    <Input
                        name="Nome"
                        labelText="Nome"
                        placeholder="Nome"
                        value={selectedUser.nomeUsuario}
                        onChange={(e) =>
                            selectUser((prev) => ({
                                ...prev,
                                nomeUsuario: e.target.value,
                            }))
                        }
                    />
                </Col>
                <Col className="col">
                    <Input
                        labelText="Email"
                        name="Email"
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
                </Col>
            </Row>
            <Divider size={32} />
            <Row className="row" style={{ width: "100%", margin: "0 auto" }}>
                <Col className="col">
                    <Button text="Salvar" expandable onClick={onClickSalvar} />
                </Col>
                <Col className="col">
                    <Button
                        text="Voltar"
                        buttonType="secundary"
                        expandable
                        onClick={onClickVoltar}
                    />
                </Col>
            </Row>
        </FormWrapper>
    );
}

export default CadastraEditaRepresentantes;
