import { NextApiRequest, NextApiResponse } from 'next';
import { UnsplashImageData } from 'interfaces';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetchUnsplashImages();

  res
    .status(response.status)
    .json((await response.json()) as UnsplashImageData[]);
};

async function fetchUnsplashImages(): Promise<Response> {
  const host = 'https://api.unsplash.com';
  const baseUrl = '/photos/random';
  const params = {
    client_id: process.env.UNSPLASH_API_KEY as string,
    query: 'nature wallpaper',
    count: 15,
  };
  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return await fetch(host + baseUrl + '?' + paramString);
}
