import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getArticles().then((results) => {
      setLoaded(true);
      setArticlesList(results);
    });
  }, []);

  if (loaded) {
    {
      return (
        <section className="articles">
          {articlesList.map((article) => {
            return (
              <section key={article.article_id} className="article">
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
                <img src={article.article_img_url} style={{ width: "70%" }} />
                <p>Written by: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Created: {article.created_at}</p>
              </section>
            );
          })}
        </section>
      );
    }
  }
}
