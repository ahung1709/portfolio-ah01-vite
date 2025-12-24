// Import images
import projPewImg1 from '../assets/projects/pew-home01.png';
import projMonsterRolodexImg1 from '../assets/projects/monster-rolodex01.png';
import projFaceRecognitionBrainImg1 from '../assets/projects/face-recognition-brain01.png';
import projWorldAttractionImg1 from '../assets/projects/world-attractions01.png';
import projRestaurantsReviewImg1 from '../assets/projects/restaurants-review01.png';
import projRecipesImg1 from '../assets/projects/recipes-app01.png';
import projCheckersImg1 from '../assets/projects/checkers01.png';

export const projectsData = [
  {
    title: 'Pro Evolution Wellness',
    description:
      'Pro Evolution Wellness is a full-stack application with token based authentication and CRUD operations to allow the owner of the physiotherapy clinic to modify contents of the website.',
    tech: {
      frontend: ['React', 'React Router DOM', 'JavaScript', 'CSS'],
      backend: [
        'Node',
        'Express',
        'JSON Web Token (JWT)',
        'MongoDB',
        'Mongoose',
      ],
      cloud: ['Firebase'],
      services: ['MongoDB Atlas', 'EmailJS', 'Heroku'],
    },
    github: [
      {
        label: 'Code',
        url: 'https://github.com/ahung1709/pro-evolution-wellness',
      },
    ],
    demo: 'https://proevolutionwellness.ca/',
    image: projPewImg1,
    showOnProjects: true,
  },
  {
    title: 'Face Recognition Brain',
    description: `A full-stack web application that allows users to register, authenticate, and perform AI-powered face detection on images. The frontend is built with React (Create React App) and implements secure JWT-based session authentication. Authenticated users can submit image URLs for face detection, manage their profiles, and track usage through an entry count system.

      The backend is developed with Node.js and Express, featuring JWT authentication, session management with Redis, and persistent user data stored in PostgreSQL. Face detection is powered by the Clarifai API, while an AWS Lambda function (built using the Serverless Framework) dynamically returns rank badges based on user entry count. This Lambda function is invoked directly by the frontend to reduce backend load and demonstrate a scalable serverless architecture.

      The application supports Docker-based local development, environment-based configuration, and health-check endpoints for monitoring. Overall, this project demonstrates full-stack system design, secure authentication, cloud services integration, and production-ready development practices.`,
    tech: {
      frontend: ['React', 'JavaScript', 'Reactstrap', 'Bootstrap', 'Tachyons'],
      backend: [
        'Node',
        'Express',
        'JSON Web Token (JWT)',
        'Knex.js',
        'PostgreSQL (SQL)',
        'Redis',
      ],
      cloud: [
        'AWS Lambda',
        'Serverless Framework',
        'Docker',
        'Docker Compose',
        'GitHub Actions',
      ],
      services: [
        'Clarifai API',
        'Neon (PostgreSQL)',
        'Upstash (Redis)',
        'Heroku',
        'Render',
      ],
    },
    github: [
      {
        label: 'Frontend',
        url: 'https://github.com/ahung1709/facerecognitionbrain',
      },
      {
        label: 'Backend',
        url: 'https://github.com/ahung1709/facerecognitionbrain-api',
      },
      {
        label: 'Serverless',
        url: 'https://github.com/ahung1709/rankly',
      },
    ],
    demo: 'https://smart-brain-01-89e20f787a87.herokuapp.com/',
    image: projFaceRecognitionBrainImg1,
    showOnProjects: true,
  },
  {
    title: 'Monster Rolodex',
    description:
      'A React + TypeScript monster directory that fetches users from JSONPlaceholder and displays them as Robohash-generated monsters. Includes a live search to filter monsters by name.',
    tech: {
      frontend: ['React', 'TypeScript', 'Vite (Build Tool)', 'CSS'],
      services: ['Yarn (Package Manager)', 'Github Pages', 'JSONPlaceholder'],
    },
    github: [
      {
        label: 'Code',
        url: 'https://github.com/ahung1709/monsters-rolodex-vite/tree/typescript',
      },
    ],
    demo: 'https://ahung1709.github.io/monsters-rolodex-vite/',
    image: projMonsterRolodexImg1,
    showOnProjects: true,
  },
  {
    title: 'World Attraction App',
    description:
      'The World Attraction App is a world attraction-focused promotion service which publishes world attraction profiles for travel planning.',
    tech: {
      frontend: ['React', 'JavaScript', 'CSS', 'HTML'],
      backend: ['Node', 'Express', 'Token-based authentication', 'MongoDB'],
    },
    github: [
      {
        label: 'Code',
        url: 'https://github.com/ahung1709/project-4-attractions',
      },
    ],
    demo: 'https://project-4-attractions.herokuapp.com/',
    image: projWorldAttractionImg1,
    showOnProjects: false,
  },
  {
    title: 'Restaurant Reviewer App',
    description:
      'The Restaurant Reviewer App is a restaurant-focused promotion service which publishes restaurant profiles and crowd-sourced reviews.',
    tech: {
      frontend: ['Bootstrap', 'CSS', 'HTML'],
      backend: [
        'Django',
        'Django built-in authentication',
        'Python',
        'PostgreSQL',
      ],
    },
    github: [
      {
        label: 'Code',
        url: 'https://github.com/ahung1709/project3restaurants',
      },
    ],
    demo: 'https://project3restaurants.herokuapp.com/',
    image: projRestaurantsReviewImg1,
    showOnProjects: false,
  },
  {
    title: 'The Recipes App',
    description:
      'The Recipes App is a recipe-focused online social networking service.',
    tech: {
      frontend: ['JavaScript', 'CSS', 'HTML'],
      backend: ['Node', 'Express', 'MongoDB', 'OAuth'],
    },
    github: [
      { label: 'Code', url: 'https://github.com/ahung1709/project-2-recipes' },
    ],
    demo: 'https://project-2-recipes-4ca1ea46338d.herokuapp.com/',
    image: projRecipesImg1,
    showOnProjects: false,
  },
  {
    title: 'Checkers',
    description:
      'Checkers is a group of strategy board games for two players which involve diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces.',
    tech: {
      frontend: ['JavaScript', 'CSS', 'HTML'],
    },
    github: [
      {
        label: 'Code',
        url: 'https://github.com/ahung1709/project-1-checkers/tree/main',
      },
    ],
    demo: 'https://ahung1709.github.io/project-1-checkers/',
    image: projCheckersImg1,
    showOnProjects: false,
  },

  {
    title: 'Portfolio Website',
    description:
      'A portfolio built with React, Vite, Framer Motion, and EmailJS.',
    tech: {
      frontend: ['React', 'CSS'],
      tools: ['Vite'],
    },
    github: [{ label: 'Code', url: 'https://github.com/yourrepo' }],
    demo: 'https://yourdemo.com',
    showOnProjects: false,
  },
  {
    title: 'Full Stack MERN App',
    description:
      'A full authentication-based web app with CRUD, JWT, and dashboard.',
    tech: {
      frontend: ['React'],
      backend: ['Node', 'Express', 'MongoDB'],
    },
    github: [{ label: 'Code', url: 'https://github.com/yourrepo' }],
    demo: 'https://yourdemo.com',
    showOnProjects: false,
  },
  {
    title: 'REST API Server',
    description: 'Node & Express REST API with Swagger documentation.',
    tech: {
      backend: ['Node', 'Express'],
    },
    github: [{ label: 'Code', url: 'https://github.com/yourrepo' }],
    demo: '',
    showOnProjects: false,
  },
];
