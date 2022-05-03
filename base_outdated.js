import {board,startMap, EndMap, startY, frame} from "./game.js";
// let baseNum=0;
//Klasa Entity, bede po niej dziedziczyc hero i enemy ale nwm czy to potzebne
export default class Base{
    
    constructor(hp, side) { 
        this.hp=hp;
        this.side=side;
        
        this.x=0;
        this.y=0;
        this.width=125;

       
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

    
    update_hp_info(){
        //visual info about hp
        this.docID_hpInfo.innerHTML = `💗: ${this.hp}`;
    }
}


       