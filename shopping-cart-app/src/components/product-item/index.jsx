import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductItem({ product }) {
  const navigate = useNavigate();

  const { cartItems, handleAddTocart } = useContext(ShoppingCartContext);

  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={product?.thumbnail}
          alt={product?.title + " image"}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>

      <div className="flex item-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {product?.title}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ₵{product?.price}
          </p>
        </div>
      </div>

      <button
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
        onClick={() => navigate(`/product-details/${product?.id}`)}
      >
        View Details
      </button>

      <button
        disabled={cartItems?.findIndex((item) => item.id === product.id) > -1}
        className="disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
        onClick={() => handleAddTocart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
