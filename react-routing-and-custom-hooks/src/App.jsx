import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import CommentsList from "./pages/comments";
import RecipeList from "./pages/recipes";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";

// another way of routes
function CustomRoutes() {
  // if the children have children, you add them
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipe-list", element: <RecipeList /> },
        { path: "comments-list", element: <CommentsList /> },
        { path: "recipe-list", element: <RecipeList /> },
        { path: "recipe-list/:id", element: <RecipeDetailsPage /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
    { path: "/react-hook-form", element: <ReactHookFormExamplePage /> },
  ]);

  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>React routing, Custom hooks and more</h2>
      <div>
        <Link to={"/home/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Recipe List page
      </button>

      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Comments List page
      </button>

      {/* common layout, using outlet */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes> */}
      <CustomRoutes />
    </div>
  );
}

export default App;
