import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/header.jsx";


import Tasks from "./pages/Tasks.jsx";
import Mentors from "./pages/Mentors.jsx";

function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const [q, setQ] = useState(""); 

  const sectionMap = {
    "/": "Overview",
    "/tasks": "Tasks",
    "/mentors": "Mentors",
    "/message": "Messages",
    "/settings": "Settings",
  };
  const currentSection = sectionMap[location.pathname] || "Overview";

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r p-6 transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static`}
      >
        {/* Logo */}
        <div className="flex items-center gap-x-3 mb-6">
          <img src="src/assets/icons/logo.svg" alt="logo" width="40" height="40" />
          <h1 className="text-2xl md:text-4xl font-semibold text-black">DNX</h1>
        </div>

        {/* Nav Links */}
        <nav className="mt-4">
          <ul className="flex flex-col gap-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-xl transition-colors ${
                    isActive ? "bg-neutral-100 text-black" : "hover:bg-gray-100 text-slate-400"
                  }`
                }
              >
                <img src="src/assets/icons/overview.svg" className="w-5 h-5" />
                <span className="ml-2 text-sm md:text-base">Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-xl transition-colors ${
                    isActive ? "bg-neutral-100 text-black" : "hover:bg-gray-100 text-slate-400"
                  }`
                }
              >
                <img src="src/assets/icons/tasks.svg" className="w-5 h-5" />
                <span className="ml-2 text-sm md:text-base">Tasks</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mentors"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-xl transition-colors ${
                    isActive ? "bg-neutral-100 text-black" : "hover:bg-gray-100 text-slate-400"
                  }`
                }
              >
                <img src="src/assets/icons/mentors.svg" className="w-5 h-5" />
                <span className="ml-2 text-sm md:text-base">Mentors</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/message"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-xl transition-colors ${
                    isActive ? "bg-neutral-100 text-black" : "hover:bg-gray-100 text-slate-400"
                  }`
                }
              >
                <img src="src/assets/icons/message.svg" className="w-5 h-5" />
                <span className="ml-2 text-sm md:text-base">Messages</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-xl transition-colors ${
                    isActive ? "bg-neutral-100 text-black" : "hover:bg-gray-100 text-slate-400"
                  }`
                }
              >
                <img src="src/assets/icons/setting.svg" className="w-5 h-5" />
                <span className="ml-2 text-sm md:text-base">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Help Center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-60 rounded-xl bg-slate-900 flex flex-col items-center justify-center p-4"> 
              <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-zinc-50 opacity-15"></div>
               <div className="absolute -top-7  bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-slate-900"> 
                    <span className=" text-xl font-bold bg-slate-900 text-center rounded-full h-10 w-10 flex items-center justify-center text-white"> ? </span>
                  </div> 
              <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-zinc-50 opacity-15"></div> 
              <div className="relative mt-10 z-10 flex flex-col items-center gap-y-6"> 
                 
                  <div className="text-center flex flex-col gap-y-2">
                    <h1 className="text-white font-semibold text-base">Help Center</h1> 
                    <p className="text-xs font-medium text-white"> Having trouble in learning? Please contact us for more questions. </p> 
                  </div>
                  <button className="bg-white relative -bottom-2 rounded-lg text-sm font-semibold px-4 py-2 text-gray-900"> Go To Help Center </button> 
              </div> 
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto ">
        <Header q={q} setQ={setQ} currentSection={currentSection} setSidebarOpen={setSidebarOpen} />
        {/* Page Content */}
        <div className=" flex-1 overflow-y-auto bg-gray-50">
          <Routes>
            
            <Route path="/tasks" element={<Tasks q={q} />} />
            <Route path="/mentors" element={<Mentors q={q} />} />
          </Routes>
        </div>
      </main>

      {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/mern-dnx-dashboard">
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
