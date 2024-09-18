import ProductItem from "./components/product-item";

// nested components
function ProductList({ name, city, listOfProducts }) {
  // console.log(props);

  // const { name, city } = props;

  return (
    <div>
      <h3>ECommerce Project</h3>
      {/* <ProductItem /> */}

      <h4>
        Name is {name} and he belongs to {city} city
      </h4>

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
