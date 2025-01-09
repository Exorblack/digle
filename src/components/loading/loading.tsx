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
      <div className="fixed inset-0 bg-gradient-to-b from-blue-950 to-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center gap-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300/50 to-blue-400/50">
            DIGLE.
          </h1>

          {/* Progress  */}
          <div className="w-full space-y-3">
            <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-400 transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="text-xs md:text-sm lg:text-base text-blue-400 font-medium">
                Loading...
              </span>
              <span className="text-xs md:text-sm lg:text-base text-blue-400 font-mono">
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
