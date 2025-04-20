import React from "react";

export default function CallForPapers() {
  return (
    <section id="call_for_papers" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-2 text-gray-900">
            Call For Papers
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-justify text-gray-700">
          <li>
            Prospective authors from India and abroad are invited to submit
            their full papers describing original, previously unpublished,
            complete work by electronic submission.
          </li>
          <li>
            <strong>
              The minimum number of pages for conference paper is 10 pages.
            </strong>{" "}
            Submit in .docx/Latex format.{" "}
            <a
              href="/assets/files/Word+Latex-Template.zip"
              className="text-blue-600 hover:underline"
            >
              Download Manuscript Template
            </a>
          </li>
          <li>
            A submission implies intent to register and present upon acceptance;
            withdrawals are discouraged.
          </li>
          <li>All submissions will be rigorously peer-reviewed.</li>
          <li>
            Manuscripts should not contain embedded links, scanned images,
            header or footer.
          </li>
          <li>Email submissions will not be accepted; use the CMT portal.</li>
        </ul>

        <div className="mt-10 overflow-x-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Conference Documents
          </h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                  Document Type
                </th>
                <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                  Description
                </th>
                <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">
                  &nbsp;
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="py-3 px-4 border-b">Manuscript Template</td>
                <td className="py-3 px-4 border-b">
                  Template for preparing conference manuscripts
                </td>
                <td className="py-3 px-4 border-b">
                  <a
                    href="/assets/files/Word+Latex-Template.zip"
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">Copyright Form</td>
                <td className="py-3 px-4 border-b">
                  Form for copyright agreement
                </td>
                <td className="py-3 px-4 border-b">
                  <a
                    href="/assets/files/springer-copyright-form-revised.pdf"
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">CMT Guidelines</td>
                <td className="py-3 px-4 border-b">
                  Guidelines for paper submission using CMT (Conference
                  Management Tool)
                </td>
                <td className="py-3 px-4 border-b">
                  <a
                    href="/assets/files/CMT_Guideline.pdf"
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    download
                  >
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className="text-center mt-6">
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICACS2025%2FSubmission%2FIndex%3Fsfnsn%3Dwiwspwa"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Paper
          </a>
        </div> */}
      </div>
    </section>
  );
}
