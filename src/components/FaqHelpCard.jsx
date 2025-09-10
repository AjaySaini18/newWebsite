import React from "react";

const FaqHelpCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between w-160 max-w-full">
      <div>
        <h3 className="font-bold text-lg text-gray-900">Need Help?</h3>
        <p className="text-gray-600 font-semibold text-sm mt-1">
          If you still have any doubts, feel free to contact us.
        </p>
        <button className="mt-4 bg-[#4359FF] cursor-pointer text-white px-7 py-3 rounded-md hover:bg-indigo-700">
          Contact us
        </button>
      </div>
      <img
        src="/assets/chat.svg"
        alt="Help Icon"
        className="w-25 h-25"
      />
    </div>
  );
};

export default FaqHelpCard;
