import {board,startMap, EndMap, startY, frame} from "./game.js";
import Entity from "./entity.js";
import {heroesOBJ, enemiesOBJ} from "./game.js";
export default class Base extends Entity{
    
    constructor(name, hp, attack, defense, lvl, speed, vAttack,side) { 
        super(name, hp, attack, defense, lvl, speed, vAttack)
        this.hp=hp;
        this.side=side;
        
        this.x=0;
        this.y=0;
        this.width=125;


        this.name = name;
        this.attack = attack;
        this.defense =defense;
        this.lvl = lvl;
        this.speed = speed;
        this.vAttack = vAttack;//predkosc ataku (opoznienie miedzy ciosami)

        this.isFighting = false;
        this.isAlive=true;
     
        this.opponent;

       
        this.createDiv();
        this.spawn();
        
    }
    createDiv(){
        //dodanie div reprezentujacego entity (do documentu)
        var entityDiv = document.createElement('div');
        entityDiv.className = "base";

        board.appendChild(entityDiv);

        this.y=startY;

        if(this.side=="player"){
            this.docID=document.querySelectorAll(`.base`)[0];
            this.x=startMap-100;
            entityDiv.id="playerBase";
        }
        else if(this.side=="enemy"){
            this.docID=document.querySelectorAll(`.base`)[1];
            this.x=EndMap;
            entityDiv.id="enemyBase"
        }
        else{
            console.error("error---cannot create a base")
        }

        this.docID.innerHTML=`<div class="entityHP">💗: </div>`;
        this.docID_hpInfo = document.querySelector(`#${entityDiv.id} .entityHP`);


    }

    spawn(){
        
        
        // playerDiv.style.backgroundColor ="black";
        this.docID.style.bottom=this.y+"px";
        this.docID.style.left=this.x+"px";
        this.docID.style.animation=" spawn 1s";
        
        this.update_hp_info()

    }

    
    // update_hp_info(){
    //     //visual info about hp
    //     this.docID_hpInfo.innerHTML = `💗: ${this.hp}`;
    // }

    remove(){
        this.docID.remove();
        // heroesOBJ.splice(this.idNum,1);
        if(this.side=="player"){
            alert("enemy won")
            heroesOBJ.splice(0,1);
        }
        else{
            alert("player won")
            enemiesOBJ.splice(0,1);
        }

    }
}


       