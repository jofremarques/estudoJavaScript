var width = 0; 
var height = 0;
var vidas = 1;

function adjustScreenSize(){
    height = window.innerHeight;
    width = window.innerWidth;
}

function randomSize(){
    var size = Math.floor(Math.random() * 4);
    var sizeClass = "";

    switch(size){
        case 0 :
            sizeClass = 'fly0'
            break;
        case 1 :
            sizeClass = 'fly1'
            break;
        case 2 :
            sizeClass = 'fly2'
            break; 
        case 3 :
            sizeClass = 'fly3'
            break;
    }

    var side = Math.floor(Math.random() * 2);
    var sideClass = "";

    switch(side){
        case 0 :
            sideClass = 'sideL'
            break;
        case 1 :
            sideClass = 'sideR'
            break;
    }

    var classFly = sideClass + " " + sizeClass;
   return classFly;  
}

adjustScreenSize();

function randomPosition(){
    var positionX = Math.floor(Math.random()*width) - 150;
    var positionY = Math.floor(Math.random()*height)- 150;
    
    if(positionX < 0){
        positionX = 0;
    }
    
    if(positionY < 0){
        positionY = 0;
    }

    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();
        
        
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v'+vidas).src = "img/coracao_vazio.png"
            vidas++
        }
    
    }

    var fly = document.createElement('img');
        fly.src= "img/mosquito.png";
        fly.className = randomSize();
        fly.style.left = positionX + "px";
        fly.style.top =positionY +"px";
        fly.style.position = "absolute";
        fly.id = "mosquito";
        fly.onclick = function(){
            this.remove()
        }

    document.body.appendChild(fly);  
}

setInterval(() => {
    
    randomPosition()
    
}, 2000)


