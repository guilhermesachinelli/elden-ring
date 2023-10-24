export class ListItens {
    constructor(){
        this.itens = [];
    }

    demonMethod(lista){
        this.itens = this.itens.concat(lista);
        console.log("Antes de remover duplicados:");
        console.log(this.itens);
        this.removeDuplicateItens();
        console.log("Depois de remover duplicados:");
        console.log(this.itens);
    }

    // Remove duplicate id itens
    removeDuplicateItens(){
        this.itens = this.itens.filter((item, index, self) => self.findIndex(t => t.id === item.id) === index);
    }

    addItem(item){
        this.itens.push(item);
    }
    // show all itens
    showItens(){
        return this.itens;
    }
}