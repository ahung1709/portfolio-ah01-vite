// Import images
import projPewImg1 from '../assets/projects/pew-home01.png';
import projWorldAttractionImg1 from '../assets/projects/world-attractions01.png';
import projRestaurantsReviewImg1 from '../assets/projects/restaurants-review01.png';
import projRecipesImg1 from '../assets/projects/recipes-app01.png';
import projCheckersImg1 from '../assets/projects/checkers01.png';

export const projectsData = [
  {
    title: 'Pro Evolution Wellness',
    description:
      'Pro Evolution Wellness is a full-stack application with token based authentication and CRUD operations to allow the owner of the physiotherapy clinic to modify contents of the website.',
    tech: [
      'MongoDB',
      'Mongoose',
      'Express',
      'React',
      'React Router DOM',
      'Node',
      'JWT',
      'Firebase',
      'JavaScript',
      'CSS',
    ],
    github: 'https://github.com/ahung1709/pro-evolution-wellness',
    demo: 'https://proevolutionwellness.ca/',
    image: projPewImg1,
    showOnProjects: true,
  },
  {
    title: 'World Attraction App',
    description:
      'The World Attraction App is a world attraction-focused promotion service which publishes world attraction profiles for travel planning.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Express',
      'Node',
      'MongoDB',
      'Token-based authentication',
    ],
    github: 'https://github.com/ahung1709/project-4-attractions',
    demo: 'https://project-4-attractions.herokuapp.com/',
    image: projWorldAttractionImg1,
    showOnProjects: true,
  },
  {
    title: 'Restaurant Reviewer App',
    description:
      'The Restaurant Reviewer App is a restaurant-focused promotion service which publishes restaurant profiles and crowd-sourced reviews.',
    tech: [
      'HTML',
      'CSS',
      'Python',
      'Bootstrap',
      'Django',
      'PostgreSQL',
      'Django built-in authentication',
    ],
    github: 'https://github.com/ahung1709/project3restaurants',
    demo: 'https://project3restaurants.herokuapp.com/',
    image: projRestaurantsReviewImg1,
    showOnProjects: true,
  },
  {
    title: 'The Recipes App',
    description:
      'The Recipes App is a recipe-focused online social networking service.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'Node', 'MongoDB', 'OAuth'],
    github: 'https://github.com/ahung1709/project-2-recipes',
    demo: 'https://project-2-recipes-4ca1ea46338d.herokuapp.com/',
    image: projRecipesImg1,
    showOnProjects: true,
  },
  {
    title: 'Checkers',
    description:
      'Checkers is a group of strategy board games for two players which involve diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ahung1709/project-1-checkers/tree/main',
    demo: 'https://ahung1709.github.io/project-1-checkers/',
    image: projCheckersImg1,
    showOnProjects: true,
  },

  {
    title: 'Portfolio Website',
    description:
      'A portfolio built with React, Vite, Framer Motion, and EmailJS.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/yourrepo',
    demo: 'https://yourdemo.com',
    showOnProjects: false,
  },
  {
    title: 'Full Stack MERN App',
    description:
      'A full authentication-based web app with CRUD, JWT, and dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/yourrepo',
    demo: 'https://yourdemo.com',
    showOnProjects: false,
  },
  {
    title: 'REST API Server',
    description: 'Node & Express REST API with Swagger documentation.',
    tech: ['Node', 'Express'],
    github: 'https://github.com/yourrepo',
    demo: '',
    showOnProjects: false,
  },
];
