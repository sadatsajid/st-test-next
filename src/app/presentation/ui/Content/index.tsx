import React from 'react';
import Breadcrumb from '@/app/components/common/BreadCrumb';
import FlightCard from './FlightCard';

import { data } from '@/app/data/sampleData';

const Partials: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 gap-2"> 
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Booking History", href: "/booking-history" },
          { label: "Flight", href: "/booking-history/flights" },
          { label: "STHL17121182045413" },
        ]}
      />
      <div className="container mx-auto py-4 flex-1">
        <FlightCard flightData={data} />
      </div>
    </div>
  );
};

export default Partials;
