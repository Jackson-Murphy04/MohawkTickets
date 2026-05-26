'use client';
import Link from "next/link";
import Dropdown from "../../../components/Dropdown";
import { useState, useEffect } from "react";

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
  }

  const saveData = () => {
    //const guestFloor = (document.querySelector('select[name="guestFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("guestFloor", guestFloor);
    const guestBase = (document.querySelector('select[name="guestBase"]') as HTMLSelectElement).value;
    localStorage.setItem("guestBase", guestBase);
    const corrFloor = (document.querySelector('select[name="corrFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("corrFloor", corrFloor);
    const corrBase = (document.querySelector('select[name="corrBase"]') as HTMLSelectElement).value;
    localStorage.setItem("corrBase", corrBase);
    const lobFloor = (document.querySelector('select[name="lobFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("lobFloor", lobFloor);
    const lobBase = (document.querySelector('select[name="lobBase"]') as HTMLSelectElement).value;
    localStorage.setItem("lobBase", lobBase);
    const elevFloor = (document.querySelector('select[name="elevFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("elevFloor", elevFloor);
    const elevBase = (document.querySelector('select[name="elevBase"]') as HTMLSelectElement).value;
    localStorage.setItem("elevBase", elevBase);
    const meetFloor = (document.querySelector('select[name="meetFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("meetFloor", meetFloor);
    const meetBase = (document.querySelector('select[name="meetBase"]') as HTMLSelectElement).value;
    localStorage.setItem("meetBase", meetBase);
    const backFloor = (document.querySelector('select[name="backFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("backFloor", backFloor);
    const backBase = (document.querySelector('select[name="backBase"]') as HTMLSelectElement).value;
    localStorage.setItem("backBase", backBase);
    const stairFloor = (document.querySelector('select[name="stairFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("stairFloor", stairFloor);
    const stairBase = (document.querySelector('select[name="stairBase"]') as HTMLSelectElement).value;
    localStorage.setItem("stairBase", stairBase);
    const ballFloor = (document.querySelector('select[name="ballFloor"]') as HTMLSelectElement).value;
    localStorage.setItem("ballFloor", ballFloor);
    const ballBase = (document.querySelector('select[name="ballBase"]') as HTMLSelectElement).value;
    localStorage.setItem("ballBase", ballBase);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white px-6 py-8 shadow-xl ring-1 ring-black/5">
          <h1 className="text-2xl font-semibold text-slate-900">Courtyard Prototype</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            Tick the areas in scope and the flooring + wall base options that apply.
            Everything stays editable on the ticket later.
          </p>
        </section>

        <div className="grid gap-5">
          {([
            {
              title: "Guestrooms",
              floorName: "guestFloor",
              floorOptions: ["Broadloom", "Carpet tile"],
              floorValue: guestFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setGuestFloor(e.target.value),
              baseName: "guestBase",
              baseOptions: ["resilient", "carpet"],
              baseValue: guestBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setGuestBase(e.target.value),
            },
            {
              title: "Corridors",
              floorName: "corrFloor",
              floorOptions: ["Broadloom", "Carpet tile", "Broadloom w/Doorfills", "Carpet Tile", "Carpet Tile w/Doorfills"],
              floorValue: corrFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setCorrFloor(e.target.value),
              baseName: "corrBase",
              baseOptions: ["resilient", "carpet"],
              baseValue: corrBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setCorrBase(e.target.value),
            },
            {
              title: "Lobby",
              floorName: "lobFloor",
              floorOptions: ["Broadloom", "Carpet tile"],
              floorValue: lobFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setLobFloor(e.target.value),
              baseName: "lobBase",
              baseOptions: ["resilient", "carpet"],
              baseValue: lobBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setLobBase(e.target.value),
            },
            {
              title: "Elevator Lobby",
              floorName: "elevFloor",
              floorOptions: ["Broadloom", "Carpet tile"],
              floorValue: elevFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setElevFloor(e.target.value),
              baseName: "elevBase",
              baseOptions: ["resilient", "carpet"],
              baseValue: elevBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setElevBase(e.target.value),
            },
            {
              title: "Meeting Rooms",
              floorName: "meetFloor",
              floorOptions: ["Broadloom", "Carpet tile"],
              floorValue: meetFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setMeetFloor(e.target.value),
              baseName: "meetBase",
              baseOptions: ["resilient"],
              baseValue: meetBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setMeetBase(e.target.value),
            },
            {
              title: "Back of House",
              floorName: "backFloor",
              floorOptions: ["Broadloom", "Carpet tile"],
              floorValue: backFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setBackFloor(e.target.value),
              baseName: "backBase",
              baseOptions: ["resilient"],
              baseValue: backBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setBackBase(e.target.value),
            },
            {
              title: "Stairs",
              floorName: "stairFloor",
              floorOptions: ["Broadloom"],
              floorValue: stairFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setStairFloor(e.target.value),
              baseName: "stairBase",
              baseOptions: ["carpet 4\"", "carpet 12\""],
              baseValue: stairBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setStairBase(e.target.value),
            },
            {
              title: "Ballroom, Prefunction & Large Open Areas",
              floorName: "ballFloor",
              floorOptions: ["Broadloom"],
              floorValue: ballFloor,
              onFloorChange: (e: React.ChangeEvent<HTMLSelectElement>) => setBallFloor(e.target.value),
              baseName: "ballBase",
              baseOptions: ["resilient"],
              baseValue: ballBase,
              onBaseChange: (e: React.ChangeEvent<HTMLSelectElement>) => setBallBase(e.target.value),
            },
          ]).map((section) => (
            <section key={section.title} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="mb-5 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">Flooring options</p>
                  <Dropdown
                    name={section.floorName}
                    options={section.floorOptions}
                    value={section.floorValue}
                    onChange={section.onFloorChange}
                  />
                </div>

                <div className="space-y-2 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">Wall base options</p>
                  <Dropdown
                    name={section.baseName}
                    options={section.baseOptions}
                    value={section.baseValue}
                    onChange={section.onBaseChange}
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/new-ticket/prototype">
            <button 
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
                onClick={saveData}
            >
              Back
            </button>
          </Link>

          <Link href="/new-ticket/prototype/courtyard/patterns">
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