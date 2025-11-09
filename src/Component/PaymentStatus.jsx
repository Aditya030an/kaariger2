import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function PaymentStatus() {
  const [status, setStatus] = useState("Checking...");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const checkStatus = async () => {
    //   const txnId = searchParams.get("txnId");
    //   if (!txnId) return setStatus("Invalid Transaction");

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/payment-status`
        );

        console.log("res)_)_)_)_)_)_)_)_)_)))_)_)_)_)_)_)_)_)_" , res.data);

        if (res.data.success && res.data.code === "PAYMENT_SUCCESS") {
          setStatus("✅ Payment Successful!");
        } else {
          setStatus("❌ Payment Failed or Pending");
        }
      } catch (err) {
        console.error(err);
        setStatus("⚠️ Error checking payment status");
      }
    };

    checkStatus();
  }, [searchParams]);

  return (
    <div className="h-screen flex items-center justify-center text-2xl font-semibold">
      {status}
    </div>
  );
}
