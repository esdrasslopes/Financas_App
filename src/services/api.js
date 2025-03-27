import axios from "axios";

export const api = axios.create({
  baseURL: "http://<SEU_ENDERECO_IP>:3333",
});
