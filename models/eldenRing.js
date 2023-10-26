export class Item {
    constructor(id, name, image, description , category){
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.category = category;
    }
    ramdonId(){
        return Math.floor(Math.random() * 1000000);
    }
}