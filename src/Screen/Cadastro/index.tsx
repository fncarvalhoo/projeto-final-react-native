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
import { Ionicons } from "@expo/vector-icons";
import clienteService from "../../Services/requests/clienteService";

export const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNasc, setDataNasc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      usuario: usuario,
      nome: nome,
      cpf: cpf,
      senha: senha,
      dataNascimento: dataNasc,
    };

    clienteService.postCliente(user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const Logar = () => {
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
        <Text style={styles.textoLogo}>Cadastro</Text>
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
            onChangeText={(e) => setDataNasc(e)}
          />
        </View>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.areaTexto}>
          <Text style={styles.texto}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => Logar()}>
            <Text style={styles.textoLogin}>Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
