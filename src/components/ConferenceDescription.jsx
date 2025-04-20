import React from "react";

export default function ConferenceDescription() {
  return (
    <section id="about_conference" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            About ICACS 2025
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-justify text-gray-700 mb-4 leading-relaxed">
            The International Conference on Artificial Intelligence,
            Communication Technologies &amp; Smart Cities (ICACS 2025) is a
            multidisciplinary platform which brings together academicians,
            industry leaders, researchers, technocrats, and experts belonging to
            various disciplines of Engineering. The conference provides an
            opportunity for exploring and discussing the advances and
            innovations in the field of Engineering. Young engineers are
            encouraged to present their ideas and interact with national and
            international peers.
          </p>
          <p className="text-justify text-gray-700 mb-6 leading-relaxed">
            The ICACS 2025 will help in fostering connections on a global scale
            between the participants drawn from various countries leading to
            networking between them.
          </p>

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center border-b-2 border-blue-200 pb-2">
              Conference Highlights
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  <span className="font-medium text-blue-800">
                    Best Research Paper Award
                  </span>{" "}
                  - Will be awarded with a Commendation Certificate and a Cash
                  Prize.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  All accepted, registered, presented and plagiarism free papers
                  will be published in the{" "}
                  <span className="font-medium text-blue-800">
                    Scopus Indexed Proceedings
                  </span>{" "}
                  per the quality of articles.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  Certificates will be given to all authors who will present the
                  papers and participate in the conference.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  All peer reviewed, accepted, and presented papers of the
                  conference will be published with{" "}
                  <span className="font-medium text-blue-800">Springer</span> in
                  their prestigious book series{" "}
                  <a
                    href="https://www.springer.com/series/15179"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    "Lecture Notes in Networks and Systems"
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-300 p-4 my-4 rounded-md">
            <p className="text-blue-800 text-sm font-medium">
              <span className="inline-block mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Note: The conference presentations and deliberations will be in
              English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
