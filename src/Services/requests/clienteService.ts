import { api } from "../api/cliente";

const postCliente = (data) => {
  return api.post(`cliente`, data);
};

const putCliente = (id, data) => {
  return api.put(`cliente/${id}`, data);
};

const getUserByEmail = (email) => {
  return api.get(`cliente/email/${email}`);
};

const getUserById = (id) => {
  return api.get(`cliente/${id}`);
};

const getUserBySenha = (senha) => {
  return api.get(`cliente/senha/${senha}`);
};

const deleteCliente = (id) => {
  return api.delete(`cliente/${id}`);
};

const clienteService = {
  postCliente,
  getUserByEmail,
  getUserBySenha,
  putCliente,
  getUserById,
  deleteCliente,
};
export default clienteService;
