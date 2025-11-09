import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentStatus() {
  const [status, setStatus] = useState("Checking payment status...");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkStatus = async () => {
      const merchantOrderId = searchParams.get("merchantOrderId");
      if (!merchantOrderId) {
        setStatus("⚠️ Invalid or missing order ID");
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/payment-status`,
          { params: { merchantOrderId } }
        );

        console.log("Payment status response:", res.data);

        if (res.data.success && res.data.code === "PAYMENT_SUCCESS") {
          setStatus("✅ Payment Successful!");
          // redirect after short delay
          setTimeout(() => navigate("/success"), 1500);
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
