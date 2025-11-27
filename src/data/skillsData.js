// Category Icons
import { FaCode, FaServer, FaTools, FaCloud } from 'react-icons/fa';

// Skill Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiHeroku,
  SiNetlify,
  SiFirebase,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const skillsData = [
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      { label: 'React', icon: SiReact },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'HTML', icon: SiHtml5 },
      { label: 'CSS', icon: SiCss3 },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { label: 'Node.js', icon: SiNodedotjs },
      { label: 'Express.js', icon: SiExpress },
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'PostgreSQL', icon: SiPostgresql },
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
      { label: 'Netlify', icon: SiNetlify },
    ],
  },
  {
    title: 'Cloud',
    icon: FaCloud,
    skills: [
      { label: 'Firebase', icon: SiFirebase },
      { label: 'AWS', icon: FaAws },
    ],
  },
];
