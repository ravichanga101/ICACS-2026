import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
            About Host Institutions
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/assets/img/charusat_logo.png"
                alt="CHARUSAT"
                className="mx-auto mb-4 w-40 border border-gray-200"
              />
              <p className="text-justify text-gray-700 leading-relaxed">
                Charotar University of Science and Technology (CHARUSAT) is a
                premier private university located in Gujarat, India. It is
                awarded 'Grade A+' by NAAC and recognized as a Center of
                Excellence by the Govt. of Gujarat.
              </p>
              <div className="mt-2 text-center">
                <a
                  href="https://charusat.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  To know more about CHARUSAT
                </a>
              </div>
            </div>
            <div>
              <img
                src="/assets/img/3_.png"
                alt="CHARUSAT Campus"
                className="mx-auto rounded shadow border border-gray-200"
              />
            </div>
          </div>
          <hr className="my-8" />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/assets/img/cspit_logo.png"
                  alt="CSPIT"
                  className="w-20 mr-4 border border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">CSPIT</h3>
              </div>
              <p className="text-justify text-gray-700 leading-relaxed">
                Chandubhai S Patel Institute of Technology (CSPIT) is the first
                institute established in 2000 at CHARUSAT campus, offering UG
                and PG programs in engineering and technology.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/assets/img/depstar.png"
                  alt="DEPSTAR"
                  className="w-20 mr-4 border border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">DEPSTAR</h3>
              </div>
              <p className="text-justify text-gray-700 leading-relaxed">
                Devang Patel Institute of Advance Technology and Research
                (DEPSTAR) is a constituent of CHARUSAT focused on research and
                advanced technology programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
