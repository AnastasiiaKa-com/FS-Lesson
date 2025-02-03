import { useState } from "react";

export default function DayNightChanger() {
  const [dayTime, setDayTime] = useState(false);
  const dayTimeText = () => {
    setDayTime((prevState) => !prevState);
  };
  return (
    <div>
      
      <span>{dayTime ? "День 🌞" : "Ночь 🌛"}</span>
     
      <button onClick={dayTimeText}>Переключить</button>
     
    </div>
  );
}
