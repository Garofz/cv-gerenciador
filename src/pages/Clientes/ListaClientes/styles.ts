import styled, { css } from "styled-components";

export const ClienteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        flex-direction: row;
        font-size: 80%;
    }
`;
export const SubHeaderHandler = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

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
export const ClienteTitle = styled.div`
    margin-bottom: 12px;
`;
export const ClienteBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        flex-direction: column;
        justify-content: start;
        font-size: 70%;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const ClienteIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #27374d;
    &:hover {
        color: #efefef;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        display: none;
    }
`;
export const ClienteFooter = styled.div``;
