import React from "react";

export default function Tracks() {
  return (
    <section id="tracks" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 inline-block pb-2 text-gray-700">
            Conference Tracks
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold bg-blue-600 text-white p-2 rounded">
              Artificial Intelligence
            </h3>
            <p className="mt-2 text-justify text-gray-700">
              Artificial Intelligence and Machine Learning || Quantum Computing
              and Cryptography || Edge and Fog Computing || Blockchain
              Technology and Applications || Cybersecurity and Privacy ||
              Software Engineering and Development || Education and E-Learning
              || Human-Computer Interaction (HCI) || Data Science and Big Data
              || Emerging Technologies and Innovations
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-green-600 text-white p-2 rounded">
              Communication Technologies
            </h3>
            <p className="mt-2 text-justify">
              {/* Topics for Communication Technologies track */}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold bg-teal-600 text-white p-2 rounded">
              Smart Cities
            </h3>
            <p className="mt-2 text-justify">
              {/* Topics for Smart Cities track */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
