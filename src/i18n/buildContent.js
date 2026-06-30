import { companyMeta, serviceAssets, whyUsIcons, projectAssets, partnerLogos } from './siteAssets'
import en from './locales/en'
import fr from './locales/fr'
import tl from './locales/tl'

const locales = { en, fr, tl }

const counterValues = [
  { value: '25', suffix: '+' },
  { value: '10', suffix: '+' },
  { value: '100', suffix: '+' },
]

function mergeServices(content) {
  return content.services.map((service, index) => ({
    ...serviceAssets[index],
    ...service,
  }))
}

function mergeWhyUs(content) {
  return {
    ...content.whyUs,
    items: content.whyUs.items.map((item, index) => ({
      ...item,
      icon: whyUsIcons[index],
    })),
  }
}

function mergeAbout(content) {
  return {
    ...content.about,
    counters: content.about.counters.map((counter, index) => ({
      ...counter,
      ...counterValues[index],
    })),
  }
}

function mergeProjects(content) {
  return content.featuredProjects.map((project, index) => ({
    ...projectAssets[index],
    ...project,
  }))
}

function mergePricingPlans(content) {
  return content.pricingPlans.map((plan, index) => ({
    featured: index === 1,
    ...plan,
  }))
}

const contactCardIcons = ['location', 'phone', 'clock']

export function buildContent(locale) {
  const content = locales[locale] ?? locales.en
  const services = mergeServices(content)
  const featuredProjects = mergeProjects(content)

  return {
    ...content,
    company: { ...companyMeta, ...content.company },
    whyUs: mergeWhyUs(content),
    about: mergeAbout(content),
    services,
    featuredProjects,
    pricingPlans: mergePricingPlans(content),
    partnerLogos,
    contactPage: {
      ...content.contactPage,
      cards: content.contactPage.cards.map((card, index) => ({
        ...card,
        icon: contactCardIcons[index],
      })),
    },
    footer: {
      ...content.footer,
      serviceLinks: services.map((service) => ({
        label: `${service.title} ${service.subtitle}`,
        href: `/service/${service.slug}`,
      })),
    },
    servicesPage: {
      ...content.servicesPage,
      serviceOptions: services.map((s) => `${s.title} ${s.subtitle}`),
    },
    resume: {
      ...content.resume,
      profile: {
        ...content.resume.profile,
        stats: content.resume.profile.stats.map((stat, index) => ({
          ...stat,
          icon: ['fa-solid fa-briefcase', 'fa-solid fa-building', 'fa-solid fa-award'][index],
        })),
      },
    },
  }
}

export { locales }
