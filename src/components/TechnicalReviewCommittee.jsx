import React from "react";

export default function TechnicalReviewCommittee() {
  const committeeMembers = [
    {
      srNo: 1,
      name: "Ajay Sidpara",
      affiliation: "Indian Institute of Technology, Kharagpur",
      country: "India"
    },
    {
      srNo: 2,
      name: "Ashok Kherodia",
      affiliation: "Indian Institute of Information Technology, Kota",
      country: "India"
    },
    {
      srNo: 3,
      name: "Barnali Chetia",
      affiliation: "Indian Institute of Information Technology, Vadodara",
      country: "India"
    },
    {
      srNo: 4,
      name: "Dilip A. Patel",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India"
    },
    {
      srNo: 5,
      name: "Manoj Kumar Majumder",
      affiliation: "Indian Institute of Information Technology, Naya Raipur",
      country: "India"
    },
    {
      srNo: 6,
      name: "M. K. Shrimali",
      affiliation: "Malaviya National Institute of Technology, Jaipur",
      country: "India"
    },
    {
      srNo: 7,
      name: "Pinalkumar Engineer",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India"
    },
    {
      srNo: 8,
      name: "R. S. Jangid",
      affiliation: "Indian Institute of Technology, Bombay",
      country: "India"
    },
    {
      srNo: 9,
      name: "Sivavenkateswara Rao",
      affiliation: "Indian Institute of Information Technology Surat",
      country: "India"
    },
    {
      srNo: 10,
      name: "Uday Pratap",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India"
    },
    {
      srNo: 11,
      name: "Vandana Sharma",
      affiliation: "Christ University, Delhi-NCR",
      country: "India"
    },
    {
      srNo: 12,
      name: "Ankit Chouhan",
      affiliation: "University of Regina, Canada",
      country: "Canada"
    },
    {
      srNo: 13,
      name: "Madonna Lamin",
      affiliation: "ITM (SLS) Baroda University",
      country: "India"
    },
    {
      srNo: 14,
      name: "Jaishree Tailor",
      affiliation: "L&T Technology Services, Vadodara",
      country: "India"
    },
    {
      srNo: 15,
      name: "Jaideepsinh Raulji",
      affiliation: "Navrachana University, Vadodara",
      country: "India"
    },
    {
      srNo: 16,
      name: "Hemant Ghayvat",
      affiliation: "Linnaeus University",
      country: "Sweden"
    },
    {
      srNo: 17,
      name: "Ganesh Kale",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India"
    },
    {
      srNo: 18,
      name: "Dilip Sharma",
      affiliation: "Malaviya National Institute of Technology, Jaipur",
      country: "India"
    },
    {
      srNo: 19,
      name: "Tzung-Pei Hong",
      affiliation: "National University of Kaohsiung",
      country: "Taiwan"
    },
    {
      srNo: 20,
      name: "Narinder Sharma",
      affiliation: "Amritsar Group of Colleges, Punjab",
      country: "India"
    },
    {
      srNo: 21,
      name: "Shilpa Githe",
      affiliation: "Symbiosis Institute of Technology, Pune.",
      country: "India"
    },
    {
      srNo: 22,
      name: "Surajit Das",
      affiliation: "National Institute of Technology, Agartala",
      country: "India"
    },
    {
      srNo: 23,
      name: "Dharmen Punjani",
      affiliation: "Manager Consultant, Semantics Expert, Cencora PharmaLex GmbH, Germany",
      country: "Germany"
    },
    {
      srNo: 24,
      name: "Peeyush Chowdhary",
      affiliation: "MBM University, Jodhpur",
      country: "India"
    },
    {
      srNo: 25,
      name: "Jagadish.G.Kori",
      affiliation: "Government Sri Krishnarajendra Silver Jubilee Technological Institute, Bengaluru",
      country: "India"
    },
    {
      srNo: 26,
      name: "Sachin Bakre",
      affiliation: "Visvesvaraya National Institute of Technology Nagpur",
      country: "India"
    },
    {
      srNo: 27,
      name: "Purna Saha",
      affiliation: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      country: "India"
    },
    {
      srNo: 28,
      name: "Purnanand P.Savoikar",
      affiliation: "Goa College of Engineering, Goa",
      country: "India"
    },
    {
      srNo: 29,
      name: "Ajay Sharma",
      affiliation: "MBM University, Jodhpur",
      country: "India"
    },
    {
      srNo: 30,
      name: "Rupesh Kumar Tipu",
      affiliation: "K. R. Mangalam University, Haryana",
      country: "India"
    }
  ];

  return (
    <section id="technical-review-committee" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Technical Review <span className="text-[#fd7e14]">Committee</span>
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
