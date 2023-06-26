import styled, {css} from "styled-components"

export const ContainerAccountDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction:column;
    justify-content:space-between;
`;
export const DividerLine = styled.div`
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid #526D82;
`;

export const AccountDetailUL = styled.ul`
   list-style: none;
`;

export const AccountDetailLI = styled.li`
    padding: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const AccountDetailSpan = styled.span`
    margin-right: 8px;
    font-weight: bold;
`;

export const LogOutDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:end;
`;

export const LogOutLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color:#526D82;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    width: 170px;
`;