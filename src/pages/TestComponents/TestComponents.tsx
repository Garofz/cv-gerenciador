import React, { useState } from "react";
import {
    ButtonAlert,
    ButtonDanger,
    ButtonOutlineAlert,
    ButtonOutlineDanger,
    ButtonOutlinePrimary,
    ButtonOutlineSecondary,
    ButtonPrimary,
    ButtonSecondary,
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
    Subtitle1,
    Subtitle2,
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5,
} from "../../globalStyles";
import Accordion from "../../components/Accordion/Accordion";
import FadeIn from "../../components/Animations/FadeIn/FadeIn";
import FadeInLeft from "../../components/Animations/FadeInLeft/FadeInLeft";
import Toast from "../../components/Toast/Toast";
function TestComponents() {
    const [showToast, setShowToast] = useState<boolean>(false);
    const [showFixedToast, setShowFixedToast] = useState<boolean>(false);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Accordion title="Textos">
                <div style={{ padding: "12px 0px" }}>
                    <TitleH1>TITLE H1</TitleH1>
                    <TitleH2>TITLE H2</TitleH2>
                    <TitleH3>TITLE H3</TitleH3>
                    <TitleH4>TITLE H4</TitleH4>
                    <TitleH5>TITLE H5</TitleH5>
                    <Subtitle1 color="#526D82">Subtitle 1</Subtitle1>
                    <Subtitle2 color="#27374D">Subtilte 2</Subtitle2>
                </div>
            </Accordion>
            <Accordion title="Botões">
                <div style={{ padding: "12px 0px" }}>
                    <Row>
                        <Col>
                            <ButtonPrimary style={{ width: "fit-content" }}>
                                Button Primary
                            </ButtonPrimary>
                            <ButtonOutlinePrimary
                                style={{ width: "fit-content" }}
                            >
                                Button Outline Primary
                            </ButtonOutlinePrimary>
                        </Col>
                    </Row>
                    <Divider size={12} />
                    <Row>
                        <Col>
                            <ButtonSecondary style={{ width: "fit-content" }}>
                                Button Secondary
                            </ButtonSecondary>
                            <ButtonOutlineSecondary
                                style={{ width: "fit-content" }}
                            >
                                Button Outline Secondary
                            </ButtonOutlineSecondary>
                        </Col>
                    </Row>
                    <Divider size={12} />
                    <Row>
                        <Col>
                            <ButtonAlert style={{ width: "fit-content" }}>
                                Button Alert
                            </ButtonAlert>
                            <ButtonOutlineAlert
                                style={{ width: "fit-content" }}
                            >
                                Button Outline Alert
                            </ButtonOutlineAlert>
                        </Col>
                    </Row>
                    <Divider size={12} />
                    <Row>
                        <Col>
                            <ButtonDanger style={{ width: "fit-content" }}>
                                Button Danger
                            </ButtonDanger>
                            <ButtonOutlineDanger
                                style={{ width: "fit-content" }}
                            >
                                Button Outline Danger
                            </ButtonOutlineDanger>
                        </Col>
                    </Row>
                </div>
            </Accordion>
            <Accordion title="Input">
                <form style={{ padding: "12px 0px" }}>
                    <InputWrapper style={{ width: "500px" }}>
                        <Label>Teste</Label>
                        <Input type="text" placeholder="Com Label" />
                    </InputWrapper>
                    <Divider size={12} />
                    <InputWrapper style={{ width: "500px" }}>
                        <Input type="text" placeholder="Sem Label" />
                    </InputWrapper>
                    <Divider size={12} />
                    <InputWrapper style={{ width: "500px" }}>
                        <Label>Data 1</Label>
                        <Input type="date" placeholder="Data" />
                    </InputWrapper>
                    <Divider size={12} />
                    <InputWrapper style={{ width: "500px" }}>
                        <Input type="date" placeholder="Data" />
                    </InputWrapper>
                    <Divider size={12} />
                    <InputWrapper style={{ width: "500px" }}>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            autoComplete=""
                            placeholder="Com Label"
                        />
                    </InputWrapper>
                    <Divider size={12} />
                    <InputWrapper style={{ width: "500px" }}>
                        <Input
                            type="password"
                            autoComplete=""
                            placeholder="Sem Label"
                        />
                    </InputWrapper>
                    <Divider size={12} />
                    <InputWrapper style={{ width: "500px" }}>
                        <Input type="email" placeholder="Email" />
                    </InputWrapper>

                    <Divider size={12} />
                    <SelectWrapper style={{ width: "500px" }}>
                        <Label>Select</Label>
                        <Select>
                            <Option value={0} defaultChecked>
                                --- Select ---
                            </Option>
                            <Option value={0}> Teste</Option>
                            <Option value={1}> Teste 2</Option>
                            <Option value={2}> Teste 3</Option>
                            <Option value={3}> Teste 4</Option>
                        </Select>
                    </SelectWrapper>
                </form>
            </Accordion>
            <Accordion title="Animations">
                <Divider size={32} />
                <FadeIn>
                    <div>Teste Fade In</div>
                </FadeIn>
                <Divider size={32} />
                <FadeInLeft>
                    <div>Teste Fade In Left</div>
                </FadeInLeft>
            </Accordion>
            <Accordion title="Toast">
                <Divider size={32} />
                <Label>Relative</Label>
                <div style={{ width: "300px" }}>
                    <Toast
                        mensagem="Esse é um Toast de Sucesso"
                        type="success"
                        showToast={showToast}
                        setShowToast={setShowToast}
                        fixed={false}
                        duration={6000}
                    />
                    <Divider size={12} />
                    <Toast
                        mensagem="Esse é um Toast de Aviso"
                        type="warning"
                        showToast={showToast}
                        setShowToast={setShowToast}
                        fixed={false}
                        duration={6000}
                    />
                    <Divider size={12} />
                    <Toast
                        mensagem="Esse é um Toast de Info"
                        type="info"
                        showToast={showToast}
                        setShowToast={setShowToast}
                        fixed={false}
                        duration={6000}
                    />
                    <Divider size={12} />
                    <Toast
                        mensagem="Esse é um Toast de Erro"
                        type="error"
                        showToast={showToast}
                        setShowToast={setShowToast}
                        fixed={false}
                        duration={6000}
                    />
                    <Divider size={12} />
                    <ButtonPrimary onClick={() => setShowToast(true)}>
                        Mostrar Toast
                    </ButtonPrimary>
                    <Divider size={32} />
                    <Label>Absolute</Label>
                    <Toast
                        mensagem="Esse é um Toast Absolute de Erro"
                        type="error"
                        showToast={showFixedToast}
                        setShowToast={setShowFixedToast}
                        fixed={true}
                        duration={6000}
                    />
                    <Divider size={12} />
                    <ButtonPrimary onClick={() => setShowFixedToast(true)}>
                        Mostrar Toast
                    </ButtonPrimary>
                </div>
            </Accordion>
        </div>
    );
}

export default TestComponents;
