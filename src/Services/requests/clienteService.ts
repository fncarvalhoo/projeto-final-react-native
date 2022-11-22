import { api } from "../api/api";

const postCliente = (data) => {
  return api.post(`cliente`, data);
};

const clienteService = {
  postCliente,
};
export default clienteService;
