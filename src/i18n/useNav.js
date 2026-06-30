import { useLanguage } from './LanguageContext'

const NAV_ITEMS = [
  { key: 'home', to: '/', end: true },
  { key: 'about', to: '/about' },
  { key: 'services', to: '/service' },
  { key: 'product', to: '/product' },
  { key: 'resume', to: '/resume' },
  { key: 'contact', to: '/contact' },
]

export function useNav() {
  const { t } = useLanguage()

  return NAV_ITEMS.map((item) => ({
    ...item,
    label: t.nav[item.key],
  }))
}

export function useFooterQuickLinks() {
  return useNav().filter((item) => item.to !== '/')
}
