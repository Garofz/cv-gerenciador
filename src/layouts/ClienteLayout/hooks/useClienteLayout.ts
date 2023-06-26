import React, { useEffect, useState } from "react"
import { ICliente } from "../../../interfaces/ICliente";


export interface IUseClienteLayout{
    selectedClient: ICliente | undefined,
    layout: "list" | "detail",
    changeCliente:(cliente?:ICliente) => void
    changelayout: (to: "list" | "detail") => void
}


const useClienteLayout = () : IUseClienteLayout=> {
      
    const [selectedClient, setSelectedClient] = useState<ICliente>();
    const [layout, setLayout] = useState<"list" | "detail">("list");

    const changelayout = (to: "list" | "detail") => {
        setLayout(to)
    }
    const changeCliente = (cliente?: ICliente) => {        
        setSelectedClient(cliente)
    }

    return{
        selectedClient,
        layout,
        changeCliente,
        changelayout
    }
}

export default useClienteLayout