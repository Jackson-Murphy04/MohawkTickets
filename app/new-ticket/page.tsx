'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function App() {
  useEffect(() => {
    // This runs once when the page loads in the browser
    //console.log("Page loaded!");
    loadData(); // Load any saved data from localStorage
  }, []);

  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [projectName, setProjectName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [ticketNumber, setTickerNumber] = useState("");
  const [jobNumber, setJobNumber] = useState("");

  const saveData = () => {
    localStorage.setItem("projectName", projectName);
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("ticketNumber", ticketNumber);
    localStorage.setItem("jobNumber", jobNumber);
  }

  const loadData = () => {
    setProjectName(localStorage.getItem("projectName") || "");
    setCustomerName(localStorage.getItem("customerName") || "");
    setTickerNumber(localStorage.getItem("ticketNumber") || "");
    setJobNumber(localStorage.getItem("jobNumber") || "");
    setSelectedOption(localStorage.getItem("isProto") === "true" ? "proto" : "custom");
  }

  async function getName(num: string) {
    const response = await fetch(`/api/jobData/?jobNumber=${encodeURIComponent(num)}`);
    const data = await response.json();
    setProjectName(data.jobName || "");
  }
  

  const handleSubmit = () => {
    if (localStorage.getItem("isProto") === "true" && selectedOption === "custom") {
      localStorage.clear();
    }
    saveData();

    if (selectedOption === "proto") {
      localStorage.setItem("isProto", "true");
      return "/new-ticket/prototype";
    }
    localStorage.setItem("isProto", "false");
    return "/new-ticket/custom";
  };


  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">What the name of this Project</h1>
        <p className="mt-2 text-sm text-gray-500">
          Lead with the property building name, end with the scope. This name is what everyone will search for later.
        </p>
        <input
          name="projectName"
          placeholder="Holiday Inn Express - Asheville"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          className="mt-3 block w-full rounded-md border border-gray-200 bg-white p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <h2 className="text-xl font-medium text-gray-800">Customer / Property Owner</h2>
        <input
          name="customer"
          placeholder="Hawthorn Hospitality Group"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          className="mt-3 block w-full rounded-md border border-gray-200 bg-white p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <h2 className="text-xl font-medium text-gray-800">Tie it to a job</h2>
        <p className="mt-1 text-sm text-gray-500">
          Three identifiers connect this ticket to AS400, pricing, and fulfilment.
        </p>
        <label className="block">
          <span className="sr-only">Ticket Number</span>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-700">Ticket Number</label>
              <input
                name="Ticket Number"
                placeholder="CAD-2842"
                value={ticketNumber}
                onChange={e => setTickerNumber(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Job Number</label>
              <input
                name="Job Number"
                placeholder="JOB-44103"
                value={jobNumber}
                onChange={e => {setJobNumber(e.target.value); getName(e.target.value)}}
                className="mt-2 block w-full rounded-md border border-gray-200 bg-white p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>
        </label>

        <h2 className="text-xl font-medium text-gray-800">Is this a prototype build?</h2>
        <p className="mt-1 text-sm text-gray-500">
          Prototypes (like Courtyard, Holiday Inn Express, brand-standard rebuilds) 
          use a simplified checklist of pre-approved areas and product types. Everything else uses the full pattern + cove base entry 
        </p>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="protoRadio"
              value="proto"
              checked={selectedOption === "proto"}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">Yes, prototype build</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="protoRadio"
              value="custom"
              checked={selectedOption === "custom"}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-700">No - custom project</span>
          </label>
        </div>

        <div id="nav" className="flex justify-between items-center pt-4 border-t border-gray-100">
          <Link href="/">
            <button 
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50"
              onClick={saveData}
            >
              Back
            </button>
          </Link>
          <button
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            onClick={() => router.push(handleSubmit())}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}