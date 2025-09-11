// components/IndustrySpotlightCard.jsx
import React from "react";
import tickIcon from "../../public/assets/BlueTick.svg"; // adjust path

const IndustrySpotlightCard = ({ image, title, items }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Image */}
      <div className="w-full h-48 2xl:h-60 overflow-hidden rounded-lg p-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-6 ">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <img src={tickIcon} alt="tick" className="w-4 h-4 mt-1" />
              <span className="font-medium text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndustrySpotlightCard;
