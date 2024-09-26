import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function CartItem({ item }) {
  const { handleRemoveFromcart, handleAddTocart } =
    useContext(ShoppingCartContext);

  return (
    <>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={item?.thumbnail}
              alt={item?.title + " image"}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h3 className="text-base font-bold text-gray-900">{item?.title}</h3>

            <button
              onClick={() => handleRemoveFromcart(item, true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              REMOVE
            </button>
          </div>

          <div className="ml=auto">
            <h3 className="text-lg font-bold text-gray-900">
              ₵{item?.totalPrice?.toFixed(2)}
            </h3>

            <p className="mt-2 mb-3 font-bold text-[16px]">
              Quantity: {item?.quantity}
            </p>

            <div className="mt-3 flex gap-2">
              <button
                disabled={item?.quantity === 1}
                onClick={() => handleRemoveFromcart(item, false)}
                className="disabled:opacity-65 border border-[#000] font-bold text-[20px]"
              >
                -
              </button>

              <button
                onClick={() => handleAddTocart(item)}
                className="border border-[#000] font-bold text-[20px]"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-500" />
    </>
  );
}

export default CartItem;
