import {board,startMap, EndMap, startY} from "./game.js";
export let heroesOBJ = [] //tablica obiektow
export let enemiesOBJ = [] //tablica obiektow
//Klasa Entity, bede po niej dziedziczyc hero i enemy ale nwm czy to potzebne
export default class Entity{

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

      

         //od razu wywolanie przy tworzeniu
         this.createDiv();
         this.spawn();
         this.move();


    }

    createDiv(){
        //    //dodanie div reprezentujacego entity (do documentu)
        //    var entityDiv = document.createElement('div');
        //    entityDiv.className = "player";
        //    entityDiv.id=`entity${heroesOBJ.length+1}`;
        //    board.appendChild(entityDiv);
          
  
        //    //powiazanie div z obiektem
        //    this.id=entityDiv.id;
        //    this.docID = document.querySelector(`#${entityDiv.id}`);
        //    //docID inaczej obiekt html reprezentujacy w graficzny sposob obiekt js
  
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
        

        //jeżeli nie poza mapa?
        if((this.x<=EndMap && this.x>=startMap)){
            this.setX(this.speed);
        }
        // console.log(this.x);
    }

}


