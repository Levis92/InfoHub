import { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';
import dayjs from 'dayjs';
import { WeatherResponse, fields } from 'interfaces';
import { weatherLocation } from 'widget-settings';

import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getWeatherData(req.query.coordinates as string);
  return res.status(200).json(data);
};

function getWeatherData(coordinates: string): Promise<WeatherResponse> {
  const getTimelineURL = 'https://api.tomorrow.io/v4/timelines';

  const apikey = process.env.TOMORROW_API_KEY;

  // pick the location, as a latlong pair
  const location = coordinates.split(',');

  const units = 'metric';

  const timesteps = ['current', '1h', '1d'];

  // configure the time frame up to 6 hours back and 15 days out
  const now = dayjs.utc().format('YYYY-MM-DDTHH:00:00Z');
  const startTime = dayjs.utc(now).add(0, 'minutes').toISOString();
  const endTime = dayjs.utc(now).add(1, 'days').toISOString();

  // specify the timezone, using standard IANA timezone format
  const timezone = weatherLocation.timezone;

  // request the timelines with all the query string parameters as options
  const getTimelineParameters = queryString.stringify(
    {
      apikey,
      location,
      fields,
      units,
      timesteps,
      startTime,
      endTime,
      timezone,
    },
    { arrayFormat: 'comma' }
  );

  return fetch(getTimelineURL + '?' + getTimelineParameters, { method: 'GET' })
    .then((result) => result.json())
    .catch((error) => console.error('error: ' + error));
}
