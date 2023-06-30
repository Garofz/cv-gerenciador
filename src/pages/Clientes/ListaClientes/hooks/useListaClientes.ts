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
export interface IUseListaClientes {
    clientes: ICliente[];
    filtrarClientes: (nome: string) => void;
    cadastrarCliente: (cliente: IClienteRequest) => void;
    editarCliente: (cliente: IClienteRequest) => void;
    message: string;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
    showMessage: boolean;
}

const useListaClientes = (): IUseListaClientes => {
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [message, setMessage] = useState<string>("");
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const dispatch = useAsyncDispatch();
    const clientesData = useSelector(selectClientsData);
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
        console.log(response);

        if (response.clientes !== undefined)
            return setClientes(response.clientes);

        setMessage(
            response?.controle?.message || "Erro ao consultar os clientes"
        );
        setShowMessage(true);
    };

    const filtrarClientes = (param: string) => {
        if (!clientes) return;

        if (!param || param.trim() === "") {
            obterClientes();
        } else {
            const filtrados = clientes.filter((cliente) =>
                cliente.nome.toUpperCase().includes(param.toUpperCase())
            );
            setClientes(filtrados);
        }
    };
    const cadastrarCliente = async (cliente: IClienteRequest) => {
        if (!user) return;

        cliente.usuarioInclusao = user._Id;

        await dispatch(addClient({ cliente: cliente }))
            .unwrap()
            .then(() => obterClientes());
    };

    const editarCliente = async (cliente: IClienteRequest) => {
        if (!user) return;

        cliente.usuarioAlteracao = user._Id;

        await dispatch(editarClient({ cliente: cliente }))
            .unwrap()
            .then(() => obterClientes());
    };

    return {
        clientes,
        filtrarClientes,
        cadastrarCliente,
        editarCliente,
        message,
        setShowMessage,
        showMessage,
    };
};

export default useListaClientes;
