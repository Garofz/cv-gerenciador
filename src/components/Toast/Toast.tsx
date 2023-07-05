/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import FadeInLeft from "../Animations/FadeInLeft/FadeInLeft";

export interface Props {
    mensagem: string;
    type: "success" | "info" | "error" | "warning";
    showToast: boolean;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
    duration?: number;
    fixed?: boolean;
}

export interface ToastContainerProps {
    type: "success" | "info" | "error" | "warning";
    fixed?: boolean;
}

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounceRightAnimation = keyframes`
  from {
    transform: translateX(10px);
  }
  to {
    transform: translateX(0);
  }
`;

const ToastContainer = styled.div<ToastContainerProps>`
    z-index: 9999999;
    position: ${(props) => (props.fixed ? "fixed" : "static")};
    top: 70px;
    right: 20px;
    color: #fff;
    background-color: ${(props) => getColorByType(props.type)};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: ${fadeInAnimation} 0.3s ease-in-out,
        ${bounceRightAnimation} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
`;
const ToastHeaerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const MessageWrapper = styled.div`
    width: 95%;
    padding: 12px 8px;
    text-align: left;
`;
const CloseButtonWrapper = styled.div`
    width: 5%;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 12px 8px;
    justify-content: end;
`;
const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
`;

export interface ProgressBarProps {
    progress: number;
    duration: number;
}

const ProgressBar = styled.div<ProgressBarProps>`
    height: 5px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: #ffffff90;
        transition: width ${(props) => props.duration / 1000}s linear;
        width: ${(props) => props.progress}%;
    }
`;

const getColorByType = (type: Props["type"]) => {
    switch (type) {
        case "success":
            return "#28a746dd";
        case "info":
            return "#526D82";
        case "error":
            return "#dc3545";
        case "warning":
            return "#ffc107";
        default:
            return "#6c757d";
    }
};

function Toast({
    mensagem,
    type,
    duration = 5000,
    showToast,
    setShowToast,
    fixed,
}: Props) {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (showToast && duration) {
            const interval = setInterval(() => {
                setProgress(
                    (prevProgress) =>
                        (100 * Math.floor(prevProgress)) / duration
                );
            }, 0);
            const timer = setTimeout(() => {
                setShowToast(false);
            }, duration);
            return () => {
                setProgress(100);
                clearInterval(interval);
                clearTimeout(timer);
            };
        }
    }, [showToast, duration]);

    const handleClose = () => {
        setShowToast(false);
    };

    if (showToast) {
        return (
            <ToastContainer type={type} fixed={fixed}>
                <ToastHeaerWrapper>
                    <MessageWrapper>{mensagem}</MessageWrapper>
                    <CloseButtonWrapper>
                        <CloseButton onClick={handleClose}>
                            <FaTimes size={20} color="#fff" />
                        </CloseButton>
                    </CloseButtonWrapper>
                </ToastHeaerWrapper>
                <ProgressBar progress={progress} duration={duration} />
            </ToastContainer>
        );
    }

    return null;
}

export default Toast;
