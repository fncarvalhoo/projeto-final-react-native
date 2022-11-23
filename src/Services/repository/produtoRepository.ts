import { produtos } from "../api";
import axios, { AxiosResponse } from "axios";

export interface listaProdutos{
    id: string,
    nome: string,
    descricao: string,
    qtdEstoque: string,
    valor: string,
    idCategoria: string,
    nomeCategoria: string,
    idFuncionario: string,
    nomeFuncionario: string,
    dataFabricacao: string,
    fotoLink: string
}


export function getProduto(): Promise<AxiosResponse<listaProdutos[], any>> {
    let url = `produto/listaProdutos`;

    return produtos.get(url);
}