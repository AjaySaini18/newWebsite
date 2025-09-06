// components/JobCard.jsx
import React from "react";

const JobCard = ({
  title,
  posted,
  openings,
  description,
  type,
  salary,
  experience,
  location,
  locationType,
}) => {
  return (
    <div className="relative rounded-xl p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition font-gilroy">
      {/* Location Badge Top Right */}
      <div
        className={`absolute top-3 right-3 sm:top-4 sm:right-4 inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full border ${
          locationType === "remote"
            ? "text-black border-blue-600 bg-blue-50"
            : "text-black border-green-600 bg-green-50"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            locationType === "remote" ? " bg-blue-500" : "bg-green-500"
          } `}
        ></span>
        {location}
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-md font-bold text-gray-900">{title}</h3>
      <p className="text-[11px] sm:text-[12px] text-[#808080] font-semibold mb-1 sm:mb-2">
        Posted {posted} • {openings} opening available
      </p>

      {/* Description */}
      <p className="text-[#282828] font-medium leading-snug text-[12px] sm:text-[13px] mb-3 sm:mb-4">
        {description}
      </p>

      {/* Job Info */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-[11px] sm:text-[12px] text-gray-500">
        <span className="flex items-center gap-1.5">
          <img src="/assets/fulltime.svg" alt="Full time" className="w-3 h-3" />
          {type}
        </span>
        <span className="flex items-center gap-1.5">
          <img src="/assets/dollar.svg" alt="Salary" className="w-3 h-3" />
          {salary}
        </span>
        <span className="flex items-center gap-1.5">
          <img src="/assets/experience.svg" alt="Experience" className="w-3 h-3" />
          Experience: {experience}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
