
import Entity from "./entity.js";
import {board,startMap, EndMap, startY} from "./game.js";

export default class Hero extends Entity{
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