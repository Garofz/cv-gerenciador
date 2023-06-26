import styled, {css} from "styled-components";

interface HeaderStyleProps{
    menuColapsed?: boolean
}

interface ColorStyleProps{
    color?: string
}


const height = window.innerHeight;

export const SpinnerDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: ${height}px;
`;

export const ContainerDiv = styled.div`
    background: #27374D;
    display:flex;
    flex-direction:column;
    height: 100%;
`;

export const OfflineBackgroundDiv = styled.div`
    position:fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom:0px;

    background: rgba(68,68,68,0.6);
    backdrop-filter:blur(4px);

    z-index:9998;
`;

export const ToastDiv = styled.div`
    position: absolute;
    top:48px;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;
`;
export const HeaderMenuDiv = styled.div`
    height:60px;
    padding:0px 16px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    box-sizing:border-box;
    background: #27374D;
    
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        font-size: 12px;
    }

`;
export const HeaderleftContentDiv = styled.div`
    display:flex;
    align-items: center;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {

    }
`;
export const MenuButton = styled.button<HeaderStyleProps>`
    height: 40px;
    width:40px;
    margin-right: 16px;
    border-radius: 4px;
    border: none;
    background-color: #27374D;
    cursor: pointer;
    //Menu Colapsed
    ${(props) => !props.menuColapsed && 
    css`
        background-color : #526D82;
    `}
`;

export const LogoButton = styled.button`
    cursor:pointer;
    border: none;
    background-color:#27374D;
    color: #DDE6ED;
    font-weight: bold;
    font-size: 25px;
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        font-size: 18px;  
    }
`;
export const LogoDiv = styled.div``;

export const DividerDiv = styled.div<ColorStyleProps>`
    height:28px;
    width:1px;
    margin: 0px 16px;
    background-color: ${(props) => props.color || "#ff7c11"} ;
`;

export const PortalNameP = styled.p`
    color: #efefef;
`;
export const HeaderRightContentDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content:end;
    width: 170px;
    height: 100%;
`;
export const HelpButton = styled.button`
    display:flex;
    flex-direction:row;
    align-items: center;
    background-color: #27374D;
    border: 1px solid #526D82;
    border-radius: 20px 0px 0px 20px;
    width: 80px;
    height: 40px;
    cursor: pointer;
`;
export const HelpButtonTextP = styled.p`
    color:#fff;
    margin-left : 4px;
    margin-right: 16px;
`;
export const NotificationButton = styled.button`
    margin-right:16px;
`;
export const SubContentDiv = styled.div`
    display:flex;
    flex:1;
    height: calc(100% - 72px);
    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        overflow-y:auto;
        min-width:250px;
        font-size: 18px;  
    }
`;

export const SideMenuDiv = styled.div`
    margin-top: 28px;
    display:flex;
    flex-direction:column;
`;

export const ContentDiv = styled.div`
    flex:1;
    border-radius: 20px 0px 0px 0px;
    background-color: #fff;
    overflow-y:auto;
    padding: 48px;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        overflow-y:auto;
        min-width:250px;
        font-size: 18px;  
    }
`;

export const ToastWrapperDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


export const UserMenuDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    background-color: #27374D;
    border: 1px solid #526D82;
    border-radius: 20px 20px 20px 20px;
    width: 70px;
    height: 40px;
    cursor: pointer;
    `;

export const UserMenu = styled.div`
    margin-right: 5px;
    padding: 4px;
    background-color: #fff;
    border: 2px solid #526D82;
    border-radius: 50%;
    font-weight: 600;
    color: #526D82;
`;