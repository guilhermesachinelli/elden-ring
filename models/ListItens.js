export class ListItens {
    constructor() {
        this.itens = [];
    }

    // Crie um metodo que retorna apenas os 4 primeiros itens do array
    getFirstItens() {
        return this.itens.slice(0, 4);
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