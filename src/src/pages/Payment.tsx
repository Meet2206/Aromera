import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Payment: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const location = useLocation();
  const orderData = location.state?.orderData || {};
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const validatePayment = () => {
    const newErrors: Record<string, string> = {};
    if (!paymentData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!paymentData.expiryDate) newErrors.expiryDate = "Expiry date is required";
    if (!paymentData.cvv) newErrors.cvv = "CVV is required";
    if (!paymentData.nameOnCard) newErrors.nameOnCard = "Name on card is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePayment()) return;

    const invoiceData = {
      customerName: `${orderData.firstName || ""} ${orderData.lastName || ""}`,
      email: orderData.email,
      phone: orderData.phone,
      address: orderData.address,
      cart: cart.map((item: any) => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      totalPrice,
    };

    clearCart();
    navigate("/invoice", { state: invoiceData });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            placeholder="MM/YY"
          />
          {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">CVV</label>
          <input
            type="password"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            value={paymentData.nameOnCard}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
          {errors.nameOnCard && <p className="text-red-500 text-sm">{errors.nameOnCard}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Pay Now
        </button>
      </form>
    </motion.div>
  );
};

export default Payment;
