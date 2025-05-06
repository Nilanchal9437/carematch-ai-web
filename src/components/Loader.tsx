import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="relative flex flex-col items-center">
          {/* Spinner */}
          <div className="w-12 h-12">
            <div className="w-full h-full rounded-full border-[3px] border-gray-200">
              <div className="w-full h-full rounded-full border-[3px] border-primary border-t-transparent animate-spin"></div>
            </div>
          </div>
          
          {/* Loading text with animated dots */}
          <div className="mt-2">
            <div className="text-gray-700 text-sm font-medium flex items-center gap-[2px]">
              Loading
              <span className="animate-[dot1_1.5s_infinite] ml-[2px]">.</span>
              <span className="animate-[dot2_1.5s_infinite]">.</span>
              <span className="animate-[dot3_1.5s_infinite]">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader; 