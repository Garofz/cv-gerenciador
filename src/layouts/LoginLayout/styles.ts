import styled, {css} from "styled-components";

export const Wapper = styled.div`
    background: radial-gradient(circle, #27374D, #526D82);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    overflow-y: unset;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        font-size: 1.2rem;
        input{
            height: 35px;
        }
        button{
            font-size: 0.8rem;
        }
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    background: #27374D;
    border-radius: 40px;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        margin: 0;
        box-shadow: none;
        border-radius: 0;
        height: 100%;
        
        justify-content: start;
        align-items: center;

    }
`;

export const ContainerLogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        width: 100%;
        justify-content: center;
        align-items: center;

        height: 100%;
    }
`;

export const ContainerLogo = styled.div`
    color: #fff;
`;

export const ContainerOutletContent = styled.div`
    height: 500px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 0px 40px 40px 0px;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        width: 100%;
        justify-content: center;
        border-radius: 0;
        align-items: center;
        height: 100%;
    }
`;