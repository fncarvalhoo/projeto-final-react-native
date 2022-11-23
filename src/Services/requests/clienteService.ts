import { api } from "../api/cliente";

const postCliente = (data) => {
  return api.post(`cliente`, data);
};

const clienteService = {
  postCliente,
};
export default clienteService;
