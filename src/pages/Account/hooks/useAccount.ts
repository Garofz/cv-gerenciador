import React from "react"
import { IUsuario } from "../../../interfaces/IUsuario";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../redux/features/generalData/generalDataSelectors";

export interface IuseAccount{
    usuario?: IUsuario
}

function useAccount() {
    const usuario = useSelector(selectUsuario)
    return{
        usuario
    };
}

export default useAccount