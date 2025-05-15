import React from "react";

export default function ImportantDates() {
  return (
    <section id="impdates" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-2 text-gray-900">
            Important Dates
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-center border border-gray-300 shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-3 font-semibold text-base">Event</th>
                  <th className="px-4 py-3 font-semibold text-base">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-blue-50 transition duration-150">
                  <td className="border px-4 py-3 text-gray-800 font-medium">
                    Paper Submission Deadline
                  </td>
                  <td className="border px-4 py-3 text-gray-800">
                    November 3, 2025
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-blue-50 transition duration-150">
                  <td className="border px-4 py-3 text-gray-800 font-medium">
                    Acceptance Notification to Authors
                  </td>
                  <td className="border px-4 py-3 text-gray-800">
                    January 7, 2026
                  </td>
                </tr>
                <tr className="bg-white hover:bg-blue-50 transition duration-150">
                  <td className="border px-4 py-3 text-gray-800 font-medium">
                    Submission of Camera Ready Paper
                  </td>
                  <td className="border px-4 py-3 text-gray-800">
                    February 10, 2026
                  </td>
                </tr>
                <tr className="bg-gray-100 hover:bg-blue-50 transition duration-150">
                  <td className="border px-4 py-3 text-gray-800 font-medium">
                    Conference Date
                  </td>
                  <td className="border px-4 py-3 text-gray-800">
                    March 1, 2026
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              * All dates are tentative and subject to change. Stay tuned for
              updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
