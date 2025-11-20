import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function OrdersPage({orderData}) {
    console.log("order data from prop" , orderData);
  const ordersData = JSON.parse(localStorage.getItem("orderData")) || [];
    console.log("orders data from localStorage" ,ordersData )
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <FaShoppingBag className="text-gray-700" />
        Your Orders
      </h1>

      {ordersData.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {ordersData.map((order, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-md rounded-xl p-5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-semibold text-gray-800">
                    {order.merchantOrderId}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                </div>
              </div>

              <details className="mt-4">
                <summary className="cursor-pointer flex items-center gap-2 text-gray-700 font-semibold">
                  Order Items <FiChevronDown />
                </summary>

                <div className="mt-3 space-y-3">
                  {order.orderItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 bg-gray-50 rounded-lg p-3"
                    >
                      <img
                        src={item.image}
                        className="w-20 h-20 object-cover rounded-lg"
                        alt={item.title}
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-3 border-t pt-3 text-right text-gray-700">
                    <p>Total: ₹{order.priceData.itemsTotal}</p>
                    <p>Discount: -₹{order.priceData.discount}</p>
                    <p className="font-bold text-lg">
                      Final Amount: ₹{order.priceData.finalAmount}
                    </p>
                  </div>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
