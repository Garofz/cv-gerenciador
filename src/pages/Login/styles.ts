import styled, { css } from "styled-components";

export const LoginFormWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        width: 70%;
    }
`;
