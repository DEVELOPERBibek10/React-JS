import axios, { AxiosResponse } from "axios";
import config from "../config/config";
import { LoginInput } from "../types/myauth";

const AUTH_TOKEN = "authToken";

const login = async (data: LoginInput): Promise<AxiosResponse> => {
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

export { login, register };
