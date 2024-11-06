import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome, grumpy19!</h1>
      <Link to="/articles">Click to Login</Link>
    </>
  );
}
