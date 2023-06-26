import styled, {css} from "styled-components";


export const ModalContainer = styled.div`
    position:fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom:0px;

    background: rgba(68,68,68,0.6);
    backdrop-filter:blur(4px);

    z-index:9998;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        font-size: 80%;
    }

`;

export const ModalWrapper = styled.div`
    background:#fff;
    border-radius: 20px;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        font-size: 80%;
        width: 80%;
    }
`;

export const ModalTitle= styled.div`
    display:flex;
    width: 100%;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        width: 95%;
    }
`;

export const ModalBody = styled.div`
    padding: 1rem;
    display:flex;
    align-items:center;
    justify-content: center;
    
`;

export const ModalTitleWrapper = styled.div`
    width: 90%;
    padding: 8px;
    display:flex;
    flex-direction: column;
    align-items:center;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        width: 95%;
    }
`;
export const ModalIconTitleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:end;
    cursor: pointer;
`;

export const ModalFooter= styled.div`
    height: 20px;
`;