import React from 'react';
import Icon from '../../common/SVGIcons';

interface FlightData {
    origin: string;
    destination: string;
    duration: string;
    airline: string;
    flightNumber: string;
    aircraft: string;
    bookingClass: string;
    departureTime: string;
    departureDate: string;
    arrivalTime: string;
    arrivalDate: string;
}

interface FlightInfoProps {
    data: FlightData;
}

const FlightInfo: React.FC<FlightInfoProps> = ({ data }) => {
    return (
        <>
            <div className="flex items-center p-4 text-sm text-black">
                <div className="mr-4">
                    
                    <Icon name="airline-icon" className="w-9 h-9" />
                    <div className="h-12 w-0.5 bg-gray-300 mx-auto"></div>
                    
                    <Icon name="plane-icon" className="w-9 h-9" />
                    <div className="h-12 w-0.5 bg-gray-300 mx-auto -mb-10"></div>
                </div>
                <div className="grid grid-cols-3 gap-14">
                    <div className="text-left">
                        <div className="font-semibold text-lg">{data.origin}-{data.destination}</div>
                        <div className="space-y-3">
                            <div className="font-light text-sm">{data.duration}</div>
                            <div className="font-normal">{data.airline}</div>
                        </div>
                        <div className="font-light text-sm">Flight No: {data.flightNumber}</div>
                    </div>
                    <div className="text-left">
                        <div className="font-semibold text-base">{data.departureTime}</div>
                        <div className="space-y-3">
                            <div className="font-light text-sm">{data.departureDate}</div>
                            <div className="font-light text-sm">{data.aircraft}</div>
                        </div>
                        <div className="font-light text-sm">Class: <strong>{data.bookingClass}</strong></div>
                    </div>
                    <div className="text-left">
                        <div className="font-semibold text-base">{data.arrivalTime}</div>
                        <div className="font-light text-sm">{data.arrivalDate}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightInfo;
