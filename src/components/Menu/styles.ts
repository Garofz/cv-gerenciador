import styled, {css} from "styled-components";

interface SelectedProps{
    isSelected?:boolean;
}

interface ColapsedProps extends SelectedProps{
    isColapsed: boolean;
}

export const MenuContainer = styled.div<ColapsedProps>`
    width: 16rem;
    padding-top: 0rem;
    ${(props) => props.isColapsed && 
    css`
        width: 4.5rem;
    `}
    transition: width 0.2s ease-out;
`;

export const Button = styled.button<ColapsedProps>`
    border:none;
    padding: 0;
    display:flex;
    flex-direction:row;
    align-items:center;
    width:16rem;
    height:4.5rem;
    background-color: inherit;
    margin:0rem;
    white-space:nowrap;
    cursor: pointer;

    &:hover{
        background-color: rgba(255,255,255,0.05);
    }

    ${(props) => props.isSelected &&
    css`
        background-color: rgba(255,255,255,0.05);
    `}

    ${(props) => props.isColapsed &&
    css`
        width:4.5rem;
    `}
    transition: width 0.2s ease-out;
`;

export const Selector = styled.div<SelectedProps>`
    width: 0.25rem;
    height:2.5rem;
    margin-right:1.25rem;
    border-radius: 1.25rem;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    background-color:#ff7c11;

    ${(props) => !props.isSelected &&
    css`
        visibility: hidden;
    `}

    transition: width 0.5s ease-out;
`;

export const IconContainer = styled.div`
    margin-right: 0.5rem;
`;

export const ButtonLabel = styled.div.attrs({
    className: "body-text",
})<ColapsedProps>`
    color: darkgray;
    opacity:1;
    max-width:100%;
    overflow:hidden;

    ${Button}:hover & {
        color:  #fff;
    }

    ${(props) => props.isSelected &&
    css`
        color:  #fff;
    `}

    ${(props) => props.isColapsed &&
    css`
       opacity:0;
       max-width:0%;
    `}
    transition: opacity 0.2s ease-out, max-width 0.2s ease-out;
`;



