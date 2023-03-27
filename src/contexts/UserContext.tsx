import { PropsWithChildren, createContext, useState } from "react";

import { User } from "../types/user";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoggedIn: boolean;
  handleLogin: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogin: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const isLoggedIn = !!user;

  const handleLogin = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
