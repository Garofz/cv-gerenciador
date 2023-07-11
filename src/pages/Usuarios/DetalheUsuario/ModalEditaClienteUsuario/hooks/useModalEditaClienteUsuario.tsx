import React from "react";
import {
    IDetalheUsuario,
    Produto,
} from "../../../../../interfaces/IUserDetail";
import { IProduto } from "../../../../../interfaces/IProduto";
import { useSelector } from "react-redux";
import { useAsyncDispatch } from "../../../../../redux/store";
import { selectUsuario } from "../../../../../redux/features/generalData/generalDataSelectors";
import {
    cadastrarAcessoUsuario,
    editarClienteUsuario,
} from "../../../../../redux/features/clientsData/clientsDataThunk";
import { randomUUID } from "crypto";
import { generateGuid } from "../../../../../util/generator";
import { ICliente } from "../../../../../interfaces/ICliente";
import { IUserCliente } from "../../../../../interfaces/IUserClienteResponse";
import { formatarData } from "../../../../../util/format";

export interface IProps {
    clickSalvar: (cliente: ICliente, acesso: IUserCliente) => Promise<boolean>;
}

function useModalEditaClienteUsuario(
    cliente: ICliente,
    acesso: IUserCliente
): IProps {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const clickSalvar = async (
        cliente: ICliente,
        acesso: IUserCliente
    ): Promise<boolean> => {
        if (!user) return false;
        //REQUEST

        const response = await dispatch(
            editarClienteUsuario({
                idUsuario: acesso.id,
                idCliente: cliente.idCliente,
                acessoPrincipal: acesso.acessoPrincipal,
                dataInativacaoAcesso: formatarData(
                    acesso.dataInativacao,
                    true,
                    "input"
                ),
                idTipoAcesso: acesso.tipoAcesso.id,
                token: user.accessToken.token,
            })
        )
            .unwrap()
            .then((res) => res);

        if (response?.usuario === undefined) return false;

        return true;
    };

    return {
        clickSalvar,
    };
}

export default useModalEditaClienteUsuario;
