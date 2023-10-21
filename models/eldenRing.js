class EldenRingItem {
    constructor(name, image, description , category){
        this.id = this.ramdonId();
        this.name = name;
        this.image = image;
        this.description = description;
        this.category = category;
    }
    ramdonId(){
        return Math.floor(Math.random() * 1000);
    }
}