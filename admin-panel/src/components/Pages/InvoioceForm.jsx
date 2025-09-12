import React, { useState } from "react";
import axios from "axios";

// Initial structure for a single line item
const initialLineItem = {
  description: "",
  quantity: 1,
  unitPrice: 0.0,
};

const InvoiceForm = () => {
  // 1. State for main invoice details
  const [invoiceDetails, setInvoiceDetails] = useState({
    customerName: "",
    invoiceDate: new Date().toISOString().substring(0, 10), // YYYY-MM-DD
    dueDate: new Date(new Date().setDate(new Date().getDate() + 7))
      .toISOString()
      .substring(0, 10), // +7 days
  });

  // 2. State for line items (products/services)
  const [lineItems, setLineItems] = useState([initialLineItem]);

  // Handle changes for main invoice details
  const handleDetailChange = (e) => {
    setInvoiceDetails({
      ...invoiceDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes for a specific line item
  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...lineItems];
    // Convert quantity/price to number, ensuring safe inputs
    list[index][name] = name === "description" ? value : parseFloat(value) || 0;
    setLineItems(list);
  };

  // Add a new blank line item
  const handleAddItem = () => {
    setLineItems([...lineItems, initialLineItem]);
  };

  // Remove a line item
  const handleRemoveItem = (index) => {
    const list = [...lineItems];
    list.splice(index, 1);
    setLineItems(list);
  };

  // Calculate the total amount
  const calculateTotal = () => {
    return lineItems.reduce(
      (acc, item) => acc + item.quantity * item.unitPrice,
      0
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const invoiceData = {
      ...invoiceDetails,
      items: lineItems.filter((item) => item.description), // Only send items with a description
      totalAmount: calculateTotal(),
    };

    console.log("Submitting Invoice:", invoiceData); // Debugging

    try {
      const res = await axios.post(
        "http://localhost:5000/api/invoices",
        invoiceData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(`Invoice created successfully! ID: ${res.data.invoiceId}`);
      // Reset form (optional)
      setInvoiceDetails({
        customerName: "",
        invoiceDate: new Date().toISOString().substring(0, 10),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 7))
          .toISOString()
          .substring(0, 10),
      });
      setLineItems([initialLineItem]);
    } catch (err) {
      console.error(
        "Error creating invoice:",
        err.response ? err.response.data : err.message
      );
      alert("Error creating invoice. Check the console for details.");
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 p-8 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-3xl font-extrabold text-purple-700 text-center">
            Create New Invoice 🧾
          </h2>
          <p className="text-sm text-gray-500 text-center mt-1">
            Fill in the details for your new sales invoice.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Main Details Section */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-purple-50/50">
            {/* Customer Name */}
            <div>
              <label
                htmlFor="customerName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
                value={invoiceDetails.customerName}
                onChange={handleDetailChange}
                required
              />
            </div>

            {/* Invoice Date */}
            <div>
              <label
                htmlFor="invoiceDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Invoice Date
              </label>
              <input
                type="date"
                id="invoiceDate"
                name="invoiceDate"
                className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
                value={invoiceDetails.invoiceDate}
                onChange={handleDetailChange}
                required
              />
            </div>

            {/* Due Date */}
            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
                value={invoiceDetails.dueDate}
                onChange={handleDetailChange}
                required
              />
            </div>
          </div>

          {/* Line Items Section */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Items
            </h3>

            {/* Table Header */}
            <div className="grid grid-cols-6 gap-3 py-2 text-sm font-semibold text-gray-600 border-b border-gray-300 mb-2">
              <span className="col-span-3">Description</span>
              <span className="text-right">Quantity</span>
              <span className="text-right">Unit Price</span>
              <span className="text-right">Amount</span>
            </div>

            {/* Dynamic Line Items */}
            {lineItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-3 items-center mb-3"
              >
                {/* Description Input */}
                <input
                  type="text"
                  name="description"
                  placeholder="Service or Product"
                  className="col-span-3 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-purple-500 focus:border-purple-500"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />

                {/* Quantity Input */}
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-right focus:ring-purple-500 focus:border-purple-500"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />

                {/* Unit Price Input */}
                <input
                  type="number"
                  name="unitPrice"
                  min="0"
                  step="0.01"
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-right focus:ring-purple-500 focus:border-purple-500"
                  value={item.unitPrice}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />

                {/* Calculated Amount & Remove Button */}
                <div className="flex items-center justify-end space-x-2">
                  <span className="text-sm font-medium text-gray-800 w-16 text-right">
                    $ {(item.quantity * item.unitPrice).toFixed(2)}
                  </span>
                  {lineItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700 transition duration-150"
                      title="Remove Item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddItem}
              className="mt-4 text-purple-600 hover:text-purple-800 text-sm font-semibold flex items-center transition duration-150"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add Line Item
            </button>
          </div>

          {/* Footer and Total */}
          <div className="p-8 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <div className="text-lg font-bold text-gray-800">
              Grand Total:{" "}
              <span className="text-purple-600 ml-2">
                $ {calculateTotal().toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
