console.log("extension running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message , sender, sendResponse){
    console.log(message.txt);

    if(message.txt === "hello"){
        var overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);  

        var menu = document.createElement("div");
        menu.id = "meniu";
        document.getElementById("overlay").appendChild(menu);

        var buton1 = document.createElement("input");
        buton1.id = "buton";
        buton1.type = "button";
        buton1.value = "summon companion";
        buton1.onclick= function(){setup();};
        document.getElementById("meniu").appendChild(buton1);

        var buton2 = document.createElement("input");
        buton2.id = "buton";
        buton2.type = "button";
        buton2.value = "random action";
        buton2.onclick= function() {sRAction();};
        document.getElementById("meniu").appendChild(buton2);        
        
        var img = document.createElement("img");
        img.setAttribute("src","https://cdn.discordapp.com/attachments/582941962101850122/697113271425040399/spaceship.png");
        img.style.position = "absolute";
        img.style.top = "110vh"
        img.style.left = "110vw";
        img.id = "image";
        document.getElementById("overlay").appendChild(img);


        var canv = document.createElement("canvas");
        canv.id = "canvas";
        canv.height = window.innerHeight;
        canv.width = window.innerWidth;
        document.getElementById("overlay").appendChild(canv);
    }
}