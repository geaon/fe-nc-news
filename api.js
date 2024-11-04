import axios from "axios";

export function getArticles() {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/articles`)
    .then((results) => {
      return results.data.articles;
    });
}
