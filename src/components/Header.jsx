import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <button>
          <Link to="/">HOME</Link>
        </button>
      </nav>
      <header className="header" id="header">
        <h1>NC NEWS</h1>
      </header>
      <nav>
        <Link to="/topic/coding" className="button" id="coding">
          CODING
        </Link>
        <Link to="/topic/cooking" className="button" id="cooking">
          COOKING
        </Link>
        <Link to="/topic/football" className="button" id="football">
          FOOTBALL
        </Link>
      </nav>
    </>
  );
}
