import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getTopicArticles } from "../../api";

export default function TopicArticles() {
  const { topic_name } = useParams();
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getTopicArticles(topic_name).then((results) => {
      setLoaded(true);
      setArticles(results);
    });
  }, [topic_name]);

  if (loaded) {
    return (
      <section>
        {articles.map((article) => {
          if (article.topic === topic_name) {
            return (
              <section key={article.article_id} className="topic_articles">
                <Link
                  to={`/articles/${article.article_id}`}
                  className="topic_article_title"
                >
                  {article.title}
                </Link>
                <br></br>
                <img src={article.article_img_url} style={{ width: "50%" }} />
                <p>Written by: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
                <p>Created: {article.created_at}</p>
              </section>
            );
          }
        })}
      </section>
    );
  } else return <p>Loading...</p>;
}
