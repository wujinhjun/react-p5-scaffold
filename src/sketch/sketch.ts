import p5 from "p5";

const mySketch = (parentElement: HTMLElement) => (p: p5) => {

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background(0, 0, 0);
    }

    p.draw = () => {
        p.clear(255, 255, 255, 0);
        p.background(0, 0, 0);
        p.fill(255);
        p.rectMode("center");
        p.rect(p.width / 2, p.height / 2, 200, 200);
    }
}

export default mySketch;