import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  carrent,
  jobit,
  next,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Next Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Samsung Developer",
    icon: web,
  },
  {
    title: "LG Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "MasaTech",
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Jan 2025",
    points: [
      "IPTV Development: Designed 2 IPTV applications on Samsung TVs using Tizen Studio and LG TVs with webOS extensions.",
      "Optimized app performance, achieving a 25% faster loading time and reducing crashes by 30% through rigorous debugging and testing.",
      "Collaborated with a team of 5+ developers to deliver high-quality projects ahead of deadlines.",
      "Integrated reusable components, reducing development time by 20% across projects.Enhanced website SEO performance, achieving a 15% increase in organic traffic for both sites.Delivered projects within 10% of the estimated budget and time constraints.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Projects Will Uploaded Soon",
    description:
      "Projects Under Development",
    source_code_link: "https://github.com/",
  },
  {
    name: "Projects Will Uploaded Soon",
    description:
      "Projects Under Development",
    source_code_link: "https://github.com/",
  },
  {
    name: "Projects Will Uploaded Soon",
    description:
      "Projects Under Development",
    ],
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
