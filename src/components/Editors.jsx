"use client";

import React from "react";

export default function Editors() {
  const editors = [
    {
      name: "Dr. Mufti Mahmud",
      affiliation: "Department of Computer Science, Nottingham Trent University, Nottingham NG1 4FQ, United Kingdom",
      image: "/assets/img/editors/dr-mufti-sir.jpeg"
    },
    {
      name: "Dr. Trushit Upadhyaya",
      affiliation: "Charotar University of Science and Technology (CHARUSAT), Changa, Gujarat, India",
      image: "/assets/img/orgcmt/TrushitUpadhyaya.png"
    },
    {
      name: "Dr. Merih Palandoken",
      affiliation: "Izmir Katip Celebi University, Izmir, Turkey",
      image: "/assets/img/editors/dr-mehri-sir.jpeg"
    }
  ];

  return (
    <section id="editors" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            <span className="text-[#fd7e14]">Editors</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {editors.map((editor, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-48 h-48 relative mb-4">
                    <img
                      src={editor.image}
                      alt={editor.name}
                      className="w-full h-full object-cover object-center rounded-lg"
                      onError={(e) => {
                        e.target.src = "/assets/img/editors/default-avatar.jpg";
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {editor.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {editor.affiliation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
