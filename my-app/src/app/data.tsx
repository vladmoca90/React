export interface flight {
    [x: string]: any;
    airline: string;
    destinations: string | string[];
}

export const allFlights: flight[] = [
    {
        airline: "Air Algerie",
        destinations: "Algiers",
    },
    {
        airline: "Air France",
        destinations: "Paris-Charles de Gaulle",
    },
    {
        airline: "Avianca",
        destinations: "Bogota-El Dorado",
    },
    {
        airline: "Brussels Airlines",
        destinations: "Brussels-International",
    },
    {
        airline: "Cathay Pacific",
        destinations: "Hong Kong",
    },
    {
        airline: "Delta Airlines",
        destinations: "New York-JFK",
    },
    {
        airline: "El Al",
        destinations: "Tel Aviv-Ben Gurion",
    },
    {
        airline: "Hainan Airlines",
        destinations: ["Beijing-Capital", "Shanghai-Pudong"],
    },
    {
        airline: "Iran Air",
        destinations: "Tehran-Khomeini",
    },
    {
        airline: "Japan Airlines",
        destinations: "Tokyo-Haneda",
    },
    {
        airline: "KLM",
        destinations: "Amsterdam-Schipol",
    },
    {
        airline: "Lufthansa",
        destinations: ["Frankfurt", "Munich"],
    },
    {
        airline: "Aeromexico",
        destinations: "Mexico City",
    },
    {
        airline: "Royal Air Jordanian",
        destinations: "Amman-Queen Alia",
    },
    {
        airline: "Oman Air",
        destinations: "Muscat",
    },
    {
        airline: "TAROM",
        destinations: "Bucharest-Otopeni",
    },
    {
        airline: "Turkish Airlines",
        destinations: "Istanbul-Ataturk",
    },
    {
        airline: "United Airlines",
        destinations: ["Chicago-O'Hare", "Dallas-Fort Worth", "Houston-Intercontinental", "Los Angeles", "Newark", "San Francisco"],
    },
    {
        airline: "Virgin Atlantic",
        destinations: ["Atlanta-Hartsfield Jackson", "Boston-Logan", "Delhi-Indira Ghandi", "Havana", "Hong Kong", "Johannesburg-Tambo", "Lagos", "Las Vegas-McCarran", "Los Angeles", "Miami", "Mumbai-Shivaji", "New York–JFK", "Newark", "San Francisco", "São Paulo–Guarulhos", "Seattle/Tacoma", "Shanghai–Pudong", "Tel Aviv-Ben Gurion", "Washington–Dulles"],
    },
    {
        airline: "WestJet",
        destinations: "Calgary",
    }
];