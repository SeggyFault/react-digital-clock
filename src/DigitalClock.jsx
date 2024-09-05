import { useState, useEffect } from "react";

function DigitalClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >=12 ? "PM" : "AM";

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
  }

  function addZero(number) {
    return (number < 10 ? "0" : "") + number;
  };

  return(
    <div className="h-screen flex justify-center items-center">
      <div className="backdrop-blur-sm bg-black/25 p-12 w-screen flex justify-center rounded-xl">
        <span className="text-9xl text-white">{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;