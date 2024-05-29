// components/FlightSummary.tsx

import React from 'react';
import Chip from '../../common/Chip';

interface FlightSummaryProps {
    origin: string;
    destination: string;
    date: string;
    duration: string;
    stops: number;
}

const FlightSummary: React.FC<FlightSummaryProps> = ({
    origin,
    destination,
    duration,
    stops,
}) => (
    <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-blue-500 h-7 w-7 text-white font-semibold">
                1
            </div>

            <div>
                <div className="text-black font-semibold">
                    {origin} &#x2192; {destination}
                </div>
                <div className="text-xs text-gray-500">
                   Roundtrip · 25 Mar - 4th Apr 2023 · {stops} Stop
                </div>
            </div>
        </div>

        <Chip text={duration} />
    </div>
);

export default FlightSummary;
