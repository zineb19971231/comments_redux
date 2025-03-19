import { Link } from "react-router-dom";
import "./redux.css"; // Importation du fichier CSS

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Comments</Link>
        </li>
        <li>
          <Link to="/add" className="nav-item">Add Comment</Link>
        </li>
      </ul>
    </nav>
  );
}
