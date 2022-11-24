const sketch = (parentElement, widthSize = 300, heightSize = 300) => (sketch) => {
    sketch.preload = () => {
        // console.log("preload");
    }

    sketch.setup = () => {
        sketch.createCanvas(widthSize, heightSize);
        sketch.background(0, 0, 0);
    }

    sketch.draw = () => {
        sketch.clear();
        sketch.background(0, 0, 0);
        sketch.fill(255);
        sketch.rect((widthSize / 2) - 50, (heightSize / 2) - 50, 100, 100);
    }
}

export default sketch;