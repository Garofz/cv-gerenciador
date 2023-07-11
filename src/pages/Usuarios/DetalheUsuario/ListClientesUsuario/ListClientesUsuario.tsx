import React from "react";
import { ICliente } from "../../../../interfaces/ICliente";
import {
    IconEdit,
    Table,
    TableBody,
    TableColumn,
    TableColumnHeader,
    TableFoot,
    TableHead,
    TableRow,
    TextBold,
} from "../../../../globalStyles";
import { formatarData } from "../../../../util/format";
import { IDetalheUsuario } from "../../../../interfaces/IUserDetail";
import { mascararDocumento } from "../../../../util/mask";
export interface IProps {
    detalhe?: IDetalheUsuario;
}
function ListClientesUsuario({ detalhe }: IProps) {
    return (
        <Table width={100}>
            <TableHead>
                <TableRow>
                    <TableColumnHeader textAlign="right">#</TableColumnHeader>
                    <TableColumnHeader>Nome</TableColumnHeader>
                    <TableColumnHeader>Inscrição</TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Tipo Pessoa
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Ativo
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Acesso Pricipal
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Data Cadastro
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Tipo Acesso
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Data Ultimo Acesso
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Primeiro Acesso
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Data Inativação
                    </TableColumnHeader>
                    <TableColumnHeader></TableColumnHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {detalhe && detalhe.clientes.length > 0 ? (
                    detalhe.clientes.map((cliente, index) => (
                        <TableRow key={index}>
                            <TableColumn textAlign="right">
                                <TextBold>{cliente.cliente.idCliente}</TextBold>
                            </TableColumn>
                            <TableColumn>{cliente.cliente.nome}</TableColumn>
                            <TableColumn>
                                {mascararDocumento(
                                    cliente.cliente.tipoPessoa.idTipoPessoa,
                                    cliente.cliente.inscricao
                                )}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {cliente.cliente.tipoPessoa.descricao}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {cliente.dataInativacao &&
                                new Date(cliente.dataInativacao) <= new Date()
                                    ? "Não"
                                    : "Sim"}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {cliente.acessoPrincipal ? "Sim" : "Não"}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {formatarData(cliente.dataCadastro)}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {cliente.tipoAcesso.descricao}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {formatarData(cliente.dataUltimoAcesso)}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {cliente.primeiroAcesso ? "Sim" : "Não"}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {formatarData(cliente.dataInativacao)}
                            </TableColumn>
                            <TableColumn>
                                <IconEdit />
                            </TableColumn>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableColumn colSpan={12} textAlign="center">
                            Nenhum Cliente Cadastrado
                        </TableColumn>
                    </TableRow>
                )}
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableColumnHeader colSpan={12} textAlign="center">
                        {detalhe?.clientes.length === 0 &&
                            "Nenhum Cliente Econtrado"}
                        {detalhe?.clientes.length === 1 &&
                            "1 Registro Econtrados"}
                        {detalhe?.clientes &&
                            detalhe?.clientes.length > 1 &&
                            `${detalhe?.clientes.length} Registros Econtrados`}
                    </TableColumnHeader>
                </TableRow>
            </TableFoot>
        </Table>
    );
}

export default ListClientesUsuario;
