import styled,{ css } from "styled-components";

export const ClienteWrapper = styled.div`
    padding: 12px;
    border: 1px solid #9DB2BF;
    border-radius: 20px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    cursor: pointer;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    
    transition: background 0.2s ease-in-out;
    &:hover{

        background: #DDE6ED;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        flex-direction:row;
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
export const ClienteTitle = styled.div`
    margin-bottom: 12px;    
`;
export const ClienteBody = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:left;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        flex-direction:column;
        justify-content:start;
        font-size: 70%;
    }
`;

export const IconContainer = styled.div`
    width: 40px;
    display: flex;
    justify-content:center;
    align-items:center;
    &:hover{
        color: red;
    }

`;

export const ClienteIconWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */ 
        display: none;
    }
`;
export const ClienteFooter = styled.div`

`;