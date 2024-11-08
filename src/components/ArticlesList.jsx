import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";
import Error from "./Error";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("asc");
  const [error, setError] = useState(false);

  useEffect(() => {
    const sortBy = sort ? sort : undefined;
    const orderBy = order ? order : undefined;
    getArticles({ sort_by: sortBy, order: orderBy })
      .then((results) => {
        setError(false);
        setLoaded(true);
        setArticlesList(results);
      })
      .catch((err) => {
        setError(true);
        setLoaded(true);
      });
  }, [sort, order]);

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
      <select
        value={sort}
        onChange={(event) => {
          setSort(event.target.value);
        }}
      >
        <option disabled={true} value="">
          Sort By...
        </option>
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
      </select>
      <select
        value={order}
        onChange={(event) => {
          setOrder(event.target.value);
        }}
      >
        <option disabled={true} value="">
          Order By...
        </option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <section className="articles">
        {articlesList.map((article) => {
          return (
            <section key={article.article_id} className="article">
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <br></br>
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
    </>
  );
}
