import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import logo from "../../Assets/Logo_Game_Story.png";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const Login = ({ navigation }) => {
  const [mostrar, setMostrar] = useState("");
  const [ocultar, setOcultar] = useState(true);

  const Registrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Cadastro" }],
    });
  };

  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.icon} />
      <Image style={styles.logo} source={logo} />
      <View style={styles.areaLogin}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000000"
          style={styles.input}
          selectionColor={"black"}
        />
      </View>
      <View style={styles.areaLogin}>
        <TextInput
          secureTextEntry={ocultar}
          placeholder="Senha"
          placeholderTextColor="#000000"
          style={styles.input}
          selectionColor={"black"}
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
        <TouchableOpacity style={styles.botao} onPress={() => Entrar()}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaTexto}>
        <Text style={styles.texto}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => Registrar()}>
          <Text style={styles.textoRegistro}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
