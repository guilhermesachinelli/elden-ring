export class ListItens {
    constructor() {
        this.itens = [];
    }
    addItem(item) {
        this.itens.push(item);
    }
    removeItem(id) {
        this.itens = this.itens.filter(item => item.id != id);
    }
    getItem() {
        return this.itens;
    }
    getItemById(id) {
        return this.itens.find(item => item.id == id);
    }
    updateItem(id, name, image, description) {
        const item = this.getItemById(id);
        if (item) {
            item.name = name;
            item.image = image;
            item.description = description;
        }
        return item;
    }
}