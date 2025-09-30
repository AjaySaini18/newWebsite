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
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="">
          <h3 className="text-md lg:text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-[11px] sm:text-[13px] text-[#808080] font-medium mb-3">
            Posted {posted} • {openings} opening available
          </p>
        </div>
        <div
          className={`mb-5  sm:top-4 sm:right-4 inline-flex items-center gap-1 px-2.5 sm:px-3 py-2 text-[10px] sm:text-xs font-medium rounded-full border ${
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
      </div>

      
      
      

      {/* Description */}
      <p className="text-[#282828] font-medium leading-snug text-xs lg:text-sm mb-3 sm:mb-4">
        {description}
      </p>

      {/* Job Info */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-500">
        <span className="flex items-center font-medium gap-1.5">
          <img src="/assets/fulltime.svg" alt="Full time" className="w-3 h-3" />
          {type}
        </span>
        <span className="flex items-center font-medium gap-1.5">
          <img src="/assets/dollar.svg" alt="Salary" className="w-3 h-3" />
          {salary}
        </span>
        <span className="flex items-center font-medium gap-1.5">
          <img src="/assets/experience.svg" alt="Experience" className="w-3 h-3" />
          Experience: {experience}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
