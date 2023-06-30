import axios from "axios";

export const backendHttpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND,
});
