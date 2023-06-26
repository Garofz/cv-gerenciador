import React, { useEffect, useState } from "react"
import { ICliente } from "../../../../interfaces/ICliente"
import { useAsyncDispatch } from "../../../../redux/store";
import { addClient, editarClient, getClients } from "../../../../redux/features/clientsData/clientsDataThunk";
import { useSelector } from "react-redux";
import { selectClientsData } from "../../../../redux/features/clientsData/clientsDataSelectors";
import { adicionaCliente, editClient } from "../../../../redux/features/clientsData/clientsDataSlice";
export interface IUseListaClientes{
    clientes: ICliente[],
    filtrarClientes: (nome: string) => void,
    cadastrarCliente: (cliente: ICliente) => void,
    editarCliente: (cliente: ICliente) => void,
}


const useListaClientes = () : IUseListaClientes=> {
  
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const dispatch = useAsyncDispatch()
    const clientesData = useSelector(selectClientsData)

    useEffect(() => {
        obterClientes()
    }, [])

    
    const obterClientes = async () => {
        if(!clientesData)
            await dispatch(getClients()).unwrap().then(res => setClientes(res))
        else
            setClientes(clientesData)
    }

    const filtrarClientes = (param: string) => {
        if(!clientes) return;

        if(!param || param.trim() === ""){
            obterClientes()
        }else{
            const filtrados = clientes.filter(cliente => cliente.nome.toUpperCase().includes(param.toUpperCase()))
            setClientes(filtrados)
        }
    }
    const cadastrarCliente = async (cliente :ICliente) => {
        await dispatch(addClient({cliente})).unwrap().then(async (res) => {
            if(res){ 
                await dispatch(adicionaCliente(cliente))
            }
        }).catch(err => console.log(err))
    }

    const editarCliente = async (cliente :ICliente) => {
        await dispatch(editarClient({cliente})).unwrap().then(async (res) => {
            if(res){ 
                await dispatch(editClient(cliente))
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        obterClientes()
    }, [cadastrarCliente, editarCliente])
    

    return{
        clientes,
        filtrarClientes,
        cadastrarCliente,
        editarCliente
    }
}

export default useListaClientes