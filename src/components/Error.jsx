import { useState } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  const [error, setError] = useState(false);

  function handleClick() {
    setError(false);
  }

  return (
    <>
      <h2>Sorry, I can't find what you're looking for!</h2>;
      <button onClick={handleClick}>
        <Link to="/articles">Back to Articles</Link>{" "}
      </button>
      ;
    </>
  );
}
