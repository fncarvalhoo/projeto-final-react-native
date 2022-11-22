import axios, { AxiosResponse } from "axios";

    const produtos = axios.create({
    baseURL: "http://192.168.1.19:8080/",
    headers: {
        "Content-Type": "application/json",
    },
});

interface listaProdutos{
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

interface getProdutoRespostaProps {
   results: listaProdutos[]
}

export function getProduto(): Promise<AxiosResponse<getProdutoRespostaProps, any>> {
    let url = `produto/listaProdutos`;

    return produtos.get(url);
}
