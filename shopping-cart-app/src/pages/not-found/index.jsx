import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <div>Page does not exist</div>
      <Link to={"/products"}>Go back to Products page</Link>
    </div>
  );
}

export default NotFoundPage;
