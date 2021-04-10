import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://newsapi.org/v2/top-headlines';
  const params = {
    country: 'se',
  };
  const headers = {
    'X-Api-Key': process.env.NEWS_API_KEY as string,
  };
  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const response = await fetch(`${url}?${paramString}`, { headers });

  res.status(response.status).json(await response.json());
};
