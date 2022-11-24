//#region Imports
import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./style";
import logo from "../../Assets/Logo_Game_Story.png";
import clienteService from "../../Services/requests/clienteService";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";
import TextInputComponent from "../../Components/TextInput/TextInput";
import IconSeta from "../../Components/IconSeta/IconSeta";
import ButtonComponent from "../../Components/Botao/Botao";
//#endregion

export const PageClient = ({ navigation }) => {
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
  const PutClient = (event) => {
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
      .putCliente(cpf, dados)
      .then((res) => {
        showDialog("Sucesso", "Conta atualizada com sucesso", "SUCESSO");
      })
      .catch((error) => {
        showDialog("Erro", "Problema ao atualizar a conta", "ERRO");
      });
  };
  //#endregion

  //#region FunctionDelete
  function DeleteClient(event) {
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
        <IconSeta onPress={Home} />
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textoLogo}>Editar Perfil</Text>
        <View style={styles.areaLogin}>
          <TextInputComponent placeHolder={"CPF"} setValue={setCpf} />
          <TextInputComponent placeHolder={"Nome"} setValue={setNome} />
          <TextInputComponent
            placeHolder={"Nome de Usuário"}
            setValue={setUsuario}
          />
          <TextInputComponent placeHolder={"Email"} setValue={setEmail} />
          <TextInputComponent placeHolder={"Senha"} setValue={setSenha} />
          <TextInputComponent
            placeHolder={"Data de Nascimento"}
            setValue={setDataNascimento}
          />
        </View>
        <ButtonComponent setAction={PutClient} texto={"Atualizar"} />
        <ButtonComponent setAction={DeleteClient} texto={"Deletar"} />
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
