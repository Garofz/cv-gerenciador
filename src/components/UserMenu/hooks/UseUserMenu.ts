import React, { useState } from "react"
import { IUsuario } from "../../../interfaces/IUsuario";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../redux/features/generalData/generalDataSelectors";

export interface IUseUserMenu{
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    usuario?:IUsuario;
}

const useUserMenu = ():IUseUserMenu => {
    const [showModal,setShowModal] = useState<boolean>(false)
    const usuario = useSelector(selectUsuario)
    return {
        showModal,
        setShowModal,
        usuario
    }
}

export default useUserMenu