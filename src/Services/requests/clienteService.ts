import { api } from "../api/cliente";

const postCliente = (data) => {
  return api.post(`cliente`, data);
};

const getUserByEmail = (email) => {
  return api.get(`cliente/email/${email}`);
};

const getUserBySenha = (senha) => {
  return api.get(`cliente/senha/${senha}`);
};

const clienteService = {
  postCliente,
  getUserByEmail,
  getUserBySenha,
};
export default clienteService;
