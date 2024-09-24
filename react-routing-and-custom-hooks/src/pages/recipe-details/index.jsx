import { useParams } from "react-router-dom";

function RecipeDetailsPage() {
  const params = useParams(); // has all params
  console.log(params);
  const { id } = params;

  return (
    <div>
      <h2>Recipe details of recipe item {id}</h2>
    </div>
  );
}

export default RecipeDetailsPage;
