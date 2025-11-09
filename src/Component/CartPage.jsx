import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const frames = [
    { name: "No Frame", color: "bg-transparent", borderColor: "transparent" },
    { name: "Matte Black", color: "bg-black", borderColor: "#000000" },
    { name: "White", color: "bg-white border", borderColor: "#ffffff" },
    { name: "Cream", color: "bg-[#f5f5f5] border", borderColor: "#f5f5f5" },
    { name: "Oak", color: "bg-yellow-700", borderColor: "#b45309" },
    { name: "Walnut", color: "bg-amber-950", borderColor: "#451a03" },
  ];

  // Increase quantity
  const increaseQty = (
    id,
    price,
    height,
    width,
    artType,
    selectedFrame,
    category
  ) => {
    const updated = cart?.map((item) =>
      item?.id === id &&
      item?.price === price &&
      item?.height === height &&
      item?.width === width &&
      item?.artType === artType &&
      item?.selectedFrame === selectedFrame &&
      item?.category === category
        ? { ...item, quantity: item?.quantity + 1 }
        : item
    );
    setCart(updated);
  };

  // Decrease quantity
  const decreaseQty = (
    id,
    price,
    height,
    width,
    artType,
    selectedFrame,
    category
  ) => {
    const updated = cart
      ?.map((item) =>
        item?.id === id &&
        item?.price === price &&
        item?.height === height &&
        item?.width === width &&
        item?.artType === artType &&
        item?.selectedFrame === selectedFrame &&
        item?.category === category
          ? { ...item, quantity: item?.quantity - 1 }
          : item
      )
      .filter((item) => item?.quantity > 0);
    setCart(updated);
  };

  // Remove item
  const removeItem = (
    id,
    price,
    height,
    width,
    artType,
    selectedFrame,
    category
  ) => {
    const updated = cart?.filter(
      (item) =>
        !(
          item.id === id &&
          item.price === price &&
          item.height === height &&
          item.width === width &&
          item.artType === artType &&
          item.selectedFrame === selectedFrame &&
          item.category === category
        )
    );
    setCart(updated);
  };

  // Clear all items
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-xl md:text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart?.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cart?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between"
              >
                {/* Product Info */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <img
                    src={item?.image || item?.wallImage}
                    alt={item?.title}
                    className="w-24 h-24 object-contain rounded"
                    style={{
                      border:
                        item?.selectedFrame === "No Frame" ||
                        item?.category === "artifacts" ||
                        item?.image === undefined
                          ? "none"
                          : `3px solid ${
                              frames.find((f) => f.name === item?.selectedFrame)
                                ?.borderColor || "#000"
                            }`,
                    }}
                  />
                  <div className="flex flex-col">
                    {item?.category !== "poster" &&
                      item?.category !== "cinemapremi" && (
                        <h2 className="text-lg font-semibold">{item?.title}</h2>
                      )}
                    <div className="flex items-center flex-wrap gap-2 text-sm">
                      {item?.category !== "artifacts" &&
                        item?.resizeOption === undefined && (
                          <p className="text-gray-700">
                            Size: {item?.width}" x {item?.height}" |
                          </p>
                        )}
                      {item?.category !== "artifacts" &&
                        item?.handmadeOption === false &&
                        item?.paintingOption === false && (
                          <p className="text-gray-700">Type: {item?.artType}</p>
                        )}
                    </div>
                    {item?.category !== "artifacts" &&
                      item?.frameOption === undefined && (
                        <p className="text-gray-700 text-sm">
                          Frame: {item?.selectedFrame}
                        </p>
                      )}
                    {item?.category === "artifacts" &&
                      item?.title === "Glitch Clock (Clay)" && (
                        <p className="text-gray-700 text-sm">
                          Clock Color: {item?.selectedFrame}
                        </p>
                      )}

                    <p className="text-sm text-gray-500">
                      Final Price: ₹{item?.price?.toLocaleString()}
                    </p>

                    {/* Qty Controls */}
                    <div className="flex items-center mt-2 gap-2">
                      <button
                        onClick={() =>
                          decreaseQty(
                            item?.id,
                            item?.price,
                            item?.height,
                            item?.width,
                            item?.artType,
                            item?.selectedFrame,
                            item.category
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item?.quantity}</span>
                      <button
                        onClick={() =>
                          increaseQty(
                            item?.id,
                            item?.price,
                            item?.height,
                            item?.width,
                            item?.artType,
                            item?.selectedFrame,
                            item.category
                          )
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-2 text-teal-600 font-semibold">
                      Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() =>
                    removeItem(
                      item.id,
                      item.price,
                      item.height,
                      item.width,
                      item.artType,
                      item.selectedFrame,
                      item.category
                    )
                  }
                  className="mt-4 md:mt-0 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 w-full md:w-auto"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
            <h3 className="text-lg md:text-xl font-semibold">
              Total: ₹
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={clearCart}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 w-full sm:w-auto"
              >
                Clear All
              </button>
              {/* <button
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      total: cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      ),
                    },
                  })
                }
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
              >
                Proceed to Checkout
              </button> */}
              <button
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
              >
                Proceed to Checkout
              </button>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
