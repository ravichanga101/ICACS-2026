"use client";

import React from "react";

export default function LeftSideImportantDatesButton() {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("impdates");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback to hash navigation if element isn't found
      window.location.hash = "#impdates";
    }
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
      <button
        aria-label="Go to Important Dates"
        onClick={handleClick}
        className="relative w-12 h-44 bg-[#fd7e14] text-white shadow-lg rounded-r-xl hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fd7e14] transition"
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="transform -rotate-90 select-none text-sm font-semibold tracking-wider">
            Important Dates
          </span>
        </span>
      </button>
    </div>
  );
}
