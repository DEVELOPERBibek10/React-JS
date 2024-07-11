import axios, { AxiosResponse } from "axios";
import config from "../config/config";

const AUTH_TOKEN = "authToken";

const login = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

  if (response.data.token) {
    localStorage.setItem(AUTH_TOKEN, response.data.token);
  }

  return response;
};

const register = async (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);

  if (response.data.token) {
    localStorage.setItem(AUTH_TOKEN, response.data.token);
  }

  return response;
};

const isAuthenticated = () => {
  return !!localStorage.getItem(AUTH_TOKEN);
};

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

export { login, isAuthenticated, logout, register };
