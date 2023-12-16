import * as ChromeLauncher from 'chrome-launcher';
import httpServer from 'http-server';
import puppeteer from 'puppeteer-core';

// Note: inspired by https://github.com/direct-adv-interfaces/mocha-headless-chrome/

const root = '.';
const port = 8081;
const url = `http://localhost:${port}/test/index.html`;
const timeout = 60000;

const main = async () => {
  try {
    await startingServer();
    const failures = await runningMochaInPuppeteer();
    process.exit(failures);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const startingServer = async () => {
  const server = httpServer.createServer({ root });
  await new Promise((resolve) => server.listen(port, 'localhost', resolve));
};

const runningMochaInPuppeteer = async () => {
  const chromePaths = ChromeLauncher.Launcher.getInstallations();
  const [chromePath] = chromePaths;
  const options = {
    executablePath: chromePath
  };
  const browser = await puppeteer.launch(options);
  const pages = await browser.pages();
  const page = pages.pop();
  page.on('console', mochaConsoleHandler);
  page.on('pageerror', ({ message }) => {
    console.error(message);
  });
  page.on('response', (response) => {
    // console.log(`${response.status()} ${response.url()}`);
  });
  page.on('requestfailed', (request) => {
    console.error(`${request.failure().errorText} ${request.url()}`);
  });
  page.on('dialog', (dialog) => dialog.dismiss());
  await page.goto(url);
  await page.waitForFunction(() => window.__mocha_failures__ !== undefined, {
    timeout
  });
  const failures = await page.evaluate(() => window.__mocha_failures__);
  await browser.close();
  return failures;
};

const mochaConsoleHandler = (msg) => {
  console.log(msg.text());
};

main();
