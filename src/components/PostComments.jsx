import { useState } from "react";
import { postComment } from "../../api";

export default function PostComment({ article_id, setComments }) {
  const [newComment, setNewComment] = useState({
    username: "grumpy19",
    body: "",
  });
  const [commentAdded, setCommentAdded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setNewComment({ username: "grumpy19", body: "" });

    postComment(article_id, newComment).then((results) => {
      setComments(results.comment);
      setCommentAdded(true);
    });
  }

  function handleChange(event) {
    const commentInput = event.target.value;
    setNewComment({ ...newComment, [event.target.name]: commentInput });
  }

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <label>
          Your comment:
          <input
            value={newComment.body}
            onChange={handleChange}
            name="body"
            placeholder="Write your comment here..."
          />
        </label>
        <button
          disabled={!newComment.body || commentAdded}
          type="submit"
          //   onClick={() => {}}
        >
          Add Comment
        </button>
        {commentAdded && <p>Your comment has been posted!</p>}
      </form>
    </>
  );
}
