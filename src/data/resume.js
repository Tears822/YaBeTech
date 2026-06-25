export const resumeProfile = {
  name: 'Yann Benatar',
  title: 'Seasoned Front-End & Full-Stack Engineer | UI/UX Modernization | Java / Spring Boot | Vue.js / Angular',
  location: 'Montreal, Canada',
  phone: '(514) 515-1202',
  email: 'yann.benatar@techyabe.com',
  linkedin: 'https://www.linkedin.com/in/yann-benatar-446132105',
  summary:
    'Seasoned front-end and full-stack developer with 25+ years of experience designing, developing, maintaining, and modernizing web applications. Specialized in improving user interface and user experience, building maintainable front-end components, integrating Java/Spring Boot microservices, and supporting secure cloud-enabled application environments. Strong background across regulated and transaction-sensitive environments, including Loto-Quebec online gaming, e-commerce payment-page modernization, CMS migration, authentication configuration, and development environment management.',
  highlights: [
    'Autonomy, persistence, and attention to detail',
    'Practical production-focused improvements to existing systems',
    'Regulated online gaming, e-commerce, and CMS migration experience',
  ],
  stats: [
    { value: '25+', label: 'Years', icon: 'fa-solid fa-briefcase' },
    { value: '10+', label: 'Companies', icon: 'fa-solid fa-building' },
    { value: '4', label: 'Certifications', icon: 'fa-solid fa-award' },
  ],
  tags: ['Vue.js', 'Angular', 'TypeScript', 'Java / Spring Boot', 'AI / LLM', 'Full Stack', 'GCP'],
}

export const targetFit = [
  'Review marketplace-style web and mobile-responsive applications from front end through back end, including UI/UX flow, account preferences, authentication, CMS/content delivery, API integration, database persistence, deployment pipelines, and maintainability.',
  'Application security best practices, Auth0 configuration, controlled development environments, CI/CD pipelines, Docker/OpenShift deployment contexts, and secure handling of user-facing functionality in regulated online environments.',
  'Evaluate architecture, identify brittle or risky areas, assess testing coverage, document technical debt, and provide clear recommendations for robustness, security, scalability, and developer workflow.',
  'Structured architecture and security reviews covering authentication, authorization, data models, payment or checkout flows, responsive UI, API contracts, microservices, release pipelines, and environment readiness.',
]

export const skillGroups = [
  {
    title: 'Front-End',
    skills: [
      'JavaScript',
      'TypeScript',
      'Angular 1.5 / 2 / 5 / 7',
      'Vue.js 2 / 3',
      'RxJS',
      'HTML',
      'CSS',
      'SASS',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery',
      'Storybook',
      'UI/UX modernization',
      'Responsive web interfaces',
    ],
  },
  {
    title: 'Back-End & Infra',
    skills: [
      'Java 18 to 20',
      'Spring Boot 3 to 3.5',
      'Node.js with TypeScript',
      'RichFaces',
      'JSF',
      'Hibernate',
      'JSP',
      'Fastify',
      'Docker',
      'OpenShift / Kubernetes',
      'AWS S3 / EC2',
      'Google Cloud Platform',
    ],
  },
  {
    title: 'Databases',
    skills: ['Oracle', 'MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    title: 'Quality, Security & Methods',
    skills: [
      'Unit / integration / E2E testing',
      'JUnit',
      'Mocks',
      'Application security best practices',
      'Agile / Scrum',
      'Code review',
      'Technical documentation',
    ],
  },
  {
    title: 'CMS & DevOps',
    skills: [
      'Contentstack',
      'Magnolia CMS',
      'Netlify',
      'Auth0',
      'GitLab CI',
      'GitHub Actions',
      'Jenkins',
      'Maven',
      'Terraform',
    ],
  },
  {
    title: 'AI & Emerging Tech',
    skills: ['LLM Engineering', 'RAG / QLoRA', 'Agentic AI Systems', 'Prompt Engineering', 'LangChain', 'OpenAI'],
  },
]

export const careerJourney = [
  {
    period: 'Mar 2026 to Present',
    role: 'Senior Software Engineer, Founder',
    company: 'Ya Be technology Inc.',
    bullets: ['Founded the company. Building the next chapter of web engineering.'],
    tools: ['Nuxt 3', 'Vue 3', 'LangChain', 'OpenAI', 'Fastify'],
  },
  {
    period: 'Feb 2021 to Mar 2026',
    role: 'Consultant for Loto-Quebec | Frontend Web Developer',
    company: 'Cofomo',
    bullets: [
      'Maintained and evolved the online casino gaming portal using HTML and Vue.js with a design system and Storybook.',
      'Contributed to the migration from Magnolia CMS to a headless architecture using Contentstack and Netlify on AWS (S3/EC2).',
      'Implemented GitLab CI pipelines to automate version builds and releases using Maven.',
      'Modified the Preferences microservice using Spring Boot to support marketing user stories and save favorite games in Oracle.',
      'Updated the Vue.js UI to display favorite-game status based on saved user preferences.',
      'Integrated unit and integration testing using JUnit and mocks to reduce regression risk.',
      'Participated in the “m. removal” project to support a cleaner responsive site strategy.',
      'Helped set up a complete OpenShift/Kubernetes development environment for HostedPAM integration.',
      'Supported HostedPAM migration and configured Auth0 for authentication in the development environment.',
      'Managed and maintained approximately 15 distinct development environments.',
    ],
    tools: ['Vue.js 3', 'Java 18 to 20', 'Spring Boot', 'Oracle', 'Contentstack', 'Auth0', 'GitLab CI', 'Docker', 'OpenShift'],
  },
  {
    period: 'Apr 2019 to Feb 2021',
    role: 'Front-End Programmer',
    company: 'Brault et Martineau (via R3D, then employee)',
    bullets: [
      'Improved customer-facing UI using Vue.js to optimize the shopping experience.',
      'Updated and simplified the payment page to improve mobile purchasing usability.',
      'Created dynamic promotional pages and supported content-driven sales campaigns.',
      'Automated content creation from the GatherContent platform using PHP.',
    ],
    tools: ['Vue.js 2', 'HTML', 'CSS3', 'jQuery', 'PHP', 'Git', 'WebSphere', 'Maven'],
  },
  {
    period: 'Sep 2018 to Mar 2019',
    role: 'Front-End Programmer',
    company: 'Edilex inc.',
    bullets: [
      'Redesigned the application user interface to improve usability and consistency.',
      'Upgraded application libraries from Angular 5.5 to Angular 7.1.',
      'Updated RxJS to 5.5.2 and integrated pipeable operators.',
    ],
    tools: ['Angular', 'TypeScript', 'Node.js', 'SASS', 'Bootstrap', 'Git'],
  },
  {
    period: 'Sep 2016 to Jun 2018',
    role: 'Lead Front-End Programmer',
    company: 'Premier Continuum inc.',
    bullets: [
      'Modernized the UI of the company’s main web application.',
      'Led migration from AngularJS 1.5 to Angular 2 while maintaining the legacy version.',
      'Clients included Desjardins, Intact Assurance, Industrielle Alliance, CAA, and Ivanhoe Cambridge.',
    ],
    tools: ['AngularJS 1.5', 'Angular 2', 'TypeScript', 'Bootstrap', 'jQuery', 'SVN'],
  },
  {
    period: 'Apr 2016 to Jun 2016',
    role: 'Full-Stack Developer',
    company: 'IE3',
    bullets: [
      'Updated a JSF-based site for data entry and operational workflows.',
      'Developed JSF pages with search and pagination backed by MySQL.',
      'Created monthly reports to flag missing data for hospitality client operations (Les Hotels Sheraton).',
    ],
    tools: ['Java 1.8', 'RichFaces', 'Spring Boot', 'Hibernate', 'JSF', 'MySQL', 'Tomcat'],
  },
  {
    period: 'Dec 2004 to Jun 2015',
    role: 'Full-Stack Developer',
    company: 'Ingenio, Subsidiary of Loto-Quebec',
    bullets: [
      'Designed and maintained an automated production system for Master CD builds using Ant, later adapted for web deployment.',
      'Developed a web portal to access lottery applications using Spring Boot, JSP, and Hibernate.',
      'Created an application to import usage statistics into MySQL and generate JasperReport reports.',
      'Programmed a Flash catalog application for iPad showcasing Loto-Quebec’s art collection.',
      'Developed SharePoint tracking tools for production requests and mobile device loans.',
    ],
    tools: ['Java', 'Spring Boot', 'Hibernate', 'JSF', 'JSP', 'JasperReport', 'JBoss', 'MySQL'],
  },
]

export const earlierExperience = [
  {
    period: 'Feb 2004 to Dec 2004',
    role: 'Freelance Developer',
    company: 'Ipr inc + Otis Sauter Leger Inc',
    detail: 'PHP/MySQL web forms with JavaScript validation; ASP pages with SQL Server.',
  },
  {
    period: 'Aug 2002 to Feb 2004',
    role: 'Developer / Server Administrator',
    company: 'Ipr Inc.',
    detail: 'PHP/MySQL applications and Mac OS X server setup and configuration.',
  },
  {
    period: 'Aug 2001 to Aug 2002',
    role: 'Web Developer',
    company: 'Otis Sauter Leger Inc.',
    detail: 'ASP forms with SQL Server and Great Plains server updates.',
  },
  {
    period: 'May 2000 to Sep 2001',
    role: 'Web Developer / Server Administrator',
    company: 'TMI Services Conseil',
    detail: 'Client sites in ASP and HTML; IIS, Apache, and firewall administration.',
  },
]

export const certifications = [
  'GCP Associate Cloud Engineer',
  'AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents',
  'Be a Generative AI Leader: Google Cloud',
  'AI Leader: Generative AI & Agentic AI for Leaders & Founders',
]

export const education = {
  title: 'AEC, Techniques de l’informatique',
  school: 'Multihexa, Montreal, QC',
  period: '1999 to 2000',
  note: 'Experience equivalent to a Bachelor’s degree supported by 25+ years of professional software development experience.',
}

export const languages = ['French', 'English']
