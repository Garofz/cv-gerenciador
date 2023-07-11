import React, { useEffect, useState } from "react";
import { ICliente, IClienteRequest } from "../../../../interfaces/ICliente";
import { useAsyncDispatch } from "../../../../redux/store";
import {
    addClient,
    editarClient,
    getClients,
} from "../../../../redux/features/clientsData/clientsDataThunk";
import { useSelector } from "react-redux";
import { selectClientsData } from "../../../../redux/features/clientsData/clientsDataSelectors";
import {
    adicionaCliente,
    editClient,
} from "../../../../redux/features/clientsData/clientsDataSlice";
import { selectUsuario } from "../../../../redux/features/generalData/generalDataSelectors";
interface IReturnEditAdd {
    validOperation: boolean;
    message: string;
}

export interface IUseListaClientes {
    clientes: ICliente[];
    filtrarClientes: (nome: string) => void;
    cadastrarCliente: (cliente: IClienteRequest) => Promise<IReturnEditAdd>;
    editarCliente: (cliente: IClienteRequest) => Promise<IReturnEditAdd>;
    message: string;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
    showMessage: boolean;
}

const useListaClientes = (): IUseListaClientes => {
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [clientesFiltrados, setClientesFiltrados] =
        useState<ICliente[]>(clientes);
    const [message, setMessage] = useState<string>("");
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const dispatch = useAsyncDispatch();
    const user = useSelector(selectUsuario);

    useEffect(() => {
        obterClientes();
    }, []);

    const obterClientes = async () => {
        if (!user) return;

        const response = await dispatch(
            getClients({ token: user.accessToken.token })
        )
            .unwrap()
            .then((res) => res);

        if (response?.clientes !== undefined) {
            setClientes(response.clientes);
            setClientesFiltrados(response.clientes);
            return;
        }

        setMessage(
            response?.controle?.message || "Erro ao consultar os clientes"
        );
        setShowMessage(true);
    };

    const filtrarClientes = (param: string) => {
        if (!clientes) return;

        if (!param || param.trim() === "") {
            setClientesFiltrados(clientes);
        } else {
            const filtrados = clientes.filter((cliente) =>
                cliente.nome.toUpperCase().includes(param.toUpperCase())
            );
            setClientesFiltrados(filtrados);
        }
    };

    const cadastrarCliente = async (
        cliente: IClienteRequest
    ): Promise<IReturnEditAdd> => {
        if (!user)
            return {
                message: "Usuário inválido",
                validOperation: false,
            };

        cliente.usuarioInclusao = user._Id;

        if (cliente.nome.trim() === "")
            return {
                message: "Nome Obrigatório",
                validOperation: false,
            };
        if (cliente.inscricao.trim() === "")
            return {
                message: "Inscrição Obrigatória",
                validOperation: false,
            };
        if (
            (cliente.idtipoPessoa === 1 &&
                cliente.inscricao.trim().length !== 11) ||
            (cliente.idtipoPessoa === 2 &&
                cliente.inscricao.trim().length !== 14)
        )
            return {
                message: "Inscrição Inválida para o tipo de Pessoa",
                validOperation: false,
            };

        const result = await dispatch(addClient({ cliente: cliente }))
            .unwrap()
            .then((res) => res);

        console.log(result);

        if (result.error !== undefined || result.data?.statusCode === 500) {
            return {
                message:
                    result.controle.message || "erro ao cadastrar o cliente",
                validOperation: false,
            };
        }

        obterClientes();
        return {
            message: "",
            validOperation: true,
        };
    };

    const editarCliente = async (
        cliente: IClienteRequest
    ): Promise<IReturnEditAdd> => {
        if (!user)
            return {
                message: "Usuário inválido",
                validOperation: false,
            };

        cliente.usuarioAlteracao = user._Id;

        if (cliente.nome.trim() === "")
            return {
                message: "Nome Obrigatório",
                validOperation: false,
            };
        if (cliente.inscricao.trim() === "")
            return {
                message: "Inscrição Obrigatória",
                validOperation: false,
            };
        if (
            (cliente.idtipoPessoa === 1 &&
                cliente.inscricao.trim().length !== 11) ||
            (cliente.idtipoPessoa === 2 &&
                cliente.inscricao.trim().length !== 14)
        )
            return {
                message: "Inscrição Inválida para o tipo de Pessoa",
                validOperation: false,
            };

        const result = await dispatch(editarClient({ cliente: cliente }))
            .unwrap()
            .then((res) => res);

        if (result.error !== undefined || result.data?.statusCode === 500) {
            return {
                message:
                    result.controle.message ||
                    `erro ao editar o cliente - Código:${cliente.idCliente}`,
                validOperation: false,
            };
        }

        obterClientes();
        return {
            message: "",
            validOperation: true,
        };
    };

    return {
        clientes: clientesFiltrados,
        filtrarClientes,
        cadastrarCliente,
        editarCliente,
        message,
        setShowMessage,
        showMessage,
    };
};

export default useListaClientes;
