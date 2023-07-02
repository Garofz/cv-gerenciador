import React, { useRef, useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    ContainerContent,
    ContainerLogo,
    ContainerLogoDiv,
    ContainerOutletContent,
    Wapper,
} from "./styles";
import { TitleH1, TitleH2 } from "../../globalStyles";

function LoginLayout() {
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
                    <Outlet />
                </ContainerOutletContent>
            </ContainerContent>
        </Wapper>
    );
}

export default LoginLayout;
