import React from 'react';
import FlightSegment from '../FlightSegment';
import Icon from '../../common/SVGIcons';

const DestinationDetails: React.FC = () => {

    return (
        <FlightSegment
            city="Destination at New York"
            airport="John F Kennedy Airport"
            terminal="Terminal 4"
            icon={<Icon name="location-icon-blue" className="w-9 h-9" />}
            backgroundColor="gray"
        />
    );
};

export default DestinationDetails;
