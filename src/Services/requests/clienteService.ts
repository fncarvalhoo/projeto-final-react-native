import { api } from "../api/api";

const postCliente = (data) => {
  return api.post(`cliente`, data);
};

const putCliente = (cpf, data) => {
  return api.put(`cliente/cpf/${cpf}`, data);
};

const getUserByEmail = (email) => {
  return api.get(`cliente/email/${email}`);
};

const getUserByCpf = (cpf) => {
  return api.get(`cliente/cpf/${cpf}`);
};

const getUserBySenha = (senha) => {
  return api.get(`cliente/senha/${senha}`);
};

const deleteCliente = (cpf) => {
  return api.delete(`cliente/cpf/${cpf}`);
};

const clienteService = {
  postCliente,
  getUserByEmail,
  getUserBySenha,
  putCliente,
  getUserByCpf,
  deleteCliente,
};
export default clienteService;
