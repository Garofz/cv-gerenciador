import React from "react";
import {
    ArrowDivWrapper,
    UserConfigurationButton,
    UserMessageP,
    UserSettingsButton,
    UserSettingsDiv,
    UserSettingsModal,
    UserTextP,
    UserWelcomeMessageDiv,
} from "./styles";
import useUserMenu from "./hooks/UseUserMenu";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import Avatar from "./Avatar/Avatar";
import { Divider } from "../../globalStyles";
import { DividerDiv } from "../../layouts/ApplicationLayout/styles";
import { useAsyncDispatch } from "../../redux/store";
import { logOut } from "../../redux/features/generalData/generalDataSlice";
import { useNavigate } from "react-router-dom";

function UserMenu() {
    const { showModal, setShowModal, usuario } = useUserMenu();
    const dispatch = useAsyncDispatch();
    const navigate = useNavigate();
    if (!usuario) return <></>;

    return (
        <UserSettingsDiv onClick={(event) => event.stopPropagation()}>
            <UserConfigurationButton
                isSelected={showModal}
                onClick={() => setShowModal((prev) => !prev)}
            >
                <ArrowDivWrapper rotateArrow={showModal}>
                    <BsCaretDownFill size={18} color="#27374D" />
                </ArrowDivWrapper>
                <Avatar name={usuario.name} />
            </UserConfigurationButton>
            <UserSettingsModal showModal={showModal}>
                <UserWelcomeMessageDiv>
                    <UserMessageP>
                        Olá, {usuario.name.split(" ")[0]}{" "}
                        {usuario.name.split(" ")[1]}
                    </UserMessageP>
                </UserWelcomeMessageDiv>
                <div
                    style={{
                        border: "1px solid #9DB2BF",
                        borderRadius: "0px 0px 20px 20px",
                    }}
                >
                    <UserSettingsButton
                        onClick={() => {
                            navigate("/MyAccount");
                            setShowModal((prev) => !prev);
                        }}
                    >
                        <FaUser size={30} color="#27374D" />
                        <UserTextP>Minha Conta</UserTextP>
                    </UserSettingsButton>
                    <Divider size={4} />
                    <UserSettingsButton
                        style={{
                            borderRadius: "0px 0px 20px 20px",
                        }}
                        onClick={() => dispatch(logOut())}
                    >
                        <FaSignOutAlt size={30} color="#526D82" />
                        <UserTextP>Sair</UserTextP>
                    </UserSettingsButton>
                </div>
            </UserSettingsModal>
        </UserSettingsDiv>
    );
}

export default UserMenu;
