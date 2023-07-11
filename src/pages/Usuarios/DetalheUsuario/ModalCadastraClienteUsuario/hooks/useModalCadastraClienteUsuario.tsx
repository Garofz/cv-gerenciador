import React from "react";
import { ICliente } from "../../../../../interfaces/ICliente";
import { formatarData } from "../../../../../util/format";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../../../redux/features/generalData/generalDataSelectors";
import { useAsyncDispatch } from "../../../../../redux/store";
import { cadastrarClienteUsuario } from "../../../../../redux/features/clientsData/clientsDataThunk";

export interface IProps {
    clickSalvar: (
        idUsuario: number,
        cliente: ICliente,
        acessoPrincipal: boolean,
        tipoAcesso: number,
        dataExpiracao?: Date | null
    ) => Promise<boolean>;
}

function useModalCadastraClienteUsuario(): IProps {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const clickSalvar = async (
        idUsuario: number,
        cliente: ICliente,
        acessoPrincipal: boolean,
        tipoAcesso: number,
        dataExpiracao?: Date | null
    ): Promise<boolean> => {
        if (!user) return false;
        ///REQUEST
        const response = await dispatch(
            cadastrarClienteUsuario({
                idCliente: cliente.idCliente,
                acessoPrincipal: acessoPrincipal,
                dataInativacaoAcesso: dataExpiracao
                    ? formatarData(dataExpiracao, true)
                    : null,
                idTipoAcesso: tipoAcesso,
                idUsuario: idUsuario,
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

export default useModalCadastraClienteUsuario;
