import axios from "axios";

export function getArticles(queries) {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/articles`, {
      params: queries,
    })
    .then((results) => {
      return results.data.articles;
    })
    .catch((err) => {
      return err;
    });
}

export function getTopicArticles(queries) {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/articles`, {
      params: queries,
    })
    .then((results) => {
      return results.data.articles;
    })
    .catch((err) => {
      return err;
    });
}

export function getArticleById(article_id) {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/articles/${article_id}`)
    .then((results) => {
      return results.data.article;
    })
    .catch((err) => {
      return err;
    });
}

export function getComments(article_id) {
  return axios
    .get(
      `https://be-nc-news-osc4.onrender.com/api/articles/${article_id}/comments`
    )
    .then((results) => {
      return results;
    })
    .catch((err) => {
      return err;
    });
}

export function updateVotes(article_id, votes) {
  return axios
    .patch(`https://be-nc-news-osc4.onrender.com/api/articles/${article_id}`, {
      inc_votes: votes,
    })
    .catch((err) => {
      return err;
    });
}

export function getUser() {
  return axios
    .get(`https://be-nc-news-osc4.onrender.com/api/users`)
    .then((results) => {
      return results.data.users;
    })
    .catch((err) => {
      return err;
    });
}

export function postComment(article_id, comment) {
  return axios
    .post(
      `https://be-nc-news-osc4.onrender.com/api/articles/${article_id}/comments`,
      comment
    )
    .then((results) => {
      return results;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteComment(comment_id) {
  return axios
    .delete(`https://be-nc-news-osc4.onrender.com/api/comments/${comment_id}`)
    .then((results) => {
      console.log(results, "deleted");
    })
    .catch((err) => {
      return err;
    });
}
