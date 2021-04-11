export const commonFields = [
  'precipitationIntensity',
  'precipitationType',
  'windSpeed',
  'windGust',
  'windDirection',
  'temperature',
  'temperatureApparent',
  'cloudCover',
  'cloudBase',
  'cloudCeiling',
  'weatherCode',
  'humidity',
] as const;

export const dayFields = ['sunriseTime', 'sunsetTime'] as const;

export const fields = [...commonFields, ...dayFields] as const;

export type CommonFieldType = typeof commonFields[number];
export type DayFieldType = typeof dayFields[number];

export type CommonFields = Record<CommonFieldType, number>;
export type DayFields = Record<DayFieldType, string>;

export interface Interval<Fields = CommonFields> {
  startTime: string;
  values: Fields;
}

export type TimeLine = {
  startTime: string;
  endTime: string;
} & (
  | { timestep: '1d'; intervals: Interval<CommonFields & DayFields>[] }
  | { timestep: 'current' | '1h'; intervals: Interval[] }
);

export interface WeatherData {
  timelines: TimeLine[];
}

export interface Warning {
  code: number;
  message: string;
  type: string;
  meta: any;
}

export interface WeatherResponse {
  data: WeatherData;
  warnings: Warning[];
}
