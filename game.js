import Entity from "./entity.js";
import Hero from "./hero.js";
// import Enemy from "./enemy";
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
const playerDiv = document.querySelector(".player");


let heroesOBJ = [] //tablica obiektow
let enemiesOBJ = []  //tablica wrogów










//add new entity test
heroesOBJ.push(new Hero("hero", 100, 10, 10, 1, 5));

// heroesOBJ[0].spawn();
// heroesOBJ[0].move();
// player.spawn();
// player.move();







//update ruchow i wszytkich czynnowsci entity
function update(){
    for(let hero in heroesOBJ){
        heroesOBJ[hero].move();
    }
}








//animation loop

function animate(){
    
    update();
    requestAnimationFrame(animate);
}

animate();
