// let nome: string = "joao";
// let preco: number = 29.90;
// let aberta: boolean = true;

// let precos: number[] = [15.70, 23.40, 3.20];
// let item: string[] = [];

// let exemplo: number = 3;
// let exemplo2: any = 0;

// import { emReais } from "./comanda"; 

// const itens: string[] = [];
// const precos: number[] = [];
// const quantidades: number[] = [];

// function adicionar(
//     item: string,
//     precoCentavos:number,
//     quantidade: number): void{

//         itens.push(item);
//         precos.push(precoCentavos);
//         quantidades.push(quantidade);


// }

// export function emReais(centavos: number): string {

//     return "R$" + (centavos / 100).toFixed(2);
// }

// console.log(emReais(100));

// export default emReais;

import { ItemComanda, Comanda } from "./comanda";
import { Cardapio } from "./cardapio";

const cardapio = new Cardapio("dados/cardapio.json");
console.log(cardapio.itens.length + "Itens no cardapio");
console.log("Recusados: " + cardapio.recusados);

const mesa7 = new Comanda(7)
const pedidos = ["x-burquer", "refrigerante lata", "batata frita"]
for (let i = 0; i < pedidos.length; i++) {
    const item = cardapio.buscar(pedidos[i])
    if (item === undefined) {
        console.log(pedidos[i] + " não está no cardápio")
    } else{
        mesa7.adicionar(new ItemComanda(item.nome, item.preco_centavos, 1))
    }
}

const burguer = new ItemComanda("x-burguer", 1950, 1)
mesa7.adicionar(burguer);
mesa7.adicionar(new ItemComanda("X-salada", 1200, 2))
mesa7.adicionar(new ItemComanda("fritra", 1600, 2))

console.log(mesa7.fechar)

const mesa3 = new Comanda(3);



try {

    mesa7.adicionar(new ItemComanda("suco de manga", 850, 0))


} catch(erro) {

    console.log(`Não entrou ${erro}`)
}



// const suco = new ItemComanda("suco de caju", 750, 1);
console.log(`Chegou aqui`);

//console.log(burguer.subTotal)
//console.log(burguer)
//console.log(burguer.nome)