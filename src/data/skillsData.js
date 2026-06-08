// Category Icons
import { FaCode, FaServer, FaTools, FaCloud } from "react-icons/fa";

// Skill Icons
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiGithubcopilot,
  SiOpenai,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiHeroku,
  SiRender,
  SiNetlify,
  SiGooglecloud,
  SiFirebase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsCursor } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const skillsData = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React", icon: SiReact },
      { label: "Redux", icon: SiRedux },
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: SiJavascript },
      { label: "GraphQL", icon: SiGraphql },
      { label: "Sass", icon: SiSass },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "CSS", icon: SiCss3 },
      { label: "HTML", icon: SiHtml5 },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Express.js", icon: SiExpress },
      { label: "Python", icon: SiPython },
      { label: "Django", icon: SiDjango },
      { label: "MongoDB", icon: SiMongodb },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MySQL", icon: GrMysql },
      { label: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      { label: "Codex", icon: SiOpenai },
      { label: "Cursor", icon: BsCursor },
      { label: "Github Copilot", icon: SiGithubcopilot },
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "Docker", icon: SiDocker },
      { label: "Vercel", icon: SiVercel },
      { label: "Heroku", icon: SiHeroku },
      { label: "Render", icon: SiRender },
      { label: "Netlify", icon: SiNetlify },
      { label: "VS Code", icon: VscVscode },
    ],
  },
  {
    title: "Cloud",
    icon: FaCloud,
    skills: [
      { label: "Google Cloud", icon: SiGooglecloud },
      { label: "Firebase", icon: SiFirebase },
      { label: "AWS", icon: FaAws },
    ],
  },
];
