import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'http://api.sr.se/api/v2/vma?format=json';
  const response = await fetch(url);
  res.status(response.status).json(await response.json());
}
