import { useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList } from "react-native";
import logoNav from "../../Assets/LogoNav.png";
import { produtos } from "../../Services/api";
import { styles } from "./styled";
import { getProduto, listaProdutos } from "../../Services/repository/produtoRepository"
import { textChangeRangeIsUnchanged } from "typescript";

export const Home = () => {

  const [carregando, setCarregando] = useState<boolean>(true);
  const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);

  useEffect(() => {
    getProduto().then((res) => {
      setlistaProdutos(res.data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => setCarregando(false))
  }, []);

  return (
    <View style={styles.containerBackground}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <View >
        <View style={styles.nav}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Image source={logoNav} style={styles.logo} />
        {carregando ?
          <ActivityIndicator
            size={"large"}
          />
          :
          <FlatList 
            data={listaProdutos}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={styles.container}>
                    <View style={styles.card}>
                      <Image style={styles.imgCard} source={{ uri: item.fotoLink }} />
                      <Text style={styles.title}>{item.nome}</Text>
                      {/* <Text style={styles.title}>{item.descricao}</Text> */}
                      <Text style={styles.price}> R${item.valor},00</Text>
                    </View>
                </View>
              )
            }
            }
          />

        }
      </View>
    </View>
  );
};
