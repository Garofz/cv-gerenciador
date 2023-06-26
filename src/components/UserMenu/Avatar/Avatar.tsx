import React from "react";
import styled, { css } from "styled-components";

export const AvatarWrapper = styled.div`
    background-color: #ff7c11;
    border-radius: 50%;
`;
export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    color: #fff;
`;
export const AvatarText = styled.div`
    color: #fff;
    font-weight: 500;
`;

export interface Props {
    name: string;
    shadow?: boolean;
}

const Avatar = ({ name, shadow }: Props) => {
    const nameArr = name.split(" ");

    return (
        <AvatarWrapper
            style={{
                boxShadow: shadow ? " 0.5px .7px 2.5px #000" : "none",
            }}
        >
            <AvatarContainer>
                <AvatarText>{nameArr[0][0]}</AvatarText>
                <AvatarText>{nameArr[1][0]}</AvatarText>
            </AvatarContainer>
        </AvatarWrapper>
    );
};

export default Avatar;
