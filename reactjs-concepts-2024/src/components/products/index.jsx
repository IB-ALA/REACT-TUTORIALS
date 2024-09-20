import { useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

const initialState = false;

// nested components
function ProductList({ name, city, listOfProducts }) {
  // console.log(props);
  // const { name, city } = props;

  // const flag = false;

  // useState()
  const [flag, setFlag] = useState(initialState);
  // 'initialState' can be any type of value.

  console.log(flag);

  function renderTextBlock(flag) {
    return flag ? (
      <h4>
        Name is {name} and he belongs to {city} city
      </h4>
    ) : (
      <h4>Hello world</h4>
    );
  }

  function handleToggleText() {
    setFlag(!flag);
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
      {/* {renderTextBlock(flag)} */}
      {/* {renderTextBlock} */}

      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}
      <button onClick={handleToggleText}>Toggle Text</button>

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
