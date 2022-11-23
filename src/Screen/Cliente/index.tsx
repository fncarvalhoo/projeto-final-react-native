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
import { createPrefix } from "typescript";
export const Cliente = () => {
  const [id, setId] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");

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
    clienteService
      .getUserById(id)
      .then((response) => {
        console.log(id);
        console.log("Deu certo");
        clienteService.putCliente(id, dados);
      })
      .catch((error) => {
        // showDialog("Erro", "Email inválido", "ERRO");
        console.log(error);
        console.log("Deu erro");
      });
  };

  function handleDeleteProduct(event) {
    event.preventDefault();
    clienteService
      .deleteCliente(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textoLogo}>Editar Perfil</Text>
        <View style={styles.areaLogin}>
          <TextInput
            placeholder="ID"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
            onChangeText={(e) => setId(e)}
          />
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
        {/* Colocar aqui um ALERT ''perfil atualizado com sucesso   */}
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <Text style={styles.textoBotao}>Atualizar</Text>
        </TouchableOpacity>
        {/* Colocar aqui um ALERT ''perfil Deletado com sucesso */}
        <TouchableOpacity style={styles.botao} onPress={handleDeleteProduct}>
          <Text style={styles.textoBotao}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
