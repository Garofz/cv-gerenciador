import styled, {css} from "styled-components";

export const ContainerContentDiv = styled.div`
padding: 0.5rem;
`;

export const ContainerUsuarioDiv = styled.div`
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    &:hover{

        background: #DDE6ED;
    }
`;
export const SubHeaderHandler = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        flex-direction:column-reverse;
        justify-content:space-between;
        height: 150px;
        margin: 0 auto;
        .filterInput {
            padding: 0.8rem;
            width: 100%;
            margin:0 auto;
            input{
                width: 85%;
                height: 30px;
            }
        }
    }
`;

export const UsuarioTitleDiv = styled.div``;


export const UsuarioTitle = styled.text`
    display: flex;
    flex-direction: row;
    justify-content:start;
    align-items:center;
`;


export const UsuarioBody = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;


export const UsuarioSpan = styled.span`
    font-weight: bold;
    padding: 4px;
`;


export const UsuarioTextWrapper = styled.div`
    padding: 4px; 
`;


export const UsuarioIconWrapper = styled.div``;

