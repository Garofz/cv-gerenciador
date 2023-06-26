import React, {
    HTMLAttributes,
    useState,
    useEffect,
    useImperativeHandle,
} from "react";
import {
    Button,
    ButtonLabel,
    IconContainer,
    MenuContainer,
    Selector,
} from "./styles";
import TooltipContainer from "./components/TooltipContainer/TooltipContainer";

export interface MenuOption {
    icon: JSX.Element;
    text: string;
    path: string;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
    menus: MenuOption[];
    colapsed: boolean;
    currentSelectionPath?: string;
    onMenuSelected?: (menuName: string, menuIndex: number) => void;
    redirectTo?: (path: string) => void;
    ref: React.Ref<MenuHandle>;
}

export interface MenuHandle {
    setMenuButton: (path: string) => void;
}

const Menu: React.ForwardRefRenderFunction<MenuHandle, Props> = ({
    menus,
    colapsed,
    onMenuSelected,
    redirectTo,
    currentSelectionPath,
    ref,
    ...props
}): JSX.Element => {
    const [selected, setSelected] = useState<string>(menus[0].text);

    const setMenuSelected = (menuName: string, menuIndex: number): void => {
        setSelected(menuName);
        if (onMenuSelected) onMenuSelected(menuName, menuIndex);
    };

    useEffect(() => {
        if (currentSelectionPath) {
            const menu = menus.find(
                (menuItem) => menuItem.path === currentSelectionPath
            );

            if (menu) setSelected(menu.text);
        }
    }, [currentSelectionPath]);

    useImperativeHandle(ref, () => ({
        setMenuButton: (path: string): void => {
            const menu = menus.find((menuItem) => menuItem.path === path);
            if (menu) setSelected(menu.text);
        },
    }));

    return (
        <MenuContainer {...props} isColapsed={colapsed}>
            {menus.map((menu, index) => (
                <TooltipContainer
                    tipMessage={menu.text}
                    key={`menu_button_${index}`}
                    disabled={!colapsed}
                >
                    <Button
                        className="button-icon"
                        isSelected={selected === menu.text}
                        isColapsed={colapsed}
                        onClick={() => {
                            setMenuSelected(menu.text, index);
                            if (redirectTo) redirectTo(menu.path);
                        }}
                        type="button"
                    >
                        <Selector isSelected={selected === menu.text} />

                        <IconContainer>
                            {React.cloneElement(menu.icon, {
                                size: "24px",
                                color:
                                    selected === menu.text
                                        ? "#DDE6ED"
                                        : "#9DB2BF",
                            })}
                        </IconContainer>

                        <ButtonLabel
                            isSelected={selected === menu.text}
                            isColapsed={colapsed}
                        >
                            {menu.text}
                        </ButtonLabel>
                    </Button>
                </TooltipContainer>
            ))}
        </MenuContainer>
    );
};

export default Menu;
