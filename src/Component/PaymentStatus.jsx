import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentStatus({
  cart,
  setCart,
  orderData,
  setOrderData,
}) {
  console.log("cart" , cart);
  console.log("orderData" , orderData);
  const [status, setStatus] = useState("Checking payment status...");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const priceData = JSON.parse(localStorage.getItem("price_data"));

  console.log("user data payment status", userData);
  console.log("price data payment status", priceData);

  useEffect(() => {
    const checkStatus = async () => {
      const merchantOrderId = searchParams.get("merchantOrderId");
      if (!merchantOrderId) {
        setStatus("⚠️ Invalid or missing order ID");
        return;
      }

      try {
        // const res = await axios.get(
        //   `${import.meta.env.VITE_BACKEND_URL}/api/payment-status`,
        //   { params: { merchantOrderId } }
        // );
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/payment-status`,
          {
            merchantOrderId,
            userData,
            priceData,
            cart,
          }
        );

        
        if (res.data.success && res.data.code === "PAYMENT_SUCCESS") {
          setStatus("✅ Payment Successful!");
          // redirect after short delay
          setTimeout(() => navigate("/success"), 1500);
          console.log("Payment status response:", res.data);
  
          const newOrder = {
            order_id: res.data.order_id ,
            merchantOrderId: merchantOrderId,
            orderItems: cart,
            priceData:priceData,
            date: new Date().toLocaleString(),
  
          };
  
         setOrderData(prev => [...prev, newOrder]);
          setCart([]);
        } else {
          setStatus("❌ Payment Failed or Pending");
          setTimeout(() => navigate("/failed"), 1500);
        }
      } catch (err) {
        console.error(err);
        setStatus("⚠️ Error checking payment status");
        setTimeout(() => navigate("/failed"), 1500);
      }
    };

    checkStatus();
  }, [searchParams, navigate]);

  return (
    <div className="h-screen flex items-center justify-center text-2xl font-semibold">
      {status}
    </div>
  );
}
