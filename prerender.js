import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routesToPrerender = [
  '/',
  '/contacto',
  '/precios',
  '/servicios/sales-cloud',
  '/servicios/service-cloud',
  '/servicios/nonprofit-cloud',
  '/servicios/starter-pro-suite',
  '/politica-privacidad',
  '/notarias'
]

;(async () => {
  for (const routeUrl of routesToPrerender) {
    const { html: appHtml, head } = render(routeUrl);
    
    let finalHtml = template
      .replace(`<!--app-html-->`, appHtml)
    
    // Inject helmet head tags before </head>
    if (head) {
      finalHtml = finalHtml.replace('</head>', `${head}</head>`)
    }

    const filePath = `dist${routeUrl === '/' ? '/index' : routeUrl}.html`
    
    // Create directory if it doesn't exist
    const dir = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), finalHtml)
    console.log('pre-rendered:', filePath)
  }
})()
