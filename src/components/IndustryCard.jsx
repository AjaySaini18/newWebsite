import React from "react";

// Reusable Industry Card
const IndustryCard = ({ icon, title }) => {
  return (
    <div className="bg-[#171717] border border-[#2B2B2B] rounded-xl py-6 sm:py-8 px-3 sm:px-4 flex flex-col items-center justify-center gap-3 sm:gap-4 shadow-md ">
      <img src={icon} alt={title} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
      <p className="text-[12px] sm:text-[10px] md:text-sm font-semibold text-center text-[#C8C8C8]">
        {title}
      </p>
    </div>
  );
};

export default IndustryCard;
