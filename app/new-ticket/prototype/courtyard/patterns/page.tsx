'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function App() {
  useEffect(() => {
    loadData();
  }, []);

  const [guestFloor, setGuestFloor] = useState("");
  const [guestBase, setGuestBase] = useState("");
  const [corrFloor, setCorrFloor] = useState("");
  const [corrBase, setCorrBase] = useState("");
  const [lobFloor, setLobFloor] = useState("");
  const [lobBase, setLobBase] = useState("");
  const [elevFloor, setElevFloor] = useState("");
  const [elevBase, setElevBase] = useState("");
  const [meetFloor, setMeetFloor] = useState("");
  const [meetBase, setMeetBase] = useState("");
  const [backFloor, setBackFloor] = useState("");
  const [backBase, setBackBase] = useState("");
  const [stairFloor, setStairFloor] = useState("");
  const [stairBase, setStairBase] = useState("");
  const [ballFloor, setBallFloor] = useState("");
  const [ballBase, setBallBase] = useState("");

  const [guestFloorPattern, setGuestFloorPattern] = useState("");
  const [guestBasePattern, setGuestBasePattern] = useState("");
  const [corrFloorPattern, setCorrFloorPattern] = useState("");
  const [corrBasePattern, setCorrBasePattern] = useState("");
  const [lobFloorPattern, setLobFloorPattern] = useState("");
  const [lobBasePattern, setLobBasePattern] = useState("");
  const [elevFloorPattern, setElevFloorPattern] = useState("");
  const [elevBasePattern, setElevBasePattern] = useState("");
  const [meetFloorPattern, setMeetFloorPattern] = useState("");
  const [meetBasePattern, setMeetBasePattern] = useState("");
  const [backFloorPattern, setBackFloorPattern] = useState("");
  const [backBasePattern, setBackBasePattern] = useState("");
  const [stairFloorPattern, setStairFloorPattern] = useState("");
  const [stairBasePattern, setStairBasePattern] = useState("");
  const [ballFloorPattern, setBallFloorPattern] = useState("");
  const [ballBasePattern, setBallBasePattern] = useState("");

  const showGuestroom = guestFloor !== "" || guestBase !== "";
  const showCorridors = corrFloor !== "" || corrBase !== "";
  const showLobby = lobFloor !== "" || lobBase !== "";
  const showElevator = elevFloor !== "" || elevBase !== "";
  const showMeeting = meetFloor !== "" || meetBase !== "";
  const showBack = backFloor !== "" || backBase !== "";
  const showStairs = stairFloor !== "" || stairBase !== "";
  const showBallroom = ballFloor !== "" || ballBase !== "";

  function loadData() {
    setGuestFloor(localStorage.getItem("guestFloor") || "");
    setGuestBase(localStorage.getItem("guestBase") || "");
    setCorrFloor(localStorage.getItem("corrFloor") || "");
    setCorrBase(localStorage.getItem("corrBase") || "");
    setLobFloor(localStorage.getItem("lobFloor") || "");
    setLobBase(localStorage.getItem("lobBase") || "");
    setElevFloor(localStorage.getItem("elevFloor") || "");
    setElevBase(localStorage.getItem("elevBase") || "");
    setMeetFloor(localStorage.getItem("meetFloor") || "");
    setMeetBase(localStorage.getItem("meetBase") || "");
    setBackFloor(localStorage.getItem("backFloor") || "");
    setBackBase(localStorage.getItem("backBase") || "");
    setStairFloor(localStorage.getItem("stairFloor") || "");
    setStairBase(localStorage.getItem("stairBase") || "");
    setBallFloor(localStorage.getItem("ballFloor") || "");
    setBallBase(localStorage.getItem("ballBase") || "");

    setGuestFloorPattern(localStorage.getItem("guestFloorPattern") || "");
    setGuestBasePattern(localStorage.getItem("guestBasePattern") || "");
    setCorrFloorPattern(localStorage.getItem("corrFloorPattern") || "");
    setCorrBasePattern(localStorage.getItem("corrBasePattern") || "");
    setLobFloorPattern(localStorage.getItem("lobFloorPattern") || "");
    setLobBasePattern(localStorage.getItem("lobBasePattern") || "");
    setElevFloorPattern(localStorage.getItem("elevFloorPattern") || "");
    setElevBasePattern(localStorage.getItem("elevBasePattern") || "");
    setMeetFloorPattern(localStorage.getItem("meetFloorPattern") || "");
    setMeetBasePattern(localStorage.getItem("meetBasePattern") || "");
    setBackFloorPattern(localStorage.getItem("backFloorPattern") || "");
    setBackBasePattern(localStorage.getItem("backBasePattern") || "");
    setStairFloorPattern(localStorage.getItem("stairFloorPattern") || "");
    setStairBasePattern(localStorage.getItem("stairBasePattern") || "");
    setBallFloorPattern(localStorage.getItem("ballFloorPattern") || "");
    setBallBasePattern(localStorage.getItem("ballBasePattern") || "");
  }

  function saveData() {
    localStorage.setItem("guestFloorPattern", guestFloorPattern);
    localStorage.setItem("guestBasePattern", guestBasePattern);
    localStorage.setItem("corrFloorPattern", corrFloorPattern);
    localStorage.setItem("corrBasePattern", corrBasePattern);
    localStorage.setItem("lobFloorPattern", lobFloorPattern);
    localStorage.setItem("lobBasePattern", lobBasePattern);
    localStorage.setItem("elevFloorPattern", elevFloorPattern);
    localStorage.setItem("elevBasePattern", elevBasePattern);
    localStorage.setItem("meetFloorPattern", meetFloorPattern);
    localStorage.setItem("meetBasePattern", meetBasePattern);
    localStorage.setItem("backFloorPattern", backFloorPattern);
    localStorage.setItem("backBasePattern", backBasePattern);
    localStorage.setItem("stairFloorPattern", stairFloorPattern);
    localStorage.setItem("stairBasePattern", stairBasePattern);
    localStorage.setItem("ballFloorPattern", ballFloorPattern);
    localStorage.setItem("ballBasePattern", ballBasePattern);
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5">
          <h1 className="text-2xl font-semibold text-slate-900">
            Assign patterns to your locations
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            One row per selected location from the Courtyard checklist. Input the pattern that
            goes with each location, or leave it blank and update later.
          </p>
        </section>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide text-slate-600">Area</th>
                <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide text-slate-600">Flooring</th>
                <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide text-slate-600">Flooring Pattern</th>
                <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide text-slate-600">Wall Base</th>
                <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wide text-slate-600">Assign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {showGuestroom && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Guestroom</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{guestFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={guestFloorPattern}
                      onChange={e => setGuestFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{guestBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={guestBasePattern}
                      onChange={e => setGuestBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showCorridors && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Corridors</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{corrFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={corrFloorPattern}
                      onChange={e => setCorrFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{corrBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={corrBasePattern}
                      onChange={e => setCorrBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showLobby && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Lobby</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{lobFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={lobFloorPattern}
                      onChange={e => setLobFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{lobBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={lobBasePattern}
                      onChange={e => setLobBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showElevator && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Elevator Lobby</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{elevFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={elevFloorPattern}
                      onChange={e => setElevFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{elevBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={elevBasePattern}
                      onChange={e => setElevBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showMeeting && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Meeting Rooms</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{meetFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={meetFloorPattern}
                      onChange={e => setMeetFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{meetBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={meetBasePattern}
                      onChange={e => setMeetBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showBack && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Back of House</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{backFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={backFloorPattern}
                      onChange={e => setBackFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{backBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={backBasePattern}
                      onChange={e => setBackBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showStairs && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">Stairs</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{stairFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={stairFloorPattern}
                      onChange={e => setStairFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{stairBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={stairBasePattern}
                      onChange={e => setStairBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
              {showBallroom && (
                <tr>
                  <td className="px-4 py-4 text-sm text-slate-900">
                    Ballroom, Prefunction, & Large Open Areas
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{ballFloor}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="pattern search"
                      value={ballFloorPattern}
                      onChange={e => setBallFloorPattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{ballBase}</td>
                  <td className="px-4 py-4">
                    <input
                      placeholder="search"
                      value={ballBasePattern}
                      onChange={e => setBallBasePattern(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/new-ticket/prototype/courtyard">
            <button 
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
                onClick={saveData}
            >
              Back
            </button>
          </Link>

          <Link href="/new-ticket/custom/notes">
            <button
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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