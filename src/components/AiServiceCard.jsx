// AiServiceCard.jsx
import React from "react";

const AiServiceCard = ({ icon: Icon, title, description }) => {
  return (
    
    <div  className="bg-white rounded-xl shadow-sm p-8">
        <img src={Icon} alt="Service Icon" className="h-15 w-15 mx-auto mb-6" />
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{title}</h3>
        <p className="text-gray-600 text-center">
            {description}
        </p>
    </div>
   
  );
};

export default AiServiceCard;
