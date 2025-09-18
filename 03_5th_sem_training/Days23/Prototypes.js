

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Prayag = function () {
    console.log(`Prayag is present in all objects`);
}

Array.prototype.heyPrayag = function () {
    console.log(`Prayag says hello`);
}

heroPower.Prayag()
myHeros.Prayag()
myHeros.heyPrayag()

