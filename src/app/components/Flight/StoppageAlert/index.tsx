import React from "react";

interface StoppageAlertProps {
  airport: string;
}

const StoppageAlert: React.FC<StoppageAlertProps> = ({ airport }) => (
  <div className="flex items-center space-x-2 text-sm p-4">
    <div className="bg-[#FFE1C2] rounded-md p-4 ml-10 flex items-center">
      <div className="bg-[#F27D00] rounded-full w-6 h-5 flex items-center justify-center mr-2">
        <p className="text-white font-medium text-sm">!</p>
      </div>
      <p className="text-gray-700 text-sm">
        Technical stoppage at {airport}. Before booking this flight, please check
        your visa requirements as per your nationality.
      </p>
    </div>
  </div>
);

export default StoppageAlert;
