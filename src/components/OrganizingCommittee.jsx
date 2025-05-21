import React from "react";

export default function OrganizingCommittee() {
  return (
    <section id="orgcmt" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Organizing <span className="text-[#fd7e14]">Committee</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Chief Patrons */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Chief Patrons
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-48 h-48 relative mb-4">
                    <img
                      src="/assets/img/orgcmt/SurendraSir.png"
                      alt="Shri Surendra M. Patel"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Shri Surendra M. Patel
                    </h4>
                    <p className="text-gray-600">
                      President, Kelavani Mandal and CHARUSAT, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-48 h-48 relative mb-4">
                    <img
                      src="/assets/img/orgcmt/Dr M C Patel.JPG"
                      alt="Dr. M. C. Patel"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. M. C. Patel
                    </h4>
                    <p className="text-gray-600">
                      Hon. Secretary, Kelavani Mandal, Matrusanstha & CHRF,
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patron */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Patron
            </h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4] max-w-md">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-48 h-48 relative mb-4">
                    <img
                      src="/assets/img/orgcmt/Provost_RVU1.webp"
                      alt="Dr. R. V. Upadhyay"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. R. V. Upadhyay
                    </h4>
                    <p className="text-gray-600">
                      Provost, CHARUSAT, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Conveners */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Co-Conveners
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-40 h-40 relative mb-4">
                    <img
                      src="/assets/img/orgcmt/VijayPanchal.webp"
                      alt="Dr. V. R. Panchal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. V. R. Panchal
                    </h4>
                    <p className="text-gray-600">
                      Professor and Head, Civil Engineering Department, CSPIT,
                      CHARUSAT, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-40 h-40 relative mb-4">
                    <img
                      src="/assets/img/orgcmt/dweepna.png"
                      alt="Dr. Dweepna Garg"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Dweepna Garg
                    </h4>
                    <p className="text-gray-600">
                      Assistant Professor and Head, Department of Information Technology, DEPSTAR, CHARUSAT, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinators Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-center text-white bg-blue-600 p-2 mb-6 rounded">
              Coordinators
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Display first 6 coordinators for brevity */}
              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/AmitThakkar.webp"
                      alt="Dr. Amit Thakkar"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Amit Thakkar
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Professor and Head, Department of Computer Science & Engineering, CSPIT, CHARUSAT
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/ParthShah.webp"
                      alt="Dr. Parth Shah"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Parth Shah
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Professor and Head, Department of Information Technology, CSPIT, CHARUSAT
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/NilayPatel.jpg"
                      alt="Dr. Nilay Patel"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Nilay Patel
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Associate Professor and Head, Department of Electrical Engineering, CSPIT, CHARUSAT
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/Upesh.webp"
                      alt="Dr. Upesh Patel"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Upesh Patel
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Associate Professor and Head, Department of Electronics & Communication Engineering, CSPIT, CHARUSAT, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/NiravBhatt.webp"
                      alt="Dr. Nirav Bhatt"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Nirav Bhatt
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Associate Professor and Head, Department of AI & ML Engineering, CSPIT, CHARUSAT, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/nikita_bhatt.jfif"
                      alt="Dr. Nikita Bhatt"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Nikita Bhatt
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Assistant Professor and Head, Department of Computer Engineering, CSPIT, CHARUSAT, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/chirag_patel.jpg"
                      alt="Dr. Chirag Patel"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Chirag Patel
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Associate Professor and Head, Computer Science and Engineering Department, DEPSTAR, CHARUSAT, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md overflow-hidden shadow-md border-b-4 border-[#1869b4]">
                <div className="p-4 flex flex-col items-center">
                  <div className="w-32 h-32 relative mb-3">
                    <img
                      src="/assets/img/icacs-coordinators-imgs/amit_nayak.png"
                      alt="Dr. Amit Nayak"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      Dr. Amit Nayak
                    </h4>
                    <p className="text-gray-600 text-sm">
                     Associate Professor and Head, Department of Information Technology, DEPSTAR, CHARUSAT, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded transition hover:bg-blue-700 shadow-md"
            >
              View All Committee Members
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
