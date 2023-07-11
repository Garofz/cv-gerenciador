import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    IUserCliente,
    IUserList,
} from "../../../interfaces/IUserClienteResponse";
import { useAsyncDispatch } from "../../../redux/store";
import { selectUsuario } from "../../../redux/features/generalData/generalDataSelectors";
import {
    cadastrarUsuarios,
    consultaUsuarios,
} from "../../../redux/features/clientsData/clientsDataThunk";

interface IReturnEditAdd {
    validOperation: boolean;
    message: string;
}

export interface IUseUsuarios {
    usuarios: IUserList[];
    filtrarUsuarios: (nome: string) => void;
    cadastrarUsuario: (usuario: IUserList) => Promise<IReturnEditAdd>;
    editarUsuario: (usuario: IUserList) => Promise<IReturnEditAdd>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
    showMessage: boolean;
    obterUsuarios: () => void;
}

const useUsuarios = (): IUseUsuarios => {
    const dispatch = useAsyncDispatch();
    const [message, setMessage] = useState<string>("");
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [usuarios, setUsuarios] = useState<IUserList[]>([]);
    const [usuariosFitrados, setUsuariosFiltrados] = useState<IUserList[]>([]);
    const user = useSelector(selectUsuario);

    useEffect(() => {
        obterUsuarios();
    }, []);

    const obterUsuarios = async () => {
        if (!user) return;

        ///REQUEST
        const response = await dispatch(consultaUsuarios())
            .unwrap()
            .then((res) => res);

        if (response?.usuarios !== undefined) {
            setUsuarios(response.usuarios);
            setUsuariosFiltrados(response.usuarios);
            return;
        }

        setMessage(
            response?.controle?.message || "Erro ao consultar os usuários"
        );
        setShowMessage(true);
    };

    const filtrarUsuarios = (param: string) => {
        if (!usuarios) return;
        if (!usuariosFitrados) return;

        if (!param || param.trim() === "") {
            setUsuarios(usuariosFitrados);
        } else {
            const filtrados = usuarios.filter((usuario) =>
                usuario.nomeUsuario.toUpperCase().includes(param.toUpperCase())
            );
            setUsuarios(filtrados);
        }
    };

    const cadastrarUsuario = async (
        usuario: IUserList
    ): Promise<IReturnEditAdd> => {
        if (!user)
            return {
                message: "Usuário inválido",
                validOperation: false,
            };

        if (usuario.nomeUsuario.trim() === "")
            return {
                message: "Nome Obrigatório",
                validOperation: false,
            };
        if (usuario.emailUsuario.trim() === "")
            return {
                message: "Email Obrigatório",
                validOperation: false,
            };

        const result = await dispatch(
            cadastrarUsuarios({
                nomeUsuario: usuario.nomeUsuario,
                email: usuario.emailUsuario,
                token: user.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (result.error !== undefined || result.data?.statusCode === 500) {
            return {
                message:
                    result.controle.message || "erro ao cadastrar o usuário",
                validOperation: false,
            };
        }

        return {
            message: "",
            validOperation: true,
        };
    };

    //TODO: FAZER O EDIT DE USUARIO
    const editarUsuario = async (
        usuario: IUserList
    ): Promise<IReturnEditAdd> => {
        if (!user)
            return {
                message: "Usuário inválido",
                validOperation: false,
            };
        console.log("edit", usuario);

        // cliente.usuarioInclusao = user._Id;

        // if (cliente.nome.trim() === "")
        //     return {
        //         message: "Nome Obrigatório",
        //         validOperation: false,
        //     };
        // if (cliente.inscricao.trim() === "")
        //     return {
        //         message: "Inscrição Obrigatória",
        //         validOperation: false,
        //     };
        // if (
        //     (cliente.idtipoPessoa === 1 &&
        //         cliente.inscricao.trim().length !== 11) ||
        //     (cliente.idtipoPessoa === 2 &&
        //         cliente.inscricao.trim().length !== 14)
        // )
        //     return {
        //         message: "Inscrição Inválida para o tipo de Pessoa",
        //         validOperation: false,
        //     };

        // const result = await dispatch(editarClient({ cliente: cliente }))
        //     .unwrap()
        //     .then((res) => res);
        // if (result.error !== undefined || result.data?.statusCode === 500) {
        //     return {
        //         message:
        //             result.controle.message ||
        //             `erro ao editar o cliente - Código:${cliente.idCliente}`,
        //         validOperation: false,
        //     };
        // }

        // obterClientes();
        return {
            message: "",
            validOperation: true,
        };
    };

    return {
        usuarios,
        filtrarUsuarios,
        cadastrarUsuario,
        editarUsuario,
        message,
        setMessage,
        setShowMessage,
        showMessage,
        obterUsuarios,
    };
};

export default useUsuarios;
