// AiServiceCard.jsx
import React from "react";

const AiServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#FCFCFC] rounded-2xl shadow-md p-4 flex flex-col items-center text-center max-h-full min-h-[250px] w-full shadow:lg transition">
      <img
        src={Icon}
        alt={`${title} Icon`}
        className="h-14 w-14 mb-3"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-[15px] text-[#585858] font-figtree font-medium line-clamp-5 text-center  leading-snug ">{description}</p>
    </div>
  );
};

export default AiServiceCard;
