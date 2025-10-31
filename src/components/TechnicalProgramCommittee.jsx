import React from "react";

export default function TechnicalProgramCommittee() {
  const committeeMembers = [
    {
      srNo: 1,
      name: "Aynur Unal",
      affiliation: "Stanford University",
      country: "USA",
      email: "aynurunal@stanfordalumni.org"
    },
    {
      srNo: 2,
      name: "Nobert Jere",
      affiliation: "Walter Sisulu University",
      country: "South Africa",
      email: "njere@wsu.ac.za"
    },
    {
      srNo: 3,
      name: "Malaya Nayak",
      affiliation: "It Buzz Ltd.",
      country: "UK",
      email: "Info@malaya.me.uk"
    },
    {
      srNo: 4,
      name: "Milan Tuba",
      affiliation: "Sinergija University",
      country: "Serbia",
      email: "mtuba@singidunum.ac.rs"
    },
    {
      srNo: 5,
      name: "Eugene Yu-Dong Zhang",
      affiliation: "University of Leicester",
      country: "United Kingdom",
      email: "yudong.zhang@le.ac.uk"
    },
    {
      srNo: 6,
      name: "Simon James Fong",
      affiliation: "University of Macau",
      country: "Macau",
      email: "ccfong@um.edu.mo"
    },
    {
      srNo: 7,
      name: "Moisés Toapanta",
      affiliation: "Salesian Polytechnic University (UPS)",
      country: "Ecuador",
      email: "stoapanta@ups.edu.ec"
    },
    {
      srNo: 8,
      name: "Dalia Magdi",
      affiliation: "Canadian International College",
      country: "Egypt",
      email: "dalia_a_magdi@cic-cairo.com"
    },
    {
      srNo: 9,
      name: "Catarina Pinto Moreira",
      affiliation: "Queensland University of Technology",
      country: "Australia",
      email: "catarina.pintomoreira@qut.edu.au"
    },
    {
      srNo: 10,
      name: "Dharm Singh",
      affiliation: "NUST, WINDHOEK",
      country: "Namibia",
      email: "dsingh@nust.na"
    },
    {
      srNo: 11,
      name: "Thittaporn Ganokratanaa",
      affiliation: "King Mongkut's University Of Technology Thonburi",
      country: "Thailand",
      email: "thittaporn.gan@kmutt.ac.th"
    },
    {
      srNo: 12,
      name: "Ajay Sidpara",
      affiliation: "Indian Institute of Technology, Kharagpur",
      country: "India",
      email: "ajaymsidpara@mech.iitkgp.ac.in"
    },
    {
      srNo: 13,
      name: "Ashok Kherodia",
      affiliation: "Indian Institute of Information Technology, Kota",
      country: "India",
      email: "ashok.ece@iiitkota.ac.in"
    },
    {
      srNo: 14,
      name: "Barnali Chetia",
      affiliation: "Indian Institute of Information Technology, Vadodara",
      country: "India",
      email: "barnali@iiitvadodara.ac.in"
    },
    {
      srNo: 15,
      name: "Dilip A. Patel",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India",
      email: "dap@ced.svnit.ac.in"
    },
    {
      srNo: 16,
      name: "Manoj Kumar Majumder",
      affiliation: "Indian Institute of Information Technology, Naya Raipur",
      country: "India",
      email: "manojk@iiitnr.edu.in"
    },
    {
      srNo: 17,
      name: "M. K. Shrimali",
      affiliation: "Malaviya National Institute of Technology, Jaipur",
      country: "India",
      email: "mkshrimali@mnit.ac.in"
    },
    {
      srNo: 18,
      name: "Pinalkumar Engineer",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India",
      email: "pje@eced.svnit.ac.in"
    },
    {
      srNo: 19,
      name: "R. S. Jangid",
      affiliation: "Indian Institute of Technology, Bombay",
      country: "India",
      email: "rsjangid@civil.iitb.ac.in"
    },
    {
      srNo: 20,
      name: "Sivavenkateswara Rao",
      affiliation: "Indian Institute of Information Technology Surat",
      country: "India",
      email: "svrao@iiitsurat.ac.in"
    },
    {
      srNo: 21,
      name: "Uday Pratap",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India",
      email: "udaiprataprao@gmail.com"
    },
    {
      srNo: 22,
      name: "Ganesh Kale",
      affiliation: "Sardar Vallabhbhai National Institute of Technology, Surat",
      country: "India",
      email: "gdk@ced.svnit.ac.in"
    },
    {
      srNo: 23,
      name: "Dilip Sharma",
      affiliation: "Malaviya National Institute of Technology, Jaipur",
      country: "India",
      email: "dsharma.mech@mnit.ac.in"
    },
    {
      srNo: 24,
      name: "Sharnil Pandya",
      affiliation: "Northumbria University",
      country: "United Kingdom",
      email: "sharnil.pandya@northumbria.ac.uk"
    },
    {
      srNo: 25,
      name: "Shilpa Githe",
      affiliation: "Symbiosis Institute of Technology, Pune",
      country: "India",
      email: "shilpa.gite@sitpune.edu.in"
    },
    {
      srNo: 26,
      name: "Surajit Das",
      affiliation: "National Institute of Technology, Agartala",
      country: "India",
      email: "surajit2006r@gmail.com"
    },
    {
      srNo: 27,
      name: "Dharmen Punjani",
      affiliation: "Manager Consultant, Semantics Expert, Cencora PharmaLex GmbH",
      country: "Germany",
      email: "dharmen.punjani@gmail.com"
    },
    {
      srNo: 28,
      name: "Sachin Bakre",
      affiliation: "Visvesvaraya National Institute of Technology Nagpur",
      country: "India",
      email: "svbakre@apm.vnit.ac.in"
    }
  ];

  return (
    <section id="technical-program-committee" className="py-12 bg-gray-50">
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
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Email
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
                    <td className="py-3 px-6 border-b border-gray-200 text-gray-600">
                      <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                        {member.email}
                      </a>
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
