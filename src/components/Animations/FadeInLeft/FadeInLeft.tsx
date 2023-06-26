import React from "react";
import { IAnimationProps } from "../IAnimationProps";
import { useSpring, animated, easings } from "react-spring";

const FadeInLeft: React.FC<IAnimationProps> = ({ children, duration }) => {
    const { opacity, transform } = useSpring({
        from: { opacity: 0, transform: "translateX(100%)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { duration: duration || 1000, easing: easings.easeInOutCubic },
        delay: 0,
    });
    return (
        <animated.div
            style={{
                opacity,
                transform,
            }}
        >
            {children}
        </animated.div>
    );
};

export default FadeInLeft;
