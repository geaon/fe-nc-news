import axios from "axios";

export function getArticles() {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/articles`)
    .then((results) => {
      return results.data.articles;
    });
}

export function getArticleById(article_id) {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/articles/${article_id}`)
    .then((results) => {
      console.log(results.data);
      return results.data.article;
    });
}
