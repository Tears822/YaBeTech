import { company, faqItems, servicesPage } from './siteContent'
import { BRAND_EMAIL, BRAND_PHONE, BRAND_LOCATION } from '../constants/brand'

export const chatbotConfig = {
  agentName: company.founder.split(' ')[0],
  agentRole: 'YaBeTech Assistant',
  welcome:
    `Hi, I am the YaBeTech assistant. Ask about services, pricing, availability, or how to start a project with ${company.founder.split(' ')[0]}.`,
  placeholder: 'Ask about services, rates, or your project...',
  quickPrompts: [
    'What services do you offer?',
    'What are your rates?',
    'Are you available for new work?',
    'How do I get started?',
  ],
  fallback:
    `I can help with services, pricing, and availability. For a detailed answer, email ${BRAND_EMAIL} or book a call via the contact page.`,
}

const responseRules = [
  {
    keywords: ['service', 'offer', 'help with', 'build', 'stack', 'vue', 'angular', 'ai', 'cms'],
    answer: servicesPage.intro,
  },
  {
    keywords: ['rate', 'price', 'pricing', 'cost', 'hour', 'budget', 'fee'],
    answer: faqItems.find((item) => item.question.includes('price'))?.answer,
  },
  {
    keywords: ['remote', 'montreal', 'montréal', 'location', 'where', 'canada'],
    answer: faqItems.find((item) => item.question.includes('remotely'))?.answer,
  },
  {
    keywords: ['available', 'availability', 'start', 'timeline', 'when', 'book', 'call', 'contact'],
    answer: `${company.availability}. Hours: ${company.hours}. Start with a free discovery call on the contact page or email ${BRAND_EMAIL}.`,
  },
  {
    keywords: ['existing', 'legacy', 'codebase', 'maintain', 'migration'],
    answer: faqItems.find((item) => item.question.includes('existing'))?.answer,
  },
  {
    keywords: ['project', 'kind', 'take on', 'work on'],
    answer: faqItems.find((item) => item.question.includes('kinds'))?.answer,
  },
  {
    keywords: ['phone', 'call', 'number'],
    answer: `You can reach ${company.founder} at ${BRAND_PHONE} or ${BRAND_EMAIL}.`,
  },
  {
    keywords: ['email', 'reach', 'message'],
    answer: `Email ${BRAND_EMAIL} or use the contact form. ${company.founder} usually replies within one business day.`,
  },
  {
    keywords: ['who', 'yann', 'about', 'experience', 'background'],
    answer: `${company.founder} is a senior front-end and full-stack engineer with 25+ years of experience, based in ${BRAND_LOCATION}. YaBeTech focuses on web apps, AI integrations, and production-ready delivery.`,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
    answer: chatbotConfig.welcome,
  },
]

export function getChatbotReply(input) {
  const text = input.trim().toLowerCase()
  if (!text) return chatbotConfig.fallback

  const faqMatch = faqItems.find(
    (item) =>
      text.includes(item.question.toLowerCase().slice(0, 12)) ||
      item.question.toLowerCase().includes(text)
  )
  if (faqMatch) return faqMatch.answer

  const ruleMatch = responseRules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(keyword))
  )
  if (ruleMatch?.answer) return ruleMatch.answer

  return chatbotConfig.fallback
}
