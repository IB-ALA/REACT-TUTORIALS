import { useLocation } from "react-router-dom";

function RecipeList() {
  const location = useLocation(); // has the path name and all search queries
  // console.log(location);

  return (
    <div>
      <h2>Recipe list page</h2>
    </div>
  );
}

export default RecipeList;
