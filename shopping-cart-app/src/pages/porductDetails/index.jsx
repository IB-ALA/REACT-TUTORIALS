import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  //
  const { id } = useParams();
  console.log(id);

  return <div>Product details page. Product: {id}</div>;
}

export default ProductDetailsPage;
