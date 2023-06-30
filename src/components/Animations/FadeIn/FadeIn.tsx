import React from "react";
import { useSpring, animated, easings } from "react-spring";
import { IAnimationProps } from "../IAnimationProps";

const FadeIn: React.FC<IAnimationProps> = ({ children, duration }) => {
    const { transform, opacity } = useSpring({
        from: {
            transform: "scale(1)",
            opacity: 0,
        },
        to: {
            transform: "scale(1)",
            opacity: 1,
        },
        config: {
            duration: duration || 1000,
            easing: easings.easeInCubic,
        },
        delay: 10,
    });

    const Animated = animated.div;

    return (
        <Animated
            style={{
                opacity,
                transform: transform.to((x) => `scale(${x})`),
            }}
        >
            {children}
        </Animated>
    );
};

export default FadeIn;
