import React, { useEffect, useRef } from "react";
import "./App.scss";
import sketch from "./sketch";
import p5 from "p5";

const App = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvasDivElement: HTMLDivElement = canvasRef.current!;
    new p5(sketch(canvasDivElement), canvasDivElement);
  }, []);

  return <div ref={canvasRef} className="p5" />;
};

export default App;
