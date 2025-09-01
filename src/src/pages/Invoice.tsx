import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const Invoice: React.FC = () => {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("AROMERA FRAGRANCES", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 14, 40);

    let y = 60;
    cart.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.product.name} - ${item.quantity} x ₹${
          item.product.price
        }`,
        14,
        y
      );
      y += 10;
    });

    doc.text(`----------------------------------------`, 14, y);
    y += 10;
    doc.text(`Total: ₹${totalPrice.toFixed(2)}`, 14, y);

    doc.save("invoice.pdf");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-center mb-4">
        AROMERA FRAGRANCES
      </h1>
      <p className="text-center mb-6">
        Invoice Date: {new Date().toLocaleDateString()}
      </p>

      <table className="w-full border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.product.id}>
              <td className="p-2 border">{item.product.name}</td>
              <td className="p-2 border">{item.quantity}</td>
              <td className="p-2 border">
                ₹{(item.product.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-lg font-semibold text-right mb-6">
        Total: ₹{totalPrice.toFixed(2)}
      </h2>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back to Home
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
