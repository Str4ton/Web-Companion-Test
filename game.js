const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const imageSize= scale*5;
const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake ,sAction , cMouse;



function sRAction(){
    snake.rAction = (Math.floor(Math.random() * 4) +1) ;
    console.log(snake.rAction);
}

function catMouse(){
    cMouse = (Math.floor(Math.random() *10 ) +1);
    console.log("cMouse: " + cMouse);
}

function stopRandAction(){
    randomAction = false;   
}

setInterval(sRAction, 5000);
setInterval(catMouse, 5000);


function setup(){
    snake = new Snake();


    window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    snake.update();
    snake.draw();

    switch(snake.rAction){
        case 1:
            snake.sJump();
        break;
        case 2:
            snake.sWLeft();
        break;
        case 3:
            snake.sWRight();
        break;
        case 4:
            snake.sStop();
        break;
        
        default:
            break;
    }

    }, 25);
};



window.addEventListener('keydown' , ((evt) =>{
    const direction= evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));

window.addEventListener('keyup' , ((evt) =>{
    const Cdirection= evt.key.replace('Arrow', '');
    snake.correctDirection(Cdirection);
}));

window.addEventListener("click", ((e) => {
    console.log("Drag");
    console.log(e.x);
    console.log(e.y);
    if(snake.x != e.x  && snake.y != e.y){
        if(snake.x > e.x){
            snake.rAction = 2;
        }
        if(snake.x < e.x){
            snake.rAction = 3;
        }

        if(snake.x > e.x && snake.y > e.y){
            snake.gravity = false;
            snake.ySpeed = -scale*2;
            snake.rAction = 2;
        }
        if(snake.x < e.x && snake.y > e.y){
            snake.gravity = false;            
            snake.ySpeed = -scale*2;
            snake.rAction = 3;
        }

        if(snake.y > e.y && snake.x == e.x){
            snake.ySpeed = -scale*2;
            snake.rAction = 1;
        }
        
    }  
    
})); 

window.addEventListener("mousemove", ((e) =>{
    if(snake.y <= e.y){
        snake.gravity = true;
    }
    if(snake.x == e.x && snake.y == e.y){
        snake.gravity = true;
    }
}));


