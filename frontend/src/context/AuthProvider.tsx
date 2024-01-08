import React, { useState, createContext, ReactNode } from "react";
import { User } from "../interfaces";
import axiosClient from "../config/axiosClient";
import axios from "axios";

export type UserContextData = {
  auth: User;
  authorizateUser: (user: User) => void;
  logout: () => void;
  errors: string[];
};

const initialAuthValues = {
  username: "",
  token: "",
};

const AuthContext = createContext<UserContextData | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<User>(initialAuthValues);
  const [errors, setErrors] = useState([]);

  const authorizateUser = (user: User) => {
    setAuth(user);
  };

  const logout = async () => {
    try {
      await axiosClient.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setAuth(initialAuthValues);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors(Object.values(error.response?.data.errors));
      }
    }
  };

  const contextValue: UserContextData = {
    auth,
    authorizateUser,
    logout,
    errors,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
