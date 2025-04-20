import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Contact
          </h2>
        </div>

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
          <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            icacs@charusat.ac.in
          </div>
        </div>

        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4391461861524!2d72.81707641496007!3d22.600070685168678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1646532324505!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
