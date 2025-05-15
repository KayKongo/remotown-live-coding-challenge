"use client";
import React, { useEffect, useState } from "react";

// TODO: Define the correct type/interface for Bill
const initialBill = {
  meterID: "P0201232",
  balance: 20,
  last_bought: Date.now(),
};

export default function BillComponent() {
  // TODO: Define state for bill and amount

  // TODO: Write a function to Deduct 10 cedis every 20 seconds

  // TODO: Handle Add to Balance

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">ECG Bill</h2>
        {/* Show Meter Information */}

      <div className="mt-4">
        <input
          type="number"
          placeholder="Enter amount"
          className="border px-2 py-1 mr-2"
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Add Balance
        </button>
      </div>
    </div>
  );
}
