import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>This page doesn't exist</h2>
      <Link to={"/home/recipe-list"}>Go to recipe list page</Link>
    </div>
  );
}

export default NotFoundPage;
