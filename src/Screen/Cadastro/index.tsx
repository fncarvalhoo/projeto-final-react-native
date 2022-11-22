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

export const Cadastro = ({ navigation }) => {
  const Logar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
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
        <Text style={styles.textoLogo}>Cadastro</Text>
        <View style={styles.areaLogin}>
          <TextInput
            placeholder="CPF"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Nome de Usuário"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
          <TextInput
            placeholder="Data de Nascimento"
            placeholderTextColor="#000000"
            style={styles.input}
            selectionColor={"black"}
          />
        </View>
        <TouchableOpacity style={styles.botao} onPress={() => Home()}>
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
