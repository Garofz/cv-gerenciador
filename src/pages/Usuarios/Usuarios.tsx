import React, { useState } from "react";
import { IUserCliente, IUserList } from "../../interfaces/IUserClienteResponse";
import {
    ButtonDanger,
    ButtonOutlinePrimary,
    Divider,
    InputWrapper,
    Label,
    TitleH2,
} from "../../globalStyles";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import FadeIn from "../../components/Animations/FadeIn/FadeIn";
import Modal from "../../components/Modal/Modal";
import CadastraEditaRepresentantes from "../Clientes/CadastraEditaRepresentantes/CadastraEditaRepresentantes";
import { useSelector } from "react-redux";
import { selectUserDataStatus } from "../../redux/features/clientsData/clientsDataSelectors";
import Spinner from "../../components/Spinner/Spinner";
import { Navigate } from "react-router-dom";
import useUsuarios from "./hooks/useUsuario";
import Toast from "../../components/Toast/Toast";
import ListUsuarios from "../Clientes/DetalheCliente/ListUsuarios/ListUsuarios";
import ListAllUsuarios from "../Clientes/DetalheCliente/ListUsuarios/ListAllUsuarios";
import { Button, Input, SearchIcon } from "ui-gds";
export interface Props {
    selectUsuario: React.Dispatch<React.SetStateAction<IUserList>>;
    selectedUsuario: IUserList;
    nextLayout: (layout: "list" | "detail") => void;
}
const SubHeaderHandler = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1023px) {
        /* Estilos para dispositivos tablet */
    }
    @media (max-width: 767px) {
        /* Estilos para dispositivos mobile */
        flex-direction: column-reverse;
        justify-content: space-between;
        height: 150px;
        margin: 0 auto;
        .filterInput {
            padding: 0.8rem;
            width: 100%;
            margin: 0 auto;
            input {
                width: 85%;
                height: 30px;
            }
        }
    }
`;

const initialStateUsuario = {
    idUsuario: 0,
    nomeUsuario: "",
    emailUsuario: "",
};
function Usuarios({ selectUsuario, selectedUsuario, nextLayout }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
    const userDataStatus = useSelector(selectUserDataStatus);
    const {
        cadastrarUsuario,
        editarUsuario,
        filtrarUsuarios,
        message,
        setMessage,
        setShowMessage,
        showMessage,
        usuarios,
        obterUsuarios,
    } = useUsuarios();

    const handleCloseModal = () => {
        setShowModal(false);
        setShowModalEdit(false);
        selectUsuario(initialStateUsuario);
    };
    return (
        <div>
            <Toast
                mensagem={message}
                setShowToast={setShowMessage}
                showToast={showMessage}
                type="error"
                duration={5000}
                fixed={true}
            />
            {showModal && (
                <FadeIn duration={200}>
                    <Modal
                        closeModal={() => handleCloseModal()}
                        title="Cadastrar Representante"
                    >
                        <CadastraEditaRepresentantes
                            type="Cadastra"
                            selectedUser={selectedUsuario}
                            selectUser={selectUsuario}
                            onClickSalvar={async () => {
                                const cadastra = await cadastrarUsuario(
                                    selectedUsuario
                                );
                                if (cadastra.validOperation) {
                                    handleCloseModal();
                                    obterUsuarios();
                                } else {
                                    setMessage(
                                        cadastra.message ||
                                            "Ocorreu um erro ao cadastrar o usuário"
                                    );
                                    setShowMessage(true);
                                }
                            }}
                            onClickVoltar={() => handleCloseModal()}
                        />
                    </Modal>
                </FadeIn>
            )}
            {showModalEdit && selectedUsuario && (
                <FadeIn duration={200}>
                    <Modal
                        closeModal={() => handleCloseModal()}
                        title="Editar Representante"
                    >
                        <CadastraEditaRepresentantes
                            selectedUser={selectedUsuario}
                            selectUser={selectUsuario}
                            type="Edita"
                            onClickSalvar={() => editarUsuario(selectedUsuario)}
                            onClickVoltar={() => handleCloseModal()}
                        />
                    </Modal>
                </FadeIn>
            )}
            <TitleH2>Usuários</TitleH2>
            <Divider size={24} />
            {userDataStatus === "idle" ||
                (userDataStatus === "pending" && (
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
            {userDataStatus === "error" && <Navigate to={"/home"} />}
            {userDataStatus === "success" && (
                <div>
                    <SubHeaderHandler>
                        <SubHeaderHandler>
                            <Input
                                customIcon={<SearchIcon />}
                                name="Filtrar"
                                placeholder="Informe o nome"
                                inputType="default"
                                labelText="Filtrar"
                                labelStyle="bold"
                                onChange={(e) =>
                                    filtrarUsuarios(e.target.value)
                                }
                            />
                        </SubHeaderHandler>
                        <div>
                            <Button
                                text="Cadastrar Representante"
                                buttonType="primary"
                                size="medium"
                                onClick={() => {
                                    selectUsuario(initialStateUsuario);
                                    setShowModal(true);
                                }}
                            />
                        </div>
                    </SubHeaderHandler>
                    <Divider size={24} />
                    {usuarios && (
                        <ListAllUsuarios
                            layoutResumido={true}
                            usuarios={usuarios}
                            filtrarUsuario={filtrarUsuarios}
                            onClickSelectUser={selectUsuario}
                            onClickEditUser={() => setShowModalEdit(true)}
                            nextPage={() => nextLayout("detail")}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Usuarios;
