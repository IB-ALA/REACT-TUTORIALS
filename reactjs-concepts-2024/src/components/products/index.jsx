import ProductItem from "./components/product-item";
import "./style.css";

// nested components
function ProductList({ name, city, listOfProducts }) {
  // console.log(props);
  // const { name, city } = props;

  const flag = false;

  function renderTextBlock(flag) {
    return flag ? (
      <h4>
        Name is {name} and he belongs to {city} city
      </h4>
    ) : (
      <h4>Hello world</h4>
    );
  }

  // const renderTextBlock = flag ? (
  //   <h4>
  //     Name is {name} and he belongs to {city} city
  //   </h4>
  // ) : (
  //   <h4>Hello world</h4>
  // );

  // let renderTextBlock = null;
  // if (flag) {
  //   renderTextBlock = (
  //     <h4>
  //       Name is {name} and he belongs to {city} city
  //     </h4>
  //   );
  // } else {
  //   renderTextBlock = <h4>Hello world</h4>;
  // }

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      {/* <ProductItem /> */}

      {/* conditional rendering */}
      {renderTextBlock(flag)}
      {/* {renderTextBlock} */}

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
