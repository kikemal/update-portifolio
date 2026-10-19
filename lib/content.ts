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
  cvPath: "/files/kidist-kemal-cv.png",
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
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#cv", label: "CV", id: "cv" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export const whatIfs = [
  "a way to know if an opportunity is worth the time?",
  "a voice that helps someone understand the room?",
  "a queue that people don’t have to stand inside?",
  "a school day parents can actually follow?",
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
      "A queue product with a working deployed demo and a business dashboard — built around a problem people in Ethiopia know too well.",
    problem: undefined,
    audience: undefined,
    role: undefined,
    process: undefined,
    results:
      "A working demo and business dashboard exist. Public URLs and screenshots still need to be added here.",
    demoUrl: null,
    repoUrl: null,
    media: [
      {
        type: "placeholder",
        alt: "QueueLess project media will appear here.",
      },
    ],
    pending: [
      "Live demo URL",
      "Business dashboard URL, if separate",
      "Screenshots or a screen recording",
      "Problem, audience, role, process, and stack",
    ],
  },
  {
    slug: "school-monitoring",
    name: "School Monitoring System",
    kicker: "Parents, closer to the school day",
    year: "2026",
    summary:
      "A student progress app so parents can follow performance without waiting for the next report card.",
    problem:
      "Parents often wait until report cards arrive to understand how a child is doing. Attendance, results, and day-to-day progress stay out of reach until then.",
    audience: "Parents, with teachers able to upload scores.",
    role: "Independent project, built in public.",
    process:
      "Started in Flutter with Firebase for authentication and data. Billing limits on Firestore slowed the work, so the backend was moved to Supabase — learning SQL, tables, and access rules along the way.",
    decisions:
      "The interesting part was not staying loyal to the first tool. When Firebase became a wall, the project changed shape instead of stopping.",
    stack: ["Flutter", "Firebase", "Supabase"],
    results:
      "Public build-in-public notes cover setup, authentication, and the backend pivot. Current product status, a live demo, and screenshots still need to be added.",
    demoUrl: null,
    repoUrl: "https://github.com/kikemal/student_monitoring_app",
    media: [
      {
        type: "placeholder",
        alt: "School Monitoring System media will appear here.",
      },
    ],
    pending: [
      "Screenshots or a screen recording",
      "Live demo URL, if available",
      "Current product status",
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
    id: "fcc-english",
    title: "A2 English for Developers",
    issuer: "freeCodeCamp",
    date: "February 2026",
    image: null,
    verifyUrl: null,
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

export const approach = [
  {
    num: "01",
    title: "Wonder",
    text: "Most of my work starts as a quiet question. I notice a friction, turn it over, and press the button my brain already has: what if we built this?",
  },
  {
    num: "02",
    title: "Listen",
    text: "Before I reach for a stack, I try to understand the actual problem — who it belongs to, what they are waiting on, and what would make the day easier.",
  },
  {
    num: "03",
    title: "Learn",
    text: "I like growing with the tools as they change. If a path stops working, I change path. That is how Firebase became Supabase on the school app: adapt, then continue.",
  },
  {
    num: "04",
    title: "Try",
    text: "I would rather make a small working slice than protect a perfect plan. Ideas get clearer once they can be clicked, spoken to, or held up to a real person.",
  },
  {
    num: "05",
    title: "Shape",
    text: "Then I refine. Fashion and photography sit in the same part of my mind as interface work: composition, pacing, and the feeling of a thing once someone enters it.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const availableSocials = socials.filter((item) => item.url);

export const cvHighlights = [
  {
    label: "Focus",
    value: "Creative development for web and mobile products that solve a real, named problem.",
  },
  {
    label: "Studies",
    value: "Information Technology at Jimma University.",
  },
  {
    label: "Building with",
    value: "React, Next.js, Flutter, JavaScript, Firebase, and Supabase — with Node.js, Express, and PostgreSQL on later backend work.",
  },
  {
    label: "Selected work",
    value: "HULUM, AYNE, QueueLess, and a School Monitoring System.",
  },
  {
    label: "Recognition",
    value: "First place, Cursor AI Hackathon Ethiopia (team award, AYNE), July 2026.",
  },
];
