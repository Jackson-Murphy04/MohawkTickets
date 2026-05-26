'use client';
import Link from "next/link";

export default function App() {
  function clearData() {
    localStorage.clear();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white px-6 py-8 shadow-xl ring-1 ring-black/5">
          <h1 className="text-2xl font-semibold text-slate-900">New project</h1>
          <p className="mt-2 text-sm text-slate-500">
            Start a new ticket workflow with a clean project entry.
          </p>
          <Link href="/new-ticket">
            <button
              className="mt-6 inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={clearData}
            >
              Start
            </button>
          </Link>
        </div>

        <div className="rounded-3xl bg-white px-6 py-8 shadow-xl ring-1 ring-black/5">
          <h1 className="text-2xl font-semibold text-slate-900">Tickets</h1>
          <p className="mt-2 text-sm text-slate-500">
            Review active tickets and continue working without losing context.
          </p>
          <Link href="/active-tickets">
            <button className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              View
            </button>
          </Link>
        </div>
      </div>
      {/*other options*/}
    </div>
  );
}