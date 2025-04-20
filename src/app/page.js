import Hero from '../components/Hero';
import About from '../components/About';
import ImportantDates from '../components/ImportantDates';
import CallForPapers from '../components/CallForPapers';
import Tracks from '../components/Tracks';
import SubmissionGuidelines from '../components/SubmissionGuidelines';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import OrganizingCommittee from '../components/OrganizingCommittee';
import ContactUs from '../components/ContactUs';
import ConferenceDescription from '../components/ConferenceDescription';

export default function Home() {
  return (
    <>
      <Hero />
      <ConferenceDescription />
      <About />
      <ImportantDates />
      <CallForPapers />
      <Tracks />
      <SubmissionGuidelines />
      <KeynoteSpeakers />
      <OrganizingCommittee />
      <ContactUs />
    </>
  );
}
