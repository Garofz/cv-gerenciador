import styled, {css} from "styled-components";


export const ContainerClienteDiv = styled.div`


`;

export const ContainerClienteTitle = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width: 100%;

`;

export const ClienteAvatarWrapper = styled.div`
    display: flex;  
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding: 8px;
`;

export const ClienteAvatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content:center; 
    align-items:center; 
    margin-right: 12px;
    box-shadow:inset 0.5px 1px 8px rgba(0,0,0,0.5);
`;

export const ContainerClienteIcon = styled.div`
    padding: 12px;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`;

export const DividerLine = styled.div`
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid #526D82;
`;


export const ContainerClienteBodyDiv = styled.div`
`;

export const ClienteDetailUL = styled.ul`
   list-style: none;
`;

export const ClienteDetailLI = styled.li`
    padding: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ClienteDetailSpan = styled.span`
    margin-right: 8px;
    font-weight: bold;
`;
