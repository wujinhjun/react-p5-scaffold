import React, { useEffect, useRef } from "react";
import "./App.css";
import sketch from "./sketch";
import p5 from "p5";

const App = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvasDivElement = canvasRef.current;
        // console.log(canvasRef);
        new p5(sketch(canvasDivElement, 500, 500), canvasDivElement);
    }, []);

    return <div ref={canvasRef} className="p5" />;
};

export default App;
