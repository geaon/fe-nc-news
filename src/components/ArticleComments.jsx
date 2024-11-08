import { useState, useEffect } from "react";
import { getComments } from "../../api";
import { useParams } from "react-router-dom";
import CommentDeleter from "./CommentDeleter";

export default function ArticleComments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [deleteComment, setDeleteComment] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getComments(article_id).then((result) => {
      setComments(result.data.comments);
      setLoaded(true);
    });
  }, [comments]);

  if (loaded) {
    return (
      <section>
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id} className="each_comment">
              <p> {comment.body}</p>
              <p>Comment By: {comment.author}</p>
              <p>Commented At: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
              <CommentDeleter
                comment_id={comment.comment_id}
                setDeleteComment={setDeleteComment}
                author={comment.author}
              ></CommentDeleter>
            </section>
          );
        })}
      </section>
    );
  } else return <p>Loading...</p>;
}
