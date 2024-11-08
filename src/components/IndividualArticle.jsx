import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { Link } from "react-router-dom";
import ArticleComments from "./ArticleComments";
import ArticleVotes from "./ArticleVotes";
import CommentAdder from "./CommentAdder";

export default function IndividualArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((results) => {
        setLoaded(true);
        setError(false);
        setSingleArticle(results);
      })
      .catch((err) => {
        setError(true);
        setLoaded(true);
      });
  }, [article_id]);

  function handleComments() {
    if (comments) {
      setComments(false);
    } else {
      setComments(true);
    }
  }

  if (!loaded) return <p>Loading...</p>;

  if (error) {
    return <Error />;
  }

  return (
    <>
      <nav>
        <Link to="/articles" className="button" id="all">
          VIEW ALL
        </Link>
        <Link to="/topic/coding" className="button" id="coding">
          CODING
        </Link>
        <Link to="/topic/cooking" className="button" id="cooking">
          COOKING
        </Link>
        <Link to="/topic/football" className="button" id="football">
          FOOTBALL
        </Link>
        <Link to="/" className="button" id="logout">
          LOG OUT
        </Link>
      </nav>
      <section key={singleArticle.article_id} className="single_article">
        <p className="article_title">{singleArticle.title}</p>

        <img src={singleArticle.article_img_url} />

        <p>Written by: {singleArticle.author}</p>

        <p>Created: {singleArticle.created_at}</p>

        <p>Topic: {singleArticle.topic}</p>

        <ArticleVotes
          totalVotes={singleArticle.votes}
          article_id={article_id}
        ></ArticleVotes>

        <button onClick={handleComments}>
          {comments
            ? "Hide Comments"
            : `View Comments: ${singleArticle.comment_count}`}
        </button>

        {comments ? (
          <ArticleComments article_id={singleArticle.article_id} />
        ) : null}

        <CommentAdder
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        ></CommentAdder>
      </section>
    </>
  );
}
