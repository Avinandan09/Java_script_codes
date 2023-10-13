const places={
    loc: "Kolkata",
    name : "Avinandan",
    statement:function (loc,name) {
        console.log(`${name} is living in ${loc}`);
    }
}
console.log(places);
console.log(places.statement("Mumbai","Jeet"));

const game={
    gameName: "Kolkata",
    player : "Avinandan",
    statement:function () {
        console.log(`${this.gameName} is played by ${this.player}`);
        console.log(this);//This (this) will point to the curret object.
    }
}
game.gameName="Apex Legends";
game.player="Ace";
//*** Interview Related questions ***
console.log(this);//This (this) method is point on an empty object or empty paranthesis {}. Because it is Outside of the any object block
console.log(game.statement());
console.log(game);
// this method in browser will print a window object aj it is in the browser environment and here this is on the node environment
