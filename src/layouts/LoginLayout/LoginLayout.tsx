import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    ContainerContent,
    ContainerLogo,
    ContainerLogoDiv,
    ContainerOutletContent,
    Wapper,
} from "./styles";
import { TitleH1, TitleH2 } from "../../globalStyles";
import Login from "../../pages/Login/Login";
import { Button } from "ui-gds";
import NewPassword from "../../pages/Login/NewPassword/NewPassword";

function LoginLayout() {
    const [layout, setLayout] = useState<"login" | "newPassword">("login");

    const nextlayout = (layout: "login" | "newPassword") => {
        setLayout(layout);
    };

    return (
        <Wapper>
            <ContainerContent>
                <ContainerLogoDiv>
                    <ContainerLogo>
                        <TitleH1
                            style={{
                                color: "#fff",
                                textAlign: "center",
                            }}
                        >
                            Cardapio Virtual
                        </TitleH1>
                    </ContainerLogo>
                    <ContainerLogo>Gerenciador</ContainerLogo>
                </ContainerLogoDiv>
                <ContainerOutletContent>
                    {layout === "login" && (
                        <Login nextlayout={() => nextlayout("newPassword")} />
                    )}
                    {layout === "newPassword" && (
                        <NewPassword nextLayout={() => nextlayout("login")} />
                    )}
                </ContainerOutletContent>
            </ContainerContent>
        </Wapper>
    );
}

export default LoginLayout;
