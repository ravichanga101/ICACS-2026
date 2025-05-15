import React from "react";

const SubmissionGuidelines = () => {
  return (
    <section id="submission-guidelines" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Submission Guidelines
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-gray-700">
            <p className="mb-4">
              The authors are invited to submit the Full Length Research/Review
              Papers. The papers will be peer-reviewed and only the accepted and
              registered papers will be considered for presentation during the
              conference and publication in the proceedings.
            </p>

            <p className="mb-4">
              The organizers of ICACS 2026 regard plagiarism as serious
              professional misconduct. All submissions will be screened for
              plagiarism and when identiﬁed, the submissions will be rejected.
            </p>

            <p className="mb-4">
              The ICACS 2026 doesn't encourage withdrawals after the paper is
              accepted.
            </p>

            <div className="my-6 border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">Submission Process:</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  We use the Microsoft CMT for submission of papers and the
                  review process.
                </li>
                <li>
                  Unregistered authors should ﬁrst create an account on
                  Microsoft CMT to log in.
                </li>
                <li>
                  All submissions need to be submitted through the Microsoft CMT
                  Portal.
                </li>
              </ul>
            </div>

            <div className="my-6 border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold mb-2">Important Notes:</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  At least one of the authors of an accepted paper needs to
                  register for the conference and to present the paper(s),
                  through an Online Mode presentation.
                </li>
                <li className="font-medium">
                  NOTE: Acceptance of a full-length submission is strictly based
                  on the reviewers' comments.
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-center font-medium">
                <a href="#" className="text-blue-600 hover:underline">
                  Click here to access the Microsoft CMT Portal
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionGuidelines;
