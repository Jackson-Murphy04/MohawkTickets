'use client';
import Link from "next/link";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);

  const saveData = (name: string) => {
    localStorage.setItem("protoName", name);
    setSelected(name);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h1 className="text-2xl font-semibold text-slate-900">
            Pick the pre-approved checklist
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Filter by company or construction type, then choose the brand standard package.
            The next step opens the matching checklist.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-slate-900">Courtyard</h2>
            <p className="mt-2 text-sm text-slate-500">
              Use the approved Courtyard checklist for standard prototype builds.
            </p>
            <Link href="/new-ticket/prototype/courtyard">
              <button
                className="mt-6 inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => saveData("courtyard")}
              >
                Go
              </button>
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-slate-900">Fairfield Inn</h2>
            <p className="mt-2 text-sm text-slate-500">
              Brand standard package for Fairfield Inn prototype builds.
            </p>
            <button className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              Coming soon
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-slate-900">Hampton Inn - Kinetic</h2>
            <p className="mt-2 text-sm text-slate-500">
              Standard prototype checklist for Hampton Inn Kinetic projects.
            </p>
            <button className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              Coming soon
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-slate-900">Holiday Inn Express</h2>
            <p className="mt-2 text-sm text-slate-500">
              Quick access to Holiday Inn Express prototype package options.
            </p>
            <button className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              Coming soon
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-slate-900">Hampton Inn - Scenic</h2>
            <p className="mt-2 text-sm text-slate-500">
              Select this for Scenic prototype builds when available.
            </p>
            <button className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              Coming soon
            </button>
          </div>
        </div>

        <div className="flex justify-start">
          <Link href="/new-ticket">
            <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}