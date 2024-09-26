import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home page</h1>
      <button
        className="bg-white text-black border-black mt-5"
        onClick={() => navigate("/products")}
      >
        See products
      </button>
    </div>
  );
}

export default HomePage;
