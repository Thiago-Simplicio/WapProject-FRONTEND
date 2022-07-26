import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:${process.env.URL_API}`,
});

export default api;
