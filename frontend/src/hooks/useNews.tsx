import { useContext } from "react";
import NewsContext, { NewsContextData } from "../context/NewsProvider";

const useNews = () => {
  const context = useContext(NewsContext) as NewsContextData;

  return context;
};

export default useNews;
