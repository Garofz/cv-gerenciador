import styled from "styled-components";

export const FormWrapper = styled.div`
    padding: 14px;
    input {
        width: 400px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        display: flex;
        flex-direction: column;
        width: 100%;
        .row {
            width: 100%;
        }

        .col {
            .inputWrapper {
                margin-top: 1.2rem;
                width: 100%;
            }
        }
    }
`;
