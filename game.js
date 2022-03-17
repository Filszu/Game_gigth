
const board = document.querySelector('.background'); 
const grassDiv = document.querySelector('.grass'); 


const ch = board.clientHeight;
const cw = board.clientWidth;
const startY=-55;

const playerDiv = document.querySelector(".player");

let heroes = [];
let enemies = [];

class Entity{

    constructor(name, hp, attack, defense, lvl, speed) { 
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense =defense;
        this.lvl = lvl;
        this.speed = speed;

        this.isFighting = false;
        this.x=0;
        this.y=0;

    }

    spawn(){
                 
       
    }

    show(){
        
    }

    hide(){

    }

    setX(move){
        this.x+=move;
        playerDiv.style.left=this.x+"px";
    }
    move(){
        // jesli nie walczy 
        this.setX(this.speed);
        console.log(this.x);
    }

}

class Hero extends Entity{
    constructor(name, hp, attack, defense, lvl, speed){
        super(name, hp, attack, defense, lvl, speed);

    }

    spawn(){
        this.x=100;
        this.y=startY;
        // playerDiv.style.backgroundColor ="black";
        playerDiv.style.bottom=this.y+"px";
        playerDiv.style.left=this.x+"px";
        playerDiv.style.animation=" spawn 1s";
    }

    
   
    
}


const player = new Hero("hero", 100, 10, 10, 1, 5);
player.spawn();
player.move();





//animation loop

function animate(){
    player.move();
    requestAnimationFrame(animate);
}

animate();
