import styled, {css, keyframes} from "styled-components";

export const SpinnerContainer = styled.div`
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

export const SpinnerAttr = styled.div`
    width: 50.4px;
    height: 50.4px;
    --c: linear-gradient(#27374D 0 0);
    background: var(--c), var(--c), var(--c);
    background-repeat: no-repeat;
    animation: bars-4tzcsomd 1s infinite, bars-d0g8gh 1s infinite;
    @keyframes bars-4tzcsomd {
        0%, 100% {
        background-size: 10.1px 100%;
        }

        33%, 66% {
        background-size: 10.1px 10.1px;
    }
}

@keyframes bars-d0g8gh {
    0%, 33% {
      background-position: 0    0,50% 50%,100% 100%;
    }

    66%, 100% {
      background-position: 100% 0,50% 50%,0    100%;
    }
}
`;
