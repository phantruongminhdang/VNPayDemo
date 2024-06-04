import axios from "axios";
const instance = axios.create({
  baseURL: "https://dogfish-wise-probably.ngrok-free.app/api",
});

export default instance;