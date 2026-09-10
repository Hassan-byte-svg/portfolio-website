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

export type Project = {
  slug: string
  title: string
  caseStudyTitle: string
  tag: string
  tagTone: "blue" | "green" | "lilac"
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
    title: "AI Supply",
    caseStudyTitle: "Case study of AI Reply",
    tag: "Product Design",
    tagTone: "blue",
    summary: "AI Reply Messaging App — can AI reply for you without taking away your voice?",
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
    title: "Track My Time",
    caseStudyTitle: "Track My Time — Desktop",
    tag: "UX Design & Strategy",
    tagTone: "green",
    summary: "Desktop product-design workspace for the Track My Time productivity app.",
    year: "2024",
    role: "UX Design",
    platform: "Desktop",
    duration: "2024",
    image: "/assets/images/projects/track-my-time/cover.jpg",
    video: "/assets/videos/projects/track-my-time.mp4",
    gallery: [
      "/assets/images/projects/track-my-time/desktop-01.jpg",
      "/assets/images/projects/track-my-time/desktop-02.jpg",
    ],
    layout: "desktop",
    figmaNodeId: "40-200",
    tags: ["Product Design", "Desktop", "Productivity"],
  },
  {
    slug: "pde-auto-group",
    title: "PDE Auto Group",
    caseStudyTitle: "UX UI Project",
    tag: "Product Design",
    tagTone: "lilac",
    summary:
      "A customer-focused POS system to improve efficiency of offline auto parts stores.",
    year: "2023",
    role: "UX UI",
    platform: "POS / Tablet",
    duration: "2023",
    image: "/assets/images/projects/pde-auto-group/cover.jpg",
    video: "/assets/videos/projects/pde-auto-group.mp4",
    gallery: [
      "/assets/images/projects/pde-auto-group/thumbnail.jpg",
      "/assets/images/projects/pde-auto-group/pos.jpg",
    ],
    layout: "pde",
    figmaNodeId: "40-3055",
    tags: ["UX UI", "POS", "Auto parts"],
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
