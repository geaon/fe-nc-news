import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import { deleteComment } from "../../api";

export default function CommentDeleter({ comment_id, author }) {
  const { user, setUser } = useContext(UserContext);
  const [deleteMessage, setDeleteMessage] = useState();

  function handleClick() {
    deleteComment(comment_id, user).then((results) => {
      setDeleteMessage("Comment deleted");
      alert("confirm comment deletion");
    });
  }
  return user === author ? <button onClick={handleClick}>Delete</button> : null;
}
