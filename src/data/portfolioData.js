/**
 * Central Data Source for Modern React Developer Portfolio
 * Contains personal profile information, organized skills, and project highlights.
 */

export const personalInfo = {
  name: "Suryansh Gupta",
  role: "Full-Stack MERN Developer",
  tagline: "Building scalable web architectures, robust REST APIs, and high-performance interactive interfaces.",
  email: "suryanshgupta330@gmail.com",
  phone: "+91 9580410898",
  github: "https://github.com/Suryansh-Guptaa-330",
  linkedin: "https://www.linkedin.com/in/suryansh-gupta",
  location: "India",
  bio: "Dedicated Full-Stack Developer with hands-on experience designing robust MERN architectures, secure authentication workflows, responsive frontend interfaces, and scalable RESTful backends.",
  availableForHire: true
};

export const skillsData = {
  frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5/CSS3",
    "Vite",
    "Next.js"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Python",
    "C/C++",
    "OOPs"
  ],
  database: [
    "MongoDB",
    "MongoDB Atlas",
    "MySQL"
  ],
  toolsAndCloud: [
    "Git",
    "GitHub",
    "Postman",
    "Vercel",
    "Render",
    "Gemini API"
  ]
};

export const projectsData = [
  {
    id: "votechain",
    title: "VoteChain (Full-Stack Voting App)",
    subtitle: "Secure Role-Based Digital Election System",
    description: "Production-grade MERN stack voting application featuring role-based access, real-time candidate tallies, live results visualization, and automated duplicate-vote prevention. Deployed and active on Vercel and Render.",
    category: "Full-Stack",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Tailwind CSS"],
    highlights: [
      "Role-based voting authentication & voter validation",
      "Real-time election tallies and live status dashboard",
      "Anti-tamper protection preventing duplicate votes",
      "Production deployment on Vercel (frontend) & Render (backend)"
    ],
    liveUrl: "https://voting-app-client.vercel.app",
    githubUrl: "https://github.com/Suryansh-Guptaa-330/VOTING_APPLICATION",
    featured: true
  },
  {
    id: "marketplace",
    title: "Marketplace Web Platform",
    subtitle: "Full-Stack Multi-Vendor E-Commerce Platform",
    description: "A full-stack multi-vendor e-commerce application equipped with seller product management, dynamic shopping cart state, search/filtering, and structured RESTful checkout flows.",
    category: "Full-Stack",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Multi-vendor store catalogs and merchant inventory dashboard",
      "Persistent cart state, item filtering, and order records",
      "Secure REST backend with centralized error handling",
      "Responsive, accessible desktop and mobile layouts"
    ],
    liveUrl: "https://marketplace-platform.vercel.app",
    githubUrl: "https://github.com/Suryansh-Guptaa-330",
    featured: true
  },
  {
    id: "newsmap",
    title: "NewsMap Intelligence",
    subtitle: "Dynamic Global Event Visualization Platform",
    description: "Interactive real-time event visualization platform engineered with Next.js and Turbopack. Integrates dynamic geographical coordinates, news feeds, and category-filtered intelligence feeds.",
    category: "Frontend & APIs",
    stack: ["Next.js", "Turbopack", "React.js", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Dynamic map-based visualization of current global events",
      "Turbopack high-speed module compilation & hydration",
      "Filterable categories, tag searches, and real-time feeds",
      "Clean dark UI with performance-first caching"
    ],
    liveUrl: "https://news-map.vercel.app",
    githubUrl: "https://github.com/Suryansh-Guptaa-330",
    featured: true
  },
  {
    id: "streaming-clone",
    title: "Streaming Platform Clone",
    subtitle: "Modern Video Catalog & Trailer Previews",
    description: "High-fidelity entertainment streaming application clone showcasing categorized media rows, backdrop banner transitions, responsive layouts, and embedded trailer previews.",
    category: "Frontend",
    stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Vite"],
    highlights: [
      "Categorized infinite-scroll media rows with hover details",
      "Instant modal trailer playback integration",
      "Featured spotlight hero banner with dynamic backdrop",
      "Optimized lightweight assets with fast initial render"
    ],
    liveUrl: "https://netflix-clone.vercel.app",
    githubUrl: "https://github.com/Suryansh-Guptaa-330/Netflix-Clone",
    featured: false
  }
];

export default {
  personalInfo,
  skillsData,
  projectsData
};
