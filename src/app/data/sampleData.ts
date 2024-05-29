export const data = {
    "origin": "DAC",
    "destination": "JFK",
    "departureDate": "2023-10-02T10:30:00",
    "arrivalDate": "2023-10-03T08:15:00",
    "duration": "33h 20m",
    "stops": 1,
    "segments": [
        {
            "origin": "JFK",
            "destination": "AMS",
            "departureTime": "2023-10-02T10:30:00",
            "arrivalTime": "2023-10-03T06:15:00",
            "airline": "KLM",
            "flightNumber": "KL641",
            "aircraft": "Boeing 787-9",
            "technicalStop": false
        },
        {
            "origin": "AMS",
            "destination": "CDG",
            "departureTime": "2023-10-03T07:45:00",
            "arrivalTime": "2023-10-03T08:15:00",
            "airline": "KLM",
            "flightNumber": "KL1234",
            "aircraft": "Airbus A320",
            "technicalStop": true
        }
    ],
    "layover": {
        "airport": "AMS",
        "duration": 105
    },
    "passengerName": "John Doe"
};
