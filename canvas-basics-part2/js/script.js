console.log('JS file connected');

const canvas = document.getElementById('exercise');
const context = canvas.getContext('2d');

function drawFillRectangle(){
    context.fillStyle='purple';
    context.fillRect(100, 100, 50, 50)    
}

function strokeRect(){
    context.lineWidth = 5;
    context.strokeStyle="pink";
    context.strokeRect(65, 400, 30, 30)
}

function drawRectPath(){
    context.beginPath();
    
    context.lineWidth = 7;
    context.strokeStyle = "magenta";

    context.moveTo(400, 50);
    context.lineTo(225, 50);

    context.stroke();
    context.lineTo(225, 75);

    context.stroke();
    context.lineTo(400, 75);

    context.stroke();
    context.lineTo(400, 50);

    context.stroke();
    context.closePath();
}

function drawBullsEye(){
    context.beginPath();
    
    context.strokeStyle='#8B0000';
    context.lineWidth= 20;

    context.arc(300, 300, 100, 0, Math.PI * 2);
    context.stroke();
    
    context.closePath();
    
    context.beginPath();
    
    context.strokeStyle='#8B0000';
    context.lineWidth= 7;

    context.arc(300, 300, 60, 0, Math.PI * 2);
    context.stroke();

    context.closePath();

    context.beginPath();
    
    context.fillStyle='#8B0000';
    context.lineWidth= 15;

    context.arc(300, 300, 25, 0, Math.PI * 2);
    context.fill();

    context.closePath();
}        

function drawText(){
    context.fillStyle = '#1E90FF';
    context.font = '30px Impact';

    context.fillText('🙌🏻 IronHack 🙌🏻', 25, 550);
}

function addImage(){
    context.fillStyle = '#1E90FF';
    context.font = '15px "Comic Sans MS"';

    context.fillText('Brought to you by', 375, 575);
    context.fillText('Codie & Opie', 375, 590,);
    

    const catsImg = new Image();

    catsImg.src = './images/standoff.jpg'
    catsImg.addEventListener('load', () => {
    context.drawImage(catsImg, 375, 400, 200, 150);
    });
}