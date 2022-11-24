import { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList, } from "react-native";
import logoNav from "../../Assets/LogoNav.png";
import { styles } from "./styles";
import { getProduto } from "../../Services/repository/produtoRepository";
import { textChangeRangeIsUnchanged } from "typescript";
import { ProdutoCard } from "../../Components/ProdutoComponent/index";
import { ModalStatus } from "../../Components/Modais/Modal";
import { CarrinhoContexto } from "../../Context/CarrinhoContext";
import { listaProdutos } from "../../Services/repository/produtoRepository";

export const Carrinho = () => {
     
    const listaDeProdutos = useContext(CarrinhoContexto).listaDeProdutos;
    const precoTotal = useContext(CarrinhoContexto).precoTotal;

    const [indexSelecionado, setIndexSelecionado] = useState<string>("");
    const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    useEffect (()=>{
        console.log(listaDeProdutos);
    })

    // const [carregando, setCarregando] = useState<boolean>(true);


  return (
    <View style={styles.containerBackground}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <View>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Image source={logoNav} style={styles.logo} />
    
          <FlatList
            data={listaDeProdutos}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProdutoCard 
                produto={item}
                setIndexSelecionado={setIndexSelecionado}
                setModal={setModal}
                setPrecoSelecionado={setPrecoSelecionado}
                 />
              );
            }}
          />
         
        <View>
            <Text style={styles.preco}>
                Preço:
                <Text style={styles.preco}>
                    R${precoTotal},00
                </Text>
            </Text>
        </View>
        {modal &&
        <ModalStatus
          id={indexSelecionado}
          modal={modal}
          setModal={setModal}
          valor={precoSelecionado}
      />}
      </View>
    </View>
  );
};
