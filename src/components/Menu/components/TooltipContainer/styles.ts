import styled,{css} from "styled-components";

const arrowMargin = 16;
const arrowBorderWidth = 8;

export type PositionX = "left" | "right";

export interface TooltipStyleProps { 
    visible?: boolean;
    tipTopPosition?:boolean;
    tipSidePosition?:PositionX;
    buttonSize?:{
        width: number;
        height: number;
    };
    maxTipWidth?: number;
}

export const ContainerDiv = styled.div`
    position:relative;
`;

export const TipContainerDiv = styled.div<TooltipStyleProps>`
    z-index:10;
    position:absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    visibility: ${(props) => (props.visible? "visible":"hidden")};
    left:56px;
    bottom: 13px;

    ${(props) => props.tipSidePosition === "left" ? props.buttonSize &&
        css`
            flex-direction:row;
        `: props.buttonSize && 
        css`
            flex-direction:row-reverse;
        `}
`;

export const TipMessageContainerDiv = styled.div<TooltipStyleProps>`
    background-color: #efefef;
    border-radius: 4px;
    width: max-content;
    padding: 8px 16px;
    max-width: ${(props) => props.maxTipWidth}px;
    box-shadow: lightgray;
`;

export const TipMessageP = styled.p`
    color: #000;
    text-align:center;
`;

export const TipArrowDiv = styled.div<TooltipStyleProps>`
    width:0;
    height:0;
    border-top: ${arrowBorderWidth}px solid transparent;
    border-bottom: ${arrowBorderWidth}px solid transparent;
    margin: ${arrowMargin}px 0px;
    z-index:10;
    
    ${(props) => 
        props.tipSidePosition === "right" ? 
            css`
                border-left: red;
            `:
            css`
                border-right: green;
            `}
`;

