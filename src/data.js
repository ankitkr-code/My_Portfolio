export const profile = {
  name: 'Ankit Kumar',
  title: 'Full Stack Developer',
  tagline:
    'I build responsive web apps with React and Node.js — and I’m looking for my first full-time role where I can ship real features from day one.',
  location: 'Bengaluru, Karnataka',
  email: 'ankitm7250@gmail.com',
  phone: '+91 9508460866',
  github: 'https://github.com/ankitkr-code',
  linkedin: 'https://www.linkedin.com/in/ankit-kumar-a34117311',
  resume: '/Ankit-Kumar-Resume.pdf',
  availability: 'Available to join immediately',
}

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design', 'Reusable UI Components'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'REST API Integration', 'Firebase Firestore', 'Chart.js'],
  },
  {
    label: 'Languages & CS',
    skills: ['Java', 'Python', 'SQL', 'Data Structures & Algorithms'],
  },
  {
    label: 'AI',
    skills: ['Generative AI', 'Prompt Engineering', 'Hugging Face LLMs', 'Data Modeling'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Google Colab'],
  },
]

export const experience = [
  {
    role: 'Web Development Intern',
    company: 'VaultOfCode',
    period: 'Jul 2025 – Oct 2025',
    location: 'Remote',
    bullets: [
      'Built 8+ responsive web pages with JavaScript and reusable components, consistent across desktop, tablet and mobile.',
      'Standardized styling across 10+ pages with a Tailwind CSS design system and 5+ shared components, speeding up feature delivery.',
      'Built a dynamic certificate module that rendered recipient data into reusable templates with downloadable image and PDF export.',
    ],
    certificate: '/certificates/vaultofcode-internship-certificate.pdf',
  },
  {
    role: 'AI & Data Analytics Intern',
    company: 'AICTE · Shell India · Edunet Foundation',
    period: 'Jul 2025 – Aug 2025',
    location: 'Virtual',
    bullets: [
      'Completed a 4-week virtual internship on AI and Data Analytics focused on green skills (Skills4Future).',
      'Covered data analytics workflows and AI concepts applied to sustainability-focused use cases.',
    ],
    certificate: '/certificates/aicte-internship-certificate.pdf',
  },
  {
    role: 'Gen AI Trainee',
    company: 'Lawazia Tech',
    period: 'Jun 2024 – Jul 2024',
    location: 'Remote',
    bullets: [
      'Integrated Hugging Face language models into an interactive chatbot.',
      'Refined prompts across 5+ testing cycles and 10+ variations to improve domain-specific responses.',
    ],
  },
]

export const projects = [
  {
    name: 'LocalBizMarket',
    tag: 'Full-Stack',
    stack: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    description:
      'A full-stack local-business discovery and virtual-investment platform — browse businesses, track virtual investments, and watch it all update live on dashboards.',
    bullets: [
      'Firebase authentication with role-based access',
      'RESTful APIs with real-time Chart.js dashboards for investment tracking',
    ],
    github: 'https://github.com/ankitkr-code/LocalbizMarket',
    live: 'https://localbizmarket-app.onrender.com/',
  },
    {
    name: 'Susruta Samita Hospital',
    tag: 'Front-End',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    description:
      'An online appointment-booking website for a hospital in Dumka, Jharkhand. Patients can browse doctors, view their profiles, and book a slot instead of standing in a queue.',
    bullets: [
      'Doctor listings with individual profile pages, plus an appointment form and contact form',
      'Simulated payment flow (Card / UPI / Net Banking) with dynamic fields and a success page with a generated transaction ID',
    ],
    github: 'https://github.com/ankitkr-code/hospitalsite',
    live: 'https://hospitalsite-1-q6lj.onrender.com/',
  },
  {
    name: 'E-Library Management System',
    tag: 'Full-Stack',
    stack: ['Python', 'Flask', 'JavaScript', 'Jinja2', 'JSON', 'Render'],
    description:
      'A web-based library management system with separate admin and student portals for managing books, students, and issue records.',
    bullets: [
      'Session-based authentication with role-based access and an admin approval flow for new registrations',
      'Dashboard analytics, book issuance and transaction tracking, library cards, and secure study-material uploads',
    ],
    github: 'https://github.com/ankitkr-code/e-library',
    live: 'https://e-library-dk23.onrender.com/',
  },
  {
    name: 'CognitiveQuest',
    tag: 'Full-Stack',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    description:
      'A memory-support image puzzle game for Alzheimer\'s patients, helping them reconnect with their favourite people and things through personalised puzzles.',
    bullets: [
      'Player login with per-player data and custom image uploads to build personalised puzzles',
      'Spring Boot backend with a PostgreSQL production profile and audio feedback for correct and wrong moves',
    ],
    github: 'https://github.com/ankitkr-code/CognitiveQuestgame',
  },
  {
    name: 'DockChat',
    tag: 'AI / LLM',
    stack: ['React', 'FastAPI', 'LangChain', 'ChromaDB'],
    description:
      'A document Q&A app — upload documents, ask questions, and get grounded answers powered by retrieval-augmented generation.',
    bullets: [
      'Tested 12 query patterns across 4 debugging cycles',
      'Improved answer accuracy from 68% to 84%',
    ],
    github: 'https://github.com/Neelesh425/Dock_Chat',
  },
]

export const education = [
  {
    title: 'B.Tech, Computer Science and Engineering',
    org: 'Jharkhand University of Technology, Ranchi',
    period: '2022 – 2026',
  },
  {
    title: 'Generative AI Mastermind',
    org: 'Outskill — certification',
    period: '2025',
    certificate: '/certificates/outskill-certificate.pdf',
  },
  {
    title: 'C++ DSA Bootcamp',
    org: 'Problem solving and DSA implementation',
    period: 'Nov 2024',
    certificate: '/certificates/devtown-bootcamp-certificate.pdf',
  },
  {
    title: 'TCS iON Career Edge',
    org: 'Communication, teamwork, and career readiness',
    period: 'Dec 2024 – Jan 2025',
    certificate: '/certificates/tcs-ion-career-edge.pdf',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
