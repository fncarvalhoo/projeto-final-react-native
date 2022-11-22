import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    padding: 20,
    alignItems: "center",
    marginTop: 30,
  },
  icon: {
    marginRight: 350,
  },
  logo: {
    marginVertical: 30,
    height: 200,
    width: 250,
  },
  textoLogo: {
    color: "#FFCF00",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 10,
    marginTop: -20,
  },
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
  botao: {
    marginTop: 10,
    marginBottom: 25,
    color: "#fff",
    backgroundColor: "#FFCF00",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#21025D",
  },
  textoBotao: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  mostrar: {
    zIndex: 10,
    width: 80,
    alignItems: "center",
    position: "absolute",
    marginLeft: 280,
    marginTop: 22,
  },
  mostrarTexto: {
    color: "#808080",
    fontSize: 15,
    marginLeft: 40,
    marginTop: -5,
  },
  areaLogin: {
    width: "100%",
  },
  areaTexto: {
    flexDirection: "row",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
  },
  textoRegistro: {
    color: "#FFCF00",
    fontWeight: "bold",
  },
});
