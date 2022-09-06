
let nomesMasculinos = ['Miguel', 'Arthur','Heitor','Davi','Gabriel','Bernardo','Theo','Samuel','João Miguel','Gael'];
let nomesFemininos = ['Helena','Alice','Laura','Maria Alice','Valentina','Heloísa','Maria Clara','Maria Cecília','Maria Julia','Sophia'];

let nomes = [nomesMasculinos,nomesFemininos];
console.log('Quantidades de nomes: ' + (nomes[0].length + nomes[1].length))
console.log(nomes[0].sort());
console.log(nomes[1].sort());

function sorteio(maximo){
    return Math.floor(Math.random()*(maximo+1))
}

console.log(nomesFemininos[sorteio(nomesFemininos.length)] || nomesMasculinos[sorteio(nomesMasculinos.length)]);

/*------------------------------PARTE 2-------------------------------------------- */



let frutas = ['banana', 'pêra', 'uva', 'melão', 'maçã'];
//array ou vetor, conjunto de dados

let animais = ['gato', 'cachorro', 'pato'];

//toda a indexação (endereçamento) é iniciada em 0

console.log(frutas);
console.log(frutas[2]);//lê-se frutas na casa 2; frutas na LINHA 2

console.log(animais[1]);

let numeros = [ 1, 2, 4, 8, 16, 32];
console.log(numeros[3]);

let diaSemana = [   "domingo",
                    "segunda-feira",
                    "terça-feira",
                    "quarta-feira",
                    "quinta-feira",
                    "sexta-feira",
                    "sábado"];

console.log(diaSemana[0]);

frutas.push("melancia");//push empurra o valor em uma nova casa do array
console.log(frutas);

frutas[5] = "melância";
console.log(frutas);

frutas.pop();//remove a última casa do array
console.log(frutas);

console.log("O meu array de frutas tem: "+frutas.length+" unidades");

console.log(frutas.indexOf('banana'));
console.log(frutas.indexOf('maçã'));
console.log(frutas.indexOf('jabuticaba'));
/*
ao verificar o index de um elemento do array, ele sempre retornará um valor
maior ou igual a zero ao encontrar. Caso não exista, resultado será -1.
*/

let nome = [];//declarando array vazio

console.log(nome.length);

nome.push("Juca Bala");
console.log(nome.length);


let pessoa = ["Ana Bala", 22,"feminino"];
console.log("Nome: "    + pessoa[0]);
console.log("Idade: "   + pessoa[1]);
console.log("Gênero: "  + pessoa[2]);

//=======================Exercício
/**
 * crie um array de veículos. adicione 3 veículos e imprima a quantidade de veículos cadastrados.
 * imprima o primeiro e o último veículos cadastrados
 */

let carros = ["Opala", "Maverick","Impala"];

console.log(carros.length)
console.log(carros[0] + " e " + carros[2]);
document.write(carros[0] + " e " + carros[2]);

console.log(numeros[numeros.length-1]);
/*
sabendo que o a propriedade length retorna o tamanho do array, ou seja,
a quantidade de linhas, e que o index começa em 0, entendemos que a ultima casa de um array seja alcançada por:
array[array.length-1]
Ou array na casa do array.length menos 1
*/

console.log(frutas.sort());
// .sort deixa em ordem crescente
frutas = frutas.sort();
//frutas recebe o array de frutas em ordem crescente;

console.log(frutas[frutas.length-1])
let pessoas = ["Zeca", "Pedro", "Ana","Vivi","Bela"];
let valores = ["78", "04", "09", "02" ,"07", "03" ,"01"]

console.log(pessoas.sort());
console.log(valores.sort());

console.log(Math.random());
 // 0 e 1
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*11))

function sorteio1(maximo){
    return Math.floor(Math.random()*(maximo+1))
}
console.log(sorteio1(10));

function sorteio2(primeiroNumero, ultimoNumero){

    if(primeiroNumero > ultimoNumero){
        let aux = primeiroNumero;
        primeiroNumero = ultimoNumero;
        ultimoNumero = aux;
    }
            
    let quantidade = ultimoNumero - primeiroNumero + 1;
    
    return Math.floor(Math.random()*quantidade)+primeiroNumero;
    
}

console.log(sorteio2(5,70));




