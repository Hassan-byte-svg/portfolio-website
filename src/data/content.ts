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

export type Project = {
  slug: string
  title: string
  tag: string
  tagTone: "blue" | "green" | "lilac"
  summary: string
  description: string
  year: string
  role: string
  image: string
  video: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: "ai-supply-management",
    title: "AI Supply Management App",
    tag: "Product Design",
    tagTone: "blue",
    summary:
      "A product design case study covering research, system thinking, and interface design for a mission-critical workflow.",
    description:
      "Replace this copy with the project narrative from the Figma file. Image and video areas stay empty until you add files to the paths below.",
    year: "2024",
    role: "Product Design",
    image: "/assets/images/projects/ai-supply-management/cover.jpg",
    video: "/assets/videos/projects/ai-supply-management.mp4",
    gallery: [
      "/assets/images/projects/ai-supply-management/01.jpg",
      "/assets/images/projects/ai-supply-management/02.jpg",
    ],
  },
  {
    slug: "track-my-time",
    title: "Track My Time iOS Productivity App",
    tag: "UX Design & Strategy",
    tagTone: "green",
    summary:
      "An iOS productivity experience focused on clarity, speed, and a calm interface for everyday tracking.",
    description:
      "Replace this copy with the project narrative from the Figma file. Keep media paths as-is so assets drop in later.",
    year: "2024",
    role: "UX Design",
    image: "/assets/images/projects/track-my-time/cover.jpg",
    video: "/assets/videos/projects/track-my-time.mp4",
    gallery: [
      "/assets/images/projects/track-my-time/01.jpg",
      "/assets/images/projects/track-my-time/02.jpg",
    ],
  },
  {
    slug: "pde-auto-group",
    title: "PDE Auto Group Parts Shop Application",
    tag: "Product Design",
    tagTone: "lilac",
    summary:
      "A parts-shop application designed around inventory, search, and a reliable purchasing flow.",
    description:
      "Replace this copy with the project narrative from the Figma file. Image and video areas remain empty placeholders.",
    year: "2023",
    role: "Product Design",
    image: "/assets/images/projects/pde-auto-group/cover.jpg",
    video: "/assets/videos/projects/pde-auto-group.mp4",
    gallery: [
      "/assets/images/projects/pde-auto-group/01.jpg",
      "/assets/images/projects/pde-auto-group/02.jpg",
    ],
  },
]

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
