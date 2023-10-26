export class ListItens {
    constructor(){
        this.itens = [];
    }
    addItem(item){
        this.itens.push(item);
    }
    removeItem(id){
        this.itens = this.itens.filter(item => item.id != id);
    }
    getItem(){
        return this.itens;
    }
}