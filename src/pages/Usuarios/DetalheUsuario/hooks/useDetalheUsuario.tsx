import React from "react";
import { IUserList } from "../../../../interfaces/IUserClienteResponse";

export interface IReturnProps {}
export interface IProps {
    usuario: IUserList;
}
function useDetalheUsuario({ usuario }: IProps): IReturnProps {
    return <div>useDetalheUsuario</div>;
}

export default useDetalheUsuario;
