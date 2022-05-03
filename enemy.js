
import Entity from "./entity.js";
import {board,startMap, EndMap, startY} from "./game.js";
import {heroesOBJ, enemiesOBJ} from "./game.js";
import {updateMoney} from "./game.js";

export default class Enemy extends Entity{
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
        this.idNum=enemiesOBJ.length;//któa pozycja w tablicy
        entityDiv.id=`enemy${enemiesOBJ.length}`;//lenght+1
        board.appendChild(entityDiv);
       

        //powiazanie div z obiektem
        this.id=entityDiv.id;
        this.docID = document.querySelector(`#${entityDiv.id}`);
        //docID inaczej obiekt html reprezentujacy w graficzny sposob obiekt js

        //hp visualisation
        this.docID.innerHTML=`<div class="entityHP">💗: </div>`;
        this.docID_hpInfo = document.querySelector(`#${entityDiv.id} .entityHP`);
    

 }


    spawn(){
        this.x=EndMap;
        this.y=startY;
        this.docID.style.bottom=this.y+"px";
        this.docID.style.left=this.x+"px";
        this.docID.style.animation=" spawn 1s";
        this.docID.style.backgroundColor ="rgb(189, 7, 7)";

         //tylko do pokazania
         this.update_hp_info()
    }

    // remove(){
    //     // this.opponent.isFighting=false;
    //     updateMoney(100)
    //     this.docID.remove();
    //     // alert(`ememy nr: ${this.idNum} isFighting ${this.isFighting}`)
    //     // alert(this.idNum)
    //     console.warn("----------------------------------------------------------------")
    //     console.log(enemiesOBJ[this.idNum])
    //     this.x=-1000;
    //     this.y=-1000;
        
    //     // enemiesOBJ[this.idNum]=null;
    //     // enemiesOBJ.splice(this.idNum,1);

    //     console.warn("****************************************************************")
    //     console.log(enemiesOBJ)

        

    // }

}
   
    