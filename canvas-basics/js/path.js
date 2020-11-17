const canvas = document.getElementById('example-1');
const context = canvas.getContext('2d');

//draw rectangle
context.fillStyle='blue';
context.fillRect(220, 220, 40, 40);

context.fillStyle='rgba(50, 205, 50, 0.5';
context.fillRect(30, 40, 60, 60);

//draw text
context.fillStyle='pink';
context.font='20px monospace';
context.fillText('PTWD 102020 💗', 190, 50);

//draw path
//step 1: beginPath()
context.beginPath();

//step 2: moveto(x, y) -> start position
context.moveTo(50, 80);

//step 3: lineto(x, y) -> final position
context.lineTo(220, 80);

//step 4: stroke()
context.stroke();

context.lineTo(220,100);
context.stroke();

context.fill()

//step 5: closePath()
context.closePath();


//formula to convert degrees into radians: radians = (Math.PI / 180) * degrees

//draw circle
//step 1: beginPath()
context.beginPath()

context.strokeStyle = 'orange';
context.lineWidth = 7;


//step 2: arc()
//context.arc(x, y, radius, startAngle, endAngle);
//Math.PI * 2 ==> full (closed circle)
context.arc(150, 150, 50, 0, Math.PI * 2);

//step 3: stroke()
context.stroke();
//step 4: closePath()
context.closePath();

context.beginPath();

context.strokeStyle='purple';
context.arc(150, 150, 30, 0, Math.PI);
context.stroke();

context.closePath();

