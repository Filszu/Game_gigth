
import Entity from "./entity.js";
import {board,startMap, EndMap, startY} from "./game.js";
import {heroesOBJ, enemiesOBJ} from "./game.js";

export default class Hero extends Entity{
    constructor(name, hp, attack, defense, lvl, speed, vAttack){
        super(name, hp, attack, defense, lvl, speed, vAttack);

         this.createDiv();
         this.spawn();
         this.move();
        

    }

    createDiv(){
        //dodanie div reprezentujacego entity (do documentu)
        var entityDiv = document.createElement('div');
        entityDiv.className = "player";
        this.idNum=heroesOBJ.length;//któa pozycja w tablicy
        entityDiv.id=`hero${heroesOBJ.length}`;//length+1
        board.appendChild(entityDiv);
       

        //powiazanie div z obiektem
        this.id=entityDiv.id;
        this.docID = document.querySelector(`#${entityDiv.id}`);
        
        //docID inaczej obiekt html reprezentujacy w graficzny sposob obiekt js
        // this.docID_info = document.querySelector(`#${entityDiv.id}::after`);
        // console.log(this.docID_info)


        //hp visualisation
        this.docID.innerHTML=`<div class="entityHP">💗: </div>`;
        this.docID_hpInfo = document.querySelector(`#${entityDiv.id} .entityHP`);
    
       
        


    }

    spawn(){
        this.x=startMap;
        this.y=startY;
        // playerDiv.style.backgroundColor ="black";
        this.docID.style.bottom=this.y+"px";
        this.docID.style.left=this.x+"px";
        this.docID.style.animation=" spawn 1s";

        //tylko do pokazania
        this.update_hp_info()
    }


    

    // remove(){
    //     // this.docID.remove();
    //     // alert(`hero nr: ${this.idNum} `)
    //     // // heroesOBJ.splice(this.idNum,1);

    //      // this.opponent.isFighting=false;
        
 

    // }

  
    

   
    
}