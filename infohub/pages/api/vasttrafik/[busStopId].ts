import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';
import btoa from 'btoa';
import { Departure, DepartureBoard } from 'interfaces';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getVasttrafikData(req.query.busStopId as string);
  try {
    const status = response.status;
    const data = await response.json();

    if (status === 200 && !data.fault) {
      return res.status(200).json(modifyData(data.DepartureBoard));
    } else {
      return res.status(400).json(data);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

async function getVasttrafikData(id: string) {
  const authKey = await getAccessToken();
  const date = dayjs().format('YYYY-MM-DD');
  const time = dayjs().format('HH:mm');
  const host = 'https://api.vasttrafik.se';
  const baseurl = '/bin/rest.exe/v2';
  const headers = {
    Authorization: 'Bearer ' + authKey,
  };
  const params = {
    id,
    date,
    time,
    format: 'json',
  };
  const paramString = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const requestURL = `${host}${baseurl}/departureBoard?${paramString}`;
  return await fetch(requestURL, { headers });
}

async function getAccessToken(): Promise<string> {
  const url = 'https://api.vasttrafik.se/token';
  const key = process.env.VASTTRAFIK_API_KEY;
  const secret = process.env.VASTTRAFIK_API_SECRET;
  const encoded = btoa(`${key}:${secret}`);
  const body = Object.entries({
    grant_type: 'client_credentials',
    scope: '1',
  })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const headers = {
    Authorization: 'Basic ' + encoded,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const response = await fetch(url, { body, headers, method: 'POST' });
  return (await response.json()).access_token;
}

function modifyData(data: DepartureBoard): Departure[] {
  const result: Departure[] = [];

  for (const stopId of getDepartureKeys(data.Departure)) {
    const departureList = data.Departure.filter(
      ({ sname, direction }) => sname + direction === stopId
    );
    const departure = addNextDeparture(departureList);
    result.push(departure);
  }
  return result.map(setDefaultRTData).sort(byDeparture);
}

function getDepartureKeys(departures: Departure[]) {
  const keys = departures.map(({ sname, direction }) => sname + direction);
  return Array.from(new Set(keys));
}

function setDefaultRTData(departure: Departure): Departure {
  departure.rtTime = departure.rtTime ?? departure.time;
  departure.rtDate = departure.rtDate ?? departure.date;
  return departure;
}

function addNextDeparture(departureList: Departure[]): Departure {
  const [departure, nextDeparture] = departureList;
  if (nextDeparture) {
    departure.nextRtTime = nextDeparture.rtTime;
    departure.nextRtDate = nextDeparture.rtDate;
    departure.nextAccessibility = nextDeparture.accessibility;
  }
  return departure;
}

function byDeparture(a: Departure, b: Departure): -1 | 1 {
  return a.rtDate + a.rtTime < b.rtDate + b.rtTime ? -1 : 1;
}
