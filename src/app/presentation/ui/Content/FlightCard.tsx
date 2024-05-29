import React from 'react';

import FlightSummary from '@/app/components/Flight/FlightSummary';
import DepartureDetails from '@/app/components/Flight/DepartureDetails';
import LayoverDetails from '@/app/components/Flight/LayoverDetails';
import DestinationDetails from '@/app/components/Flight/DestinationDetails';

import { FlightData } from '@/app/domain/entities/Flight';
import { data } from '@/app/data/sampleData';

interface FlightCardProps {
    flightData: FlightData;
}

const FlightCard: React.FC<FlightCardProps> = ({ }) => {

    return (
        <div className="bg-white rounded-t-lg shadow-md w-[840px]">
            <FlightSummary
                date={data.departureDate}
                origin={data.origin}
                destination={data.destination}
                stops={data.stops}
                duration={data.duration}
            />
            <hr className="py-4 border-gray-200" />
            <DepartureDetails />
            <LayoverDetails />
            <DestinationDetails />
        </div>
    );
};

export default FlightCard;
