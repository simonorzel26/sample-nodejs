var express = require("express");
var router = express.Router();
var puppeteer = require("puppeteer");

router.get("/", async function (req, res, next) {
  const browser = await puppeteer.launch();
  const [page] = await browser.pages();

  await page.goto("https://m.facebook.com/pg/moodclubpalermo/events/", {
    waitUntil: "networkidle0",
  });
  const data = await page.evaluate(() => document.querySelector("*").outerHTML);

  console.log(data);

  await browser.close();
  res.send(data);
});

module.exports = router;
