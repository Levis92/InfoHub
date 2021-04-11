export type Accessibility = 'wheelChair' | 'lowCarriage';

export type VehicleType = 'BUS';

export interface JourneyDetailRef {
  ref: string;
}

export interface Departure {
  name: string,
  sname: string,
  JourneyDetailRef: JourneyDetailRef;
  journeyid: string;
  journeyNumber: string,
  type: VehicleType,
  stopid: number;
  stop: string,
  direction: string,
  track: string,
  /** Not always included in external API data */
  rtTime: string,
  /** Not always included in external API data */
  rtDate: string,
  time: string;
  date: string;
  fgColor: string,
  bgColor: string,
  stroke: string,
  accessibility: Accessibility,
  /** Added attribute: Not included in external API data */
  nextRtTime: string,
  /** Added attribute: Not included in external API data */
  nextRtDate: string,
  /** Added attribute: Not included in external API data */
  nextAccessibility: Accessibility,
}

export interface DepartureBoard {
  Departure: Departure[];
}
