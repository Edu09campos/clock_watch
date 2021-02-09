import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(time());

  function pad(num: number, size: number) {
    return ("000000000" + num).substr(-size);
  }

  function time() {
    const date = new Date();
    const currentTime =
      date.getHours().toString() +
      date.getMinutes().toString() +
      date.getSeconds().toString();

    let tempTime = parseInt(currentTime);
    return pad(tempTime, 6);
  }

  function nextTime(time: number) {
    if (time >= 235959) {
      time = 0;
    } else if (time % 100 === 59) {
      time += 41;
    } else if (time % 10000 === 5959) {
      time += 4041;
    } else {
      time += 1;
    }

    return time;
  }

  useEffect(() => {
    let num = parseInt(color);
    let newColor = "";

    num = nextTime(num);
    newColor = pad(num, 6);

    const timeout = setTimeout(() => {
      setColor(newColor);
    }, 1000);
  }, [color]);

  return (
    <div className="App" style={{ backgroundColor: `#${color}` }}>
      <h1>#{color}</h1>
    </div>
  );
}

export default App;
