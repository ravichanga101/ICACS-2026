import React from "react";
import Link from "next/link";

export default function KeynoteSpeakers() {
  return (
    <section id="speakers" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Galaxy of National and International{" "}
            <span className="text-[#fd7e14]">Keynote Speakers</span>
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <Link
            href="/assets/files/Keynote_Speech_Schedule_2025.pdf"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition shadow-md"
          >
            Keynote Speech Schedule
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First Row of Speakers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Speaker 1 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/Dr. Joao Soares.jpg"
                      alt="Dr. Joao Soares"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Joao Soares
                    </h4>
                    <p className="text-gray-600">
                      Polytechnic of Porto, Portugal
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/saiful.webp"
                      alt="Dr. Saiful Amri Mazlan"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Saiful Amri Mazlan
                    </h4>
                    <p className="text-gray-600">
                      University of Technology Malaysia (UTM), Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/Vasant_IITD.jpg"
                      alt="Dr. Vasant Matsagar"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Vasant Matsagar
                    </h4>
                    <p className="text-gray-600">
                      Professor, IIT Delhi
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row of Speakers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Speaker 4 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/Rajendra_IITb.jpg"
                      alt="Dr. Rajendra M Sonar"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Rajendra M Sonar
                    </h4>
                    <p className="text-gray-600">
                      Professor, IIT Mumbai
                      <br />
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 5 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/Dr-NLJN.jpg"
                      alt="Dr. Nilanjan Dey"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Nilanjan Dey
                    </h4>
                    <p className="text-gray-600">
                      Techno International New Town, Kolkata
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 6 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/vs.jpg"
                      alt="Venkata Santosh Kumar"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Venkata Santosh Kumar
                    </h4>
                    <p className="text-gray-600">
                      IIT Mumbai
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 7 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/Tom V Mathew.jpeg"
                      alt="Dr. Tom V. Mathew"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Tom V. Mathew
                    </h4>
                    <p className="text-gray-600">
                      Professor, Department of Civil Engineering, Indian Institute of Technology Bombay
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 8 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/U V Vala.jpg"
                      alt="Mr. Urvesh Vala"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Mr. Urvesh Vala
                    </h4>
                    <p className="text-gray-600">
                     Head of Material Engineering Technology at L&T Energy Hydrocarbon Engineering Ltd, Vadodara
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker 9 */}
            <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
              <div className="p-0">
                <div className="flex flex-col items-center">
                  <div className="w-full h-64 relative">
                    <img
                      src="/assets/img/keynote/Prof.Mohammad Shafi Mir.png"
                      alt="Prof.Mohammad Shafi Mir"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                     Prof.Mohammad Shafi Mir
                    </h4>
                    <p className="text-gray-600">
                      Professor, Department of Civil Engineering, National Institute of Technology, Srinagar
                      <br />
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 italic">More speakers to be announced soon.</p>
        </div>
      </div>
    </section>
  );
}
