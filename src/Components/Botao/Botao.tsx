import * as React from "react";
import { styles } from "./style";
import { TextInput, TouchableOpacity, Text } from "react-native";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={props.setAction}>
      <Text style={styles.textoBotao}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
