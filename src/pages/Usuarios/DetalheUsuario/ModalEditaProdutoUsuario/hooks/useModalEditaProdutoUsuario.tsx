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
    editaAcessoUsuario,
} from "../../../../../redux/features/clientsData/clientsDataThunk";
import { randomUUID } from "crypto";
import { generateGuid } from "../../../../../util/generator";

export interface IProps {
    clickSalvar: (produto: Produto) => Promise<boolean>;
}

function useModalEditaProdutoUsuario(produto: Produto): IProps {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const clickSalvar = async (produto: Produto): Promise<boolean> => {
        if (!user) return false;
        ///REQUEST
        const response = await dispatch(
            editaAcessoUsuario({
                userId: produto.idUsuario,
                productId: produto.produto.idProduto,
                active: produto.ativo,
                blocked: produto.bloqueado,
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

export default useModalEditaProdutoUsuario;
