import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getArticleById } from "../../api";
import ArticleComments from "./ArticleComments";

export default function IndividualArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then((results) => {
      setLoaded(true);
      setSingleArticle(results);
    });
  }, [article_id]);

  if (loaded) {
    return (
      <>
        <section key={singleArticle.article_id} className="single_article">
          <p className="article_title">{singleArticle.title}</p>
          <img src={singleArticle.article_img_url} />
          <p>Written by: {singleArticle.author}</p>
          <p>Topic: {singleArticle.topic}</p>
          <p>Votes: {singleArticle.votes}</p>
          <p>Comments: {singleArticle.comment_count}</p>
          <p>Created: {singleArticle.created_at}</p>
        </section>
        <ArticleComments comments={comments} setComments={setComments} />
      </>
    );
  }
}
