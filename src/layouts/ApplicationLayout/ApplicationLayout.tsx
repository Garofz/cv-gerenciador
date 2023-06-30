import React, { useRef, useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaCaretDown, FaUsers } from "react-icons/fa";
import { RxComponentBoolean } from "react-icons/rx";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import {
    ContainerDiv,
    ContentDiv,
    DividerDiv,
    HeaderMenuDiv,
    HeaderRightContentDiv,
    HeaderleftContentDiv,
    HelpButton,
    HelpButtonTextP,
    LogoButton,
    MenuButton,
    PortalNameP,
    SideMenuDiv,
    SubContentDiv,
    UserMenuDiv,
} from "./styles";
import Menu, { MenuHandle } from "../../components/Menu/Menu";
import UserMenu from "../../components/UserMenu/UserMenu";

function ApplicationLayout() {
    const [menuColapsed, setmenuColapsed] = useState<boolean>(true);
    const navigation = useNavigate();
    const location = useLocation();
    const menuRef = useRef<MenuHandle>(null);
    const menus = [
        {
            icon: <BsFillPersonLinesFill />,
            text: "Clientes",
            path: "/clientes",
        },
        {
            icon: <RxComponentBoolean />,
            text: "Components",
            path: "/components",
        },
    ];

    useEffect(() => {
        const path = `/${location.pathname.split("/")[1]}`;
        if (menuRef.current) menuRef.current.setMenuButton(path);
    }, [location.pathname]);

    return (
        <ContainerDiv id="cointainer">
            <HeaderMenuDiv>
                <HeaderleftContentDiv>
                    <MenuButton
                        menuColapsed={menuColapsed}
                        onClick={() => setmenuColapsed((props) => !props)}
                    >
                        {!menuColapsed ? (
                            <AiOutlineMenuFold size={24} color="#DDE6ED" />
                        ) : (
                            <AiOutlineMenuUnfold size={24} color="#DDE6ED" />
                        )}
                    </MenuButton>
                    <LogoButton onClick={() => navigation("/")}>
                        Cardapio Virtual
                    </LogoButton>
                    <DividerDiv />

                    <PortalNameP>Gerenciador</PortalNameP>
                </HeaderleftContentDiv>
                <HeaderRightContentDiv>
                    {/* <HelpButton>
                        <HelpButtonTextP>Ajuda</HelpButtonTextP>
                        <FaQuestion size={18} color="#DDE6ED" />
                    </HelpButton> */}
                    <UserMenu />
                </HeaderRightContentDiv>
            </HeaderMenuDiv>
            <SubContentDiv>
                <SideMenuDiv>
                    <Menu
                        references={menuRef}
                        menus={menus}
                        colapsed={menuColapsed}
                        redirectTo={(path) => navigation(path)}
                    />
                </SideMenuDiv>
                <ContentDiv>
                    <Outlet />
                </ContentDiv>
            </SubContentDiv>
        </ContainerDiv>
    );
}

export default ApplicationLayout;
