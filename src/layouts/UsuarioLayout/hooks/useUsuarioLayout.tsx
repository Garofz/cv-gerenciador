import React, { useEffect, useState } from "react";
import { ICliente } from "../../../interfaces/ICliente";
import {
    IUserCliente,
    IUserList,
} from "../../../interfaces/IUserClienteResponse";

export interface IUseUsuarioLayout {
    selectedUsuario: IUserList;
    layout: "list" | "detail";
    changeUsuario: React.Dispatch<React.SetStateAction<IUserList>>;
    changelayout: (to: "list" | "detail") => void;
}
const initialStateUsuario = {
    idUsuario: 0,
    nomeUsuario: "",
    emailUsuario: "",
};
const useUsuarioLayout = (): IUseUsuarioLayout => {
    const [selectedUsuario, changeUsuario] =
        useState<IUserList>(initialStateUsuario);
    const [layout, setLayout] = useState<"list" | "detail">("list");

    const changelayout = (to: "list" | "detail") => {
        setLayout(to);
    };

    return {
        selectedUsuario,
        layout,
        changeUsuario,
        changelayout,
    };
};

export default useUsuarioLayout;
