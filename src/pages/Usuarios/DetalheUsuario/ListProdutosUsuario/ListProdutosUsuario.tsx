import React from "react";
import { IProduto } from "../../../../interfaces/IProduto";
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
import { IDetalheUsuario, Produto } from "../../../../interfaces/IUserDetail";
import { Button } from "ui-gds";
export interface IProps {
    detalhe?: IDetalheUsuario;
    clickEditar: (produto: Produto) => Produto;
}
function ListProdutosUsuario({ detalhe, clickEditar }: IProps) {
    return (
        <Table width={100}>
            <TableHead>
                <TableRow>
                    <TableColumnHeader textAlign="right">#</TableColumnHeader>
                    <TableColumnHeader>Nome</TableColumnHeader>
                    <TableColumnHeader>Descrição</TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Ativo
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Bloqueado
                    </TableColumnHeader>
                    <TableColumnHeader textAlign="center">
                        Data Cadastro
                    </TableColumnHeader>
                    <TableColumnHeader></TableColumnHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {detalhe && detalhe.produtos.length > 0 ? (
                    detalhe.produtos.map((produto, index) => (
                        <TableRow key={index}>
                            <TableColumn textAlign="right">
                                <TextBold>{produto.produto.idProduto}</TextBold>
                            </TableColumn>
                            <TableColumn>{produto.produto.nome}</TableColumn>
                            <TableColumn>
                                {produto.produto.descricao}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {produto.ativo ? "Sim" : "Não"}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                {produto.bloqueado ? "Sim" : "Não"}
                            </TableColumn>
                            <TableColumn textAlign="center" width={155}>
                                {formatarData(produto.dataCriacao)}
                            </TableColumn>
                            <TableColumn textAlign="center">
                                <IconEdit
                                    onClick={() => clickEditar(produto)}
                                />
                            </TableColumn>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableColumn colSpan={7} textAlign="center">
                            Nenhum Produto Cadastrado
                        </TableColumn>
                    </TableRow>
                )}
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableColumnHeader colSpan={7} textAlign="center">
                        {detalhe?.produtos.length === 0 &&
                            "Nenhum Produto Econtrados"}
                        {detalhe?.produtos.length === 1 &&
                            "1 Registro Econtrado"}
                        {detalhe?.produtos &&
                            detalhe?.produtos.length > 1 &&
                            `${detalhe?.produtos.length} Registros Econtrados`}
                    </TableColumnHeader>
                </TableRow>
            </TableFoot>
        </Table>
    );
}

export default ListProdutosUsuario;
