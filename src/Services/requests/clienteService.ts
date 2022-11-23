import { api } from "../api/cliente";

const postCliente = (data) => {
  return api.post(`cliente`, data);
};

const getUserByEmail = (email) => {
  return api.get(`cliente/${email}`);
};

const clienteService = {
  postCliente,
  getUserByEmail,
};
export default clienteService;
