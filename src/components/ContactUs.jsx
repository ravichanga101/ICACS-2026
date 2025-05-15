import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Contact
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mt-10 text-gray-700">
            <div className="text-center space-y-3">
              <span className="font-bold text-lg block">
                Dr. V. R. Panchal (Co-Convener, ICACS 2026)
              </span>
              <span className="block">
                Professor and Head, Department of Civil Engineering, CSPIT,
                CHARUSAT, Gujarat, India.
              </span>
              <span className="block">Office No.: 02692-265081</span>
            </div>

            <div className="text-center space-y-3">
              <span className="font-bold text-lg block">
                Dr. Chirag Patel (Co-Convener, ICACS 2026)
              </span>
              <span className="block">
                Associate Professor and Head, Department of Computer Science and
                Engineering, DEPSTAR, CHARUSAT, Gujarat, India.
              </span>
              <span className="block">Office No.: 02692-265299</span>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              icacs@charusat.ac.in
            </div>
          </div>

          <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4391461861524!2d72.81707641496007!3d22.600070685168678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1646532324505!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="CHARUSAT Location Map"
            ></iframe>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                CHARUSAT Campus, Changa
                <br />
                Dist. Anand - 388 421
                <br />
                Gujarat, India
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                Dr. V. R. Panchal: 02692-265081
                <br />
                Dr. Chirag Patel: 02692-265299
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                icacs@charusat.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
