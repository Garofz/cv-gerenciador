import React, { useEffect, useState } from "react";
import {
    IUserCliente,
    IUserList,
} from "../../../../interfaces/IUserClienteResponse";
import { IProduto } from "../../../../interfaces/IProduto";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../../redux/features/generalData/generalDataSelectors";
import { useAsyncDispatch } from "../../../../redux/store";
import {
    getClients,
    getProducts,
    getUserDetail,
} from "../../../../redux/features/clientsData/clientsDataThunk";
import { ICliente } from "../../../../interfaces/ICliente";
import { IDetalheUsuario } from "../../../../interfaces/IUserDetail";

export interface IReturnProps {
    produtos: IProduto[] | undefined;
    clientes: ICliente[] | undefined;
    detalheUsuario: IDetalheUsuario | undefined;
    consultaDetalhesUsuario: () => Promise<void>;
}
export interface IProps {
    usuario: IUserList;
}
function useDetalheUsuario({ usuario }: IProps): IReturnProps {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const [produtos, setProdutos] = useState<IProduto[]>();
    const [clientes, setClientes] = useState<ICliente[]>();
    const [detalheUsuario, setDetalheUsuario] = useState<IDetalheUsuario>();

    useEffect(() => {
        consultaProdutos();
        consultaClientes();
        consultaDetalhesUsuario();
    }, []);

    const consultaProdutos = async () => {
        if (!user) return;
        ///REQUEST
        const response = await dispatch(
            getProducts({
                token: user.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (response.produtos !== undefined)
            return setProdutos(response.produtos);
    };
    const consultaClientes = async () => {
        if (!user) return;
        ///REQUEST
        const response = await dispatch(
            getClients({
                token: user.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (response.clientes !== undefined)
            return setClientes(response.clientes);
    };
    const consultaDetalhesUsuario = async () => {
        if (!user) return;
        ///REQUEST
        const response = await dispatch(
            getUserDetail({
                idUsuario: usuario.idUsuario,
                token: user.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (response.detalhes !== undefined)
            return setDetalheUsuario(response.detalhes);
    };

    return { produtos, clientes, detalheUsuario, consultaDetalhesUsuario };
}

export default useDetalheUsuario;
