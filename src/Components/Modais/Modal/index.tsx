import React, { useEffect, useState } from "react";
import { View, Modal, Text, ModalProps, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { styles } from './styles';
import Exit from "../../../Assets/close.png"
import { getProdutoEspecifico, produtoStatusProps } from "../../../Services/repository/produtoRepository";

interface ModalStatusProps extends ModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
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
                                <TouchableOpacity style={styles.botao}>
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