import axios from "axios";

const token = localStorage.getItem("token"); // Get token from storage

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add an interceptor to attach the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
