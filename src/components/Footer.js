import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <Link className="grey-text text-lighten-4 right" to="/">
            REPO
          </Link>
        </div>
      </div>
    </footer>
  );
}
