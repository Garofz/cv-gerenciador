import React from "react";
import { ICliente } from "../../../../../interfaces/ICliente";
import { formatarData } from "../../../../../util/format";

export interface IProps {
    clickSalvar: (
        cliente: ICliente,
        tipoAcesso: number,
        dataExpiracao?: Date | null
    ) => boolean;
}

function useModalCadastraClienteUsuario(): IProps {
    const clickSalvar = (
        cliente: ICliente,
        tipoAcesso: number,
        dataExpiracao?: Date | null
    ): boolean => {
        console.log("cliente", cliente);
        console.log("tipoAcesso", tipoAcesso);
        console.log(
            "dataExpiracao",
            dataExpiracao && formatarData(dataExpiracao, true)
        );

        return false;
    };

    return {
        clickSalvar,
    };
}

export default useModalCadastraClienteUsuario;
