//#region Imports
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import logo from "../../Assets/Logo_Game_Story.png";
import { Ionicons } from "@expo/vector-icons";
import clienteService from "../../Services/requests/clienteService";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";
import IconSeta from "../../Components/IconSeta/IconSeta";
import TextInputComponent from "../../Components/TextInput/TextInput";
import ButtonComponent from "../../Components/Botao/Botao";
//#endregion

export const Login = ({ navigation }) => {
  //#region Values
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrar, setMostrar] = useState("");
  const [ocultar, setOcultar] = useState(true);

  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [visibleDialog, setVisibleDialog] = useState(false);
  //#endregion

  //#region FunctionsForCustomAlert
  const showDialog = (titulo, mensagem, tipo) => {
    setVisibleDialog(true);
    setTitulo(titulo);
    setMensagem(mensagem);
    setTipo(tipo);
  };

  const hideDialog = (status) => {
    setVisibleDialog(status);
  };
  //#endregion

  //#region Navigation
  const Register = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Register" }],
    });
  };

  const Home = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  //#endregion

  //#region FunctionLogin
  const LoginClient = (event) => {
    event.preventDefault();
    clienteService
      .getUserByEmail(email)
      .then((response) => {
        clienteService
          .getUserBySenha(senha)
          .then((response) => {
            Home();
          })
          .catch((error) => {
            showDialog("Erro", "Senha inválida", "ERRO");
          });
      })
      .catch((error) => {
        showDialog("Erro", "Email inválido", "ERRO");
      });
  };
  //#endregion

  return (
    <View style={styles.container}>
      <IconSeta onPress={Home} />
      <Image style={styles.logo} source={logo} />
      <Text style={styles.textoLogo}>Login</Text>
      <View style={styles.areaLogin}>
        <TextInputComponent placeHolder={"Email"} setValue={setEmail} />
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
        <ButtonComponent setAction={LoginClient} texto={"Entrar"} />
      </View>
      <View style={styles.areaTexto}>
        <Text style={styles.texto}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => Register()}>
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
