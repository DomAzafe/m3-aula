function emReais(centavos: number): string {

    return "R$" + (centavos / 100).toFixed(2);
}

console.log(emReais(100));