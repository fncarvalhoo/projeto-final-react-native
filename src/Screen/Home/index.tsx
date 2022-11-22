import { useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ActivityIndicator, FlatList } from "react-native";
import logoNav from "../../Assets/LogoNav.png";
import { getProduto } from "../../Services/api";
import { styles } from "./styled";

export const Home = () => {

  const [carregando, setCarregando] = useState<boolean>(true);
  const [produtos, setProdutos] = useState(["Pedro"]);

  useEffect(()=>{
    getProduto().then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[]);

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
              data={produtos}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text>
                      {item}
                    </Text>
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
