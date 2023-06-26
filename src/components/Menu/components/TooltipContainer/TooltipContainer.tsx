import React, { useEffect, useRef, useState } from "react";
import {
    ContainerDiv,
    PositionX,
    TipArrowDiv,
    TipContainerDiv,
    TipMessageContainerDiv,
} from "./styles";
import { TipMessageP } from "./styles";

export interface TooltipContainerProps {
    children: JSX.Element;
    tipMessage: string;
    maxWidth?: number;
    mainTipPosition?: PositionX;
    disabled?: boolean;
}

const TooltipContainer: React.FunctionComponent<TooltipContainerProps> = ({
    tipMessage,
    maxWidth = 365,
    mainTipPosition = "left",
    children,
    disabled,
}): JSX.Element => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [sidePosition, setSidePositiom] =
        useState<PositionX>(mainTipPosition);
    const [showTip, setShowTip] = useState(false);
    const [buttonSize, setButtonSize] = useState({
        width: 0,
        height: 0,
    });

    const positionTooltip = (): void => {
        if (!tooltipRef.current || !buttonRef.current) return;
        const { left, right } = tooltipRef.current.getBoundingClientRect();

        setButtonSize({
            width: buttonRef.current.getBoundingClientRect().width,
            height: buttonRef.current.getBoundingClientRect().height,
        });

        if (left < 0) {
            setSidePositiom("right");
        } else if (
            window.visualViewport &&
            right > window.visualViewport.width
        ) {
            setSidePositiom("left");
        }
    };

    useEffect(() => {
        positionTooltip();
    }, []);

    return (
        <ContainerDiv
            ref={buttonRef}
            onMouseEnter={() => {
                if (!disabled) setShowTip(true);
            }}
            onMouseLeave={() => setShowTip(false)}
        >
            {children}

            <TipContainerDiv
                ref={tooltipRef}
                visible={showTip}
                buttonSize={buttonSize}
                tipSidePosition={sidePosition}
            >
                <TipArrowDiv tipSidePosition={sidePosition} />
                <TipMessageContainerDiv maxTipWidth={maxWidth}>
                    <TipMessageP>{tipMessage}</TipMessageP>
                </TipMessageContainerDiv>
            </TipContainerDiv>
        </ContainerDiv>
    );
};

export default TooltipContainer;
