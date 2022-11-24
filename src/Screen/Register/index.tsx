//#region Imports
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import logo from "../../Assets/Logo_Game_Story.png";
import { AntDesign } from "@expo/vector-icons";
import clienteService from "../../Services/requests/clienteService";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";
import IconSeta from "../../Components/IconSeta/IconSeta";
import TextInputComponent from "../../Components/TextInput/TextInput";
import ButtonComponent from "../../Components/Botao/Botao";
//#endregion

export const Register = ({ navigation }) => {
  //#region Values
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNasc, setDataNasc] = useState("");

  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [visibleDialog, setVisibleDialog] = useState(false);
  //#endregion

  //#region FunctionsParaCustomAlert
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

  //#region FunctionPost
  const registerClient = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      usuario: usuario,
      nome: nome,
      cpf: cpf,
      senha: senha,
      dataNascimento: dataNasc,
    };

    clienteService
      .postCliente(user)
      .then((res) => {
        showDialog("Sucesso", "Usuário cadastrado com sucesso", "SUCESSO");
      })
      .catch((error) => {
        showDialog("Erro", "Cadastro inválido", "ERRO");
      });
  };
  //#endregion

  //#region Navigation
  const Login = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const Home = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  //#endregion

  return (
    <ScrollView>
      <View style={styles.container}>
        <IconSeta onPress={Home} />
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textoLogo}>Cadastro</Text>
        <View style={styles.areaLogin}>
          <TextInputComponent placeHolder={"CPF"} setValue={setCpf} />
          <TextInputComponent placeHolder={"Nome"} setValue={setNome} />
          <TextInputComponent
            placeHolder={"Nome de Usuário"}
            setValue={setUsuario}
          />
          <TextInputComponent placeHolder={"Email"} setValue={setEmail} />
          <TextInputComponent placeHolder={"Senha"} setValue={setSenha} />
          <TextInputComponent
            placeHolder={"Data de Nascimento"}
            setValue={setDataNasc}
          />
        </View>
        <ButtonComponent setAction={registerClient} texto={"Cadastrar"} />
        <View style={styles.areaTexto}>
          <Text style={styles.texto}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => Login()}>
            <Text style={styles.textoLogin}>Faça login</Text>
          </TouchableOpacity>
        </View>
        <CustomAlert
          titulo={titulo}
          mensagem={mensagem}
          tipo={tipo}
          visible={visibleDialog}
          onClose={hideDialog}
        ></CustomAlert>
      </View>
    </ScrollView>
  );
};
