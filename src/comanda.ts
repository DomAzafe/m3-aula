let mesa:number = 7;
let item:string = "x-burger";
let aberta:boolean = true;
const precos: number[] = [18.90, 12.00]

function subtotal(preco: number, qtd: number): number {

    return preco * qtd;
}



export class ItemComanda {
    nome: string; //propriedade
    precoCentavos: number;
    quantidade: number;

    constructor(nome: string, precoCentavos: number, quantidade: number){ //parâmetros
        this.nome = nome;
        this.precoCentavos = precoCentavos; //case sensitive ( sensível a caixa )
        this.quantidade = quantidade;
    }

    subTotal(): number{
        return this.precoCentavos * this.quantidade
    }
}

export class Comanda {
    mesa: number;
    itens: ItemComanda[] = [];
    aberta: boolean = true;

    constructor(mesa: number){
        this.mesa = mesa;
    }

    adicionar(item: ItemComanda): void{
        if(this.aberta === true){
            this.itens.push(item)
        }
    }

    total(): number {
        let soma = 0;
        for (let item = 0; item < this.itens.length; item++) {
            soma = soma + this.itens[item].subTotal()
            
        }

        return soma;
    }

    fechar(): string {
        this.aberta = false;
        return "Mesa" + this.mesa + " R$ " + this.total * 100.toFixed(2)

    }
}