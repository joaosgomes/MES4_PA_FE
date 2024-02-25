// config/Config.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  // default configurations
  // timeout: 10000, // Timeout of 10 seconds
});

export default axiosInstance;
