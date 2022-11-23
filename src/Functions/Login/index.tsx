// import React, { useState } from "react";
// import clienteService from "../../Services/requests/clienteService";

// const [titulo, setTitulo] = useState("");
// const [mensagem, setMensagem] = useState("");
// const [tipo, setTipo] = useState("");
// const [visibleDialog, setVisibleDialog] = useState(false);
// const showDialog = (titulo, mensagem, tipo) => {
//   setVisibleDialog(true);
//   setTitulo(titulo);
//   setMensagem(mensagem);
//   setTipo(tipo);
// };

// export const handleSubmit = (event, props) => {
//   event.preventDefault();
//   clienteService
//     .getUserByEmail(props.email)
//     .then((response) => {
//       console.log(props.email);
//       console.log("Deu certo");
//       clienteService
//         .getUserBySenha(props.senha)
//         .then((response) => {
//           console.log(props.senha);
//           console.log("Deu certo");
//           // Home();
//         })
//         .catch((error) => {
//           showDialog("Erro", "Senha inválida", "ERRO");
//           console.log(error);
//           console.log("Deu erro");
//         });
//     })
//     .catch((error) => {
//       showDialog("Erro", "Email inválido", "ERRO");
//       console.log(error);
//       console.log("Deu erro");
//     });
// };

// const Registrar = (props) => {
//   props.navigation.reset({
//     index: 0,
//     routes: [{ name: "Cadastro" }],
//   });
// };

// export default handleSubmit;
