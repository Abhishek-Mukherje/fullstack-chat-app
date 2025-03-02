import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5007/api" : "/api",
  withCredentials: true,
});

export const formatMessageTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString();
};
