import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const refDir = path.join(__dirname, '../../Reference/buyer-file')
const outDir = path.join(__dirname, '../src/pages/generated')

const pageMap = {
  'index.html': 'Home',
  'about.html': 'About',
  'service.html': 'Service',
  'service-details.html': 'ServiceDetails',
  'contact.html': 'Contact',
  'project.html': 'Product',
  'project-details.html': 'ProjectDetails',
  'pricing.html': 'Pricing',
  '404.html': 'NotFound',
}

const hrefMap = {
  'index.html': '/',
  'about.html': '/about',
  'service.html': '/service',
  'service-details.html': '/service-details',
  'news-grid.html': '/blog',
  'news.html': '/blog',
  'news-details.html': '/blog',
  'contact.html': '/contact',
  'project.html': '/product',
  'project-details.html': '/project-details',
  'team.html': '/',
  'team-details.html': '/',
  'pricing.html': '/pricing',
  'faq.html': '/faq',
  '404.html': '/404',
  'contact.php': '#',
}

function removePricingSection(html) {
  const start = html.indexOf('<section class="pricing-section')
  if (start === -1) return html
  const end = html.indexOf('</section>', start) + '</section>'.length
  return html.slice(0, start) + html.slice(end)
}

function extractContent(html) {
  const start = html.indexOf('<div id="smooth-wrapper">')
  const footerStart = html.indexOf('<!-- Footer Section Start -->')
  if (start === -1 || footerStart === -1) return null
  let content = html.slice(start, footerStart)
  content = content.replace(/^\s*<div id="smooth-wrapper">\s*<div id="smooth-content">\s*/i, '')
  content = content.replace(/\s*<\/div>\s*<\/div>\s*$/i, '')
  return content.trim()
}

function applyBrandReplacements(jsx) {
  return jsx
    .replace(/\/assets\/img\/logo\/white-logo\.svg/g, '/logo.svg')
    .replace(/\/assets\/img\/logo\/black-logo\.svg/g, '/logo.svg')
    .replace(
      /<div className="brevon-text">\s*<img src="[^"]*" alt="[^"]*" \/>\s*<\/div>/g,
      '<div className="brevon-text">\n                                  <img src="/assets/img/home-1/hero/yabetech-text.svg" alt="" />\n                              </div>',
    )
    .replace(/Brevon\./g, 'YaBeTech.')
    .replace(/Brevon/g, 'YaBeTech')
    .replace(/hello-bu@brevon\.com/g, 'yann.benatar@techyabe.com')
    .replace(/@brevon\.com/g, '@techyabe.com')
}

function htmlToJsx(html) {
  let jsx = html
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '')
  jsx = jsx.replace(/<img([^>]*?)>/gi, '<img$1 />')
  jsx = jsx.replace(/<input([^>]*?)>/gi, '<input$1 />')
  jsx = jsx.replace(/<br>/gi, '<br />')
  jsx = jsx.replace(/<hr>/gi, '<hr />')
  jsx = jsx.replace(/\sclass=/g, ' className=')
  jsx = jsx.replace(/\sfor=/g, ' htmlFor=')
  jsx = jsx.replace(/style="background-image: url\('assets\/([^']+)'\);"/g, "style={{ backgroundImage: \"url('/assets/$1')\" }}")
  jsx = jsx.replace(/src="assets\//g, 'src="/assets/')
  jsx = jsx.replace(/href="assets\//g, 'href="/assets/')
  for (const [file, route] of Object.entries(hrefMap)) {
    jsx = jsx.replace(new RegExp(`href="${file}"`, 'g'), `href="${route}"`)
  }
  jsx = jsx.replace(/href="javascript:void\(0\)"/g, 'href="#"')
  jsx = jsx.replace(/allowfullscreen=""/g, 'allowFullScreen')
  jsx = jsx.replace(/\sallowfullscreen/g, ' allowFullScreen')
  return jsx
}

function wrapComponent(name, jsx) {
  return `/* Auto-generated from reference HTML */
export default function ${name}() {
  return (
    <>
${jsx.split('\n').map((line) => '      ' + line).join('\n')}
    </>
  )
}
`
}

fs.mkdirSync(outDir, { recursive: true })

for (const [file, componentName] of Object.entries(pageMap)) {
  const filePath = path.join(refDir, file)
  const html = fs.readFileSync(filePath, 'utf8')
  let content = extractContent(html)
  if (!content) {
    console.error(`Failed to extract content from ${file}`)
    continue
  }
  if (file === 'index.html') {
    content = removePricingSection(content)
    content = content
      .replace(/home-1\/testimonial\/client-1\.png/g, 'home-3/client-info.png')
      .replace(/home-1\/testimonial\/client-2\.png/g, 'home-3/client-info-2.png')
      .replace(/home-1\/testimonial\/client-3\.png/g, 'home-3/client-info-3.png')
  }
  const jsx = htmlToJsx(content)
  const brandedJsx = applyBrandReplacements(jsx)
  const finalJsx = file === 'project.html'
    ? brandedJsx.replace(/Our projects/g, 'Product')
    : brandedJsx
  fs.writeFileSync(path.join(outDir, `${componentName}.jsx`), wrapComponent(componentName, finalJsx))
  console.log(`Generated ${componentName}.jsx`)
}

// Extract footer
const indexHtml = fs.readFileSync(path.join(refDir, 'index.html'), 'utf8')
const footerStart = indexHtml.indexOf('<!-- Footer Section Start -->')
const footerEnd = indexHtml.indexOf('</footer>', footerStart) + '</footer>'.length
let footer = indexHtml.slice(footerStart, footerEnd)
footer = applyBrandReplacements(htmlToJsx(footer.replace('<!-- Footer Section Start -->', '')))
fs.writeFileSync(
  path.join(__dirname, '../src/components/layout/Footer.generated.jsx'),
  `export default function Footer() {\n  return (\n    <>${footer}\n    </>\n  )\n}\n`
)
console.log('Generated Footer')
