import React from "react";

export default function TechnicalProgramCommittee() {
  const committeeMembers = [
    {
      srNo: 1,
      name: "Aynur Unal",
      affiliation: "Stanford University",
      country: "USA"
    },
    {
      srNo: 2,
      name: "Nobert Jere",
      affiliation: "Namibia University of Science And Technology",
      country: "Namibia"
    },
    {
      srNo: 3,
      name: "Malaya Nayak",
      affiliation: "It Buzz Ltd.",
      country: "UK"
    },
    {
      srNo: 4,
      name: "Milan Tuba",
      affiliation: "Sinergija University",
      country: "Serbia"
    },
    {
      srNo: 5,
      name: "Eugene Yu-Dong Zhang",
      affiliation: "University of Leicester",
      country: "United Kingdom"
    },
    {
      srNo: 6,
      name: "Simon James Fong",
      affiliation: "University of Macau",
      country: "Macau"
    },
    {
      srNo: 7,
      name: "Moisés Toapanta",
      affiliation: "Management of Technologies for the World \"GTM\"",
      country: "Ecuador"
    },
    {
      srNo: 8,
      name: "Dalia Magdi",
      affiliation: "Canadian International College",
      country: "Egypt"
    },
    {
      srNo: 9,
      name: "Catarina Pinto Moreira",
      affiliation: "Queensland University of Technology",
      country: "Australia"
    },
    {
      srNo: 10,
      name: "Dharm Singh",
      affiliation: "NUST, WINDHOEK",
      country: "Namibia"
    },
    {
      srNo: 11,
      name: "Thittaporn Ganokratanaa",
      affiliation: "King Mongkut's University Of Technology Thonburi",
      country: "Thailand"
    }
  ];

  return (
    <section id="technical-program-committee" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Technical Program <span className="text-[#fd7e14]">Committee</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-300">
                    Sr. No.
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Name of Committee Member
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Affiliation
                  </th>
                  <th className="py-3 px-4 text-left font-semibold border-b border-gray-300">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <td className="py-3 px-4 border-b border-gray-200 font-medium text-gray-600 text-center">
                      {member.srNo}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 font-medium text-gray-800">
                      {member.name}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-200 text-gray-600">
                      {member.affiliation}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 text-gray-600">
                      {member.country}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
