import { useLocation } from "react-router-dom";
import useFecth from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

// this one below helps with the images paths
// import images from "./images/products/vanity-mirror-silver.jpg";
// console.log(images);

function RecipeList() {
  const location = useLocation(); // has the path name and all search queries
  // console.log(location);

  // do same for the comments page is you want
  // there is "SWR" too,
  // a custom fetch hook that you have to install first
  // (using npm install...)
  const { data, loading, error } = useFecth(
    "http://localhost:5000/dea/products"
  );

  const windowSize = useWindowResize();

  if (loading) return <h4>Fetching recipes! Please wait</h4>;
  if (error)
    return <h4>Couldn't fetch recipes. Please try again after some time</h4>;

  return (
    <div>
      <h2 style={{ color: windowSize.width < 600 ? "red" : "black" }}>
        Recipe list page
      </h2>
      <h3>
        Current window width is {windowSize.width} and window height is{" "}
        {windowSize.height}
      </h3>

      <ul>
        {data?.Success && data?.data?.length > 0
          ? data?.data.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "2px solid gray",
                  borderRadius: "2rem",
                  marginBottom: "20px",
                  paddingTop: "20px",
                  maxWidth: "350px",
                  margin: " 0 auto 20px",
                }}
              >
                <img
                  style={{ height: "150px" }}
                  src={`/src/pages/recipes/images/products/${item.image}`}
                  alt={item?.name + " image"}
                />
                <h4>{item.name}</h4>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default RecipeList;
