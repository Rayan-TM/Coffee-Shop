import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";

export default function Timer({ hours, minutes, seconds }) {
  const [time, setTime] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes = prevTime.minutes - 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours = prevTime.hours - 1;
        }

        if (newHours < 0) {
          newHours = 0;
          newMinutes = 0;
          newSeconds = 0;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <Wrapper>
      <div className="box">
        <span className="unit">Hour</span>
        <span className="time">{String(time.hours).padStart(2, "0")}</span>
      </div>
      <div className="box">
        <span className="unit">Min</span>
        <span className="time">{String(time.minutes).padStart(2, "0")}</span>
      </div>
      <div className="box">
        <span className="unit">Sec</span>
        <span className="time">{String(time.seconds).padStart(2, "0")}</span>
      </div>
    </Wrapper>
  );
}
