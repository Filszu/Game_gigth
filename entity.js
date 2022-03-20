import {board,startMap, EndMap, startY, frame, heroesOBJ, enemiesOBJ} from "./game.js";

//Klasa Entity, bede po niej dziedziczyc hero i enemy ale nwm czy to potzebne
export default class Entity{

    constructor(name, hp, attack, defense, lvl, speed, vAttack) { 

       
        //mozna pozniej zmienic dodajc klay pochodne postaci, np peichur / mechanik
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense =defense;
        this.lvl = lvl;
        this.speed = speed;
        this.vAttack = vAttack;//predkosc ataku

        this.isFighting = false;
        this.x=0;
        this.y=0;
        this.width=125;

      

         //od razu wywolanie przy tworzeniu
         this.createDiv();
         this.spawn();
         this.move();


    }

    createDiv(){
        //przeniesione do dziecka
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
              //przeniesione do dziecka   
       
    }

    show(){
        //przeniesione do dziecka
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
        if((this.isFighting==false &&
            this.x<=EndMap && this.x>=startMap)){
            this.setX(this.speed);
        }
        
        // console.log(this.x);
    }
    hit(opponent){

        this.checkOpponetHP(opponent);
        this.checkHP()
        
        if(this.isFighting==true){
            
            if(frame%10==0){//czas zadawania ciosów

                console.log(opponent);
                console.log(opponent.hp);
                opponent.hp-=this.attack;
            }
        }
        else{
            console.log("i po co walczysz?")
        }

        
        
    }
    checkHP(){
        
        if(this.hp<=0){
            // alert("dead");
            console.log(this.name+" is dead")
            this.remove();
            this.isFighting=false;
        }
    }

    checkOpponetHP(opponent){
        
        if(opponent.hp<=0){
            // alert("opponet hp =0")
            this.isFighting=false;
        }
    }
    

    remove(){

    }

    fight(opponent){

        this.isFighting=true;      
        // this.checkHP();
        this.hit(opponent);
        

    }



}

