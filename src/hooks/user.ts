import { loginUser, registerUser } from "../api/user";

import { useMutation } from "@tanstack/react-query";

const USERS = "USERS";

export const useRegisterUser = () => {
  return useMutation(registerUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
