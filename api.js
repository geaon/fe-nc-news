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
      return results.data.article;
    });
}

export function getComments(article_id) {
  return axios
    .get(
      `https://be-nc-news-osc4.onrender.com/api/articles/${article_id}/comments`
    )
    .then((results) => {
      return results;
    });
}

export function updateVotes(article_id, votes) {
  console.log(article_id);
  console.log(votes);
  return axios.patch(
    `https://be-nc-news-osc4.onrender.com/api/articles/${article_id}`,
    { inc_votes: votes }
  );
}
