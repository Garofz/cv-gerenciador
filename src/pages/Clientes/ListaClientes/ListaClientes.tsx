import React, { useState } from "react";
import {
    Container,
    Divider,
    Input,
    InputWrapper,
    Label,
    Option,
    Select,
    SelectWrapper,
    Subtitle2,
    TextBody,
    TextBold,
    TitleH2,
    TitleH3,
} from "../../../globalStyles";
import useListaClientes from "./hooks/useListaClientes";
import {
    ClienteBody,
    ClienteFooter,
    ClienteIconWrapper,
    ClienteTitle,
    ClienteWrapper,
    IconContainer,
    SubHeaderHandler,
} from "./styles";
import { BsChevronBarRight } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { FaCheck, FaPen, FaPlus, FaTimes } from "react-icons/fa";
import { ButtonOutlinePrimary } from "../../../globalStyles";
import useModal from "../../../components/Modal/hooks/useModal";
import Modal from "../../../components/Modal/Modal";
import CadastraEditaClientes from "../CadastraEditaClientes/CadastraEditaClientes";
import { ICliente } from "../../../interfaces/ICliente";
import FadeIn from "../../../components/Animations/FadeIn/FadeIn";
import FadeInLeft from "../../../components/Animations/FadeInLeft/FadeInLeft";
import useClienteLayout from "../../../layouts/ClienteLayout/hooks/useClienteLayout";
import { useSelector } from "react-redux";
import { selectClientsDataStatus } from "../../../redux/features/clientsData/clientsDataSelectors";
import Spinner from "../../../components/Spinner/Spinner";
import { Navigate } from "react-router-dom";

export interface Props {
    selectCliente: (cliente?: ICliente) => void;
    selectedCliente: ICliente | undefined;
    nextLayout: (layout: "list" | "detail") => void;
}

function ListaClientes({ selectCliente, nextLayout, selectedCliente }: Props) {
    const { clientes, filtrarClientes, cadastrarCliente, editarCliente } =
        useListaClientes();
    const clientesStatus = useSelector(selectClientsDataStatus);
    const { openModal, closeModal, modalOpen } = useModal();
    return (
        <div>
            {modalOpen && (
                <FadeIn duration={200}>
                    <Modal
                        closeModal={() => {
                            closeModal();
                        }}
                        title={
                            !selectedCliente
                                ? "Cadastro de Cliente"
                                : "Editar Cliente"
                        }
                    >
                        <CadastraEditaClientes
                            salvar={
                                !selectedCliente
                                    ? cadastrarCliente
                                    : editarCliente
                            }
                            voltar={() => {
                                selectCliente(undefined);
                                closeModal();
                            }}
                            cliente={selectedCliente}
                        />
                    </Modal>
                </FadeIn>
            )}
            <div>
                <TitleH2>Clientes</TitleH2>
                <Divider size={24} />
                {clientesStatus === "idle" ||
                    (clientesStatus === "pending" && (
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Divider size={32} />
                            <Spinner fullsize={false} />
                        </div>
                    ))}
                {clientesStatus === "error" && <Navigate to={"/home"} />}
                {clientesStatus === "success" && (
                    <div>
                        <SubHeaderHandler>
                            <InputWrapper>
                                <Label>Filtrar</Label>
                                <div className="filterInput">
                                    <Input
                                        type="text"
                                        onChange={(e) =>
                                            filtrarClientes(e.target.value)
                                        }
                                        placeholder="Digite o Nome"
                                    />
                                    <FiSearch />
                                </div>
                            </InputWrapper>
                            <div>
                                <ButtonOutlinePrimary
                                    onClick={() => openModal()}
                                >
                                    Adicionar Cliente
                                </ButtonOutlinePrimary>
                            </div>
                        </SubHeaderHandler>
                        <Divider size={24} />
                        {clientes.map((cliente, index) => {
                            return (
                                <div key={index}>
                                    <FadeIn duration={200}>
                                        <ClienteWrapper>
                                            <div
                                                style={{ width: "95%" }}
                                                onClick={() => {
                                                    selectCliente(cliente);
                                                    nextLayout("detail");
                                                }}
                                            >
                                                <ClienteTitle>
                                                    <TitleH3>
                                                        {cliente.nome}
                                                    </TitleH3>
                                                    <Subtitle2>
                                                        <b>#</b> {cliente.id}
                                                    </Subtitle2>
                                                </ClienteTitle>
                                                <ClienteBody>
                                                    <div
                                                        style={{
                                                            padding: 8,
                                                            width: "250px",
                                                        }}
                                                    >
                                                        <TextBold>
                                                            Inscrição:{" "}
                                                        </TextBold>
                                                        {cliente.inscricao}
                                                    </div>
                                                    <div
                                                        style={{
                                                            padding: 8,
                                                            display: "flex",
                                                            flexDirection:
                                                                "row",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <TextBold>
                                                            Ativo:{" "}
                                                        </TextBold>
                                                        <div
                                                            style={{
                                                                marginLeft: 4,
                                                            }}
                                                        >
                                                            {cliente.ativo ? (
                                                                <FaCheck
                                                                    size={18}
                                                                    color="#27ca21"
                                                                />
                                                            ) : (
                                                                <FaTimes
                                                                    size={18}
                                                                    color="#f21515"
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div style={{ padding: 8 }}>
                                                        <TextBold>
                                                            Pessoa:{" "}
                                                        </TextBold>
                                                        {cliente.tipoPessoa}
                                                    </div>
                                                </ClienteBody>
                                            </div>
                                            <IconContainer
                                                style={{ width: "5%" }}
                                                onClick={() => {
                                                    selectCliente(cliente);
                                                    openModal();
                                                }}
                                            >
                                                <ClienteIconWrapper>
                                                    <FaPen
                                                        size={20}
                                                        color="#27374D"
                                                    />
                                                </ClienteIconWrapper>
                                            </IconContainer>
                                        </ClienteWrapper>
                                        <Divider size={4} />
                                    </FadeIn>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListaClientes;
