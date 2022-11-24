import * as React from "react";
import { styles } from "./style";
import { TextInput } from "react-native";

const TextInputComponent = (props) => {
  return (
    <TextInput
      placeholder={props.placeHolder}
      placeholderTextColor="#000000"
      style={styles.input}
      selectionColor={"black"}
      onChangeText={(e) => props.setValue(e)}
    />
  );
};

export default TextInputComponent;
