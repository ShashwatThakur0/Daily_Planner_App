import React from "react";

export default function Iphone15ProDemo({ children }) {
  return (
    <div className="relative mx-auto h-[600px] w-[300px] bg-gray-900 rounded-[40px] border-[10px] border-gray-800 overflow-hidden shadow-xl">
      {/* Dynamic Island */}
      <div className="absolute top-0 inset-x-0 h-[24px] bg-black">
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 h-[18px] w-[85px] bg-black rounded-full"></div>
      </div>
      
      {/* Main Content Area */}
      <div className="h-full w-full bg-white overflow-y-auto">
        {children || (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>App Content Goes Here</p>
          </div>
        )}
      </div>
      
      {/* Volume Buttons */}
      <div className="absolute top-[80px] -left-[10px] w-[10px] h-[24px] bg-gray-800"></div>
      <div className="absolute top-[120px] -left-[10px] w-[10px] h-[44px] bg-gray-800"></div>
      
      {/* Power Button */}
      <div className="absolute top-[120px] -right-[10px] w-[10px] h-[44px] bg-gray-800"></div>
    </div>
  );
}
