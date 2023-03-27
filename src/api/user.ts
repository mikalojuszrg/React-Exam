import { User } from "../types/user";
import axios from "axios";

const BASE_URL = process.env.BASE_URL;

export const registerUser = async (user: User): Promise<User> => {
  const response = await axios.post(`${BASE_URL}/v1/auth/register`, user);
  return response.data.data;
};

export const loginUser = async (user: User): Promise<User> => {
  const response = await axios.post(`${BASE_URL}/v1/auth/login`, user);
  return response.data;
};
