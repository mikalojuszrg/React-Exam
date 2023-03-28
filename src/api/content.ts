import { Content } from "../types/content";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchContent = async (token: string): Promise<any[]> => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`${BASE_URL}/v1/content/skills`, config);
    return response.data;
  } catch (error) {
    console.error(`Error fetching content: ${error}`);
    throw error;
  }
};

export const createContent = async (
  token: string,
  content: { title: string; description: string }
): Promise<Content[]> => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/v1/content/skills`,
      content,
      config
    );
    return response.data;
  } catch (error) {
    console.error(`Error creating content: ${error}`);
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
    }
    throw error;
  }
};
