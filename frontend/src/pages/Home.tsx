import { useEffect, useState } from "react";
import axios from "axios";
import axiosClient from "../config/axiosClient";
import { NewsAPIArticle } from "../interfaces";
import ArticlesPreview from "../components/ArticlesPreview";
import Sidebar from "../components/Sidebar";

type CategoryOrCountry = {
  id: number;
  name: string;
  nickname?: string;
};

const Home = () => {
  const [articles, setArticles] = useState<NewsAPIArticle[]>([]);

  useEffect(() => {
    // This parameters and url are made just for the first not authenticated visit of the user
    const country = "de";
    const category = "general";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY_NEWS_API
    }`;
    const articlesData: NewsAPIArticle[] = [];
    let categoryId: number;
    let countryId: number;
    const consumeNewsAPI = async () => {
      const { data: categories } = await axiosClient("/categories");
      const { data: countries } = await axiosClient("/countries");
      categoryId = categories.filter(
        (item: CategoryOrCountry) => category === item.name
      )[0].id;
      countryId = countries.filter(
        (item: CategoryOrCountry) => country === item.nickname
      )[0].id;

      try {
        const { data } = await axios(url);
        data.articles.forEach((article: any) => {
          articlesData.push({
            source_id: article.source.id,
            source_name: article.source.name,
            author: article.author,
            title: article.title,
            url: article.url,
            url_to_image: article.urlToImage,
            published_at: article.publishedAt,
            country_id: countryId,
            category_id: categoryId,
          });
        });
        try {
          const { data } = await axiosClient.post("/articles", articlesData);
          setArticles(data);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    consumeNewsAPI();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center">
        <ArticlesPreview articles={articles} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
