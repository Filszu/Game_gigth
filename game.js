import Entity from "./entity.js";
import Hero from "./hero.js";
import Enemy from "./enemy.js";
import {heroesOBJ, enemiesOBJ} from "./entity.js";
//rodzeil do nowych plikow
export const board = document.querySelector('.background'); 
const grassDiv = document.querySelector('.grass'); 


const ch = board.clientHeight;
const cw = board.clientWidth;

//pole rozgrywek
export const startMap=100;
export const EndMap=cw-300;
export const startY=-55;//wysokosc trawy

//tutja bedzie tablica na obiekty


//w innym pliku
// let heroesOBJ = [] //tablica obiektow
// let enemiesOBJ = []  //tablica wrogów










//add new entity test
heroesOBJ.push(new Hero("hero", 100, 10, 10, 1, 5));
enemiesOBJ.push(new Enemy("hero", 100, 10, 10, 1, -2));
enemiesOBJ.push(new Enemy("hero", 100, 10, 10, 1, -4));

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








//animation loop

function animate(){
    
    update();
    requestAnimationFrame(animate);
}

animate();
