import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./style";
import logo from "../../Assets/Logo_Game_Story.png";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import clienteService from "../../Services/requests/clienteService";
import { setSyntheticLeadingComments } from "typescript";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";
import IconSeta from "../../Components/IconSeta/IconSeta";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState("");
  const [ocultar, setOcultar] = useState(true);

  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [visibleDialog, setVisibleDialog] = useState(false);

  const showDialog = (titulo, mensagem, tipo) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const hideDialog = (status) => {
    setVisibleDialog(status);
  };

  const Registrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Cadastro" }],
    });
  };

  const Home = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clienteService
      .getUserByEmail(email)
      .then((response) => {
        console.log(email);
        console.log("Deu certo");
        clienteService
          .getUserBySenha(senha)
          .then((response) => {
            console.log(senha);
            console.log("Deu certo");
            Home();
          })
          .catch((error) => {
            showDialog("Erro", "Senha inválid", "ERRO");
            console.log(error);
            console.log("Deu erro");
          });
      })
      .catch((error) => {
        showDialog("Erro", "Email inválido", "ERRO");
        console.log(error);
        console.log("Deu erro");
      });
  };

  return (
    <View style={styles.container}>
      <IconSeta onPress={Home} />
      <Image style={styles.logo} source={logo} />
      <Text style={styles.textoLogo}>Login</Text>
      <View style={styles.areaLogin}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000000"
          style={styles.input}
          selectionColor={"black"}
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={styles.areaLogin}>
        <TextInput
          secureTextEntry={ocultar}
          placeholder="Senha"
          placeholderTextColor="#000000"
          style={styles.input}
          selectionColor={"black"}
          onChangeText={(e) => setSenha(e)}
        />
        <TouchableOpacity
          style={styles.mostrar}
          onPress={() => setOcultar(!ocultar)}
        >
          {ocultar ? (
            <Text style={styles.mostrarTexto}>
              <Ionicons name="ios-eye" size={24} color="black" />
            </Text>
          ) : (
            <Text style={styles.mostrarTexto}>
              <Ionicons name="ios-eye-off" size={24} color="black" />
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaTexto}>
        <Text style={styles.texto}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => Registrar()}>
          <Text style={styles.textoRegistro}>Registre-se</Text>
        </TouchableOpacity>
      </View>
      {visibleDialog && (
        <CustomAlert
          titulo={titulo}
          mensagem={mensagem}
          tipo={tipo}
          visible={visibleDialog}
          onClose={hideDialog}
        ></CustomAlert>
      )}
    </View>
  );
};
