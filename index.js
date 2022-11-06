// Autor: Olival Paulino dos Santos Neto
// github: https://github.com/olivalpaulino/aula-arrays-javascript

// Declarando lista/vetor/array
let nomes = ["Olival", "Marilia", "Pedro", "Camila"];

/* Funções para Remover Elemetos do Array:
pop(): Remove o último elemento do array
shift(): Remote o primeiro elemento do array
delete nomes[2]: Remove o elemento do array da posição informada, mas mantem o espaço desse elemento removido no array, ou seja, o array passa a ter um elemento vazio
splice(index,quantidade_a_ser_removido): remove um ou mais elementos a partir da posição informada (index)
*/

/* Função e Formas de Adicionar Elemetos do Array:
push("elemento a ser adicionado"): Adiciona um elemento ao final do array
array[index] = novo_elemento; adiciona um novo elemento na posição(index) informada
*/

// adicionando elementos ao array
nomes[4] = "Yolanda"
nomes.push("João");
nomes.push("Samyra");
nomes.push("Sofia");
nomes.push("Diana");

console.log(nomes);
console.log(nomes.length);

// removendo elementos com pop()
console.log("O Elemento Removido pela função pop() foi: "+nomes.pop());
console.log("O Array agora está assim: "+nomes);

// removendo elementos com shif()
console.log("O Elemento Removido pela função shift() foi: "+nomes.shift());
console.log("O Array agora está assim: "+nomes);

// removendo elementos com a função delete
console.log("O Elemento a ser removido pela função delete será: "+nomes[1]);
delete nomes[1]; // removendo
console.log("O Array agora está assim: "+nomes);

// removendo elementos com splice
console.log("O Elemento Removido pela função splice() foi: "+nomes.splice(0,3));
console.log("O Array agora está assim: "+nomes);
console.log("Observe que o elemento vazio foi removido >> , , ");


// adicionando mais elementos ao array
nomes.push("Robert");
nomes.push("Wendell");
nomes.push("Gabriella");

// apresentando o tamanho do array com a função length
console.log(nomes.length);
console.log(nomes)