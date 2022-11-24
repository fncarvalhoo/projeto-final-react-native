import React, { useContext, useEffect, useState } from "react";
import { View, Modal, Text, ModalProps, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { styles } from './styles';
import Exit from "../../../Assets/close.png"
import { getProdutoEspecifico, listaProdutos, produtoStatusProps } from "../../../Services/repository/produtoRepository";
import {CarrinhoContexto} from "../../../Context/CarrinhoContext";

interface ModalStatusProps extends ModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
    valor?: number
}

export const ModalStatus = ({ modal, setModal, id, ...rest }: ModalStatusProps) => {

    const [produtoStatus, setProdutoStatus] = useState<produtoStatusProps>()
    const [carregando, setCarregando] = useState<boolean>(true);
    useEffect(() => {
        getProdutoEspecifico(id).then((res) => {
            setProdutoStatus(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setCarregando(false);
        })
    }, [])

    const salvaListaDeProdutos = useContext(CarrinhoContexto).salvaListaDeProdutos
        // let precoRandomico = Math.floor(Math.random())

    function botaProdutoNoCarrinho (){
        console.log(produtoStatus.id);
        console.log(produtoStatus.nome);
        console.log(produtoStatus.valor);
        let produtoComPreco : listaProdutos = {
            
            id: produtoStatus.id,
            nome: produtoStatus.nome,
            descricao: produtoStatus.descricao,
            qtdEstoque: produtoStatus.qtdEstoque,
            valor: produtoStatus.valor,
            idCategoria: produtoStatus.idCategoria,
            nomeCategoria: produtoStatus.nomeCategoria,
            idFuncionario: produtoStatus.idFuncionario,
            nomeFuncionario: produtoStatus.nomeFuncionario,
            dataFabricacao: produtoStatus.dataFabricacao,
            fotoLink: produtoStatus.fotoLink,
            // valor: precoRandomico
        }
        salvaListaDeProdutos(produtoComPreco)
        setModal (false);
    }


    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!Modal)
            }}
            {...rest}
        >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    {carregando ?
                        <ActivityIndicator size={'large'} />
                        :
                        <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{produtoStatus.nome}</Text>
                                    <TouchableOpacity style={{ alignContent: "flex-end", width: "10%" }} onPress={() => setModal(false)}>
                                        <Text>
                                            <Image style={styles.closeIcon} source={Exit} />
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.firstStatsContainer}>
                                    <View style={styles.firstStats}>
                                        <Image style={styles.img} source={{ uri: produtoStatus.fotoLink }} />
                                    </View>
                                </View>
                                <View style={styles.firstStatsContainer}>
                                    <View style={styles.firstStats}>
                                        <Text style={styles.textTitle}>
                                            Descrição
                                        </Text>
                                    </View>
                                </View>
                                        <Text style={styles.text}>
                                            {produtoStatus.descricao}
                                        </Text>
                            </ScrollView>
                            <View style={styles.footerContainer}>
                                <Text style={styles.title}>R${produtoStatus.valor},00</Text>
                                <TouchableOpacity style={styles.botao} onPress={() => botaProdutoNoCarrinho()}>
                                    <Text style={styles.textButton}>COMPRAR</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </View>

        </Modal>
    )
}