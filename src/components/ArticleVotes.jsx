import { useState } from "react";
import { updateVotes } from "../../api";

export default function ArticleVotes(props) {
  const { article_id, totalVotes } = props;
  const [votes, setVotes] = useState(0);
  const [userLike, setUserLike] = useState(0);
  const [userDislike, setUserDislike] = useState(0);
  const [error, setError] = useState(false);

  function updateLikes(vote) {
    setVotes((currVote) => {
      return currVote + vote;
    });
    setUserLike(1);
    setUserDislike(1);
  }

  function handleLikes() {
    updateVotes(article_id, 1)
      .then((result) => {
        updateLikes(1);
      })
      .catch((err) => setError(true));
  }

  function handleDislikes() {
    updateVotes(article_id, -1)
      .then((result) => updateLikes(-1))
      .catch((err) => setError(true));
  }

  if (error) return <p>Sorry, unable to vote. Please try again!</p>;

  return (
    <>
      <section className="like_buttons">
        <button onClick={handleDislikes}> - Dislike</button>
        <p>Votes: {totalVotes + votes}</p>
        <button onClick={handleLikes}> + Like</button>
      </section>
    </>
  );
}
