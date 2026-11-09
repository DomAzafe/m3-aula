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

const mesa7 = new Comanda(7);
const burguer = new ItemComanda("hamburguer", 25.50, 1);
mesa7.adicionar(burguer);


console.log(burguer.subTotal())
console.log(burguer)
console.log(mesa7)
console.log(mesa7.fechar())

