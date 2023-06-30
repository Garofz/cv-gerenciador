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
}

const useListaClientes = (): IUseListaClientes => {
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const dispatch = useAsyncDispatch();
    const clientesData = useSelector(selectClientsData);
    const user = useSelector(selectUsuario);

    useEffect(() => {
        obterClientes();
    }, []);

    const obterClientes = async () => {
        if (!user) return;

        await dispatch(getClients({ token: user.accessToken.token }))
            .unwrap()
            .then((res) => setClientes(res));
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
    };
};

export default useListaClientes;
