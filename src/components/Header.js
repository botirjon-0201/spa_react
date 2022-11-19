import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            React
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
