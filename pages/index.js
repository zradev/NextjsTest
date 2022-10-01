import { Hero } from "../sections";
import { AgencySelection } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};
const agencyProps = {
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  videoImage: {
    src: "/img/video.png",
    alt: "background",
    width: 300,
    height: 520,
  },
  popupText: "link to breif generator??",
  cards: [
    {
      title: "Brief",
      description: (
        <>
          Complete <strong>brief writing or simple guidance</strong> on what to
          include, we`ve got you covered
        </>
      ),
      image: { src: "/img/brief.png", alt: "card", width: 45, height: 45 },
      background: "#F9F9F9",
      width: "90%",
    },
    {
      title: "Search",
      description: (
        <>
          In-depth agency search covering; <strong>criteria matching</strong>,
          door knocking and due-dilligence vetting.
        </>
      ),
      image: { src: "/img/search.png", alt: "card", width: 45, height: 45 },
      background: "#F4F4F4",
      width: "95%",
    },
    {
      title: "Pitch",
      description: (
        <>
          Comprehensive <strong>pitch management</strong>, including comms,
          diary management and pitch hosting.
        </>
      ),
      image: { src: "/img/pitch.png", alt: "card", width: 45, height: 45 },
      background: "#F9F9F9",
      width: "100%",
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        {/* <Hero {...heroProps} /> */}
        <AgencySelection {...agencyProps} />
      </div>
    </>
  );
}
