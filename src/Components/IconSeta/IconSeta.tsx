import * as React from "react";
import { styles } from "./style";
import { TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconSeta = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default IconSeta;
