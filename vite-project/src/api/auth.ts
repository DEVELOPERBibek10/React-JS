import axios, { AxiosResponse } from "axios";
import config from "../config/config";

const login = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response;
};

export { login };
