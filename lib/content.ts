export type SocialLink = {
  id: "github" | "linkedin" | "x" | "instagram" | "facebook" | "telegram" | "whatsapp";
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
  telegram: "https://t.me/K_3299",
  whatsapp: "https://wa.me/251924327899",
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
  { id: "telegram", label: "Telegram", url: "https://t.me/K_3299" },
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/251924327899" },
  { id: "x", label: "X", url: null },
  { id: "instagram", label: "Instagram", url: null },
  { id: "facebook", label: "Facebook", url: null },
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
      "Built with Mulualem Mekonin for the STARK Hackathon 2026. The public README lists me for product, frontend, UX, voice experience, and the demo; Mulualem for backend, database, the decision engine, and infrastructure. On GitHub I am the larger listed contributor.",
    process:
      "The idea behind HULUM is simple: people need to understand eligibility, missing requirements, and next steps — not just a list of openings. I worked across the Next.js product surface, onboarding, voice, and the public demo while the backend decision engine stayed deterministic TypeScript rather than an LLM guess.",
    decisions:
      "The live product leads with a quiet editorial voice — “Know what is worth your time” — and a decision model around fit, readiness, and whether to apply, wait, or skip. Groq may explain a stored verdict; it never makes one.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Groq",
      "Voxide",
    ],
    results:
      "A working public demo is live. The repo is a TypeScript monorepo with a Next.js web app, an Express API, and PostgreSQL — built as Team Ethiopian Builders for STARK Hackathon 2026.",
    demoUrl: "https://hulum-alpha.vercel.app/",
    repoUrl: "https://github.com/mumekonin/hulum",
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
    pending: [],
  },
  {
    slug: "ayne",
    name: "AYNE",
    kicker: "Voice-first accessibility",
    year: "2026",
    summary:
      "Ayne means “my eye” in Amharic. It is a voice-first AI companion for blind and low-vision people in Ethiopia: you speak a question in Amharic, hold an object up, and Ayne photographs it, reads it, and answers out loud.",
    problem:
      "Someone who cannot read a box of pills currently has to find a person they trust and ask. Independence should not wait on whoever happens to be in the room — and a wrong guess is worse than saying “I am not sure.”",
    audience: "Blind and low-vision people in Ethiopia who need practical, Amharic, voice-first support.",
    role:
      "Team project for the Cursor AI Hackathon Ethiopia. I worked on the mobile app and the backend. Obsan led AI/ML and presenting; Melkamu also worked on mobile; Mulualem on backend and AI/ML; Samuel on design and visual direction.",
    process:
      "The MVP does one thing on purpose: medicine identification, Android first. The spoken conversation is the product — not a visual app with a screen reader added later. The screen exists for a sighted helper and for partial sight, and it never carries information the voice does not.",
    decisions:
      "Amharic is the only language the product speaks; there is no English fallback, including in failure messages. There is no viewfinder or shutter: capture is silent. Before the first photograph in a session, Ayne says the photo is sent to be read and is not stored on the phone. Camera turns take about 25 seconds of server work, so Ayne speaks progress lines during the wait — because silence and a crash are indistinguishable to someone who cannot see a spinner.",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "Addis AI",
    ],
    results:
      "First place at the Cursor AI Hackathon Ethiopia, hosted at the Adwa Museum in Addis Ababa. This is a team award, not an individual one. The repository is private, so it is not linked here.",
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
    pending: ["Public demo URL"],
  },
  {
    slug: "queueless",
    name: "QueueLess",
    kicker: "Waiting, redesigned",
    year: "2026",
    summary:
      "A queue product that lets people join a line from their phone while businesses manage waiting in real time — skip the line, keep the time.",
    problem:
      "Physical queues cost people time they cannot get back, and businesses have little visibility into who is waiting.",
    audience: "Customers joining a queue from a phone, and businesses running a live line.",
    role:
      "Sole listed contributor on the public GitHub repo. I built QueueLess as a multi-tenant product: public join without an account, QR codes, customer tickets, and a staff dashboard for queues, team, analytics, and settings. Later commits were authored under my account with Cursor as a coding partner.",
    process:
      "Work went in phases on GitHub — database and auth first, then public join and tickets, QR codes, live updates, staff invitations, analytics, business hours, and production hardening.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "QR codes",
    ],
    results:
      "The public repository includes a marketing homepage, staff dashboard, public join via QR or link, and customer tickets. A working live demo is not up yet — the Vercel listing currently returns an error.",
    demoUrl: null,
    repoUrl: "https://github.com/kikemal/ququeless",
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
    pending: ["Live demo URL"],
  },
  {
    slug: "tefabign",
    name: "Tefabign",
    kicker: "Campus lost & found",
    year: "2026",
    summary:
      "A campus lost-and-found product for reporting missing belongings, posting found items, and helping people get things back — safely.",
    problem:
      "When something goes missing on campus, people need a single place to report it, search what has been found, and keep private details protected.",
    audience: "People on campus who have lost or found an item.",
    role:
      "Sole listed contributor on the public GitHub repo. I built the Node, Express, and Prisma backend through a frozen v1 — auth, lost and found reports, matching, claims, staff verification, notifications, and audit — then the Vite welcome page with English and Amharic.",
    process:
      "Work went in named tasks on GitHub: API contract, security hardening, case workflow, handover, and a welcome UI for frontend integration. Matching only produces suggestions; it never auto-approves ownership.",
    decisions:
      "Private ownership evidence stays off public responses. Staff verify claims; the system does not guess. The public homepage is live while some found-item cards are still preview layout data waiting on live search.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    results:
      "Backend v1 is frozen for frontend integration. The public welcome page is live, with a report flow for lost or found items.",
    demoUrl: "https://tefabegn.vercel.app",
    repoUrl: "https://github.com/kikemal/tefabegn",
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
    pending: [],
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
    title: "1st place",
    issuer: "Cursor AI Hackathon Ethiopia",
    date: "July 25–26, 2026",
    image: "/images/certificates/cursor-hackathon-first-place.jpg",
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
