export const company = {
  name: 'YaBeTech',
  legalName: 'Ya Be technology Inc.',
  tagline: 'Front-end & AI Engineering',
  location: 'Montreal, Canada',
  phone: '(514) 515-1202',
  phoneTel: '+15145151202',
  email: 'yann.benatar@techyabe.com',
  linkedin: 'https://www.linkedin.com/in/yann-benatar-446132105',
  founder: 'Yann Benatar',
  availability: 'Available for new projects',
  hours: 'Mon to Fri 9:00am to 5:00pm',
  hourlyRate: '$80 to $100/hr',
}

export const hero = {
  badge: 'Available for new projects',
  title: 'Building software that actually',
  titleAccent: 'ships.',
  subtitle:
    'Web apps and AI-powered tools that save you time, cut costs, and deliver real results. 25+ years of hands-on experience, based in Montréal.',
  ctaText: "Let's talk",
  ctaLink: '/contact',
  statValue: '100',
  statSuffix: '+',
  statLabel: 'Projects delivered',
}

export const whyUs = {
  eyebrow: 'WHY WORK WITH ME',
  title: 'Senior engineering,',
  titleAccent: 'direct to you.',
  subtitle: 'Real solutions for real business problems, without agency overhead.',
  items: [
    {
      icon: '/assets/img/home-1/icon/icon1.svg',
      title: 'Battle-tested experience',
      description:
        '25+ years building web products for major companies, from enterprise platforms to customer-facing apps.',
    },
    {
      icon: '/assets/img/home-1/icon/icon2.svg',
      title: 'You talk to the builder',
      description:
        'No account managers or handoffs. You work directly with the person writing the code and making architecture decisions.',
    },
    {
      icon: '/assets/img/home-1/icon/icon3.svg',
      title: 'I ship, then I stay',
      description:
        'Launching is the starting line. Ongoing support, performance monitoring, and iterative improvements after go-live.',
    },
    {
      icon: '/assets/img/home-1/icon/icon4.svg',
      title: 'Production-first delivery',
      description:
        'Clean code, CI/CD, testing, and security best practices built for regulated and transaction-sensitive environments.',
    },
  ],
}

export const about = {
  eyebrow: 'ABOUT YABETECH',
  title:
    'Front-end and full-stack engineering for businesses that need software that ships and keeps working in production.',
  summary:
    'Ya Be technology Inc. is led by Yann Benatar, a seasoned front-end and full-stack developer with 25+ years of experience modernizing web applications, integrating Java/Spring Boot services, and building AI-powered features.',
  counters: [
    { label: 'Experience', value: '25', suffix: '+', note: 'Years building web products for enterprise and consumer clients.' },
    { label: 'Companies', value: '10', suffix: '+', note: 'Major employers and clients across gaming, retail, and SaaS.' },
    { label: 'Projects', value: '100', suffix: '+', note: 'Delivered across front-end, CMS migration, and AI integrations.' },
  ],
}

export const aboutPage = {
  heroEyebrow: 'ABOUT YABETECH',
  valuesEyebrow: 'HOW I WORK',
  valuesTitle: 'Software that ships, then stays healthy in production.',
  valuesIntro:
    'From discovery through launch and support — one senior engineer, direct communication, and no agency layers between you and the code.',
  marqueeWords: ['Ship', 'Iterate', 'Support', 'Scale'],
}

export const services = [
  {
    id: '001',
    title: 'AI-Powered',
    subtitle: 'Features',
    slug: 'ai-powered-features',
    description:
      'Smart chatbots trained on your content, RAG knowledge bases, and custom AI assistants embedded in your site, tailored to your brand.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Agents'],
  },
  {
    id: '002',
    title: 'Front-end',
    subtitle: 'Development',
    slug: 'front-end-development',
    description:
      'Production-ready apps with Vue 3 / Nuxt, Angular, and TypeScript. Clean architecture, test coverage, and CI/CD from day one.',
    tags: ['Vue.js', 'Nuxt', 'Angular', 'TypeScript'],
  },
  {
    id: '003',
    title: 'UI/UX',
    subtitle: 'Consulting',
    slug: 'ui-ux-consulting',
    description:
      'Expert review of usability, accessibility, and visual consistency with actionable reports and hands-on fixes.',
    tags: ['WCAG', 'Usability', 'Design Systems'],
  },
  {
    id: '004',
    title: 'Performance',
    subtitle: 'Optimization',
    slug: 'performance-optimization',
    description:
      'Lighthouse and Core Web Vitals audits with concrete fixes. SSG/SSR strategy, lazy loading, and bundle optimization.',
    tags: ['Lighthouse', 'Web Vitals', 'SSG/SSR'],
  },
  {
    id: '005',
    title: 'API & Backend',
    subtitle: 'Integration',
    slug: 'api-backend-integration',
    description:
      'Fastify APIs, REST integrations, and headless CMS setup wired cleanly to your front end.',
    tags: ['Fastify', 'REST', 'Contentstack'],
  },
  {
    id: '006',
    title: 'Mobile-First',
    subtitle: 'Design',
    slug: 'mobile-first-design',
    description:
      'Interfaces built for phones first that scale up cleanly to tablet and desktop, with touch-friendly flows and responsive layouts.',
    tags: ['Responsive', 'Mobile UI', 'Touch UX'],
  },
  {
    id: '007',
    title: 'CMS',
    subtitle: 'Migration',
    slug: 'cms-migration',
    description:
      'Move from legacy CMS to headless architecture with Contentstack, Netlify, and modern content delivery pipelines.',
    tags: ['Contentstack', 'Headless', 'Netlify'],
  },
  {
    id: '008',
    title: 'Legacy',
    subtitle: 'Modernization',
    slug: 'legacy-modernization',
    description:
      'Upgrade aging codebases, reduce technical debt, and improve security without a risky full rewrite.',
    tags: ['Refactoring', 'Auth0', 'CI/CD'],
  },
]

export const servicesPage = {
  eyebrow: 'WHAT I DO',
  title: 'Front-end & AI',
  titleAccent: 'engineering services.',
  intro:
    'I help businesses build and modernize web applications, integrate AI features, and improve performance. You work directly with me: no agency handoffs, no junior developers on your project.',
  highlights: [
    'Vue.js, Angular, TypeScript, and Java/Spring Boot',
    'AI chatbots, RAG integrations, and LLM-powered tools',
    'CMS migration, Auth0, CI/CD, and legacy modernization',
  ],
  contactTitle: 'Discuss your project',
  contactText: 'Share a brief about what you need. I typically reply within one business day.',
  serviceOptions: services.map((s) => `${s.title} ${s.subtitle}`),
}

export const contactPage = {
  eyebrow: 'GET IN TOUCH',
  title: 'Talk directly with',
  titleAccent: 'your engineer.',
  intro:
    'Reach out to discuss front-end development, AI integrations, performance work, or legacy modernization. You speak with Yann Benatar, not a sales team.',
  cards: [
    {
      icon: 'location',
      title: 'Based in Montréal',
      lines: ['Montreal, Canada', 'Remote-friendly across Canada and internationally'],
    },
    {
      icon: 'phone',
      title: 'Phone & email',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
    },
    {
      icon: 'clock',
      title: 'Availability',
      lines: ['Mon to Fri 9:00am to 5:00pm', 'Available for new projects'],
    },
  ],
  formTitle: 'Send a project brief',
  formIntro: 'Tell me what you are building, your timeline, and the stack you are using. I usually reply within one business day.',
  roleLabel: 'Senior Front-End & Full-Stack Engineer',
}

export const featuredProjects = [
  {
    year: '2026',
    tags: ['Full Stack', 'Vue.js'],
    title: 'Mrs. Philippines Montreal: full-stack event platform in progress.',
    slug: 'mrs-philippines-montreal',
    image: '/assets/img/home-1/project/project-1.jpg',
  },
  {
    year: '2021 to 2026',
    tags: ['Vue.js', 'Headless CMS'],
    title: 'Loto-Québec online casino portal: Vue.js UI and CMS migration.',
    slug: 'loto-quebec-casino',
    image: '/assets/img/home-1/project/project-2.jpg',
  },
  {
    year: '2019 to 2021',
    tags: ['Vue.js', 'E-commerce'],
    title: 'Brault & Martineau: payment page and storefront UI modernization.',
    slug: 'brault-martineau',
    image: '/assets/img/home-1/project/project-3.jpg',
  },
  {
    year: '2016 to 2018',
    tags: ['Angular', 'Enterprise'],
    title: 'Insurance & financial web apps: AngularJS to Angular migration.',
    slug: 'enterprise-insurance-ui',
    image: '/assets/img/inner-page/project-04.jpg',
  },
  {
    year: '2021 to 2026',
    tags: ['Spring Boot', 'Auth0'],
    title: 'Loto-Québec microservices: preferences API, Auth0, and OpenShift setup.',
    slug: 'loto-quebec-platform',
    image: '/assets/img/inner-page/project-05.jpg',
  },
  {
    year: '2026',
    tags: ['AI / LLM', 'Integration'],
    title: 'AI-powered features: chatbots, RAG workflows, and LLM integrations.',
    slug: 'ai-powered-features',
    image: '/assets/img/inner-page/project-06.jpg',
  },
]

export const productPage = {
  eyebrow: 'SELECTED WORK',
  title: 'Products and platforms',
  titleAccent: 'built to last.',
  intro:
    'Representative work across regulated gaming, retail e-commerce, enterprise SaaS, and full-stack client builds. Each project reflects front-end modernization, API integration, or production deployment with real users.',
  ctaTitle: 'Ready to build',
  ctaTitleAccent: 'software that ships?',
  ctaText: 'Book a free discovery call or send a project brief.',
  ctaButton: 'Get in touch',
}

export const defaultCta = {
  title: 'Ready to build',
  titleAccent: 'software that ships?',
  text: 'Book a free discovery call or send a project brief.',
  buttonText: 'Get in touch',
  buttonTo: '/contact',
}

export const pricingPage = {
  eyebrow: 'OUR PRICING PLANS',
  title: 'Transparent',
  titleAccent: 'engagement options.',
  intro:
    'Straightforward pricing with no agency markup. Start with a free discovery call, then choose contract hourly work or a fixed-scope project quote.',
}

export const pricingPlans = [
  {
    name: 'Discovery',
    priceLabel: 'Free',
    priceSuffix: '',
    description: 'Initial conversation to understand your goals, stack, and timeline.',
    ctaText: 'Book a call',
    features: [
      'Free initial call',
      'Scope and fit assessment',
      'High-level recommendations',
      'No obligation',
    ],
  },
  {
    name: 'Contract',
    priceLabel: '$80',
    priceSuffix: '/ hr',
    description: 'Senior front-end and AI engineering on an hourly or retainer basis.',
    ctaText: 'Get started',
    featured: true,
    features: [
      'Senior front-end engineering',
      'Custom AI integrations (RAG, agents)',
      'Performance and architecture audits',
      '$80 to $100/hr transparent pricing',
    ],
  },
  {
    name: 'Project',
    priceLabel: 'Fixed',
    priceSuffix: ' scope',
    description: 'Milestone-based delivery for well-defined builds and integrations.',
    ctaText: 'Request a quote',
    features: [
      'Fixed-scope milestones',
      'Build and integrate delivery',
      'Deploy and handoff with docs',
      'Ongoing support available',
    ],
  },
]

export const notFoundPage = {
  title: 'Link broken or outdated',
  text: 'The page you are looking for may have moved or no longer exists. Head back home or get in touch if you need help finding something.',
  buttonText: 'Back to home',
}

export const partnerLogos = [
  {
    name: 'Intact Insurance',
    src: '/assets/img/home-1/brand/intact-insurance.svg',
  },
  {
    name: 'iA Financial Group',
    src: '/assets/img/home-1/brand/ia-financial.svg',
  },
  {
    name: 'CAA',
    src: '/assets/img/home-1/brand/caa.svg',
  },
  {
    name: 'Google Cloud',
    src: '/assets/img/home-1/brand/google-cloud.svg',
  },
  {
    name: 'Sovra',
    src: '/assets/img/home-1/brand/sovra.png',
  },
  {
    name: 'Mrs. Philippines Montreal',
    src: '/assets/img/home-1/brand/mrs-philippines.svg',
  },
]

export const processSteps = [
  {
    number: '01.',
    title: 'Discovery call',
    description:
      'I learn about your business, goals, and the problem you need solved. No pitches, just a conversation to see if I am the right fit.',
  },
  {
    number: '02.',
    title: 'Build & iterate',
    description:
      'Short cycles with progress shared along the way. You see working software early and give feedback before anything is set in stone.',
  },
  {
    number: '03.',
    title: 'Launch & support',
    description:
      'Deployment, performance monitoring, and ongoing tweaks as your product and needs evolve.',
  },
]

export const valueQuotes = [
  {
    text: '25+ years building for Loto-Québec, Brault & Martineau, Desjardins, and other major organizations, now available directly for your project.',
    name: 'Enterprise experience',
    role: 'Regulated & high-traffic environments',
  },
  {
    text: 'Vue.js, Angular, Spring Boot, headless CMS, Auth0, OpenShift, and AI/LLM integrations: full stack from UI through deployment.',
    name: 'Full-stack depth',
    role: 'Front-end through cloud deployment',
  },
  {
    text: 'Transparent pricing at $80 to $100/hr for freelance and contract work, with a free initial discovery call.',
    name: 'Straightforward engagement',
    role: 'Senior-level engineering when you need it',
  },
]

export const faqItems = [
  {
    question: 'What kinds of projects do you take on?',
    answer:
      'Front-end and full-stack web apps, AI chatbots and RAG integrations, CMS migrations, performance audits, UI/UX reviews, and legacy modernization, especially Vue.js, Angular, and Java/Spring Boot stacks.',
  },
  {
    question: 'Do you work remotely with clients outside Montréal?',
    answer:
      'Yes. Most engagements are remote-friendly. I work with clients across Canada and internationally, with overlap for calls and async collaboration.',
  },
  {
    question: 'How do you price your work?',
    answer:
      'Freelance and contract work is typically $80 to $100/hr. Larger scopes can be quoted as fixed milestones after a free discovery call.',
  },
  {
    question: 'Can you help with an existing codebase?',
    answer:
      'Absolutely. A large part of my experience is maintaining and modernizing production systems: migrations, Auth0 setup, CI/CD pipelines, and reducing technical debt.',
  },
]

export const marqueeWords = ['Ship', 'Vue.js', 'AI', 'TypeScript', 'Montréal']

export const footer = {
  blurb:
    'Front-end & AI engineering from Montréal. Web apps and AI-powered tools built by a senior engineer with 25+ years of hands-on experience.',
  serviceLinks: services.map((s) => ({ label: `${s.title} ${s.subtitle}`, href: '/service' })),
}
