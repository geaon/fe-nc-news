import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getArticleById } from "../../api";

export default function IndividualArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((results) => {
      setLoaded(true);
      setSingleArticle(results);
    });
  }, [article_id]);

  if (loaded) {
    return (
      <section key={singleArticle.article_id} className="single_article">
        <Link to={`/articles/${singleArticle.article_id}`}>
          {singleArticle.title}
        </Link>
        <img src={singleArticle.article_img_url} />
        <p>Written by: {singleArticle.author}</p>
        <p>Topic: {singleArticle.topic}</p>
        <p>Votes: {singleArticle.votes}</p>
        <p>Comments: {singleArticle.comment_count}</p>
        <p>Created: {singleArticle.created_at}</p>
      </section>
    );
  }
}
