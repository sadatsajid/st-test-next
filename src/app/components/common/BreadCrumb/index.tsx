import React from "react";
import { HiChevronRight } from "react-icons/hi";

const Breadcrumb: React.FC<{ items: { label: string; href?: string }[] }> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex text-sm font-normal">
      {items.map((item, index) => (
        <div key={index} className="flex">
          <a
            href={item.href}
            className={`text-base ${index === items.length - 1
              ? "text-blue-500"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {item.label}
          </a>
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-500">
              <HiChevronRight size={24} />
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
