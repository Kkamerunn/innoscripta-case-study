import React, { useState, createContext, ReactNode } from "react";
import axiosClient from "../config/axiosClient";
import axios from "axios";

type Category = {
  name: string;
};

export type NewsContextData = {
  categories: Category[];
};

const NewsContext = createContext<NewsContextData | undefined>(undefined);

const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const contextValue: NewsContextData = {
    categories,
  };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
