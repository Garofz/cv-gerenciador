import React from "react";
import { Outlet } from "react-router-dom";
import ListaClientes from "../../pages/Clientes/ListaClientes/ListaClientes";
import { ICliente } from "../../interfaces/ICliente";
import { Button } from "../../components/Menu/styles";
import {
    BreadCrumbs,
    ButtonOutlineSecondary,
    Divider,
    TextNormal,
} from "../../globalStyles";
import DetalheCliente from "../../pages/Clientes/DetalheCliente/DetalheCliente";
import { FaChevronLeft } from "react-icons/fa";
import useUsuarioLayout from "./hooks/useUsuarioLayout";
import Usuarios from "../../pages/Usuarios/Usuarios";
import DetalheUsuario from "../../pages/Usuarios/DetalheUsuario/DetalheUsuario";

function UsuarioLayout() {
    const { selectedUsuario, changeUsuario, layout, changelayout } =
        useUsuarioLayout();

    return (
        <div>
            {layout === "list" && (
                <Usuarios
                    selectedUsuario={selectedUsuario}
                    selectUsuario={changeUsuario}
                    nextLayout={changelayout}
                />
            )}
            {layout === "detail" && selectedUsuario && (
                <div>
                    <div
                        style={{
                            color: "#27374D",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => changelayout("list")}
                    >
                        <BreadCrumbs>
                            <FaChevronLeft /> Usuários
                        </BreadCrumbs>
                    </div>
                    <Divider size={24} />

                    <DetalheUsuario usuario={selectedUsuario} />
                </div>
            )}
        </div>
    );
}

export default UsuarioLayout;
