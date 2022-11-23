import axios, { AxiosResponse } from "axios";

const produtos = axios.create({
  baseURL: "https://21b8-138-117-220-127.sa.ngrok.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

interface listaProdutos {
  id: string;
  r;
  nome: string;
  descricao: string;
  qtdEstoque: string;
  valor: string;
  idCategoria: string;
  nomeCategoria: string;
  idFuncionario: string;
  nomeFuncionario: string;
  dataFabricacao: string;
  fotoLink: string;
}

interface getProdutoRespostaProps {
  results: listaProdutos[];
}

export function getProduto(): Promise<
  AxiosResponse<getProdutoRespostaProps, any>
> {
  let url = `produto/listaProdutos`;

  return produtos.get(url);
}
