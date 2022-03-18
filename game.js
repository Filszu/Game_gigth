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
export let frame=0;

//tutja bedzie tablica na obiekty


//w innym pliku
// let heroesOBJ = [] //tablica obiektow
// let enemiesOBJ = []  //tablica wrogów










//add new entity test
heroesOBJ.push(new Hero("hero", 100, 10, 10, 1, 5,3));
enemiesOBJ.push(new Enemy("hero", 100, 10, 10, 1, -2,2));
enemiesOBJ.push(new Enemy("hero", 100, 10, 10, 1, -8,1));

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

function handleFight(){
    
    for (let i in heroesOBJ){
        for (let j in enemiesOBJ)
        if(collision(heroesOBJ[i],enemiesOBJ[j])){
            console.log("fight");
            heroesOBJ[i].isFighting=true;
            enemiesOBJ[j].isFighting=true;
            heroesOBJ[i].fight(enemiesOBJ[j]);
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
            console.log("collision");
            return true;
        }
    
}








//animation loop

function animate(){
    
    update();
    // collision(heroesOBJ[0],enemiesOBJ[0]);
    handleFight();
    frame++;
    
    requestAnimationFrame(animate);
    
}

animate();
