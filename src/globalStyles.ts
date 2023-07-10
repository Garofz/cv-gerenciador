import { FaPlus, FaTrash } from "react-icons/fa";
import styled, { css, keyframes } from "styled-components";

export const TitleH1 = styled.h1`
    color: ${({ theme }) => theme.colors.neutral10};
`;
export const TitleH2 = styled.h2`
    color: ${({ theme }) => theme.colors.neutral9};
`;
export const TitleH3 = styled.h3`
    margin: 5px 0px !important;
    color: ${({ theme }) => theme.colors.neutral8};
`;
export const TitleH4 = styled.h4`
    color: ${({ theme }) => theme.colors.neutral8};
`;
export const TitleH5 = styled.h5`
    color: ${({ theme }) => theme.colors.neutral7};
`;
export const TextBold = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral10};
`;
export const TextBody = styled.div`
    width: 200px;
    color: ${({ theme }) => theme.colors.neutral10};
`;
export const Subtitle1 = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.neutral6};
`;
export const Subtitle2 = styled.span`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.neutral6};
`;

export const TextNormal = styled.span`
    color: ${({ theme }) => theme.colors.neutral8};
`;
export const ButtonPrimary = styled.button`
    border: none;
    border-radius: 50px;
    width: 100%;
    height: 50px;
    background: #27374d;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #526d82;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlinePrimary = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border: 2px solid #27374d;
    background: #fff;
    color: #27374d;
    padding: 16px 32px;
    width: 100%;
    cursor: pointer;
    &:hover {
        background: #27374d;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonSecondary = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    background: #526d82;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #27374d;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlineSecondary = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border: 2px solid #526d82;
    background: #fff;
    color: #526d82;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #526d82;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonAlert = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    background: #ff7c11;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #ff9b4f;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlineAlert = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border: 2px solid #ff7c11;
    background: #fff;
    color: #ff7c11;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #ff7c11;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;

export const ButtonDanger = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    background: #f21515;
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #f21515;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;
export const ButtonOutlineDanger = styled.button`
    border: none;
    border-radius: 50px;
    height: 50px;
    border: 2px solid #f21515;
    background: #fff;
    color: #f21515;
    padding: 16px 32px;
    cursor: pointer;
    &:hover {
        background: #f21515;
        color: #fff;
        transition: 0.2s ease-out;
    }
`;

export interface SizeParams {
    size: 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
}

export const Divider = styled.div<SizeParams>`
    @media (min-width: 768px) and (max-width: 1023px) {
        margin: ${(props) => props.size / 2 || 0}px;
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        margin: ${(props) => props.size / 3 || 0}px;
    }
    margin: ${(props) => props.size || 0}px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.ccc};
    color: ${({ theme }) => theme.colors.neutral8};
    transition: border-bottom-color 0.5s;
    font-size: 18px;
    background: transparent;
    &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.secondary};
        outline: none;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        font-size: 80%;
    }
`;

export const Label = styled.label`
    flex-direction: column-reverse;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.neutral9};
    font-weight: 500;
    font-size: 14px;
    transition: transform 0.3s, font-size 0.3s;
    transform-origin: top left;
    ${Input}:focus ~ &,
    ${Input}:valid ~ & {
        transform: translateY(-100%) scale(0.8);
        font-size: 6px;
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Select = styled.select`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral3};
    font-size: 18px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.neutral7};
    &:hover {
        ${(props) =>
            !props.disabled &&
            css`
                border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
            `}
    }
`;

export const Option = styled.option`
    font-size: 18px;
    padding: 8px 12px;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.neutral7};
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;
export const Col = styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
`;

export interface ITableProps {
    width: 50 | 70 | 100;
}
export const Table = styled.table<ITableProps>`
    width: ${({ width }) => `${width}%`};
`;

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
export const TableFoot = styled.tfoot``;

export interface IColumnProps {
    textAlign?: "left" | "right" | "center";
    width?: number;
}

export const TableRow = styled.tr<IColumnProps>`
    text-align: ${({ textAlign }) => textAlign || "left"};
    width: ${({ width }) => `${width}px` || "100%"};
    color: ${({ theme }) => theme.colors.neutral7};
    transition: 0.2s ease;
    &:hover {
        color: ${({ theme }) => theme.colors.neutral9};
    }
`;
export const TableColumn = styled.td<IColumnProps>`
    padding: 8px;
    text-align: ${({ textAlign }) => textAlign || "left"};
    width: ${({ width }) => `${width}px` || "100%"};
`;
export const TableColumnHeader = styled.th<IColumnProps>`
    padding: 8px;
    color: ${({ theme }) => theme.colors.neutral8};
    text-align: ${({ textAlign }) => textAlign || "left"};
    width: ${({ width }) => `${width}px` || "100%"};
`;
export const IconDelete = styled(FaTrash)`
    color: ${({ theme }) => theme.colors.neutral8};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.colors.redWhiteContrast};
    }
`;

export const IconPlus = styled(FaPlus)`
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const BreadCrumbs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;
    transition: 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
