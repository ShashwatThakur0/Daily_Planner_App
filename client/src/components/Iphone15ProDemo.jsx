import React from "react";

const Iphone15ProDemo = ({ children }) => {
  return (
    <div className="iphone-container">
      <div className="iphone-frame relative mx-auto h-[600px] w-[300px] bg-gradient-to-b from-gray-950 to-gray-900 rounded-[40px] border-[14px] border-gray-950 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-30 h-[25px] w-[120px] -translate-x-1/2 rounded-full bg-black transition-all duration-300 hover:h-[28px] hover:w-[130px]">
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
        </div>

        {/* Camera Ring */}
        <div className="absolute right-[90px] top-[10px] z-30 h-[10px] w-[10px] rounded-full border-[2px] border-gray-800"></div>

        {/* Volume Buttons */}
        <div className="absolute left-[-17px] top-[100px] h-[40px] w-[3px] rounded-l-lg bg-gray-800 transition-all duration-300 hover:bg-gray-700"></div>
        <div className="absolute left-[-17px] top-[150px] h-[40px] w-[3px] rounded-l-lg bg-gray-800 transition-all duration-300 hover:bg-gray-700"></div>

        {/* Power Button */}
        <div className="absolute right-[-17px] top-[120px] h-[60px] w-[3px] rounded-r-lg bg-gray-800 transition-all duration-300 hover:bg-gray-700"></div>

        {/* Bottom Notch */}
        <div className="absolute bottom-1 left-1/2 h-[4px] w-[120px] -translate-x-1/2 rounded-full bg-gray-800"></div>

        {/* Content Area */}
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Iphone15ProDemo;
