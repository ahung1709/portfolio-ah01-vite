// Category Icons
import { FaCode, FaServer, FaTools, FaCloud } from 'react-icons/fa';

// Skill Icons
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiGit,
  SiGithub,
  SiDocker,
  SiHeroku,
  SiRender,
  SiNetlify,
  SiGithubcopilot,
  SiGooglecloud,
  SiFirebase,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export const skillsData = [
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      { label: 'React', icon: SiReact },
      { label: 'Redux', icon: SiRedux },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'GraphQL', icon: SiGraphql },
      { label: 'Sass', icon: SiSass },
      { label: 'CSS', icon: SiCss3 },
      { label: 'HTML', icon: SiHtml5 },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { label: 'Node.js', icon: SiNodedotjs },
      { label: 'Express.js', icon: SiExpress },
      { label: 'Python', icon: SiPython },
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'Redis', icon: SiRedis },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: [
      { label: 'Git', icon: SiGit },
      { label: 'GitHub', icon: SiGithub },
      { label: 'Docker', icon: SiDocker },
      { label: 'Heroku', icon: SiHeroku },
      { label: 'Render', icon: SiRender },
      { label: 'Netlify', icon: SiNetlify },
      { label: 'Github Copilot', icon: SiGithubcopilot },
      { label: 'VS Code', icon: VscVscode },
    ],
  },
  {
    title: 'Cloud',
    icon: FaCloud,
    skills: [
      { label: 'Google Cloud', icon: SiGooglecloud },
      { label: 'Firebase', icon: SiFirebase },
      { label: 'AWS', icon: FaAws },
    ],
  },
];
