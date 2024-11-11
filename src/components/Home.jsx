import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <Link to="/articles">Click here to login, grumpy 19.</Link>
    </>
  );
}
