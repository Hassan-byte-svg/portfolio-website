export const site = {
  name: "Portfolio",
  email: "hello@email.com",
  year: 2026,
  cvPath: "/assets/CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
} as const

export type ProjectSection = {
  heading: string
  body: string
}

export type Project = {
  slug: string
  title: string
  tag: string
  tagTone: "blue" | "green" | "lilac"
  summary: string
  description: string
  year: string
  role: string
  platform: string
  image: string
  video: string
  gallery: string[]
  palette: string[]
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: "ai-powered-messaging",
    title: "AI-Powered Messaging App",
    tag: "Product Design",
    tagTone: "blue",
    summary:
      "A messaging product designed around clarity, speed, and AI-assisted conversation flows.",
    description:
      "Product design for an AI messaging experience, from information architecture through interface and visual system.",
    year: "2024",
    role: "Product Design",
    platform: "Mobile + Web",
    image: "/assets/images/projects/ai-powered-messaging/cover.jpg",
    video: "/assets/videos/projects/ai-powered-messaging.mp4",
    gallery: [
      "/assets/images/projects/ai-powered-messaging/01.jpg",
      "/assets/images/projects/ai-powered-messaging/02.jpg",
      "/assets/images/projects/ai-powered-messaging/03.jpg",
      "/assets/images/projects/ai-powered-messaging/04.jpg",
    ],
    palette: ["#0B1F4A", "#1E4ED8", "#5B8DEF", "#C5D8FF", "#F4F7FF"],
    sections: [
      {
        heading: "Overview",
        body: "The case study covers research, system thinking, and interface design for a mission-critical messaging workflow.",
      },
      {
        heading: "Challenge",
        body: "Keep conversations readable while introducing AI assistance without adding noise to the core chat experience.",
      },
      {
        heading: "Approach",
        body: "A restrained layout, clear hierarchy, and a blue visual system used across screens, states, and empty areas.",
      },
    ],
  },
  {
    slug: "track-my-time",
    title: "Track My Time iOS Productivity App",
    tag: "UX Design & Strategy",
    tagTone: "green",
    summary:
      "An iOS productivity app focused on calm tracking, quick capture, and a clear daily picture.",
    year: "2024",
    role: "UX Design",
    platform: "iOS",
    description:
      "UX design and strategy for a time-tracking iOS app, with emphasis on speed, focus, and a quiet interface.",
    image: "/assets/images/projects/track-my-time/cover.jpg",
    video: "/assets/videos/projects/track-my-time.mp4",
    gallery: [
      "/assets/images/projects/track-my-time/01.jpg",
      "/assets/images/projects/track-my-time/02.jpg",
      "/assets/images/projects/track-my-time/03.jpg",
      "/assets/images/projects/track-my-time/04.jpg",
    ],
    palette: ["#143028", "#2F7A4B", "#7BC49A", "#D7F0E2", "#F5FBF7"],
    sections: [
      {
        heading: "Overview",
        body: "A productivity experience designed for everyday tracking without turning the phone into another source of stress.",
      },
      {
        heading: "Challenge",
        body: "Make logging time fast enough to happen in the moment, while still giving a useful view of the day and week.",
      },
      {
        heading: "Approach",
        body: "Short flows, large tap targets, and a green-led visual system that stays consistent across list, timer, and summary views.",
      },
    ],
  },
  {
    slug: "pos-auto-spare-parts",
    title: "POS Auto Spare Parts Shop Application",
    tag: "Product Design",
    tagTone: "lilac",
    summary:
      "A parts-shop application designed around inventory, search, and a reliable purchasing flow.",
    description:
      "Product design for a POS and spare-parts shop system used on the floor for search, stock, and checkout.",
    year: "2023",
    role: "Product Design",
    platform: "Web + POS",
    image: "/assets/images/projects/pos-auto-spare-parts/cover.jpg",
    video: "/assets/videos/projects/pos-auto-spare-parts.mp4",
    gallery: [
      "/assets/images/projects/pos-auto-spare-parts/01.jpg",
      "/assets/images/projects/pos-auto-spare-parts/02.jpg",
      "/assets/images/projects/pos-auto-spare-parts/03.jpg",
      "/assets/images/projects/pos-auto-spare-parts/04.jpg",
    ],
    palette: ["#3A1D0A", "#C45C12", "#F0A04B", "#FAD7B0", "#FFF6EC"],
    sections: [
      {
        heading: "Overview",
        body: "A shop-floor application for finding parts, checking stock, and completing purchases with as little friction as possible.",
      },
      {
        heading: "Challenge",
        body: "Support fast, accurate work at the counter — search, inventory, and checkout — without a cluttered interface.",
      },
      {
        heading: "Approach",
        body: "Dense but readable tables, strong search, and an orange-led palette used for status, emphasis, and key actions.",
      },
    ],
  },
]

export const projectRedirects: Record<string, string> = {
  "ai-supply-management": "ai-powered-messaging",
  "pde-auto-group": "pos-auto-spare-parts",
}

export type ResearchItem = {
  slug: string
  title: string
  summary: string
  year: string
  file: string
  image: string
}

export const research: ResearchItem[] = [
  {
    slug: "research-01",
    title: "Research 01",
    summary: "Add the research title, abstract, and PDF using the paths in this data file.",
    year: "2024",
    file: "/assets/research/research-01.pdf",
    image: "/assets/images/research/research-01.jpg",
  },
  {
    slug: "research-02",
    title: "Research 02",
    summary: "Add the research title, abstract, and PDF using the paths in this data file.",
    year: "2023",
    file: "/assets/research/research-02.pdf",
    image: "/assets/images/research/research-02.jpg",
  },
]

export const fieldExposure = [
  { title: "Talk title", context: "Event / organizer", year: "2024" },
  { title: "Talk title", context: "Event / organizer", year: "2023" },
  { title: "Talk title", context: "Event / organizer", year: "2022" },
  { title: "Talk title", context: "Event / organizer", year: "2021" },
]

export const testimonials = [
  { quote: "", name: "", role: "", avatar: "/assets/images/testimonials/01.jpg" },
  { quote: "", name: "", role: "", avatar: "/assets/images/testimonials/02.jpg" },
  { quote: "", name: "", role: "", avatar: "/assets/images/testimonials/03.jpg" },
]

export const logos = [
  "/assets/images/logos/logo-01.svg",
  "/assets/images/logos/logo-02.svg",
  "/assets/images/logos/logo-03.svg",
  "/assets/images/logos/logo-04.svg",
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getResearch(slug: string) {
  return research.find((item) => item.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return undefined
  return projects[(index + 1) % projects.length]
}
