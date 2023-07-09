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
    Label,
    Row,
    Subtitle1,
    Subtitle2,
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5,
} from "../../globalStyles";

import {
    Accordion,
    Button,
    CheckIcon,
    Datepicker,
    EmailIcon,
    Input,
    TextArea,
} from "ui-gds";
//import Accordion from "../../components/Accordion/Accordion";
import FadeIn from "../../components/Animations/FadeIn/FadeIn";
import FadeInLeft from "../../components/Animations/FadeInLeft/FadeInLeft";
import Toast from "../../components/Toast/Toast";
import { FaCheck } from "react-icons/fa";
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
            <Divider size={32} />
            <Accordion title="Botões">
                <div style={{ padding: "12px 0px" }}>
                    <Button
                        buttonType="primary"
                        text="Primary"
                        expandable
                        iconPosition="left"
                        customIcon={<CheckIcon stroke="#fff" />}
                    />
                    <Divider size={8} />
                    <Button
                        buttonType="secundary"
                        text="Secondary"
                        expandable
                    />
                    <Divider size={8} />
                    <Button
                        buttonType="primary"
                        text="danger"
                        variant="danger"
                        expandable
                    />
                    <Divider size={8} />
                    <Button
                        buttonType="secundary"
                        text="error"
                        variant="danger"
                        expandable
                    />
                </div>
            </Accordion>
            <Divider size={32} />
            <Accordion title="Input">
                <form style={{ padding: "12px 0px" }}>
                    <Input
                        name="Email"
                        labelText="E-mail"
                        labelStyle="bold"
                        inputSize="medium"
                        placeholder="informe o e-mail"
                        tip={true}
                        tipMessage="Informe o Email"
                        customIcon={<EmailIcon />}
                    />
                    <Divider size={24} />
                    <Input
                        inputType="password"
                        name="Senha"
                        labelText="Senha"
                        labelStyle="bold"
                        inputSize="medium"
                        placeholder="informe a senha"
                    />
                    <Divider size={24} />
                    <Datepicker
                        labelText="Data"
                        onChange={() => console.log()}
                        onClear={() => console.log()}
                    />
                    <Divider size={24} />
                    <TextArea
                        disable={false}
                        error={false}
                        label="Text Area"
                        resize="both"
                    />
                </form>
            </Accordion>
            <Divider size={32} />
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
            <Divider size={32} />
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
