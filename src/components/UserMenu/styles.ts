import { BsCaretDownFill } from "react-icons/bs";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import styled, { css } from "styled-components";

export const UserSettingsDiv = styled.div`
    position: relative;
`;

interface UserButtonProps {
    isSelected: boolean;
}

export const UserConfigurationButton = styled.button.attrs({
    type: "button",
})<UserButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 4px;
    width: 70px;
    justify-content: space-between;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.light01};
    ${(props) =>
        props.isSelected &&
        css`
            background-color: ${({ theme }) => theme.colors.secondary};
        `}
`;

interface ModalProps {
    showModal: boolean;
}

export const UserSettingsModal = styled.div<ModalProps>`
    z-index: 10;
    position: absolute;
    top: 40px;
    right: 0px;
    background-color: ${({ theme }) => theme.colors.light01};
    visibility: hidden;
    border: none;

    border-radius: 0px 0px 20px 20px;
    ${(props) =>
        props.showModal &&
        css`
            visibility: visible;
        `};
`;
export const UserSettingsButton = styled.button.attrs({ type: "button" })`
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.light01};
    width: 100%;
    transition: 0.2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.light02};
    }
`;

export const UserWelcomeMessageDiv = styled.div`
    background-color: #27374d;
    padding: 15px 50px;
`;

export const UserMessageP = styled.p`
    color: #fff;
    white-space: nowrap;
`;

export const UserSettingsButtonDiv = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
        background-color: #dde6ed;
    }
`;

export const UserTextP = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
    margin-left: 10px;
`;

export const ThemeSelectorDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

interface ArrowWrapperProps {
    rotateArrow: boolean;
}

export const ArrowDivWrapper = styled.div<ArrowWrapperProps>`
    display: flex;
    padding: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
        ${(props) =>
            props.rotateArrow
                ? css`
                      transform: rotate(180deg);
                      transition: 0.35s;
                  `
                : css`
                      transform: rotate(0deg);
                      transition: 0.35s;
                  `}
    }
`;

export const ArrowIcon = styled(BsCaretDownFill)`
    color: ${({ theme }) => theme.colors.primary};
`;
export const FaUserIcon = styled(FaUser)`
    color: ${({ theme }) => theme.colors.primary};
`;
export const FaSignOutAltIcon = styled(FaSignOutAlt)`
    color: ${({ theme }) => theme.colors.secondary};
`;
