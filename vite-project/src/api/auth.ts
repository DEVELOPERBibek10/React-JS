import axios, { AxiosResponse } from "axios";
import config from "../config/config";

const login = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse> => {
  const response = axios.post(`${config.apiUrl}/api/auth/login`, data);

  return response;
};

export { login };
