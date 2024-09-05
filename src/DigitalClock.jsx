import { useState, useEffect } from "react";

function DigitalClock() {
  return(
    <div className="h-screen flex justify-center items-center">
      <div className="backdrop-blur-sm bg-black/25 p-12 w-screen flex justify-center rounded-xl">
        <span className="text-9xl text-white">00:00:00</span>
      </div>
    </div>
  );
}

export default DigitalClock;