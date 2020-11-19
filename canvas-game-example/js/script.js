const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

//1. set the background

const drawBackground = () => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //1.1 make score visible on the board
    const score = 0;

    context.fillStyle = 'green';
    context.font = '25px Arial';

    context.fillText(`Score: ${score}`, 800, 50);      
};

drawBackground();

//2. add images to canvas

const superman = {
    x: 0,
    y: 200,
    width: 150,
    height: 150
}


const supermanImg = new Image();
supermanImg.src = './images/superman.png';
supermanImg.addEventListener('load', () => {
    context.drawImage(supermanImg, superman.x, superman.y, superman.width, superman.height);
});

const fireball = {
    x: 800,
    y: 200,
    width: 70,
    height: 70
}

const fireballImg = new Image();
fireballImg.src = './images/fireball.png';
fireballImg.addEventListener('load', () => {
    context.drawImage(fireballImg, fireball.x, fireball.y, fireball.width, fireball.height);
});

const drawEverything = () => {
    context.drawImage(fireballImg, fireball.x, fireball.y, fireball.width, fireball.height);
    context.drawImage(supermanImg, superman.x, superman.y, superman.width, superman.height);

}

//3. create some animation

    const drawingLoop = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        drawBackground();
        drawEverything();

        requestAnimationFrame(drawingLoop);
    };




//player movements

document.addEventListener('keydown', event => {

    switch(event.code){
        case 'ArrowLeft':
        case 'KeyA':
            if(superman.x >= 0) superman.x -= 10;
            break;
        case 'ArrowRight':
        case 'KeyD':
            superman.x += 10;
            break;
    }
})

drawingLoop();
