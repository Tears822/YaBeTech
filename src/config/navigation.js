export const primaryNav = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/service' },
  { label: 'Product', to: '/product' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export const footerQuickLinks = primaryNav.filter((item) => item.to !== '/')
