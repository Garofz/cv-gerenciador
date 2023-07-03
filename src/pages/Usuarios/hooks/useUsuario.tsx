import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUserCliente } from "../../../interfaces/IUserClienteResponse";
import { useAsyncDispatch } from "../../../redux/store";
import { selectUsuario } from "../../../redux/features/generalData/generalDataSelectors";
import { consultaUsuarios } from "../../../redux/features/clientsData/clientsDataThunk";

interface IReturnEditAdd {
    validOperation: boolean;
    message: string;
}

export interface IUseUsuarios {
    usuarios: IUserCliente[];
    filtrarUsuarios: (nome: string) => void;
    cadastrarUsuario: (usuario: IUserCliente) => Promise<IReturnEditAdd>;
    editarUsuario: (usuario: IUserCliente) => Promise<IReturnEditAdd>;
    message: string;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
    showMessage: boolean;
}

const useUsuarios = (): IUseUsuarios => {
    const dispatch = useAsyncDispatch();
    const [message, setMessage] = useState<string>("");
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [usuarios, setUsuarios] = useState<IUserCliente[]>([]);
    const user = useSelector(selectUsuario);
    //const clientesData = useSelector(selectClientsData);

    useEffect(() => {
        obterUsuarios();
    }, []);

    const obterUsuarios = async () => {
        if (!user) return;

        ///REQUEST
        const response = await dispatch(consultaUsuarios())
            .unwrap()
            .then((res) => res);

        if (response?.usuarios !== undefined)
            return setUsuarios(response.usuarios);

        setMessage(
            response?.controle?.message || "Erro ao consultar os usuários"
        );
        setShowMessage(true);
    };

    const filtrarUsuarios = (param: string) => {
        if (!usuarios) return;

        if (!param || param.trim() === "") {
            obterUsuarios();
        } else {
            const filtrados = usuarios.filter((usuario) =>
                usuario.nome.toUpperCase().includes(param.toUpperCase())
            );
            setUsuarios(filtrados);
        }
    };

    const cadastrarUsuario = async (
        usuario: IUserCliente
    ): Promise<IReturnEditAdd> => {
        if (!user)
            return {
                message: "Usuário inválido",
                validOperation: false,
            };

        // usuario.usuarioInclusao = user._Id;

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

        // const result = await dispatch(addClient({ cliente: cliente }))
        //     .unwrap()
        //     .then((res) => res);
        // if (result.error !== undefined || result.data?.statusCode === 500) {
        //     return {
        //         message:
        //             result.controle.message || "erro ao cadastrar o cliente",
        //         validOperation: false,
        //     };
        // }

        // obterClientes();
        return {
            message: "",
            validOperation: true,
        };
    };

    const editarUsuario = async (
        usuario: IUserCliente
    ): Promise<IReturnEditAdd> => {
        if (!user)
            return {
                message: "Usuário inválido",
                validOperation: false,
            };

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
        setShowMessage,
        showMessage,
    };
};

export default useUsuarios;
