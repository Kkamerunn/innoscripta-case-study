import { NewsAPIArticle } from "../interfaces";

interface ArticlesPreviewProps {
  articles: NewsAPIArticle[];
}

const ArticlesPreview = ({ articles }: ArticlesPreviewProps) => {
  return (
    <div className="w-8/12 px-5">
      {articles.length > 1 &&
        articles.map((article, i) => (
          <div className="my-5" key={i}>
            <p>
              {article.title}{" "}
              <a
                href={article.url}
                className="text-blue-400 font-black"
                target="_blank"
              >
                see more...
              </a>
            </p>
            <small className="text-red-900 italic font-medium">
              {article.author}
            </small>
          </div>
        ))}
    </div>
  );
};

export default ArticlesPreview;
