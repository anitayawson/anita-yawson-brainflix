import "./NotFound.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__title">404</div>
      <p className="not-found__text">
        Oops! It seems like you've stumbled upon a page that doesn't exist. But
        don't worry, you can find plenty of other things on our{" "}
        <span>
          <Link className="not-found__redirect" to="/">
            homepage
          </Link>
        </span>
        .
      </p>
    </main>
  );
}
