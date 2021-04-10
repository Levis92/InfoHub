import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer, { Page } from 'puppeteer';
import memoize from 'memoizee';
import { TwitterResponse } from 'interfaces';

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await memoizedGetTwitterData(req.query.twitterUser as string);
  return res.status(200).json(data);
}

const memoizedGetTwitterData = memoize(getTwitterData, {
  promise: true,
  maxAge: 15 * 60 * 1000,
});

async function getTwitterData(user: string): Promise<TwitterResponse> {
  const data: TwitterResponse = { images: [] };
  data.images = await getPosts(user);
  return data;
}

async function getPosts(user: string): Promise<string[]> {
  const url = `https://twitter.com/${user}`;
  const browser = await puppeteer.launch({ headless: true });
  const page = (await browser.pages())[0];
  await page.setUserAgent(USER_AGENT);
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);

  const itemTargetCount = 5;
  const imageUrls = [];
  while (imageUrls.length < itemTargetCount) {
    const nextUrls = await page.evaluate(getImageUrls);
    imageUrls.push(nextUrls);
    await scrollPage(page);
  }
  await browser.close();
  return Array.from(new Set(imageUrls.flat()));
}

function getImageUrls() {
  const imageElements: NodeListOf<HTMLImageElement> = document.querySelectorAll('div[data-testid="tweetPhoto"] > img');
  return Array.from(imageElements).map((element) => element.src);
}

async function scrollPage(page: Page) {
  const previousHeight = await page.evaluate('document.body.scrollHeight');
  await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
  await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
  await page.waitForTimeout(1000);
}
