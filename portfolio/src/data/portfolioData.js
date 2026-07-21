// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT — edit everything about your site from this one file.
// Nothing else in src/ needs to change to rebrand the portfolio.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Bikram Thapa",
  initials: "BT",
  title: "Full-Stack Developer & Cybersecurity Enthusiast",
  tagline:
    "I build modern web apps, APIs, and mobile apps — and I like breaking them apart to understand how they hold up.",
  location: "Kathmandu, Nepal",
  email: "yourname@gmail.com",
  phone: "+977-98XXXXXXXX",
  whatsapp: "9779800000000", // digits only, country code first, no + or spaces
  photo: "profile.png", // put your photo at src/assets/profile.png
  resumeUrl: "./resume.pdf", // replace public/resume.pdf with your real resume
  roles: [
    "Software Developer",
    "React Developer",
    "Backend Engineer",
    "Cybersecurity Enthusiast",
  ],
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { label: "Twitter / X", href: "https://x.com/yourusername", icon: "twitter" },
  { label: "Facebook", href: "https://facebook.com/yourusername", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com/yourusername", icon: "instagram" },
];

export const about = {
  paragraphs: [
    "I'm a software developer who enjoys building things end to end — from a REST API and its database schema, to the interface someone actually taps on.",
    "My focus areas are React on the frontend, FastAPI and Python on the backend, and Flutter for mobile. Alongside that, I spend a lot of time in networking and cybersecurity — reading packet captures, hardening services, and thinking about how systems fail.",
    "Outside of shipping projects, I'm usually learning something adjacent: a new protocol, a Linux internals rabbit hole, or a security CTF.",
  ],
  interests: [
    "Cybersecurity",
    "Backend Development",
    "Artificial Intelligence",
    "Web Development",
    "Networking",
  ],
  stats: [
    { number: "5+", label: "Projects shipped" },
    { number: "10+", label: "Technologies" },
    { number: "3+", label: "Years learning" },
    { number: "100%", label: "Curiosity-driven" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST APIs", "SQLAlchemy"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "Supabase", "Firebase"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Cybersecurity & Networking",
    items: ["Network Fundamentals", "Zeek", "Suricata", "Linux", "Cryptography Basics"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
];

export const projects = [
  {
    slug: "cyber-surakshya",
    title: "Cyber Surakshya",
    description:
      "A cybersecurity monitoring platform that integrates Zeek and Suricata with AI-assisted threat analysis for SOC-style operations.",
    image: "", // put an image path in src/assets/projects/ and reference it, or leave blank for the generated placeholder
    category: "Security",
    technologies: ["React", "FastAPI", "Python", "Zeek", "Suricata"],
    features: [
      "Real-time traffic and alert ingestion from Zeek/Suricata",
      "AI-assisted triage that ranks alerts by likely severity",
      "Analyst dashboard with searchable incident timeline",
    ],
    github: "https://github.com/yourusername/cyber-surakshya",
    demo: "",
    featured: true,
  },
  {
    slug: "development-tracker",
    title: "Development Tracker",
    description:
      "A full-stack project management tool for small dev teams, with a FastAPI backend and PostgreSQL database.",
    image: "",
    category: "Full-Stack",
    technologies: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    features: [
      "Kanban-style board with drag-and-drop task states",
      "Role-based access for team members",
      "REST API documented with OpenAPI/Swagger",
    ],
    github: "https://github.com/yourusername/development-tracker",
    demo: "",
    featured: true,
  },
  {
    slug: "hopehub",
    title: "HopeHub",
    description:
      "A Flutter mobile app that helps communities report and discover missing persons, backed by Supabase.",
    image: "",
    category: "Mobile",
    technologies: ["Flutter", "Dart", "Supabase", "Firebase"],
    features: [
      "Location-tagged reports with photo upload",
      "Push notifications for nearby sightings",
      "Offline-first data sync via Supabase",
    ],
    github: "https://github.com/yourusername/hopehub",
    demo: "",
    featured: false,
  },
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    period: "2024 — Present",
    description:
      "Design and build web apps and APIs for small clients, covering everything from database schema to deployment.",
  },
  {
    role: "Backend & Security Intern",
    org: "Add your company",
    period: "2023 — 2024",
    description:
      "Worked on API development and helped set up basic network monitoring for internal services.",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science / IT",
    school: "Add your university",
    period: "2022 — 2026",
    description: "Coursework in networking, databases, and software engineering.",
  },
  {
    degree: "Higher Secondary Education",
    school: "Add your school",
    period: "2020 — 2022",
    description: "Science with a focus on computing.",
  },
];

// Timeline blends experience + education into one chronological story for the About section.
export const timeline = [...experience, ...education].sort((a, b) => {
  const yearOf = (s) => parseInt(s.period.match(/\d{4}/)?.[0] ?? "0", 10);
  return yearOf(b) - yearOf(a);
});

export const contactChannels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "email" },
  {
    label: "WhatsApp",
    value: "Message me",
    href: `https://wa.me/${profile.whatsapp}`,
    icon: "whatsapp",
  },
  { label: "Location", value: profile.location, href: "", icon: "location" },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`, icon: "phone" },
];

// EmailJS config for the contact form. Create a free account at emailjs.com,
// then fill these three IDs in. Until then the form falls back to opening
// the visitor's email client via a mailto: link.
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];



