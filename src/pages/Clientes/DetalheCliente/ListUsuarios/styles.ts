import styled, { css } from "styled-components";

export const ContainerContentDiv = styled.div`
    padding: 0.5rem;
`;

export const ContainerUsuarioDiv = styled.div`
    flex-direction: row;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        flex-direction: column-reverse;
        justify-content: space-between;
        height: 150px;
        margin: 0 auto;
        .filterInput {
            padding: 0.8rem;
            width: 100%;
            margin: 0 auto;
            input {
                width: 85%;
                height: 30px;
            }
        }
    }
`;

export const UsuarioTitleDiv = styled.div``;

export const UsuarioTitle = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

export const UsuarioBody = styled.div`
    padding: 12px;
`;

export const UsuarioSpan = styled.span`
    font-weight: bold;
    padding: 4px;
`;

export const UsuarioTextWrapper = styled.div`
    padding: 4px;
`;

export const UsuarioIconWrapper = styled.div``;
