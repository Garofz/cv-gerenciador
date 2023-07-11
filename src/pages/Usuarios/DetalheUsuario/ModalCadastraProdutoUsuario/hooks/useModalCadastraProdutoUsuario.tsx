import React from "react";
import { IDetalheUsuario } from "../../../../../interfaces/IUserDetail";
import { IProduto } from "../../../../../interfaces/IProduto";

export interface IProps {
    clickSalvar: (produto: IProduto) => boolean;
}

function useModalCadastraProdutoUsuario(detalhe: IDetalheUsuario): IProps {
    const clickSalvar = (produto: IProduto): boolean => {
        console.log(produto);

        return false;
    };

    return {
        clickSalvar,
    };
}

export default useModalCadastraProdutoUsuario;
