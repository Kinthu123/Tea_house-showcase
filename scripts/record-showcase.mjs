/**
 * Rangoon Tea House — Motion Design Showcase
 * Smooth scroll, hover, click automation + section screenshots
 */

import puppeteer from 'puppeteer'
import { execSync, spawn } from 'child_process'
import path from 'path'
import fs from 'fs'

const OUT_DIR = '/Users/tyson/Documents/ZweDay1/rangoon-showcase'
fs.mkdirSync(OUT_DIR, { recursive: true })

const URL = 'http://localhost:3000'
const W = 1440
const H = 900

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

function ease(t) {
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3) / 2
}

async function smoothScrollTo(page, targetY, duration = 1800) {
  const startY = await page.evaluate(() => window.scrollY)
  const dist = targetY - startY
  const steps = Math.round(duration / 16)
  for (let i = 0; i <= steps; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), startY + dist * ease(i / steps))
    await sleep(16)
  }
}

async function smoothMouse(page, x1, y1, x2, y2, duration = 600) {
  const steps = Math.round(duration / 16)
  for (let i = 0; i <= steps; i++) {
    const p = ease(i / steps)
    await page.mouse.move(x1 + (x2 - x1) * p, y1 + (y2 - y1) * p)
    await sleep(16)
  }
}

async function shot(page, name, label) {
  const file = path.join(OUT_DIR, name + '.png')
  await page.screenshot({ path: file })
  console.log('  screenshot:', label, '->', file)
}

// ── Launch browser ────────────────────────────────────────────────────────────
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: false,
  defaultViewport: null,
  args: [
    '--window-size=1440,900',
    '--window-position=0,0',
    '--disable-infobars',
  ],
})

const page = await browser.newPage()
await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 })

// ── Start screen recording ────────────────────────────────────────────────────
const videoPath = path.join(OUT_DIR, 'rangoon-showcase.mov')
console.log('\nStarting screen recording...')
const rec = spawn('screencapture', ['-v', '-R', '0,0,1440,940', videoPath])
await sleep(1500)

// ── Navigate ──────────────────────────────────────────────────────────────────
console.log('Opening site...')
await page.goto(URL, { waitUntil: 'networkidle2' })
await sleep(2500)

// 01 HERO
console.log('-- 01 Hero')
const navLinks = await page.$$('nav a')
for (const link of navLinks.slice(0, 5)) {
  const b = await link.boundingBox()
  if (!b) continue
  await smoothMouse(page, b.x - 60, b.y + b.height / 2, b.x + b.width / 2, b.y + b.height / 2, 300)
  await sleep(250)
}
// hover Explore button
const exploreBtns = await page.$$('a[href="#menu"]')
const eb = exploreBtns[0] ? await exploreBtns[0].boundingBox() : null
if (eb) {
  await smoothMouse(page, 300, 700, eb.x + eb.width / 2, eb.y + eb.height / 2, 700)
  await sleep(700)
}
await shot(page, '01-hero', 'Hero')

// 02 MARQUEE
console.log('-- 02 Marquee')
await smoothScrollTo(page, 870, 1400)
await sleep(900)
await shot(page, '02-marquee', 'Marquee')

// 03 STORY
console.log('-- 03 Story')
await smoothScrollTo(page, 1100, 2200)
await sleep(1400)
await smoothMouse(page, 900, 400, 1100, 600, 900)
await sleep(800)
await shot(page, '03-story', 'Story')

// 04 TEA
console.log('-- 04 Tea')
await smoothScrollTo(page, 2500, 2500)
await sleep(1400)
const tCards = await page.$$('#tea .group')
if (tCards[0]) {
  const tb = await tCards[0].boundingBox()
  if (tb) {
    await smoothMouse(page, tb.x - 80, tb.y + 80, tb.x + tb.width / 2, tb.y + tb.height / 2, 900)
    await sleep(800)
  }
}
await shot(page, '04-tea', 'Tea')
if (tCards[1]) {
  const tb2 = await tCards[1].boundingBox()
  if (tb2) {
    await smoothMouse(page, tb2.x - 80, tb2.y + 50, tb2.x + tb2.width / 2, tb2.y + tb2.height / 2, 700)
    await sleep(600)
  }
}

// 05 MENU — click each tab
console.log('-- 05 Menu')
await smoothScrollTo(page, 4300, 2600)
await sleep(1400)
await shot(page, '05-menu-signatures', 'Menu Signatures')

for (const tabLabel of ['Starters', 'Mains', 'Desserts', 'Cocktails']) {
  const allBtns = await page.$$('button')
  for (const btn of allBtns) {
    const txt = await btn.evaluate(el => el.textContent?.trim())
    if (txt === tabLabel) {
      const bb = await btn.boundingBox()
      if (!bb) continue
      await smoothMouse(page, 400, bb.y + bb.height / 2, bb.x + bb.width / 2, bb.y + bb.height / 2, 450)
      await sleep(250)
      await btn.click()
      await sleep(800)
      await shot(page, '05-menu-' + tabLabel.toLowerCase(), 'Menu ' + tabLabel)
      break
    }
  }
}

// 06 ATMOSPHERE
console.log('-- 06 Atmosphere')
await smoothScrollTo(page, 6400, 2600)
await sleep(1400)
const gImgs = await page.$$('#atmosphere img')
for (const img of gImgs.slice(0, 3)) {
  const ib = await img.boundingBox()
  if (!ib) continue
  await smoothMouse(page, ib.x - 40, ib.y + 40, ib.x + ib.width / 2, ib.y + ib.height / 2, 550)
  await sleep(450)
}
await shot(page, '06-atmosphere', 'Atmosphere')

await smoothScrollTo(page, 7500, 1900)
await sleep(1000)
await shot(page, '06b-reading-room', 'Reading Room')

// 07 VISIT
console.log('-- 07 Visit')
await smoothScrollTo(page, 9000, 2400)
await sleep(1400)
const inputs = await page.$$('input[type="text"]')
if (inputs[0]) {
  const ib = await inputs[0].boundingBox()
  if (ib) {
    await smoothMouse(page, 200, ib.y + 30, ib.x + ib.width / 2, ib.y + ib.height / 2, 600)
    await sleep(300)
    await inputs[0].click()
    await page.keyboard.type('Isabella', { delay: 70 })
    await sleep(300)
  }
}
if (inputs[1]) {
  await inputs[1].click()
  await page.keyboard.type('Aung', { delay: 70 })
  await sleep(300)
}
const submitBtn = await page.$('button[type="submit"]')
if (submitBtn) {
  const sb = await submitBtn.boundingBox()
  if (sb) {
    await smoothMouse(page, sb.x - 100, sb.y + 60, sb.x + sb.width / 2, sb.y + sb.height / 2, 700)
    await sleep(700)
  }
}
await shot(page, '07-visit', 'Visit & Reservation')

// 08 FOOTER
console.log('-- 08 Footer')
await smoothScrollTo(page, 99999, 2200)
await sleep(1400)
await shot(page, '08-footer', 'Footer')

// Scroll back to top — cinematic close
console.log('-- Return to top')
await smoothScrollTo(page, 0, 3500)
await sleep(1800)

// Stop recording
console.log('\nStopping recording...')
rec.kill('SIGINT')
await sleep(2500)
await browser.close()

// Compress
console.log('Compressing video...')
const mp4 = path.join(OUT_DIR, 'rangoon-showcase-edit.mp4')
try {
  execSync(
    `ffmpeg -i "${videoPath}" -vf "scale=2560:-2" -c:v libx264 -preset fast -crf 20 -c:a aac -b:a 128k "${mp4}" -y`,
    { stdio: 'pipe' }
  )
  const mb = (fs.statSync(mp4).size / 1e6).toFixed(1)
  console.log('Video saved:', mp4, '(' + mb + ' MB)')
} catch (e) {
  console.log('Compression skipped, original .mov saved')
}

const shots = fs.readdirSync(OUT_DIR).filter(f => f.endsWith('.png')).sort()
console.log('\nScreenshots (' + shots.length + '):')
shots.forEach(f => console.log('  ' + path.join(OUT_DIR, f)))
console.log('\nDone!')
