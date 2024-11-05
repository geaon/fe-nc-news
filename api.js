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

// export function getUsers() {
//   return axios
//     .get(`https://be-nc-news-osc4.onrender.com/api/users`)
//     .then((results) => {
//       return results.data.users;
//     });
// }

// export function getUserId(user_id) {
//   return axios
//     .get(`https://be-nc-news-osc4.onrender.com/api/users/${user_id}`)
//     .then((results) => {
//       return results;
//     });
// }

export function getComments(article_id) {
  return axios
    .get(
      `https://be-nc-news-osc4.onrender.com/api/articles/${article_id}/comments`
    )
    .then((results) => {
      return results;
    });
}
