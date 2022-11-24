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
import CustomAlert from "../../Components/CustomAlert";
//#endregion

export const Cliente = ({ navigation }) => {
  //#region Values
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");

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

  //#region FunctionPut
  const handleSubmit = (event) => {
    const dados = {
      cpf: cpf,
      dataNascimento: dataNascimento,
      email: email,
      nome: nome,
      senha: senha,
      usuario: usuario,
    };
    event.preventDefault();
    // clienteService
    //   .getUserByCpf(cpf)
    //   .then((res) => {
    clienteService
      .putCliente(cpf, dados)
      .then((res) => {
        showDialog("Sucesso", "Conta atualizada com sucesso", "SUCESSO");
      })
      // })
      .catch((error) => {
        showDialog("Erro", "Problema ao atualizar a conta", "ERRO");
      });
  };
  //#endregion

  //#region FunctionDelete
  function handleDeleteProduct(event) {
    event.preventDefault();
    clienteService
      .deleteCliente(cpf)
      .then((response) => {
        showDialog("Sucesso", "Conta deletada com sucesso", "SUCESSO");
      })
      .catch((error) => {
        showDialog("Erro", "Problema ao deletar conta", "ERRO");
      });
  }
  //#endregion

  //#region Navigation
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
        <TouchableOpacity onPress={() => Home()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textoLogo}>Editar Perfil</Text>
        <View style={styles.areaLogin}>
          <TextInput
            placeholder="CPF"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setCpf(e)}
          />
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setNome(e)}
          />
          <TextInput
            placeholder="Nome de Usuário"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setUsuario(e)}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setSenha(e)}
          />
          <TextInput
            placeholder="Data de Nascimento"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setDataNascimento(e)}
          />
        </View>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text style={styles.textoBotao}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={handleDeleteProduct}>
          <Text style={styles.textoBotao}>Deletar</Text>
        </TouchableOpacity>
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
