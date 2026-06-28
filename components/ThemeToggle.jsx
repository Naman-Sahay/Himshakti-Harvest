"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <div
      className={`min-h-screen p-6 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        className="px-4 py-2 bg-green-500 rounded"
        onClick={() => setDark(!dark)}
      >
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-4xl mt-6 font-bold">
        HimShakti Harvest
      </h1>

      <p className="mt-4">
        Fresh products from the Himalayas.
      </p>
    </div>
  );
}