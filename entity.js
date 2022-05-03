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
        this.vAttack = vAttack;//predkosc ataku (opoznienie miedzy ciosami)

        this.isFighting = false;
        this.isAlive=true;
        this.x=0;
        this.y=0;
        this.width=125;
        this.opponent;
        

      

         //od razu wywolanie przy tworzeniu
        //  this.createDiv();
        //  this.spawn();
        //  this.move();


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
        this.checkHP(opponent)
        
        if(this.isFighting==true){
            
            if(frame%(10*this.vAttack)==0){//czas zadawania ciosów
                // if(opponent.isAlive==true){            
                    console.log(opponent);
                    console.log(opponent.hp);
                    opponent.hp-=this.attack;
                   
                
            }
        }
        else{
            // console.log("i po co walczysz?")
        }

        
        
    }
    checkHP(opponent){
        
        if(this.isAlive==true){
             if(this.hp<=0){
                 opponent.isFighting=false;
            // alert("dead");
            console.log(this.name+" is dead")
            this.isFighting=false;
            this.isAlive=false;
            this.remove();
            
            
           
        }
        this.update_hp_info()
        }
       
    }

    checkOpponetHP(opponent){
        
        if(opponent.isAlive==true){
            if(!(opponent.hp>=0)){
                // alert("opponet hp =0")
                this.isFighting=false;
                opponent.isFighting=false;
            }
        }
        else{
            this.isFighting=false;
            opponent.isFighting=false;
        }

        // // test
        // if(this.hp<=0){
        //     opponent.isFighting=fale;
        // }
       
    }
    

    remove(){
        this.docID.remove();
        
    }

    fight(opponent){
        // this.opponent=opponent;
        // this.checkOpponetHP(opponent)

        if(opponent.hp>0&&opponent.isAlive==true){
            // alert(`przciwnik żyje ${opponent.hp}, Alive: ${opponent.isAlive}`);

            this.isFighting=true;      
            // this.checkHP();
            this.hit(opponent);
        }
        else{
            // alert(`przciwnik ${opponent.name} nie żyje ${opponent.hp}, Alive: ${opponent.isAlive}`);
            this.isFighting=false;
            opponent.isFighting=false;
        }
        
        

    }

    update_hp_info(){
        //visual info about hp
        this.docID_hpInfo.innerHTML = `💗: ${this.hp}`;
    }



}

