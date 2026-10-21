export type SocialLink = {
  id: "github" | "linkedin" | "x" | "instagram" | "facebook" | "telegram";
  label: string;
  url: string | null;
};

export type ProjectMedia = {
  type: "image" | "video" | "placeholder";
  src?: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  year?: string;
  summary: string;
  problem?: string;
  audience?: string;
  role?: string;
  process?: string;
  decisions?: string;
  stack?: string[];
  results?: string;
  demoUrl?: string | null;
  repoUrl?: string | null;
  media: ProjectMedia[];
  pending: string[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string | null;
  file?: string | null;
  verifyUrl?: string | null;
};

export const site = {
  name: "Kidist Kemal",
  shortName: "Kidist",
  role: "Creative developer",
  location: "Ethiopia",
  email: "kidistkemal53@gmail.com",
  github: "https://github.com/kikemal",
  linkedin: "https://www.linkedin.com/in/kidist-kemal-994561264",
  cvPath: "/files/kidist-kemal-cv.pdf",
  phrase: "My brain has a “what if we built this?” button.",
};

export const socials: SocialLink[] = [
  { id: "github", label: "GitHub", url: "https://github.com/kikemal" },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kidist-kemal-994561264",
  },
  { id: "x", label: "X", url: null },
  { id: "instagram", label: "Instagram", url: null },
  { id: "facebook", label: "Facebook", url: null },
  { id: "telegram", label: "Telegram", url: null },
];

export const nav = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#awards", label: "Awards", id: "awards" },
  { href: "/#cv", label: "CV", id: "cv" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export const whatIfs = [
  "a way to know if an opportunity is worth the time?",
  "a voice that helps someone understand the room?",
  "a queue that people don’t have to stand inside?",
  "a campus that helps lost things find their way home?",
];

export const projects: Project[] = [
  {
    slug: "hulum",
    name: "HULUM",
    kicker: "Opportunity decision platform",
    year: "2026",
    summary:
      "A platform for finding opportunities and understanding whether they are actually worth applying to — before the hours disappear.",
    problem:
      "Finding scholarships, internships, fellowships, and jobs is not the hard part. Knowing whether you fit, what you are missing, and what to prepare before you apply is.",
    audience: "Students and young professionals weighing real opportunities.",
    role:
      "Built with Mulualem Mekonin during the STARK Hackathon 2026. Specific contribution notes are still being added.",
    process:
      "The idea behind HULUM is simple: people need to understand eligibility, missing requirements, and next steps — not just a list of openings.",
    decisions:
      "The live product leads with a quiet editorial voice — “Know what is worth your time” — and a decision model around fit, readiness, and whether to apply, wait, or skip.",
    stack: undefined,
    results:
      "A working public demo is live. Broader outcomes and a verified technology list still need to be added.",
    demoUrl: "https://hulum-alpha.vercel.app/",
    repoUrl: null,
    media: [
      {
        type: "image",
        src: "/images/work/hulum-home.png",
        alt: "HULUM homepage with the headline Know what is worth your time.",
      },
      {
        type: "image",
        src: "/images/work/hulum-signin.png",
        alt: "HULUM sign-in screen with email and Google sign-in.",
      },
      {
        type: "video",
        src: "/videos/hulum-demo.mp4",
        alt: "Screen recording of the HULUM demo.",
        caption: "Recorded walkthrough of the live HULUM demo.",
      },
    ],
    pending: [
      "Verified technology stack",
      "Kidist’s specific role and contribution",
      "Repository URL, if public",
    ],
  },
  {
    slug: "ayne",
    name: "AYNE",
    kicker: "Voice-first accessibility",
    year: "2026",
    summary:
      "A team-built, voice-first AI assistant created to help visually impaired people navigate and understand the world around them.",
    problem:
      "Independence in daily life often depends on being able to understand a physical environment in real time — without waiting for someone else to describe it.",
    audience: "Blind and visually impaired people who need practical, voice-first support.",
    role:
      "Team project. Teammates publicly named: Kidist Kemal, Mulualem Mekonin, Melkamu Teshome, Obsan Habtamu, and Samuel Feyisa. Individual contribution notes are still being added.",
    process:
      "The MVP was built under hackathon pressure, with a night to turn an idea into a working product before presenting to judges at the Cursor AI Hackathon Ethiopia.",
    decisions:
      "The team focused the MVP on voice commands for navigating a physical environment and understanding key objects in real time — a narrow, useful slice instead of a broad assistant.",
    results:
      "First place at the Cursor AI Hackathon Ethiopia, hosted at the Adwa Museum in Addis Ababa. This is a team award, not an individual one.",
    demoUrl: null,
    repoUrl: null,
    media: [
      {
        type: "image",
        src: "/images/work/ayne-phone.png",
        alt: "AYNE on a phone, showing a listening microphone and a Thinking state.",
      },
      {
        type: "image",
        src: "/images/work/ayne-logo.jpg",
        alt: "AYNE logo: a green eye mark with the name AYNE.",
      },
      {
        type: "image",
        src: "/images/work/ayne-listening.jpg",
        alt: "Voice assistant listening screen with a large microphone control.",
      },
    ],
    pending: [
      "Demo or repository URL",
      "Verified technology stack",
      "Kidist’s specific role on the team",
    ],
  },
  {
    slug: "queueless",
    name: "QueueLess",
    kicker: "Waiting, redesigned",
    summary:
      "A queue product that lets people join a line from their phone while businesses manage waiting in real time — skip the line, keep the time.",
    problem:
      "Physical queues cost people time they cannot get back, and businesses have little visibility into who is waiting.",
    audience: "Customers joining a queue from a phone, and businesses running a live line.",
    role: undefined,
    process: undefined,
    results:
      "The product includes a public homepage, a business dashboard, and a QR code that opens a public queue. A live public URL still needs to be added here.",
    demoUrl: null,
    repoUrl: null,
    media: [
      {
        type: "image",
        src: "/images/work/queueless-home.png",
        alt: "QueueLess homepage with the headline Skip the line. Keep your time.",
      },
      {
        type: "image",
        src: "/images/work/queueless-qr.png",
        alt: "QueueLess business dashboard showing a public-queue QR code.",
      },
    ],
    pending: [
      "Live demo URL",
      "Repository URL, if public",
      "Kidist’s specific role and contribution",
      "Verified technology stack",
    ],
  },
  {
    slug: "tefabign",
    name: "Tefabign",
    kicker: "Campus lost & found",
    summary:
      "A campus lost-and-found product for reporting missing belongings, posting found items, and helping people get things back — safely.",
    problem:
      "When something goes missing on campus, people need a single place to report it, search what has been found, and keep private details protected.",
    audience: "People on campus who have lost or found an item.",
    role: undefined,
    process: undefined,
    results:
      "The product includes a public lost-and-found homepage and a report flow for lost or found items. A live public URL still needs to be added here.",
    demoUrl: null,
    repoUrl: null,
    media: [
      {
        type: "image",
        src: "/images/work/tefabign-home.png",
        alt: "Tefabign homepage with the headline Lost something? Let’s find it.",
      },
      {
        type: "image",
        src: "/images/work/tefabign-report.png",
        alt: "Tefabign report form for submitting a lost or found item.",
      },
    ],
    pending: [
      "Live demo URL",
      "Repository URL, if public",
      "Kidist’s specific role and contribution",
      "Verified technology stack",
    ],
  },
];

export const featuredAward = {
  title: "Cursor AI Hackathon Ethiopia",
  place: "1st place",
  date: "July 25–26, 2026",
  placeDetail: "Adwa Museum, Addis Ababa",
  image: "/images/certificates/cursor-hackathon-first-place.jpg",
  note: "A team award for AYNE. The certificate is presented to Kidist Kemal Muhamed as a member of that team — not as a sole winner.",
};

export const certificates: Certificate[] = [
  {
    id: "cursor-dev",
    title: "Development",
    issuer: "Ethiopian Cursor Community",
    date: "July 2026",
    image: null,
    verifyUrl: null,
  },
  {
    id: "cisco-cyber",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy / Jimma University",
    date: "April 2026",
    image: "/images/certificates/cisco-cyber.jpg",
    verifyUrl: null,
  },
  {
    id: "stark-hackathon",
    title: "Certificate of Participation",
    issuer: "STARK Official Hackathon",
    date: "11 October 2026",
    image: "/images/certificates/stark-hackathon.jpg",
    file: "/files/stark-hackathon.pdf",
    verifyUrl: "https://hackathon.stark.et",
  },
  {
    id: "fcc-js",
    title: "JavaScript",
    issuer: "freeCodeCamp",
    date: "February 2026",
    image: "/images/certificates/fcc-javascript.jpg",
    verifyUrl:
      "https://www.freecodecamp.org/certification/fcc-5265a0e0-3d5a-4baf-8745-d040e9fc8dc/javascript-v9",
  },
  {
    id: "fcc-rwd",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "February 2026",
    image: "/images/certificates/fcc-responsive.jpg",
    verifyUrl:
      "https://www.freecodecamp.org/certification/fcc-5265a0e0-3d5a-4baf-8745-d040e9fc8dc/responsive-web-design-v9",
  },
  {
    id: "forage-skyscanner",
    title: "Front-End Software Engineering Job Simulation",
    issuer: "Forage / Skyscanner",
    date: "February 2026",
    image: "/images/certificates/forage-skyscanner.png",
    verifyUrl: null,
  },
  {
    id: "geezx-ai",
    title: "GeezX AI Bootcamp",
    issuer: "GeezX",
    date: "September 1–4",
    image: "/images/certificates/geezx-ai.jpg",
    verifyUrl: null,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const availableSocials = socials.filter((item) => item.url);
