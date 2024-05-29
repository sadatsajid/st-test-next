import React from "react";
import FlightSegment from "../FlightSegment";
import Icon from "../../common/SVGIcons";
import StoppageAlert from "../StoppageAlert";
import FlightInfo from "../FlightInfo";

import { data } from "@/app/data/FlightInfoData";

const DepartureDetails: React.FC = () => {
  return (
    <>
      <FlightSegment
        city="Departure from Dhaka"
        airport="Hazrat Shahjalal International Airport"
        terminal="Terminal 1"
        icon={<Icon name="location-icon-gray" className="w-9 h-9" />}
        backgroundColor="gray"
      />
      <FlightInfo data={data} />
      <StoppageAlert airport="Malpensa International Airport (Milano)" />
    </>
  );
};

export default DepartureDetails;
