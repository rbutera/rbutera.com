const puppeteer = require("puppeteer")

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://localhost:8000", { waitUntil: "networkidle2" })
  await page.pdf({ path: "resume.pdf", format: "A4" })

  await browser.close()
})()
