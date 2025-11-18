// Category Icons
import { FaCode, FaServer, FaTools, FaCloud } from 'react-icons/fa';

// Skill Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const skillsData = [
  {
    title: 'Frontend',
    icon: FaCode,
    skills: [
      { label: 'HTML', icon: SiHtml5 },
      { label: 'CSS', icon: SiCss3 },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'React', icon: SiReact },
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
    ],
  },
  {
    title: 'Cloud',
    icon: FaCloud,
    skills: [{ label: 'AWS', icon: FaAws }],
  },
];
