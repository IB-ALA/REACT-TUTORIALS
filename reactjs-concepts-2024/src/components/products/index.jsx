import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

const initialState = true;

// nested components
function ProductList({ name, city, listOfProducts }) {
  // console.log(props);
  // const { name, city } = props;

  // const flag = false;

  // useState()
  const [flag, setFlag] = useState(initialState);
  // 'initialState' can be any type of value(even 'null').

  const [count, setCount] = useState(0);
  const [changeSytle, setChangeStyle] = useState(false);

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

  useEffect(() => {
    setFlag(!flag);
    console.log("run on page load once");
    return () => {
      console.log("component is unmounted -> some side effects");
    };
  }, []);
  // this will only run on page load once: empty dependency: "[]"
  // sometimes useEffect can return a callBack '()=>{}'
  // to make some cleanups like componentWillUnmount

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

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("count changes");
    if (count === 10) setChangeStyle(true);
  }, [count]);

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

      <div>
        <p>Count is {count}</p>
      </div>
      <button
        style={{
          backgroundColor: changeSytle ? "black" : "white",
          color: changeSytle ? "white" : "black",
        }}
        onClick={handleIncreaseCount}
      >
        Increase count
      </button>

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
