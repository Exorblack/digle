import Image from "next/image";
import React, { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prog) => {
        if (prog >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prog + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-b from-[#8ECAE6] to-[#8ecae6b7] flex items-center justify-center p-4">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center gap-10">
          
          <Image
            src={"/digle-logo.png"}
            width={300}
            height={300}
            alt={"logo-loading"}
          />

          {/* Progress  */}
          <div className="w-full space-y-3">
            <div className="h-2 bg-[#023047]/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#219EBC]/80 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-xs md:text-sm lg:text-base text-[#219EBC]/80 font-medium">
                Loading...
              </span>
              <span className="text-xs md:text-sm lg:text-base text-[#219EBC]/80 font-mono">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
