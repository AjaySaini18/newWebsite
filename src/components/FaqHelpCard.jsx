import React from "react";

const FaqHelpCard = () => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6 flex items-center justify-between w-180 max-w-full">
      <div>
        <h3 className="font-semibold text-2xl text-gray-900">Need Help?</h3>
        <p className="text-gray-600 font-medium text-md mt-1">
          If you still have any doubts, feel free to contact us.
        </p>
        <button className="mt-4 bg-[#4359FF] cursor-pointer font-medium text-white px-10 py-4 rounded-md hover:bg-indigo-700">
          Contact us
        </button>
      </div>
      <img
        src="/assets/chat.svg"
        alt="Help Icon"
        className="w-30 h-30"
      />
    </div>
  );
};

export default FaqHelpCard;
