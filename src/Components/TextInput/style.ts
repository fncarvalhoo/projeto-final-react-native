import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    fontSize: 17,
    padding: Platform.OS === "ios" ? 15 : 10,
    height: 65,
    borderRadius: 9,
    width: "100%",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#21025D",
  },
});
