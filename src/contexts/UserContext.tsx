import { PropsWithChildren, createContext, useState } from "react";

import { User } from "../types/user";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  isLoggedIn: boolean;
};

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isLoggedIn: false,
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const isLoggedIn = !!user && !!token;

  const handleSetUser = (newUser: User | null) => {
    setUser(newUser);
  };

  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        setUser: handleSetUser,
        token,
        setToken: handleSetToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
