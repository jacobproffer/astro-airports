export type Airport = [number, number, string, string];

const airportsData: Airport[] = [
  [32.4119, -99.68, "<h2>Abilene Regional Airport</h2>", "ABI"],
  [52.3105, 4.7683, "<h2>Amsterdam Airport Schiphol</h2>", "AMS"],
  [60.2918, 5.222, "<h2>Bergen Airport, Flesland</h2>", "BGO"],
  [42.3656, -71.0096, "<h2>Logan International Airport</h2>", "BOS"],
  [
    32.8998,
    -97.0403,
    "<h2>Dallas/Forth Worth International Airport</h2>",
    "DFT",
  ],
  [42.2162, -83.3554, "<h2>Detroit Metropolitan Airport</h2>", "DTW"],
  [45.7202, -87.092, "<h2>Delta County Airport</h2>", "ESC"],
  [44.4834, -88.1344, "<h2>Austin Straubel International Airport</h2>", "GRB"],
  [40.6413, -73.7781, "<h2>John F. Kennedy International Airport</h2>", "JFK"],
  [63.987, -22.6192, "<h2>Keflavik International Airport</h2>", "KEF"],
  [40.7769, -73.874, "<h2>LaGuardia Airport</h2>", "LGA"],
  [51.47, -0.4543, "<h2>Heathrow Airport</h2>", "LHR"],
  [
    44.5713,
    26.0853,
    "<h2>Bucharest Henri Coandă International Airport</h2>",
    "OTP",
  ],
  [49.0097, 2.5479, "<h2>Paris Charles de Gaulle Airport</h2>", "CDG"],
  [40.1942, -76.7577, "<h2>Harrisburg International Airport</h2>", "MDT"],
  [35.5494, 139.7798, "<h2>Haneda Airport</h2>", "HND"],
  [42.9476, -87.8966, "<h2>General Mitchell International Airport</h2>", "MKE"],
  [46.3497, -87.3873, "<h2>Sawyer International Airport</h2>", "MQT"],
  [
    44.8848,
    -93.2223,
    "<h2>Minneapolis–Saint Paul International Airport</h2>",
    "MSP",
  ],
  [35.772, 140.3929, "<h2>Narita International Airport</h2>", "NRT"],
  [42.7752, 141.6923, "<h2>New Chitose Airport</h2>", "CTS"],
  [41.9742, -87.9073, "<h2>OHare International Airport</h2>", "ORD"],
  [34.7863, 135.4378, "<h2>Osaka International Airport</h2>", "ITM"],
  [
    38.8512,
    -77.0402,
    "<h2>Ronald Reagan Washington National Airport</h2>",
    "DCA",
  ],
  [32.1161, -110.941, "<h2>Tucson International Airport</h2>", "TUS"],
];

export const airports = airportsData.sort((a, b) => a[3].localeCompare(b[3]));

export const mapCenter = { lat: 46.3497, lng: -87.3873 };

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
