export interface Airport {
  code: string;
  name: string;
  city: string;
  /** ISO 3166-1 alpha-2 country code */
  country: string;
  lat: number;
  lng: number;
}

const airportsData = {
  ABI: { name: "Abilene Regional Airport", city: "Abilene, TX", country: "US", lat: 32.4119, lng: -99.68 },
  AMS: { name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "NL", lat: 52.3105, lng: 4.7683 },
  BGO: { name: "Bergen Airport, Flesland", city: "Bergen", country: "NO", lat: 60.2918, lng: 5.222 },
  BOS: { name: "Logan International Airport", city: "Boston, MA", country: "US", lat: 42.3656, lng: -71.0096 },
  CDG: { name: "Paris Charles de Gaulle Airport", city: "Paris", country: "FR", lat: 49.0097, lng: 2.5479 },
  CTS: { name: "New Chitose Airport", city: "Sapporo", country: "JP", lat: 42.7752, lng: 141.6923 },
  DCA: { name: "Ronald Reagan Washington National Airport", city: "Washington, D.C.", country: "US", lat: 38.8512, lng: -77.0402 },
  DFW: { name: "Dallas/Fort Worth International Airport", city: "Dallas, TX", country: "US", lat: 32.8998, lng: -97.0403 },
  DTW: { name: "Detroit Metropolitan Airport", city: "Detroit, MI", country: "US", lat: 42.2162, lng: -83.3554 },
  ESC: { name: "Delta County Airport", city: "Escanaba, MI", country: "US", lat: 45.7202, lng: -87.092 },
  GRB: { name: "Austin Straubel International Airport", city: "Green Bay, WI", country: "US", lat: 44.4834, lng: -88.1344 },
  HND: { name: "Haneda Airport", city: "Tokyo", country: "JP", lat: 35.5494, lng: 139.7798 },
  ITM: { name: "Osaka International Airport", city: "Osaka", country: "JP", lat: 34.7863, lng: 135.4378 },
  JFK: { name: "John F. Kennedy International Airport", city: "New York, NY", country: "US", lat: 40.6413, lng: -73.7781 },
  KEF: { name: "Keflavík International Airport", city: "Keflavík", country: "IS", lat: 63.987, lng: -22.6192 },
  LGA: { name: "LaGuardia Airport", city: "New York, NY", country: "US", lat: 40.7769, lng: -73.874 },
  LHR: { name: "Heathrow Airport", city: "London", country: "GB", lat: 51.47, lng: -0.4543 },
  MDT: { name: "Harrisburg International Airport", city: "Harrisburg, PA", country: "US", lat: 40.1942, lng: -76.7577 },
  MKE: { name: "General Mitchell International Airport", city: "Milwaukee, WI", country: "US", lat: 42.9476, lng: -87.8966 },
  MQT: { name: "Sawyer International Airport", city: "Marquette, MI", country: "US", lat: 46.3497, lng: -87.3873 },
  MSP: { name: "Minneapolis–Saint Paul International Airport", city: "Minneapolis, MN", country: "US", lat: 44.8848, lng: -93.2223 },
  NRT: { name: "Narita International Airport", city: "Tokyo", country: "JP", lat: 35.772, lng: 140.3929 },
  ORD: { name: "O'Hare International Airport", city: "Chicago, IL", country: "US", lat: 41.9742, lng: -87.9073 },
  OTP: { name: "Bucharest Henri Coandă International Airport", city: "Bucharest", country: "RO", lat: 44.5713, lng: 26.0853 },
  SDF: { name: "Louisville Muhammad Ali International Airport", city: "Louisville, KY", country: "US", lat: 38.1741, lng: -85.7363 },
  TUS: { name: "Tucson International Airport", city: "Tucson, AZ", country: "US", lat: 32.1161, lng: -110.941 },
} satisfies Record<string, Omit<Airport, "code">>;

export type AirportCode = keyof typeof airportsData;

export const airportsByCode = Object.fromEntries(
  Object.entries(airportsData).map(([code, airport]) => [
    code,
    { code, ...airport },
  ]),
) as Record<AirportCode, Airport>;

export const airports: Airport[] = Object.values(airportsByCode).sort((a, b) =>
  a.code.localeCompare(b.code),
);

export const homeAirport: AirportCode = "MQT";

export const mapCenter = {
  lat: airportsByCode[homeAirport].lat,
  lng: airportsByCode[homeAirport].lng,
};

export const mapStyles: google.maps.MapTypeStyle[] = [
  { stylers: [{ visibility: "off" }] },
  {
    featureType: "water",
    stylers: [{ visibility: "on" }, { color: "#2D2D2D" }],
  },
  {
    featureType: "landscape",
    stylers: [{ visibility: "on" }, { color: "#423d27" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ visibility: "on" }, { color: "#2D2D2D" }, { weight: 1 }],
  },
];
