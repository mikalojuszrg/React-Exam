import { User } from "../types/user";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const registerUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.post(`${BASE_URL}/v1/auth/register`, user);
    return response.data.data;
  } catch (error) {
    console.error(`Error registering user: ${error}`);
    throw error;
  }
};

export const loginUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.post(`${BASE_URL}/v1/auth/login`, user);
    return response.data;
  } catch (error) {
    console.error(`Error logging in user: ${error}`);
    throw error;
  }
};
