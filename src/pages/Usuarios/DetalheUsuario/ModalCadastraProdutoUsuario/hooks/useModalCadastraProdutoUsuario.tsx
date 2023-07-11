import React from "react";
import { IDetalheUsuario } from "../../../../../interfaces/IUserDetail";
import { IProduto } from "../../../../../interfaces/IProduto";
import { useSelector } from "react-redux";
import { useAsyncDispatch } from "../../../../../redux/store";
import { selectUsuario } from "../../../../../redux/features/generalData/generalDataSelectors";
import { cadastrarAcessoUsuario } from "../../../../../redux/features/clientsData/clientsDataThunk";
import { randomUUID } from "crypto";
import { generateGuid } from "../../../../../util/generator";

export interface IProps {
    clickSalvar: (produto: IProduto) => Promise<boolean>;
}

function useModalCadastraProdutoUsuario(detalhe: IDetalheUsuario): IProps {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const clickSalvar = async (produto: IProduto): Promise<boolean> => {
        if (!user) return false;
        ///REQUEST
        const response = await dispatch(
            cadastrarAcessoUsuario({
                userId: detalhe.usuario.idUsuario,
                productId: produto.idProduto,
                password: `@aakl!20sErFf`,
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

export default useModalCadastraProdutoUsuario;
