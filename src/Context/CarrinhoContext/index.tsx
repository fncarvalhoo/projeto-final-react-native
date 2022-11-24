import React, {Children, createContext, useEffect, useState} from "react";
import {listaProdutos} from "../../Services/repository/produtoRepository";

interface ProvedorCarrinhoProps {
    children: React.ReactNode
}

interface CarrinhoContextoProps{
    listaDeProdutos: listaProdutos[];
    salvaListaDeProdutos: (produtos: listaProdutos)=> void;
    precoTotal: number;
    removeProdutoDoCarrinho: (id: string)=> void;
}

export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
    listaDeProdutos: [{
        id: "",
        nome: "",
        descricao: "",
        qtdEstoque: "",
        valor: "",
        idCategoria: "",
        nomeCategoria: "",
        idFuncionario: "",
        nomeFuncionario: "",
        dataFabricacao: "",
        fotoLink: "",
    }],
    salvaListaDeProdutos: (produtos: listaProdutos)=> { },
    precoTotal: 0,
    removeProdutoDoCarrinho: (id: string)=> [],
});

export const ProvedorCarrinho = ({children}: ProvedorCarrinhoProps) => {
    const [listaDeProdutos, setListaDeProdutos] = useState<listaProdutos[]>([]);
    const [precoTotal, setPrecoTotal]= useState<number>(0);

    useEffect(()=>{
        let soma=0;
        listaDeProdutos[0] && listaDeProdutos.map((produtos:listaProdutos) => {
            soma = soma + Number(produtos.valor)
        });
        setPrecoTotal(soma);
    }, [listaDeProdutos])
    
    function salvaListaDeProdutos (produtos: listaProdutos) {
        setListaDeProdutos([...listaDeProdutos,produtos]);
    } ;

    function removeProdutoDoCarrinho (id: string){
        let novaListaDeProduto = listaDeProdutos.filter((produtos) =>{
            return produtos.id !== id
        })
        setListaDeProdutos(novaListaDeProduto);
    }

    return (
        <CarrinhoContexto.Provider
            value={{
                listaDeProdutos,
                salvaListaDeProdutos,
                precoTotal,
                removeProdutoDoCarrinho
            }}
        >
            {children}
        </CarrinhoContexto.Provider>
    )
}