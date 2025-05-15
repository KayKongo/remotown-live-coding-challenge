"use client";

import { useEffect, useState } from "react";

// TODO: Define the correct type/interface for Bill --> DONE
interface Bill {
  meterID: string;
  balance: number;
  last_bought: number;
}

const initialBill: Bill = {
  meterID: "P0201232",
  balance: 20,
  last_bought: Date.now(),
};

const BillComponent = () => {
  // TODO: Define state for bill and amount --> DONE
  const [bill, setBill] = useState<Bill>(initialBill);
  const [amount, setAmount] = useState<number>(0);

  // TODO: Write a function to Deduct 10 cedis every 20 seconds --> Done
  useEffect(() => {
    const interval = setInterval(() => {
      setBill((prevBill) => {
        return { ...prevBill, balance: Math.max(prevBill.balance - 10, 0) };
      });
    }, 20000);

    return () => clearInterval(interval); // cleanup
  });

  // TODO: Handle Add to Balance --> Done
  const handleAddToBalance = () => {
    setBill((prevBill) => {
      return { ...prevBill, balance: Math.max(prevBill.balance + amount, 0) };
    });

    setAmount(0);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">ECG Bill</h1>
      {/* Show Meter Information --> Done */}
      <div>
        <h3>Meter ID: {bill.meterID}</h3>
        <h3>Balance: GHC {bill.balance.toFixed(2)}</h3>
        <h3>Last Bought: {new Date(bill.last_bought).toLocaleString()}</h3>
      </div>

      <div className="mt-4">
        <input
          type="number"
          placeholder="Enter amount"
          className="border px-2 py-1 mr-2"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(Number(e.currentTarget.value));
          }}
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={() => handleAddToBalance()}
        >
          Add Balance
        </button>
      </div>
    </div>
  );
};
export default BillComponent;
