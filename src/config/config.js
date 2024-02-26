// config/Config.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  // default configurations
  // timeout: 10000, // Timeout of 10 seconds
});


export const USE_WEBSOCKET = 'true';
export const WEBSOCKET_BASE_URL = 'ws://localhost:5000/';

export default axiosInstance;
