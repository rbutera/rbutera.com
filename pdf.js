const puppeteer = require("puppeteer")
const path = require("path")

const outputPath = path.join(__dirname, "/static/resume.pdf")

async function createPDF() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  console.log(`building ${outputPath}`)
  // await page.goto("https://localhost:8000", { waitUntil: "networkidle2" })
  // const url = "file://" + process.cwd() + "/" + ".bashrc"
  await page.goto("http://localhost:8000", { waitUntil: "networkidle2" })
  await page.pdf({ path: outputPath, format: "A4", preferCSSPageSize: true })
  await browser.close()
  console.log("resume.pdf creation complete")
}

createPDF()
