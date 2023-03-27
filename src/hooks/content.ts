import { createContent, fetchContent } from "../api/content";
import { useMutation, useQuery } from "@tanstack/react-query";

const CONTENT = "CONTENT";

export const useContent = (token: string) => {
  return useQuery([CONTENT], () => fetchContent(token));
};

export const useCreateContent = () => {
  return useMutation(
    (variables: {
      token: string;
      content: { title: string; description: string };
    }) => createContent(variables.token, variables.content)
  );
};
