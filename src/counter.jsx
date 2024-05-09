import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Stopwatch() {
  const [istrue, setIstrue] = useState(false);
  const [count, setCount] = useState(0);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleStart = () => {
    setIstrue(!istrue);
  };

  const handleStop = () => {
    setCount(0);
    setIstrue(false);
  };

  useEffect(() => {
    let interval;
    if (istrue) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [istrue]);

  return (
    <div>
      <h1> Counter </h1>
      <p>Time :{formatTime(count)} </p>
      <div>
        <button onClick={handleStart}> {istrue ? "Stop" : "Start"}</button>

        <button onClick={handleStop}> Reset</button>
      </div>
    </div>
  );
}
export default Stopwatch;
