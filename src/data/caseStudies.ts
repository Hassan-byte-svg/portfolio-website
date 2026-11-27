import { projects, type TagTone } from './content'

const FIGMA_FILE = 'CUlWCD1Ol9KMpnGnjXfHaE'

export type CaseStudySection = {
  id: string
  title: string
  body?: string
  /** Marked placeholders the owner still needs to fill from Figma */
  todo?: string
}

export type CaseStudyFeature = {
  title: string
  description: string
  image?: string
  todo?: string
}

export type CaseStudy = {
  slug: string
  title: string
  caseStudyTitle: string
  category: string
  tagTone: TagTone
  summary: string
  headline: string
  tags: string[]
  role: string
  timeline: string
  platform: string
  tools: string[]
  coverImage: string
  figmaUrl: string
  overview: string
  problem: string
  goals: string
  process: CaseStudySection[]
  features: CaseStudyFeature[]
  gallery: { src: string; alt: string }[]
  results: string
  resultsTodo?: string
}

function figmaUrl(nodeId: string) {
  return `https://www.figma.com/proto/${FIGMA_FILE}/Portfolio-Website?node-id=${nodeId}&page-id=1%3A5099&scaling=scale-down-width&content-scaling=fixed&hide-ui=1`
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-supply-management',
    title: 'AI Reply Messaging App',
    caseStudyTitle: 'Case study of AI Reply',
    category: 'Mobile App Design',
    tagTone: 'blue',
    summary:
      'A quick 2-minute glimpse into how I turn complex problems into elegant, human-centered solutions.',
    headline: 'Can AI reply for you without taking away your voice?',
    tags: [
      'Human-AI Interaction',
      'Product Design',
      'Flows UI',
      'UX Thinking',
      'UX Research',
      'User Experience',
    ],
    role: 'Product Designer (UI/UX)',
    timeline: '3.5 Mon',
    platform: 'Android Mobile',
    tools: [],
    coverImage: '/assets/images/projects/ai-supply-management/cover.jpg',
    figmaUrl: figmaUrl('40-376'),
    overview:
      'AI Reply explores how an assistant can draft routine replies while keeping the user’s tone and intent intact — so speed does not replace personal voice.',
    problem:
      'Messages don’t arrive as one task. A reply itself might take a minute, but every message forces the same short sequence — open, read, decide, type, send. That routine cost adds up across a day of conversations.',
    goals:
      'Design a messaging experience where AI can suggest or send replies without making the conversation feel impersonal, and without hiding control from the user.',
    process: [
      {
        id: 'research',
        title: 'Research',
        todo: 'TODO: Export research findings / user insights frames from Figma node 40-376.',
      },
      {
        id: 'wireframes',
        title: 'Wireframes',
        todo: 'TODO: Export wireframe frames from the AI Reply case study in Figma.',
      },
      {
        id: 'design-system',
        title: 'UI & interaction design',
        todo: 'TODO: Export design-system / final UI explanation frames from Figma.',
      },
    ],
    features: [
      {
        title: 'Incoming message → AI draft',
        description:
          'Incoming messages surface a bot draft so the user can review tone before anything is sent.',
        image: '/assets/images/showcase/shot-01.png',
      },
      {
        title: 'Keep the user’s voice',
        description:
          'The product question stays central: can AI reply for you without taking away your voice?',
        todo: 'TODO: Export a dedicated feature screenshot from Figma (suggestion / edit / send flow).',
      },
    ],
    gallery: [
      {
        src: '/assets/images/projects/ai-supply-management/cover.jpg',
        alt: 'AI Reply Messaging App cover',
      },
      {
        src: '/assets/images/showcase/shot-01.png',
        alt: 'AI Reply messaging app showcase',
      },
    ],
    results: '',
    resultsTodo:
      'TODO: Add real outcomes from the Figma case study only (no invented metrics). Missing gallery frames: 01.jpg, 02.jpg.',
  },
  {
    slug: 'track-my-time',
    title: 'ThinkFlow macOS Productivity App',
    caseStudyTitle: 'ThinkFlow macOS Productivity App',
    category: 'macOS Productivity App',
    tagTone: 'green',
    summary: 'Stay in flow, even when your work changes.',
    headline: 'Stay in flow, even when your work changes.',
    tags: [
      'macOS',
      'Productivity',
      'Product Design',
      'UX Thinking',
      'UX Research',
      'User Experience',
    ],
    role: 'UX Design',
    timeline: '2024',
    platform: 'macOS',
    tools: [],
    coverImage: '/assets/images/projects/track-my-time/cover.jpg',
    figmaUrl: figmaUrl('40-717'),
    overview:
      'ThinkFlow was envisioned as a productivity platform that helps users stay focused by organizing their tools, tasks, and workflows into dedicated workspaces, reducing the friction caused by constant context switching.',
    problem:
      'Constant context switching between tools, tasks, and workflows breaks focus and makes it harder to stay in a dedicated workspace.',
    goals:
      'Give people a clear workspace model so tools and projects stay grouped, and flow survives when the work itself changes.',
    process: [
      {
        id: 'research',
        title: 'Research',
        todo: 'TODO: Export ThinkFlow research / discovery frames from Figma node 40-717.',
      },
      {
        id: 'wireframes',
        title: 'Wireframes',
        todo: 'TODO: Export ThinkFlow wireframe frames from Figma.',
      },
      {
        id: 'design-system',
        title: 'Desktop UI',
        todo: 'TODO: Export additional desktop UI frames beyond the cover mockup.',
      },
    ],
    features: [
      {
        title: 'Dedicated workspaces',
        description:
          'Organize tools, tasks, and workflows into workspaces (for example Product Design, Frontend, Research, Marketing) so context stays local.',
        image: '/assets/images/projects/track-my-time/cover.jpg',
      },
      {
        title: 'Application grid',
        description:
          'Surface apps inside a workspace with status and project tags, so switching tools does not mean leaving the workspace mental model.',
        todo: 'TODO: Export a tight crop of the application grid from the ThinkFlow Figma frame.',
      },
    ],
    gallery: [
      {
        src: '/assets/images/projects/track-my-time/cover.jpg',
        alt: 'ThinkFlow macOS productivity app cover',
      },
    ],
    results: '',
    resultsTodo:
      'TODO: Add real ThinkFlow outcomes from Figma only. Missing gallery frames: desktop-01.jpg, desktop-02.jpg.',
  },
  {
    slug: 'pde-auto-group',
    title: 'POS Auto Spare Parts Web Application',
    caseStudyTitle: 'POS Auto Spare Parts Web Application',
    category: 'Software Application',
    tagTone: 'orange',
    summary: 'Stay in flow, even when your work changes.',
    headline: 'A customer-focused POS for offline auto parts stores.',
    tags: [
      'macOS',
      'Productivity',
      'Product Design',
      'UX Thinking',
      'UX Research',
      'User Experience',
    ],
    role: 'UX UI',
    timeline: '2023',
    platform: 'Web',
    tools: [],
    coverImage: '/assets/images/projects/pde-auto-group/cover.jpg',
    figmaUrl: figmaUrl('40-3055'),
    overview:
      'Develop a customer-focused POS system to improve efficiency and competitiveness of offline auto parts stores.',
    problem:
      'The automotive parts industry is evolving rapidly, with changing consumer demands, technology advancements, and competitive pressures. Traditional offline stores often struggle to keep up, lacking tools to manage inventory, streamline transactions, and enhance customer experiences. Without a modern POS system, they risk falling behind competitors and failing to meet customer needs.',
    goals:
      'Understand the specific needs and pain points of urban offline auto parts stores — particularly in Abbottabad, Pakistan — through research and interviews, and design a POS experience that addresses those realities.',
    process: [
      {
        id: 'research',
        title: 'Research & interviews',
        body:
          'This project targets challenges faced by urban offline auto parts stores, particularly in Abbottabad, Pakistan. Through research and interviews in the region, the work aims to understand specific needs and pain points of these businesses.',
      },
      {
        id: 'wireframes',
        title: 'Wireframes',
        todo: 'TODO: Export POS wireframe frames from Figma node 40-3055.',
      },
      {
        id: 'design-system',
        title: 'UI design',
        todo: 'TODO: Export POS UI / design-system frames from Figma.',
      },
    ],
    features: [
      {
        title: 'Point of Sale',
        description: 'A customer-focused POS experience tailored to offline auto parts retail workflows.',
        image: '/assets/images/projects/pde-auto-group/cover.jpg',
      },
      {
        title: 'Inventory & transactions',
        description:
          'Help stores manage inventory and streamline transactions so customer needs are met without falling behind competitors.',
        todo: 'TODO: Export inventory / transaction UI screens from Figma.',
      },
    ],
    gallery: [
      {
        src: '/assets/images/projects/pde-auto-group/cover.jpg',
        alt: 'POS Auto Spare Parts cover',
      },
    ],
    results: '',
    resultsTodo:
      'TODO: Add real POS project outcomes from Figma only. Missing gallery frames: thumbnail.jpg, pos.jpg.',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function getNextCaseStudy(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug)
  if (index < 0) return undefined
  return caseStudies[(index + 1) % caseStudies.length]
}

/** Keep project cards and case studies aligned on shared fields. */
export function assertCaseStudyCoverage() {
  return projects.every((project) => caseStudies.some((study) => study.slug === project.slug))
}
