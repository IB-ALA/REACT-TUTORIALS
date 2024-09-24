import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CommentsList from "./pages/comments";
import RecipeList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>React routing, Custom hooks and more</h2>
      <div>
        <Link to={"/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/recipe-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Recipe List page
      </button>

      <button
        onClick={() => navigate("/comments-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Comments List page
      </button>
      <Routes>
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/comments-list" element={<CommentsList />} />
        <Route path="/recipe-list/:id" element={<RecipeDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
