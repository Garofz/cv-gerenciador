import React from "react";
import { Outlet } from "react-router-dom";
import ListaClientes from "../../pages/Clientes/ListaClientes/ListaClientes";
import { ICliente } from "../../interfaces/ICliente";
import useClienteLayout from "./hooks/useClienteLayout";
import { Button } from "../../components/Menu/styles";
import { ButtonOutlineSecondary, Divider } from "../../globalStyles";
import DetalheCliente from "../../pages/Clientes/DetalheCliente/DetalheCliente";
import { FaChevronLeft } from "react-icons/fa";

function ClienteLayout() {
    const { selectedClient, changeCliente, layout, changelayout } =
        useClienteLayout();

    return (
        <div>
            {layout === "list" && (
                <ListaClientes
                    selectedCliente={selectedClient}
                    selectCliente={changeCliente}
                    nextLayout={changelayout}
                />
            )}
            {layout === "detail" && selectedClient && (
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
                        <FaChevronLeft /> Clientes
                    </div>
                    <Divider size={24} />

                    <DetalheCliente cliente={selectedClient} />
                </div>
            )}
        </div>
    );
}

export default ClienteLayout;
