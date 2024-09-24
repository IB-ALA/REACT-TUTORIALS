import { useLocation } from "react-router-dom";

function RecipeList() {
  const location = useLocation();
  console.log(location); // has the path name and all search queries

  return (
    <div>
      <h2>Recipe list page</h2>
    </div>
  );
}

export default RecipeList;
