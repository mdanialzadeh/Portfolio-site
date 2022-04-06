import React from "react";
import Wave from "react-wavify";

function Waves() {
  return (
    <>
      <Wave
        stroke-width="0"
        style={{
          position: "fixed",
          bottom: "0",
          height: "60%",
        }}
        fill="#07203faa"
        filter="url(#f1)"
        paused={false}
        options={{
          height: 100,
          amplitude: 80,
          speed: 0.2,
          points: 3,
        }}
      >
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </Wave>
      <Wave
        style={{
          position: "fixed",
          bottom: "0",
          height: "40%",
        }}
        fill="#07203f0a"
        filter="url(#f1)"
        paused={false}
        options={{
          height: 100,
          amplitude: 80,
          speed: 0.15,
          points: 4,
        }}
      >
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="45" />
          </filter>
        </defs>
      </Wave>
      <Wave
        style={{
          position: "fixed",
          bottom: "0",
          height: "20%",
        }}
        fill="#07203f0a"
        filter="url(#f1)"
        paused={false}
        options={{
          height: 100,
          amplitude: 80,
          speed: 0.1,
          points: 3,
        }}
      >
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>
      </Wave>
    </>
  );
}

export default Waves;
