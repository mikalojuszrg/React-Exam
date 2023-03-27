import { fetchContent } from "../api/content";
import { useQuery } from "@tanstack/react-query";

const CONTENT = "CONTENT";

export const useContent = (token: string) => {
  return useQuery([CONTENT], () => fetchContent(token));
};
