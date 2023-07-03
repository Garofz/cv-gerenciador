import React, { useState } from "react";
import { IUserCliente } from "../../interfaces/IUserClienteResponse";
import {
    ButtonDanger,
    ButtonOutlinePrimary,
    Divider,
    Input,
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
import { selectUsersDataStatus } from "../../redux/features/clientsData/clientsDataSelectors";
import Spinner from "../../components/Spinner/Spinner";
import { Navigate } from "react-router-dom";
import useUsuarios from "./hooks/useUsuario";
import Toast from "../../components/Toast/Toast";
import ListUsuarios from "../Clientes/DetalheCliente/ListUsuarios/ListUsuarios";
export interface Props {
    selectUsuario: React.Dispatch<React.SetStateAction<IUserCliente>>;
    selectedUsuario: IUserCliente | undefined;
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
    id: 0,
    nome: "",
    email: "",
    tipoAcesso: {
        id: 0,
        descricao: "",
    },
    acessoPrincipal: false,
    dataCadastro: new Date(),
    pimeiroAcesso: false,
};
function Usuarios({ selectUsuario, selectedUsuario, nextLayout }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
    const userDataStatus = useSelector(selectUsersDataStatus);
    const {
        cadastrarUsuario,
        editarUsuario,
        filtrarUsuarios,
        message,
        setShowMessage,
        showMessage,
        usuarios,
    } = useUsuarios();
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
                        closeModal={() => setShowModal(false)}
                        title="Cadastrar Representante"
                    >
                        <CadastraEditaRepresentantes
                            type="Cadastra"
                            onClickVoltar={() => {
                                setShowModal(false);
                                selectUsuario(initialStateUsuario);
                            }}
                        />
                    </Modal>
                </FadeIn>
            )}
            {showModalEdit && selectedUsuario && (
                <FadeIn duration={200}>
                    <Modal
                        closeModal={() => {
                            setShowModalEdit(false);
                            selectUsuario(initialStateUsuario);
                        }}
                        title="Editar Representante"
                    >
                        <CadastraEditaRepresentantes
                            selectedUser={selectedUsuario}
                            type="Edita"
                            onClickVoltar={() => {
                                setShowModalEdit(false);
                                selectUsuario(initialStateUsuario);
                            }}
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
                        <InputWrapper>
                            <Label>Filtrar</Label>
                            <div className="filterInput">
                                <Input
                                    type="text"
                                    onChange={
                                        (e) => console.log(e)

                                        //filtrarClientes(e.target.value)
                                    }
                                    placeholder="Digite o Nome"
                                />
                                <FiSearch />
                            </div>
                        </InputWrapper>
                        <div>
                            <ButtonOutlinePrimary
                                onClick={() => setShowModal(true)}
                            >
                                Cadastrar Representante
                            </ButtonOutlinePrimary>
                        </div>
                    </SubHeaderHandler>
                    <Divider size={24} />
                    {usuarios && (
                        <ListUsuarios
                            layoutResumido={true}
                            usuarios={usuarios}
                            filtrarUsuario={filtrarUsuarios}
                            onClickSelectUser={selectUsuario}
                            nextPage={() => nextLayout("detail")}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Usuarios;
