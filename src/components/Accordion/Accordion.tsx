import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const AccordionContainer = styled.div`
    width: 100%;
`;

const AccordionItem = styled.div`
    border-radius: 4px;
    margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: none;
    border-bottom: 2px solid #526d82;
    padding: 8px;
    cursor: pointer;
`;

const AccordionTitle = styled.h3`
    margin: 0;
    font-weight: 500;
`;

const IconWrapper = styled.div`
    margin-left: auto;
    transition: transform 0.3s ease-in-out;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
    max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    overflow: hidden;
    transition: all 0.2s ease-in-out;
`;

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AccordionContainer>
            <AccordionItem>
                <AccordionHeader onClick={toggleAccordion}>
                    <AccordionTitle>{title}</AccordionTitle>
                    <IconWrapper>
                        {isOpen ? (
                            <FiChevronDown size={20} color="#27374D" />
                        ) : (
                            <FiChevronRight size={20} color="#27374D" />
                        )}
                    </IconWrapper>
                </AccordionHeader>
                <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
            </AccordionItem>
        </AccordionContainer>
    );
};

export default Accordion;
