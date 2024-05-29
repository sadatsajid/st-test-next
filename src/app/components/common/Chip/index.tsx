import React from "react";

interface ChipProps {
  text: string;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ text, className }) => (
  <div
    className={`bg-blue-100 rounded-lg px-3 py-1 text-blue-500 font-murecho text-xs font-normal tracking-wider inline-flex items-center ${className}`}
  >
    {text}
  </div>
);

export default Chip;
