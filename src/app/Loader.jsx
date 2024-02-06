import React, { useEffect, useState } from "react";

function Loader() {
  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 0
      );
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return active ? (
    <div className="absolute top-0 left-0 w-full h-screen bg-black box-border flex items-center justify-center z-[1000]">
      <div className="w-24 h-8 bg-[#272727]">
        <div
          className="h-8 bg-blue-400 duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  ) : null;
}

export default Loader;
