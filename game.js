//rodzeil do nowych plikow
const board = document.querySelector('.background'); 
const grassDiv = document.querySelector('.grass'); 


const ch = board.clientHeight;
const cw = board.clientWidth;

//pole rozgrywek
const startMap=100;
const EndtMap=ch-100;
const startY=-55;//wysokosc trawy

//tutja bedzie tablica na obiekty
const playerDiv = document.querySelector(".player");

let heroes = [];//tablica nazw divow / chyba nie potrzebna xdd
let enemies = [];
let heroesOBJ = [] //tablica obiektow


//Klasa Entity, bede po niej dziedziczyc hero i enemy ale nwm czy to potzebne
class Entity{

    constructor(name, hp, attack, defense, lvl, speed) { 

       
        //mozna pozniej zmienic dodajc klay pochodne postaci, np peichur / mechanik
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense =defense;
        this.lvl = lvl;
        this.speed = speed;

        this.isFighting = false;
        this.x=0;
        this.y=0;

         //dodanie div reprezentujacego entity (do documentu)
         var entityDiv = document.createElement('div');
         entityDiv.className = "player";
         entityDiv.id=`entity${heroes.length+1}`;

         //-----------------chyba nie potzebne
         heroes.push(entityDiv.id);//zapisanie po id postaci do tab
         board.appendChild(entityDiv);
        

         //powiazanie div z obiektem
         this.id=entityDiv.id;
         this.docID = document.querySelector(`#${entityDiv.id}`);
         //docID inaczej obiekt html reprezentujacy w graficzny sposob obiekt js


         //od razu wywolanie przy tworzeniu
         this.spawn();
         this.move();


    }

    spawn(){
                 
       
    }

    show(){
        
    }

    hide(){

    }

    setX(move){
        this.x+=move;
        this.docID.style.left=this.x+"px";
    }
    move(){
        // jesli nie walczy 
        this.setX(this.speed);
        // console.log(this.x);
    }

}

class Hero extends Entity{
    constructor(name, hp, attack, defense, lvl, speed){
        super(name, hp, attack, defense, lvl, speed);

        

    }

    spawn(){
        this.x=startMap;
        this.y=startY;
        // playerDiv.style.backgroundColor ="black";
        this.docID.style.bottom=this.y+"px";
        this.docID.style.left=this.x+"px";
        this.docID.style.animation=" spawn 1s";
    }

    
   
    
}


// const player = new Hero("hero", 100, 10, 10, 1, 5);



//add new entity test
heroesOBJ.push(new Hero("hero", 100, 10, 10, 1, 5));

// heroesOBJ[0].spawn();
// heroesOBJ[0].move();
// player.spawn();
// player.move();







//update ruchow i wszytkich czynnowsci entity
function update(){
    for(let hero in heroes){
        heroesOBJ[hero].move();
    }
}








//animation loop

function animate(){
    
    update();
    requestAnimationFrame(animate);
}

animate();
