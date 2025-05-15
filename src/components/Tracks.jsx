import React from "react";

export default function Tracks() {
  return (
    <section id="tracks" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            Conference Tracks
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Track 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Track 1: Artificial Intelligence and Machine Learning
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Deep Learning and Neural Networks</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision and Image Processing</li>
                <li>Reinforcement Learning</li>
                <li>Knowledge Representation and Reasoning</li>
                <li>Explainable AI and Ethical Considerations</li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Track 2: Communication Technologies
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>5G/6G Networks and Beyond</li>
                <li>Wireless Sensor Networks</li>
                <li>Internet of Things (IoT) Communication</li>
                <li>Network Security and Privacy</li>
                <li>Optical Communications</li>
                <li>Satellite and Space Communications</li>
              </ul>
            </div>

            {/* Track 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Track 3: Smart Cities and Infrastructure
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Smart Urban Planning and Development</li>
                <li>Intelligent Transportation Systems</li>
                <li>Smart Energy Management</li>
                <li>Smart Healthcare and Emergency Services</li>
                <li>Environmental Monitoring and Sustainability</li>
                <li>Smart Buildings and Infrastructure</li>
              </ul>
            </div>

            {/* Track 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Track 4: Data Science and Analytics
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Big Data Analytics</li>
                <li>Predictive Analytics</li>
                <li>Data Mining and Knowledge Discovery</li>
                <li>Business Intelligence</li>
                <li>Statistical Modeling and Analysis</li>
                <li>Data Visualization and Interpretation</li>
              </ul>
            </div>

            {/* Track 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Track 5: Cybersecurity and Blockchain
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Network and Infrastructure Security</li>
                <li>Cryptography and Data Protection</li>
                <li>Blockchain Applications and Technologies</li>
                <li>IoT Security</li>
                <li>Threat Intelligence and Incident Response</li>
                <li>Security in Cloud Computing</li>
              </ul>
            </div>

            {/* Track 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                Track 6: Emerging Technologies
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Quantum Computing</li>
                <li>Extended Reality (AR/VR/MR)</li>
                <li>Edge Computing</li>
                <li>Digital Twins</li>
                <li>Human-Computer Interaction</li>
                <li>Robotics and Autonomous Systems</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/assets/files/Conference Tracks_30_8_2023.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded transition hover:bg-blue-700 shadow-md"
            >
              Download Complete Track Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
