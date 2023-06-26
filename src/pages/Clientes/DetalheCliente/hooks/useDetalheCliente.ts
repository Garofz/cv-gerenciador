import React, { useEffect, useState } from "react";
import { ICliente } from "../../../../interfaces/ICliente";
import { IUsuario } from "../../../../interfaces/IUsuario";
export interface IuseDetalheCliente {
    usuarios: IUsuario[] | undefined;
    filtrarUsuarios: (nome: string) => void;
}

const useDetalheCliente = (idCliente: number): IuseDetalheCliente => {
    const mock: IUsuario[] = [];
    const UsuariosPorCliente = () => {
        const usuarios: IUsuario[] = [];

        for (const usuario of mock) {
            usuarios.push(usuario);
        }

        return usuarios;
    };

    const [usuarios, setUsuarios] = useState<IUsuario[]>(UsuariosPorCliente());

    const filtrarUsuarios = (param: string) => {
        if (!param || param.trim() === "") {
            setUsuarios(UsuariosPorCliente());
        } else {
            const filtrados = usuarios.filter((usuario) =>
                usuario.name.toUpperCase().includes(param.toUpperCase())
            );
            setUsuarios(filtrados);
        }
    };

    return {
        usuarios,
        filtrarUsuarios,
    };
};

export default useDetalheCliente;
