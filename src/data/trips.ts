import type { AirportCode } from "./airports";

/** A stop reached by ground (train, bus, car) instead of a flight */
export interface GroundStop {
  code: AirportCode;
  isFlight: false;
}

export type Stop = AirportCode | GroundStop;

export interface Trip {
  name: string;
  year: number;
  route: Stop[];
}

// Newest first
export const trips: Trip[] = [
  {
    name: "Japan",
    year: 2026,
    route: [
      "MQT",
      "ORD",
      "HND",
      { code: "NRT", isFlight: false },
      "ORD",
      "MQT",
    ],
  },
  {
    name: "Ohio",
    year: 2026,
    route: ["MQT", "ORD", "SDF", "ORD", "MQT"],
  },
  {
    name: "Japan",
    year: 2025,
    route: ["MQT", "ORD", "NRT", "CTS", "NRT", "ORD", "MQT"],
  },
  {
    name: "Japan",
    year: 2024,
    route: ["MQT", "ORD", "HND", "ORD", "MQT"],
  },
  {
    name: "Iceland",
    year: 2024,
    route: ["MQT", "DTW", "KEF", "DTW", "MQT"],
  },
  {
    name: "Arizona",
    year: 2023,
    route: ["MQT", "ORD", "TUS", "ORD", "MQT"],
  },
  {
    name: "Japan",
    year: 2023,
    route: ["MQT", "ORD", "HND", "ORD", "MQT"],
  },
  {
    name: "Washington, D.C.",
    year: 2023,
    route: ["MQT", "ORD", "DCA", "ORD", "MQT"],
  },
  {
    name: "Japan",
    year: 2022,
    route: ["MQT", "ORD", "NRT", "ORD", "MQT"],
  },
  {
    name: "Japan",
    year: 2019,
    route: ["MQT", "ORD", "NRT", "ITM", "NRT", "ORD", "MQT"],
  },
  {
    name: "Romania",
    year: 2019,
    route: ["MQT", "DTW", "LHR", "OTP", "CDG", "DTW", "MSP", "DTW", "MQT"],
  },
  {
    name: "Norway",
    year: 2018,
    route: ["MQT", "DTW", "AMS", "BGO", "AMS", "MSP", "MQT"],
  },
  {
    name: "Iceland",
    year: 2018,
    route: ["MQT", "DTW", "JFK", "KEF", "JFK", "MSP", "MQT"],
  },
  {
    name: "Japan",
    year: 2017,
    route: ["MQT", "ORD", "NRT", "ORD", "MQT"],
  },
  {
    name: "Texas",
    year: 2017,
    route: ["MQT", "DTW", "DFW", "DTW", "MQT"],
  },
  {
    name: "New York",
    year: 2017,
    route: ["MQT", "ORD", "JFK", "ORD", "MQT"],
  },
  {
    name: "Boston",
    year: 2016,
    route: ["MKE", "BOS", "MKE"],
  },
  {
    name: "New York",
    year: 2014,
    route: ["GRB", "ORD", "LGA", "ORD", "GRB"],
  },
  {
    name: "Hershey",
    year: 2014,
    route: ["MQT", "DTW", "MDT", "DTW", "MQT"],
  },
  {
    name: "New York",
    year: 2012,
    route: ["GRB", "ORD", "LGA", "ORD", "GRB"],
  },
  {
    name: "Texas",
    year: 2003,
    route: ["MQT", "ORD", "DFW", "ABI", "DFW", "ORD", "ESC"],
  },
];

export const stopCode = (stop: Stop): AirportCode =>
  typeof stop === "string" ? stop : stop.code;

export const isFlight = (stop: Stop): boolean =>
  typeof stop === "string" || stop.isFlight;

export const tripLabel = (trip: Trip): string => `${trip.name} ${trip.year}`;
