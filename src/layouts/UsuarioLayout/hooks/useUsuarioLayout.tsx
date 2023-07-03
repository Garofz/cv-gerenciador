import React, { useEffect, useState } from "react";
import { ICliente } from "../../../interfaces/ICliente";
import { IUserCliente } from "../../../interfaces/IUserClienteResponse";

export interface IUseUsuarioLayout {
    selectedUsuario: IUserCliente | undefined;
    layout: "list" | "detail";
    changeUsuario: React.Dispatch<React.SetStateAction<IUserCliente>>;
    changelayout: (to: "list" | "detail") => void;
}
const initialStateUsuario = {
    id: 0,
    nome: "",
    email: "",
    tipoAcesso: {
        id: 0,
        descricao: "",
    },
    acessoPrincipal: false,
    dataCadastro: new Date(),
    pimeiroAcesso: false,
};
const useUsuarioLayout = (): IUseUsuarioLayout => {
    const [selectedUsuario, changeUsuario] =
        useState<IUserCliente>(initialStateUsuario);
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
