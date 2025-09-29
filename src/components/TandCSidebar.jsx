import React from "react";
import Intro from "/assets/information-line.svg";
import programe from "/assets/reactjs-line.svg";
import article from "/assets/article-line.svg";
import Circle from "/assets/account-circle-line.svg";
import RefreshCw from "/assets/secure-payment-line.svg";
import shield from "/assets/shield-star-line.svg";


const categories = [
  { name: "Introduction", icon: Intro },
  { name: "User Account", icon: Circle },
  { name: "Payment", icon: RefreshCw },
  { name: "Use of Programs", icon: programe },
  { name: "User Conduct Policy", icon: shield },
  { name: "User Content", icon: article },
];

const TandCSidebar = ({ activeCategory, setActiveCategory }) => {
  return (
    <aside className="bg-[#F5F6FE] shadow-sm rounded-xl p-6 space-y-2">
      {categories.map((item, idx) => {
        const isActive = activeCategory === idx;
        return (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`flex items-center justify-start space-x-2 w-full cursor-pointer shadow-xs px-4 py-3 rounded-md  transition
              ${
                isActive
                  ? "bg-white shadow-sm"
                  : "bg-transparent hover:bg-indigo-50"
              }`}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default TandCSidebar;
