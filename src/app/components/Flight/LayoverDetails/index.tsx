import React from 'react';
import FlightSegment from '../FlightSegment';
import Icon from '../../common/SVGIcons';
import FlightInfo from '../FlightInfo';

import { data } from '@/app/data/FlightInfoData';

const LayoverDetails: React.FC = () => {

    return (
        <>
            <FlightSegment
                city="Layover at Dubai: 12h 20m"
                airport="Dubai Airport"
                terminal=""
                icon={<Icon name="location-icon-gray" className="w-9 h-9" />}
                backgroundColor="blue"
            />
            <FlightInfo data={data} />
        </>
    );
};

export default LayoverDetails;
