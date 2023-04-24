function Snake(){
    this.x = 100;
    this.y = 100;
    this.xSpeed = 0;
    this.ySpeed = scale * 1,5;
    this.jumping = true;
    this.gravity = true;
    this.right = true;
    this.left = false;
    this.total = 0;
    this.tail = [];
    this.rAction = 0;
    this.sWalk = 0;
    this.sWJ = 0;
    this.Action = false;
    this.Drag = false;
    this.Follow =false;
    this.copyX = this.x;
    this.copyY = this.y;
    this.Frames = [
        "https://cdn.discordapp.com/attachments/582939954536251412/697847045951717476/WC_Frame1.png",
        "https://cdn.discordapp.com/attachments/582939954536251412/697847063223992440/WC_Frame2.png",
        "https://cdn.discordapp.com/attachments/582939954536251412/697847090176327831/WC_Frame3.png",
        "https://cdn.discordapp.com/attachments/582939954536251412/697847129351127584/WC_Frame4.png",
        "https://cdn.discordapp.com/attachments/582939954536251412/697847162327007332/WC_Frame5.png",
        "https://cdn.discordapp.com/attachments/582939954536251412/697847176423800862/WC_Frame6.png"
    ];
    

    var image = new Image();
    image.src= "https://cdn.discordapp.com/attachments/582941962101850122/697113271425040399/spaceship.png";
    image.style.zIndex = "9";
    testing_image = image;
    
    this.displayImg = image;

    var h_img  = document.querySelector("#image");
    this.h_imgWidth = h_img.offsetWidth;
    this.h_imgHeight = h_img.offsetHeight;
    console.log(this.h_imgWidth);
  

    this.draw = function(){
        /*
        ctx.fillStyle = "#53d1e8";

        for(let i=0 ; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x,this.tail[i].y, scale ,scale);
        }
        
        ctx.fillRect(this.x,this.y, scale ,scale);
        */
        

    //    ctx.drawImage(image,this.x-imageSize/2,this.y-imageSize/2,imageSize,imageSize);
        ctx.drawImage(image,0,0,this.h_imgWidth,this.h_imgHeight,this.x-this.h_imgWidth/2,this.y-this.h_imgHeight/2,this.h_imgWidth,this.h_imgHeight);
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,1,1);
        
       
        //ctx.drawImage(img,0,0,this.imgWidth,this.imgHeight,this.x,this.y);
      
    }

    this.update = function(){
        for(let i = 0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total-1] = { x: this.x, y:this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width){
            this.x = 0;
        }

        if(this.x < 0){
            this.x =canvas.width;
        }

        if(this.y<= canvas.height * 3/5 && this.gravity == true){
            this.jumping = true;
            this.ySpeed = scale*1;
        }

        if(this.y > canvas.height-this.h_imgHeight/2){
            this.jumping = false;
            this.y = canvas.height - this.h_imgHeight /2;
            this.ySpeed = 0;
        }

        
    }

    
    this.sJump = function(){
        this.ySpeed = -scale*1.2;
        this.rAction = 0;
        console.log("Jump");
    }

    this.sWLeft = function(){
        this.left = true;
        this.right = false;
        image.src = "https://cdn.discordapp.com/attachments/582941962101850122/697152274161729607/MOR.png";
        this.xSpeed = -scale*0.3;
        this.rAction = 0;

        console.log("Left");
    }

    this.sWRight = function(){
        this.right = true;
        this.left = false;
        image.src= "https://cdn.discordapp.com/attachments/582941962101850122/697113271425040399/spaceship.png";
        this.xSpeed = scale*0.3;
        this.rAction = 0;
        console.log("Right");
    }

    this.sStop = function(){
        this.xSpeed = 0;
        this.rAction = 0;
        console.log("Stop");
    }

    
    this.sDrag = function(event){
        console.log(event.pageX);
        console.log(event.pageY);
        console.log("DRAG");
        if(this.x == event.pageX && this.y == event.pageY){
            this.x = event.pageX;
            this.y = event.pageY;
        }
    }


    /*
    this.sWJLeft = function(){
        this.xSpeed = -scale*1;
        this.ySpeed = -scale*1;
        this.xSpeed = 0;
        this.rAction = 0;
    }

    this.sWJRight = function(){
        this.xSpeed = scale*1;
        this.ySpeed = -scale*1;
        this.xSpeed = 0;
        this.rAction = 0;
    }
    */
    this.doRAction = function(rAction){
        switch(rAction){
            case 1:
                this.xSpeed  = -scale*1;    
            break;
            case 2:
                this.xSpeed = scale*1;
            break;
            
            case 3:
                this.ySpeed = -scale*1;
            break;
        }
        
    }

    this.changeDirection = function(direction){

        if(direction == 'Up' && this.jumping == false){
            this.ySpeed = -scale *1.2;
            this.jumping = true;
            
        }
        if(direction == 'Left'){
            image.src = "https://cdn.discordapp.com/attachments/582941962101850122/697152274161729607/MOR.png";
            this.xSpeed = -scale*0.5;
            this.left = true;
            this.right = false;
            console.log("Left");
        }
        if(direction == 'Right'){
            image.src= "https://cdn.discordapp.com/attachments/582941962101850122/697113271425040399/spaceship.png";
            this.xSpeed = scale*0.5;
            this.right = true;
            this.left = false;
            console.log("Right");
        }
    }

    this.correctDirection =function(Cdirection){
        if(Cdirection == "Up" && this.jumping == true){
            this.ySpeed = scale*1.0;
            console.log("WAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
        if(Cdirection == 'Left'){
            this.xSpeed = 0;

        }
        if(Cdirection == 'Right'){
            this.xSpeed = 0;
        }
    }

}
