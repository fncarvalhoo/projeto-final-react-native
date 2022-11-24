import React from "react";
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { listaProdutos } from "../../Services/repository/produtoRepository";
import { styles } from "./styles";

import {CarrinhoContexto} from"../../Context/CarrinhoContext";

interface ProdutosCardProps extends TouchableOpacityProps {
    produto: listaProdutos;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
}

export const ProdutoCard = ({ produto, setModal, setPrecoSelecionado, setIndexSelecionado }: ProdutosCardProps) => {

    function abreModal(){
        setModal(true);
        setIndexSelecionado(produto.id);
        // setPrecoSelecionado && setPrecoSelecionado(produto.valor)
    }

    return <TouchableOpacity onPress={abreModal}>
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.imgCard} source={{ uri: produto.fotoLink }} />
                <Text style={styles.title}>{produto.nome}</Text>
                {/* <Text style={styles.title}>{item.descricao}</Text> */}
                <Text style={styles.price}> R${produto.valor},00</Text>
            </View>
        </View>
    </TouchableOpacity>
}