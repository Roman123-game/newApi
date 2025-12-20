import { useEffect, useState } from "react";
import "./Earth.css";

const frames = ["🌏",  "🌍" ];

export default function EarthSpin3Frames() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % frames.length);
    }, 300);

    return () => clearInterval(id);
  }, []);

  return (
    <span
      role="img"
      aria-label="Spinning Earth"
      style={{ fontSize: "64px" }}
    >
      {frames[i]}
    </span>
  );
}
