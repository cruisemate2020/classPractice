const canvas = document.getElementById('example-state');
const context = canvas.getContext('2d');

// .save(), .restore()

const drawCanvas = (color, x, y, w, h) => {
    context.fillStyle = color;
    context.fillRect = (x, y, w, h);
}

drawCanvas('blue', 10, 20, 30,30);
// context.fillStyle = 'blue';
// context.fillRect(10, 20, 30, 30);
// context.save();

drawCanvas('blue', 10, 20, 30,30);
// context.fillStyle = 'orange';
// context.fillRect(50, 70, 30, 30);
// context.save();

drawCanvas('blue', 10, 20, 30,30);
// context.fillStyle = 'green';
// context.fillRect(120, 150, 30, 30);

drawCanvas('blue', 10, 20, 30,30);
// context.restore();
// context.fillRect(200, 20, 30, 30);

drawCanvas('blue', 10, 20, 30,30);
// context.restore();
// context.fillRect(250, 20, 30,30);