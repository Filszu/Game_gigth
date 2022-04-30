import Entity from "./entity.js";
import Hero from "./hero.js";
import Enemy from "./enemy.js";
import Base from "./base.js";
// import {heroesOBJ, enemiesOBJ} from "./entity.js";
//rodzeil do nowych plikow
// import('./game.js').then(console.log);  - do sprawdzenia zmiennych z modoulow
export const board = document.querySelector('.background'); 
const grassDiv = document.querySelector('.grass'); 


const ch = board.clientHeight;
const cw = board.clientWidth;

//gracze na polu
export let heroesOBJ = [] //tablica obiektow
export let enemiesOBJ = [] //tablica obiektow

//pole rozgrywek
export const startMap=100;
export const EndMap=cw-300;
export const startY=-55;//wysokosc trawy
export let frame=0;

//tutja bedzie tablica na obiekty


//w innym pliku
// let heroesOBJ = [] //tablica obiektow
// let enemiesOBJ = []  //tablica wrogów







const myBase = new Base(100,"player");
const enemyBase = new Base(100,"enemy");



//add new entity test
heroesOBJ.push(new Hero("hero", 150, 10, 0, 1, 1));
enemiesOBJ.push(new Enemy("enemy1", 100, 10, 10, 1, -2,8));
enemiesOBJ.push(new Enemy("enemy2", 100, 10, 10, 1, -8,8));
enemiesOBJ.push(new Enemy("enemy3", 10, 30, 10, 1, -6,10));
enemiesOBJ.push(new Enemy("enemy4", 1000, 30, 10, 1, -1,10));
heroesOBJ.push(new Hero("hero2", 100, 10, 0, 1, 2,1));

// heroesOBJ.push(new Enemy("enemy1", 100, 10, 10, 1, 5));

// heroesOBJ[0].spawn();
// heroesOBJ[0].move();
// player.spawn();
// player.move();







//update ruchow i wszytkich czynnowsci entity
console.log(heroesOBJ)
console.log(enemiesOBJ)
function update(){
    

    for(let hero in heroesOBJ){
        heroesOBJ[hero].move();
    }

    for(let enemy in enemiesOBJ){
        enemiesOBJ[enemy].move();
    }

   
}

//sprawdzanie czy się stykaja i rozpoczynanie walki
function handleFight(){
    
    for (let i in heroesOBJ){
        for (let j in enemiesOBJ)
        if(collision(heroesOBJ[i],enemiesOBJ[j])){
            // console.log("fight");
            
            heroesOBJ[i].fight(enemiesOBJ[j]);
            enemiesOBJ[j].fight(heroesOBJ[i]);
            // enemiesOBJ[j].fight(heroesOBJ[i]);
        }
    }
}
function collision(a,b){
    
    // if(!(heroesOBJ[0].x > enemiesOBJ[0].x+enemiesOBJ[0].width
    //     ||heroesOBJ[0].x+heroesOBJ[0].width<enemiesOBJ[0].x))
    //     {
            
    //         alert(`x1: ${heroesOBJ[0].x}   x2: ${enemiesOBJ[0].x}`)
    //     }

    if(!(a.x > b.x+b.width
        ||a.x+a.width<b.x))
        {
            
            // alert(`x1: ${heroesOBJ[0].x}   x2: ${enemiesOBJ[0].x}`)
            // console.log("collision");
            return true;
        }
    
}








//animation loop

function animate(){
    
    update();
    // collision(heroesOBJ[0],enemiesOBJ[0]);
    handleFight();
    frame++;
    // console.log(frame%100)
    // if(frame%100==0)console.log(frame)
    requestAnimationFrame(animate);
    
}

animate();



const debugButton = document.querySelector("#debugButton");
debugButton.onclick = () => {
    heroesOBJ.push(new Hero("hero3", 150, 90, 0, 1, 10,10));
}
