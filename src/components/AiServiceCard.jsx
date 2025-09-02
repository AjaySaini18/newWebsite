// AiServiceCard.jsx
import React from "react";

const AiServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#FCFCFC] rounded-2xl shadow-sm p-4 flex flex-col items-center text-center min-h-[220px] w-full hover:shadow-md transition">
      <img
        src={Icon}
        alt={`${title} Icon`}
        className="h-12 w-12 mb-3"
      />
      <h3 className="text-md font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-[11px] text-[#585858] line-clamp-5 text-center  leading-3.5 font-medium">{description}</p>
    </div>
  );
};

export default AiServiceCard;
