import React, { useEffect, useState } from "react";
import { ICliente } from "../../../../interfaces/ICliente";
import { IUserCliente } from "../../../../interfaces/IUserClienteResponse";
import { useSelector } from "react-redux";
import { selectUsuario } from "../../../../redux/features/generalData/generalDataSelectors";
import { useAsyncDispatch } from "../../../../redux/store";
import { consultaUsuariosCliente } from "../../../../redux/features/clientsData/clientsDataThunk";
export interface IuseDetalheCliente {
    usuarios: IUserCliente[] | undefined;
    filtrarUsuarios: (nome: string) => void;
    toastMessage: string;
    showToast: boolean;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const useDetalheCliente = (idCliente: number): IuseDetalheCliente => {
    const user = useSelector(selectUsuario);
    const dispatch = useAsyncDispatch();
    const [usuarios, setUsuarios] = useState<IUserCliente[]>([]);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [usuariosFiltrados, setUsuariosFiltrados] = useState<IUserCliente[]>(
        []
    );

    useEffect(() => {
        UsuariosPorCliente();
    }, []);

    const UsuariosPorCliente = async () => {
        if (!user) return;

        const response = await dispatch(
            consultaUsuariosCliente({ idCliente: idCliente })
        )
            .unwrap()
            .then((res) => res);

        console.log(response);

        if (response.usuarios !== undefined) {
            setUsuariosFiltrados(response.usuarios);
            setUsuarios(response.usuarios);
            return;
        }
        setToastMessage(
            response.controle?.message || "Erro ao consultar os usuários"
        );
        setShowToast(true);
    };

    const filtrarUsuarios = async (param: string) => {
        if (!param || param.trim() === "") {
            setUsuarios(usuariosFiltrados);
        } else {
            const filtrados = usuariosFiltrados.filter((usuario) =>
                usuario.nome.toUpperCase().includes(param.toUpperCase())
            );
            setUsuarios(usuariosFiltrados);
        }
    };

    return {
        usuarios,
        filtrarUsuarios,
        toastMessage,
        showToast,
        setShowToast,
    };
};

export default useDetalheCliente;
