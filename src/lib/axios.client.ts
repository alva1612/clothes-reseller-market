import axios from "axios";

export const coreApi = axios.create({
  baseURL: "http://localhost:3000/api/",
});
