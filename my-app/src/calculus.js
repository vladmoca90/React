const flights = [
    {
        id: 1,
        airline: "Air Algerie",
        destinations: "Algiers",
    },
    {
        id: 2,
        airline: "Air France",
        destinations: "Paris-Charles de Gaulle",
    },
    {
        id: 3,
        airline: "Avianca",
        destinations: "Bogota-El Dorado",
    },
    {
        id: 4,
        airline: "Brussels Airlines",
        destinations: "Brussels-International",
    },
    {
        id: 5,
        airline: "Cathay Pacific",
        destinations: "Hong Kong",
    },
    {
        id: 6,
        airline: "Delta Airlines",
        destinations: "New York-JFK",
    },
    {
        id: 7,
        airline: "El Al",
        destinations: "Tel Aviv-Ben Gurion",
    },
    {
        id: 8,
        airline: "Hainan Airlines",
        destinations: ["Beijing-Capital", "Shanghai-Pudong"],
    },
    {
        id: 9,
        airline: "Iran Air",
        destinations: "Tehran-Khomeini",
    },
    {
        id: 10,
        airline: "Japan Airlines",
        destinations: "Tokyo-Haneda",
    },
    {
        id: 11,
        airline: "KLM",
        destinations: "Amsterdam-Schipol",
    },
    {
        id: 12,
        airline: "Lufthansa",
        destinations: ["Frankfurt", "Munich"],
    },
    {
        id: 13,
        airline: "Aeromexico",
        destinations: "Mexico City",
    },
    {
        id: 14,
        airline: "Royal Air Jordanian",
        destinations: "Amman-Queen Alia",
    },
    {
        id: 15,
        airline: "Oman Air",
        destinations: "Muscat",
    },
    {
        id: 16,
        airline: "TAROM",
        destinations: "Bucharest-Otopeni",
    },
    {
        id: 17,
        airline: "Turkish Airlines",
        destinations: "Istanbul-Ataturk",
    },
    {
        id: 18,
        airline: "United Airlines",
        destinations: ["Chicago-O'Hare", "Dallas-Fort Worth", "Houston-Intercontinental", "Los Angeles", "Newark", "San Francisco"],
    },
    {
        id: 19,
        airline: "Virgin Atlantic",
        destinations: ["Atlanta-Hartsfield Jackson", "Boston-Logan", "Delhi-Indira Ghandi", "Havana", "Hong Kong", "Johannesburg-Tambo", "Lagos", "Las Vegas-McCarran", "Los Angeles", "Miami", "Mumbai-Shivaji", "New York–JFK", "Newark", "San Francisco", "São Paulo–Guarulhos", "Seattle/Tacoma", "Shanghai–Pudong", "Tel Aviv-Ben Gurion", "Washington–Dulles"],
    },
    {
        id: 20,
        airline: "WestJet",
        destinations: "Calgary",
    }
];

function total() {
    for(let i = 0;  i < flights.length; i++) { 
        let totalDestinationsRow = flights[i].destinations.length;

        for(let j = 0; j < flights[i].destinations.length; j++) {
            return flights[i].destinations[j].length;
        }
    }
}

total();