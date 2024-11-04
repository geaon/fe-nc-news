import { useState, useEffect } from "react";
import { getArticles } from "../../api";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getArticles().then((results) => {
      setLoaded(true);
      setArticles(results);
    });
  }, []);

  if (loaded) {
    {
      return (
        <section className="articles">
          {articles.map((article) => {
            return (
              <section key={article.article_id} className="article">
                <p>{article.title}</p>
                <img src={article.article_img_url} style={{ width: "70%" }} />
                <p>{article.author}</p>
                <p>{article.topic}</p>
                <p>{article.votes}</p>
                <p>{article.comment_count}</p>
                <p>{article.created_at}</p>
              </section>
            );
          })}
        </section>
      );
    }
  }
}
