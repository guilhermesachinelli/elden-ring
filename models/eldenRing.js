export class Item {
    constructor(id, name, image, description) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
    }
    ramdonId() {
        return Math.floor(Math.random() * 1000000);
    }
}
export class Person {
    constructor(id, name, image, description, stats) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.level = stats.level;
        this.endurance = stats.endurance;
        this.vigor = stats.vigor;
        this.mind = stats.mind;
        this.strength = stats.strength;
    }
}
/*      
this.level = stats.level;
this.endurance = stats.endurance;
this.vigor = stats.vigor;
this.mind = stats.mind;
this.strength = stats.strength;
*/ 