import { useState, useEffect } from "react";
import { getComments } from "../../api";
import { useParams } from "react-router-dom";

export default function ArticleComments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
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
            </section>
          );
        })}
      </section>
    );
  }
}
