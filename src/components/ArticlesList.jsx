import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../api";

export default function ArticlesList() {
  const [articlesList, setArticlesList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const sortBy = sort ? sort : undefined;
    const orderBy = order ? order : undefined;
    getArticles({ sort_by: sortBy, order: orderBy }).then((results) => {
      setLoaded(true);
      setArticlesList(results);
    });
  }, [sort, order]);

  if (loaded) {
    {
      return (
        <>
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
  }
}
