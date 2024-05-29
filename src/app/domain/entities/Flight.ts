export interface FlightData {
    origin: string;
    destination: string;
    departureDate: string;
    arrivalDate: string;
    duration: string;
    stops: number;

    segments?: FlightSegment[];

    layover?: Layover;
    passengerName?: string;
}

interface FlightSegment {
    origin: string;
    destination: string;
    departureTime: string;
    arrivalTime: string;
    airline: string;
    flightNumber: string;
    aircraft: string;
    technicalStop: boolean;
}

interface Layover {
    airport: string;
    duration: number;
}
