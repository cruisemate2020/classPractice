function moveRect(x, y) {
    
const canvas = document.getElementById('example');
const context = canvas.getContext('2d');

context.clearRect(0, 0, 300, 300);

context.fillStyle='olive';
// fillRect(x, y, width, height)
context.fillRect(x, y, 50, 50);

x += 3;

if(x % 10 === 0) {
    y += 15;
}

setTimeout(() => moveRect(x, y), 30);
}

