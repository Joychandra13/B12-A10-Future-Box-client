import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = ({ size = "text-4xl", text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6">
      <FaSpinner
        className={`animate-spin text-purple-600 ${size}`}
      />
      {text && (
        <p className="text-sm text-gray-500 font-medium">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
