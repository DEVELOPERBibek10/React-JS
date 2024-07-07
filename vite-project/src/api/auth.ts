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

const isAuthenticated = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  console.log(token);
  return !!token;
};

export { login, isAuthenticated };
