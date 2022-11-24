import { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import logoNav from "../../Assets/LogoNav.png";
import { styles } from "./styled";
import {
  getProduto,
  listaProdutos,
} from "../../Services/repository/produtoRepository";
import { textChangeRangeIsUnchanged } from "typescript";
import { ProdutoCard } from "../../Components/ProdutoComponent/index";
import { ModalStatus } from "../../Components/Modais/Modal";

export const Home = () => {
  const [carregando, setCarregando] = useState<boolean>(true);
  const [listaProdutos, setlistaProdutos] = useState<listaProdutos[]>([]);

  const [indexSelecionado, setIndexSelecionado] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    requisicaoListaProdutos();
  }, []);

  function requisicaoListaProdutos() {
    setCarregando(true);
    getProduto()
      .then((res) => {
        setlistaProdutos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setCarregando(false));
  }

  return (
    <View style={styles.containerBackground}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
      />
      <View>
        <View style={styles.nav}></View>
        <Image source={logoNav} style={styles.logo} />
        {carregando ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={listaProdutos}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProdutoCard
                  produto={item}
                  setIndexSelecionado={setIndexSelecionado}
                  setModal={setModal}
                />
              );
            }}
          />
        )}
        {modal && (
          <ModalStatus
            id={indexSelecionado}
            modal={modal}
            setModal={setModal}
          />
        )}
      </View>
    </View>
  );
};
