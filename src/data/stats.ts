import {
  airportsByCode,
  homeAirport,
  type AirportCode,
} from "./airports";
import { isFlight, stopCode, trips, type Trip } from "./trips";

export interface Leg {
  from: AirportCode;
  to: AirportCode;
  isFlight: boolean;
  trip: Trip;
}

/** An undirected airport pair, merged across every trip that used it */
export interface RouteSegment {
  from: AirportCode;
  to: AirportCode;
  count: number;
  isFlight: boolean;
}

export interface Connection {
  code: AirportCode;
  count: number;
}

export interface AirportStats {
  visits: number;
  trips: Trip[];
  tripsStarted: number;
  firstYear: number;
  lastYear: number;
  connections: Connection[];
  milesFromHome: number;
}

export interface TripStats {
  totalAirports: number;
  totalCountries: number;
  totalTrips: number;
  totalFlights: number;
  totalMiles: number;
  longestFlight: Leg & { miles: number };
  firstYear: number;
  lastYear: number;
}

const EARTH_RADIUS_MILES = 3958.8;

export function distanceInMiles(a: AirportCode, b: AirportCode): number {
  const from = airportsByCode[a];
  const to = airportsByCode[b];
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(from.lat)) *
      Math.cos(toRadians(to.lat)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_MILES * Math.asin(Math.sqrt(h));
}

export const legs: Leg[] = trips.flatMap((trip) =>
  trip.route.slice(1).map((stop, index) => ({
    from: stopCode(trip.route[index]),
    to: stopCode(stop),
    isFlight: isFlight(stop),
    trip,
  })),
);

export const routeSegments: RouteSegment[] = [
  ...legs
    .reduce((segments, leg) => {
      const [from, to] = [leg.from, leg.to].sort() as [
        AirportCode,
        AirportCode,
      ];
      const key = `${from}-${to}`;
      const segment = segments.get(key) ?? {
        from,
        to,
        count: 0,
        isFlight: false,
      };
      segment.count += 1;
      segment.isFlight ||= leg.isFlight;
      return segments.set(key, segment);
    }, new Map<string, RouteSegment>())
    .values(),
];

function visitCount(code: AirportCode): number {
  return trips
    .flatMap((trip) => trip.route)
    .filter((stop) => stopCode(stop) === code).length;
}

export function getAirportStats(code: AirportCode): AirportStats {
  const visitedOn = trips.filter((trip) =>
    trip.route.some((stop) => stopCode(stop) === code),
  );
  const years = visitedOn.map((trip) => trip.year);

  const connectionCounts = new Map<AirportCode, number>();
  legs
    .filter((leg) => leg.isFlight && (leg.from === code || leg.to === code))
    .forEach((leg) => {
      const other = leg.from === code ? leg.to : leg.from;
      connectionCounts.set(other, (connectionCounts.get(other) ?? 0) + 1);
    });

  return {
    visits: visitCount(code),
    trips: visitedOn,
    tripsStarted: trips.filter((trip) => stopCode(trip.route[0]) === code)
      .length,
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
    connections: [...connectionCounts]
      .map(([other, count]) => ({ code: other, count }))
      .sort((a, b) => b.count - a.count || a.code.localeCompare(b.code)),
    milesFromHome: distanceInMiles(homeAirport, code),
  };
}

export function calculateTripStats(): TripStats {
  const visited = new Set(trips.flatMap((trip) => trip.route.map(stopCode)));
  const flights = legs
    .filter((leg) => leg.isFlight)
    .map((leg) => ({ ...leg, miles: distanceInMiles(leg.from, leg.to) }));
  const years = trips.map((trip) => trip.year);

  return {
    totalAirports: visited.size,
    totalCountries: new Set(
      [...visited].map((code) => airportsByCode[code].country),
    ).size,
    totalTrips: trips.length,
    // Count each arrival after the starting airport, excluding ground transfers
    totalFlights: flights.length,
    totalMiles: flights.reduce((miles, leg) => miles + leg.miles, 0),
    longestFlight: flights.reduce((longest, leg) =>
      leg.miles > longest.miles ? leg : longest,
    ),
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
  };
}
