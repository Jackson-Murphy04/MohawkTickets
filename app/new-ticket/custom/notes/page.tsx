'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Notes</h1>
                <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter any notes or details about the ticket here..."

                />
                <div className="mt-4 flex justify-end">
                    <Link href="/">
                        <button 
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                        Save
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}