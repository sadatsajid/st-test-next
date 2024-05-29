import React from "react";

interface FlightSegmentProps {
    city: string;
    airport: string;
    terminal: string;
    icon: React.ReactNode;
    backgroundColor: 'gray' | 'blue';
}

const FlightSegment: React.FC<FlightSegmentProps> = ({
    city,
    airport,
    terminal,
    icon,
    backgroundColor = "gray", // Default to gray if not provided
}) => {
    return (
        <div className="flex items-center space-x-2 text-sm p-4">
            {icon}
            <div
                className={`flex-1 flex justify-between bg-${backgroundColor}-100 py-3 px-4 rounded-md`}
                style={{ backgroundColor: backgroundColor === "gray" ? "#f3f4f6" : "" }} // Add inline style for backgroundColor
            >
                <p className="text-gray-700 font-normal">{city}</p>
                <p className="text-gray-500">
                    {terminal}
                    {terminal && ":"} {airport}
                </p>
            </div>
        </div>
    );
};

export default FlightSegment;
