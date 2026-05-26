"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";

interface Row {
  id: string;
  area: string;
  floor: string;
  pattern: string;
  base: string;
  basePattern: string;
}

const createRow = (): Row => ({
  id: typeof crypto !== "undefined" && typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}`,
  area: "",
  floor: "",
  pattern: "",
  base: "",
  basePattern: "",
});

export default function App() {
  useEffect(() => {
    loadData();
  }, []);

  const [rows, setRows] = useState<Row[]>([
    {
      id: createRow().id,
      area: "",
      floor: "",
      pattern: "",
      base: "",
      basePattern: "",
    },
  ]);

  const removeItem = (id: string) => {
    setRows((currentRows) => currentRows.filter((row) => row.id !== id));
  };

  const addItem = () => {
    setRows((currentRows) => [...currentRows, createRow()]);
  };

  const updateRow = (id: string, field: keyof Omit<Row, "id">, value: string) => {
    setRows((currentRows) =>
      currentRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const saveData = () => {
    localStorage.setItem("room", JSON.stringify(rows));
    console.log("Saving data:", rows);
  }

  const loadData = () => {
    const savedData = localStorage.getItem("room");
    if (savedData) {
      setRows(JSON.parse(savedData));
      updateRow(JSON.parse(savedData).id, "area", JSON.parse(savedData).area);
      updateRow(JSON.parse(savedData).id, "floor", JSON.parse(savedData).floor);
      updateRow(JSON.parse(savedData).id, "pattern", JSON.parse(savedData).pattern);
      updateRow(JSON.parse(savedData).id, "base", JSON.parse(savedData).base);
      updateRow(JSON.parse(savedData).id, "basePattern", JSON.parse(savedData).basePattern);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Custom Project</h1>
          <p className="mt-2 text-sm text-gray-500">
            Add one row for every location and select the kind and option.
            Input the pattern that goes with each location.
            You can leave blank and update later if you don't have the info right now.
          </p>
        </div>

        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Area</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Flooring</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Floor Pattern</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Floor Base</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Base Pattern</th>
              <th className="border border-gray-300 px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    className="w-full rounded-md border border-gray-200 bg-white p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Area"
                    value={row.area}
                    onChange={(event) => updateRow(row.id, "area", event.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Dropdown
                    options={["resilient", "carpet", "***"]}
                    value={row.floor}
                    onChange={(event) => updateRow(row.id, "floor", event.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    className="w-full rounded-md border border-gray-200 bg-white p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Pattern search"
                    value={row.pattern}
                    onChange={(event) => updateRow(row.id, "pattern", event.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Dropdown
                    options={["Broadloom", "Carpet tile", "***"]}
                    value={row.base}
                    onChange={(event) => updateRow(row.id, "base", event.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    className="w-full rounded-md border border-gray-200 bg-white p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="search"
                    value={row.basePattern}
                    onChange={(event) => updateRow(row.id, "basePattern", event.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="inline-flex items-center justify-center rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    onClick={() => removeItem(row.id)}
                    type="button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-3 pt-4">
          <button 
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={addItem} 
            type="button"
          >
            Add Row
          </button>
        </div>

        <div className="flex gap-3 pt-6">
          <Link href="/new-ticket">
            <button 
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={saveData}
            >
              Back
            </button>
          </Link>
          <Link href="/new-ticket/custom/notes">
            <button 
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={saveData}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
