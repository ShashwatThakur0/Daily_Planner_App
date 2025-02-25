import React from "react";

export default function Iphone15ProDemo({ children }) {
  return (
    <div className="relative mx-auto h-[700px] w-[350px]">
      {/* Glass morphism background effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 rounded-[50px] blur-xl"></div>
      
      {/* iPhone frame */}
      <div className="relative h-full w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-[45px] border-[10px] border-gray-800 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)]">
        {/* Dynamic Island */}
        <div className="absolute top-0 inset-x-0 h-[35px] bg-black">
          <div className="absolute top-[7px] left-1/2 -translate-x-1/2 h-[25px] w-[120px] bg-black rounded-full transition-all duration-300 hover:w-[130px] hover:h-[27px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="absolute inset-0 pt-[35px] pb-[20px] bg-gradient-to-br from-gray-50 to-white">
          <div className="relative h-full overflow-hidden">
            {children || (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p className="text-lg font-medium">App Content Goes Here</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Volume Buttons */}
        <div className="absolute top-[90px] -left-[10px] w-[10px] h-[30px] bg-gray-800 rounded-l-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"></div>
        <div className="absolute top-[140px] -left-[10px] w-[10px] h-[60px] bg-gray-800 rounded-l-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"></div>
        
        {/* Power Button */}
        <div className="absolute top-[140px] -right-[10px] w-[10px] h-[60px] bg-gray-800 rounded-r-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"></div>
        
        {/* Bottom Notch */}
        <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-[150px] h-[4px] bg-gray-800 rounded-full"></div>
        
        {/* Subtle Inner Shadow */}
        <div className="absolute inset-0 rounded-[35px] shadow-inner pointer-events-none"></div>
      </div>
    </div>
  );
}
