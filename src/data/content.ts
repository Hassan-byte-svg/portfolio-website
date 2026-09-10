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

export type ProjectLayout = "ai-reply" | "desktop" | "pde"

export type TagTone = "blue" | "green" | "orange"

export type Project = {
  slug: string
  title: string
  caseStudyTitle: string
  category: string
  tagTone: TagTone
  summary: string
  year: string
  role: string
  platform: string
  duration: string
  image: string
  video: string
  gallery: string[]
  layout: ProjectLayout
  tags: string[]
  figmaNodeId: string
}

export const projects: Project[] = [
  {
    slug: "ai-supply-management",
    title: "AI Reply Messaging App",
    caseStudyTitle: "Case study of AI Reply",
    category: "Mobile App Design",
    tagTone: "blue",
    summary:
      "A quick 2-minute glimpse into how I turn complex problems into elegant, human-centered solutions.",
    year: "2024",
    role: "Product Designer (UI/UX)",
    platform: "Android Mobile",
    duration: "3.5 Mon",
    image: "/assets/images/projects/ai-supply-management/cover.jpg",
    video: "/assets/videos/projects/ai-supply-management.mp4",
    gallery: [
      "/assets/images/projects/ai-supply-management/01.jpg",
      "/assets/images/projects/ai-supply-management/02.jpg",
    ],
    layout: "ai-reply",
    figmaNodeId: "40-376",
    tags: [
      "Human-AI Interaction",
      "Product Design",
      "Flows UI",
      "UX Thinking",
      "UX Research",
      "User Experience",
    ],
  },
  {
    slug: "track-my-time",
    title: "ThinkFlow macOS Productivity App",
    caseStudyTitle: "ThinkFlow macOS Productivity App",
    category: "macOS Productivity App",
    tagTone: "green",
    summary: "Stay in flow, even when your work changes.",
    year: "2024",
    role: "UX Design",
    platform: "macOS",
    duration: "2024",
    image: "/assets/images/projects/track-my-time/cover.jpg",
    video: "/assets/videos/projects/track-my-time.mp4",
    gallery: [
      "/assets/images/projects/track-my-time/desktop-01.jpg",
      "/assets/images/projects/track-my-time/desktop-02.jpg",
    ],
    layout: "desktop",
    figmaNodeId: "40-200",
    tags: [
      "macOS",
      "Productivity",
      "Product Design",
      "UX Thinking",
      "UX Research",
      "User Experience",
    ],
  },
  {
    slug: "pde-auto-group",
    title: "POS Auto Spare Parts Web Application",
    caseStudyTitle: "POS Auto Spare Parts Web Application",
    category: "Software Application",
    tagTone: "orange",
    summary: "Stay in flow, even when your work changes.",
    year: "2023",
    role: "UX UI",
    platform: "Web",
    duration: "2023",
    image: "/assets/images/projects/pde-auto-group/cover.jpg",
    video: "/assets/videos/projects/pde-auto-group.mp4",
    gallery: [
      "/assets/images/projects/pde-auto-group/thumbnail.jpg",
      "/assets/images/projects/pde-auto-group/pos.jpg",
    ],
    layout: "pde",
    figmaNodeId: "40-3055",
    tags: [
      "macOS",
      "Productivity",
      "Product Design",
      "UX Thinking",
      "UX Research",
      "User Experience",
    ],
  },
]

export const projectRedirects: Record<string, string> = {
  "ai-powered-messaging": "ai-supply-management",
  "pos-auto-spare-parts": "pde-auto-group",
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
  { role: "UI/UX Design Internship", company: "Filmbaill", year: "2023" },
  { role: "UI/UX Designer", company: "Softvionist", year: "2024" },
  { role: "UI/UX Design Specialist", company: "ReadyChatAI", year: "2025" },
  {
    role: "Product Designer and Researcher",
    company: "EuroJet Intercontinental",
    year: "2026",
  },
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
