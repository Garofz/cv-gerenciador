import styled, { css, keyframes } from "styled-components";

export const TitleH1 = styled.h1`

`;
export const TitleH2 = styled.h2`

`;
export const TitleH3 = styled.h3`
    margin: 5px 0px !important;
`;
export const TitleH4 = styled.h4`

`;
export const TitleH5 = styled.h5`

`;
export const TextBold = styled.text`
    font-weight: 600;
`;
export const TextBody = styled.div`
    width: 200px;
`;
export const Subtitle1 = styled.text`
    font-size: 24px;
    color: ${({color}) => color};
`;
export const Subtitle2 = styled.text`
    font-size: 18px;
    color: ${({color}) => color};
`;

export const ButtonPrimary = styled.button`
    border: none;
    border-radius: 50px;
    width: 100%;
    height: 50px;
    background: #27374D;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #526D82;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlinePrimary = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border:2px solid #27374D;
    background: #fff;
    color:#27374D;
    padding: 16px 32px;
    width: 100%;
    cursor: pointer;
    &:hover{
        background: #27374D;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonSecondary = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    background: #526D82;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #27374D;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlineSecondary = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border:2px solid #526D82;
    background: #fff;
    color:#526D82;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #526D82;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonAlert = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    background: #ff7c11;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #ff9b4f;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlineAlert = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border:2px solid #ff7c11;
    background: #fff;
    color:#ff7c11;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #ff7c11;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;

export const ButtonDanger = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    background: #f21515;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #f21515;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlineDanger = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border:2px solid #f21515;
    background: #fff;
    color:#f21515;
    padding: 16px 32px;
    cursor: pointer;
    &:hover{
        background: #f21515;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;

export interface SizeParams{
    size: 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
}

export const Divider = styled.div<SizeParams>`

    @media (min-width: 768px) and (max-width: 1023px) {
        margin:${(props) => props.size/2 || 0}px;

    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        margin:${(props) => props.size/3 || 0}px;

    }
    margin:${(props) => props.size || 0}px;
`;

export const InputWrapper = styled.div`
    display:flex;
    flex-direction:column;
    
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  transition: border-bottom-color 0.5s;
  font-size: 18px;
  &:focus {
    border-bottom-color: #000;
    outline: none;
  }

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        font-size: 80%;
    }
`;

export const Label = styled.label`
    flex-direction:column-reverse;
    pointer-events: none;
    color: #27374D;
    font-weight: bold;
    transition: transform 0.3s, font-size 0.3s;
    transform-origin: top left;
    ${Input}:focus ~ &,
    ${Input}:valid ~ & {
        transform: translateY(-100%) scale(0.8);
        font-size: 12px;
    }
`;

export const SelectWrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Select = styled.select`
    border: none;
    border-bottom: 2px solid #ccc;
    transition: border-bottom-color 0.5s;
    font-size: 18px;  
    &:focus {
        border-bottom-color: #27374D;
        outline: none;
    }
`;

export const Option = styled.option`
    font-size: 18px;  
    padding: 4px 8px;
    background-color: #fff;
`;


export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;
export const Col = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;
