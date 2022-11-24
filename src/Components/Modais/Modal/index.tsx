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
    useEffect(()=>{
        getProdutoEspecifico(id).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])


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
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Titulo</Text>
                            <TouchableOpacity style={{ alignContent: "flex-end", width: "10%" }} onPress={()=>setModal(false)}>
                                <Text>
                                    <Image style={styles.closeIcon} source={Exit} />
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.firstStatsContainer}>
                            <View style={styles.firstStats}>
                                <Text style={styles.textTitle}>
                                    Image
                                </Text>
                                <Text style={styles.text}>
                                    preco
                                </Text>
                            </View>
                        </View>
                        <View style={styles.firstStatsContainer}>
                            <View style={styles.firstStats}>
                                <Text style={styles.textTitle}>
                                    descricao
                                </Text>
                                <Text style={styles.text}>
                                    preco
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textButton}>COMPRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}