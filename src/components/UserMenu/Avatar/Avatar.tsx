import React from "react";
import styled, { css } from "styled-components";

export const AvatarWrapper = styled.div`
    background-color: #ff7c11;
    border-radius: 50%;
`;
export const AvatarContainer = styled.div<SizeParams>`
    display: flex;
    flex-direction: row;
    height: ${(props) => (props.size === "small" ? "30px" : "80px")};
    width: ${(props) => (props.size === "small" ? "30px" : "80px")};
    justify-content: center;
    align-items: center;
    color: #fff;
`;
export const AvatarText = styled.div<SizeParams>`
    color: #fff;
    font-weight: 500;
    font-size: ${(props) => (props.size === "small" ? "12px" : "30px")};
`;
export interface SizeParams {
    size: "small" | "large";
}
export interface Props {
    name: string;
    shadow?: boolean;
    size?: "small" | "large";
}

const Avatar = ({ name, shadow, size = "small" }: Props) => {
    const nameArr = name.split(" ");

    return (
        <AvatarWrapper
            style={{
                boxShadow: shadow ? " 0.5px .7px 2.5px #000" : "none",
            }}
        >
            <AvatarContainer size={size}>
                <AvatarText size={size}>{nameArr[0][0]}</AvatarText>
                {nameArr[1] && (
                    <AvatarText size={size}>{nameArr[1][0]}</AvatarText>
                )}
            </AvatarContainer>
        </AvatarWrapper>
    );
};

export default Avatar;
