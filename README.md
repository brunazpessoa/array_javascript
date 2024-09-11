# Array

<p align="center"> Tópicos</p>
<p align="center">
 <a>Arrays no JavaScript</a> •
 <a>Sort</a> • 
 <a>Map</a> •
 <a>Reduce</a> •
 <a>Filter</a> •
 <a>Spread</a> • 
 <a>Integrantes do Projeto</a> 
</p>

:white_check_mark: FINALIZADO

## 🚀 Começando

Arrays são uma estrutura fundamental em JavaScript que permite armazenar múltiplos valores em uma única variável. Eles são incrivelmente úteis quando você precisa trabalhar com coleções de dados relacionados.

Imagine que você tem uma lista de itens, como números, strings ou até mesmo outros arrays. Em vez de criar variáveis separadas para cada item, você pode agrupá-los em um único array. Isso facilita a manipulação e o acesso aos dados.

Código exemplo de Array: 
```
let myArray = [1, 'Bob', 'Steve', 10];
```

Neste exemplo, **myArray** é um array que contém quatro elementos:

1. O número **1**
2. A string **'Bob'**
3. A string **'Steve'**
4. O número **10**

Você pode acessar cada elemento do array usando um índice, que começa em **0**. Por exemplo:

* **myArray[0]** acessa o primeiro elemento, que é **1**.
* **myArray[1]** acessa o segundo elemento, que é **'Bob'**.

Arrays também permitem que você faça operações como adicionar, remover ou modificar elementos, e iterar sobre eles com facilidade.

Os arrays são uma parte essencial da programação em JavaScript, oferecendo flexibilidade e eficiência na manipulação de listas de dados.

### Método Array.prototype.sort()
O método sort() é uma ferramenta poderosa em JavaScript para ordenar os elementos de um array. Ele organiza os elementos de acordo com a pontuação de código Unicode por padrão, mas pode ser customizado com uma função de comparação para atender a necessidades específicas de ordenação.

Código
```
arr.sort([funcaoDeComparacao])
```

* **arr**: O array a ser ordenado.
* **funcaoDeComparacao:** Uma função que define a ordem dos elementos. Se omitida, a ordenação será feita com base na conversão dos elementos para strings e a comparação de suas pontuações Unicode.
  
### Parâmetros
**funcaoDeComparacao:**
**Recebe dois parâmetros, primeiroElemento e segundoElemento, e deve retornar:** Um valor negativo se o primeiro elemento deve vir antes do segundo.
   * Zero se ambos elementos são iguais em termos de ordenação.
   * Um valor positivo se o primeiro elemento deve vir após o segundo.
     
**Valor de Retorno**
   * O array ordenado. Importante notar que o método sort() modifica o array original e não retorna uma cópia.

Descrição
**Ordenação Padrão** Se você não passar uma função de comparação, sort() ordena os elementos como strings com base na pontuação de código Unicode. Isso pode levar a resultados inesperados ao ordenar números, já que eles são convertidos em strings.
```
var frutas = ["laranja", "maçã", "banana", "uva"];
frutas.sort();
console.log(frutas); // ['banana', 'laranja', 'maçã', 'uva']
```
```
var numeros = [40, 5, 100, 25];
numeros.sort();
console.log(numeros); // [100, 25, 40, 5]
// "100" vem antes de "25", que vem antes de "40" e "5" em ordem Unicode.
```

**Função de Comparação** Para uma ordenação mais precisa, você pode fornecer uma função de comparação. Por exemplo, para ordenar números em ordem crescente:
```
function compararNumeros(a, b) {
  return a - b;
}

var numeros = [40, 5, 100, 25];
numeros.sort(compararNumeros);
console.log(numeros); // [5, 25, 40, 100]
```

**Para ordenar objetos por uma de suas propriedades, a função de comparação pode ser adaptada:**
```
var pessoas = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 30 },
  { nome: "Bruna", idade: 25 },
  { nome: "Daniel", idade: 28 }
];

pessoas.sort(function(a, b) {
  return a.idade - b.idade;
});

console.log(pessoas);
// [
```

**Ordenação de Strings com Maiúsculas e Minúsculas** - exemplo de como a ordenação padrão lida com letras maiúsculas e minúsculas:
```
var palavras = ["abacaxi", "Banana", "maçã", "Cabelos"];

palavras.sort();
console.log(palavras); // ['Banana', 'Cabelos', 'abacaxi', 'maçã']
// letras maiúsculas vêm antes das minúsculas.
```
```
var palavras = ["abacaxi", "Banana", "maçã", "Cabelos"];

palavras.sort();
console.log(palavras); // ['Banana', 'Cabelos', 'abacaxi', 'maçã']
// Em Unicode, letras maiúsculas vêm antes das minúsculas.
```
#### Considerações Adicionais
* **Estabilidade da Ordenação:** A especificação ECMAScript não garante que a ordenação seja estável (ou seja, que elementos com a mesma prioridade de ordenação mantenham sua ordem original). A maioria dos navegadores modernos garante a estabilidade da ordenação, mas é algo a se considerar em implementações específicas.
* **Complexidade e Desempenho:** A complexidade do algoritmo de ordenação utilizado pode variar entre diferentes ambientes e implementações. Não há garantias sobre o tempo de execução ou o uso de memória, embora muitos navegadores usem algoritmos de ordenação eficientes como o Timsort.

### Método Array.prototype.map()
O método map() é uma ferramenta essencial em JavaScript para transformar arrays. Ele cria um novo array com os resultados da execução de uma função callback para cada elemento do array original.

Código:
```
arr.map(callback[, thisArg])
```
* **arr**: O array a ser transformado.
**callback**: Função que será chamada para cada elemento do array. Recebe três argumentos:
**valorAtual:** O valor do elemento atual do array.
**indice (opcional):** O índice do elemento atual no array.
**array (opcional):** O array original que está sendo percorrido.
* **thisArg (opcional):** Valor a ser utilizado como this ao executar a função callback.
  
#### **Descrição**
O método map() invoca a função callback passada como argumento para cada elemento do array original, criando um novo array com os resultados. A função callback é chamada apenas para os elementos com valores atribuídos. Elementos que são undefined, removidos ou nunca foram atribuídos não são processados.

Se o parâmetro thisArg for passado, ele será usado como o valor de this ao invocar a função callback. Caso contrário, o valor undefined será usado como this.
O método map() não modifica o array original, embora a função callback possa fazê-lo.

### Exemplos:
**Mapeamento Simples de Valores**
Este exemplo é fundamental porque ilustra o uso básico do map() para transformar os valores de um array. É o uso mais comum e direto do método:
```
var numeros = [1, 4, 9];
var dobrados = numeros.map(function(num) {
  return num * 2;
});
// dobrados é [2, 8, 18], numeros ainda é [1, 4, 9]
```
**Importância:**

* Transformação de Dados: Mapeia cada elemento de um array para um novo valor, o que é uma operação comum em muitas aplicações.
* Imutabilidade: O método map() não modifica o array original, o que ajuda a manter a integridade dos dados.

**Mapeamento de Objetos**
Este exemplo mostra como usar map() para extrair informações de objetos dentro de um array, o que é uma tarefa muito comum em manipulação de dados:
```
var itens = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 40 }
];

var nomes = itens.map(function(item) {
  return item.nome;
});
// nomes é ["João", "Maria", "Pedro"]
```
**Importância:**
* Extração de Propriedades: Extraímos informações úteis de objetos complexos.
* Aplicações em Dados: Frequentemente usado em aplicações que lidam com dados estruturados.

**Uso com Funções Nativas**
O exemplo que usa map() com uma função nativa como Math.sqrt demonstra como integrar funções de biblioteca com map() para transformar dados:
```
var numeros = [1, 4, 9];
var raízes = numeros.map(Math.sqrt);
// raízes é [1, 2, 3], numeros ainda é [1, 4, 9]
```

**Importância:**
* Simplicidade e Clareza: Mostra como usar funções nativas para operações comuns de transformação.
* Reusabilidade: Funciona bem com funções que já estão disponíveis no JavaScript.

**Uso com querySelectorAll**
Este exemplo mostra como usar map() para processar resultados de seletores de DOM, um padrão comum em manipulação de elementos da interface do usuário:
```
var elems = document.querySelectorAll("select option:checked");
var valores = [].map.call(elems, function(obj) {
  return obj.value;
});
```

**Importância:**
* Integração com o DOM: Facilita a extração e processamento de dados a partir do DOM.
* Operações em Coleções: Útil para trabalhar com coleções de elementos DOM retornados por seletores.

###  Método reduce()
O método reduce() do JavaScript é uma ferramenta poderosa e versátil para transformar arrays em um único valor. Vamos resumir suas principais características e alguns exemplos importantes de seu uso.

**Características do reduce()**
Código sintaxe: 
```
array.reduce(callback[, valorInicial])
```

**Parâmetros do callback:**
* **acumulador:** O valor acumulado até o momento.
* **valorAtual:** O valor atual do elemento sendo processado.
- **index:** O índice do elemento atual (opcional).
- **array:** O array sobre o qual reduce() foi chamado (opcional).
**valorInicial (opcional):** Se fornecido, o acumulador inicia com este valor. Caso contrário, inicia com o primeiro elemento do array.
  
**Exemplos**
**1.Encontrar o Produto de Todos os Valores em um Array.**
Se você quiser calcular o produto de todos os números em um array, você pode usar reduce() da seguinte maneira:
```
const numeros = [1, 2, 3, 4];
const produto = numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
console.log(produto); // 24
```

**2. Transformar uma Array de Strings em um Objeto com Contagem de Caracteres**
Vamos converter uma array de strings em um objeto onde as chaves são as strings e os valores são a contagem de caracteres de cada string:
```
const strings = ['apple', 'banana', 'cherry'];
const contagemCaracteres = strings.reduce((objeto, str) => {
  objeto[str] = str.length;
  return objeto;
}, {});
console.log(contagemCaracteres); // { apple: 5, banana: 6, cherry: 6 }
```

**3. Reverter a Ordem dos Elementos em um Array**
Usando reduce() para inverter a ordem dos elementos em um array:
```
const original = [1, 2, 3, 4, 5];
const reverso = original.reduce((acumulador, valorAtual) => [valorAtual, ...acumulador], []);
console.log(reverso); // [5, 4, 3, 2, 1]
```
**4. Simular um Loop de for**
Utilizando reduce() para simular um loop for:
```
const resultados = [1, 2, 3, 4, 5];
const soma = resultados.reduce((acumulador, valorAtual) => {
  console.log(`Processando ${valorAtual}`);
  return acumulador + valorAtual;
}, 0);
console.log(soma); // 15
```

O reduce() é extremamente flexível e pode ser usado para muitas operações em arrays, desde simples somas até operações mais complexas como a manipulação de promessas e a remoção de duplicatas. A capacidade de realizar essas operações em uma única passagem pelo array torna o reduce() uma ferramenta valiosa para otimização de código e manipulação de dados.

### Método filter

**Descrição:** O método filter() cria um novo array contendo todos os elementos que atendem a um critério definido por uma função callback fornecida.

**Código:**
```
var newArray = arr.filter(callback[, thisArg])
```

**Parâmetros:**

- **callback:** Função que testa cada elemento do array. Recebe três argumentos:
- **element:** O elemento atual sendo processado no array.
- **index:** O índice do elemento atual no array.
- **array:** O array sobre o qual o filter() foi chamado.
- **thisArg (Opcional):** Valor a ser usado como this quando a função callback é chamada.
- **Valor de Retorno:** Um novo array com todos os elementos que passaram no teste definido pelo callback.

**Descrição detalhada:**
- filter() chama a função callback para cada elemento do array e inclui no novo array apenas aqueles para os quais o callback retorna true.
- O método não altera o array original.
- Elementos adicionados ao array após o início do filter() não são considerados.
- Elementos removidos ou alterados após o início do filter() não afetam o resultado

#### Exemplos:
**Filtrando valores menores que 10:**
```
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered é [12, 130, 44]
```

**Filtrando entradas inválidas para JSON:**
```
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

var invalidEntries = 0;

function filterByID(obj) {
  if ("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 4

```

**Procurando em um array:**
```
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

**Polyfill:** Para garantir compatibilidade com versões mais antigas do JavaScript que não suportam filter(), você pode usar o seguinte código para adicionar o método filter() ao prototype de Array:

```
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisArg*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}

```

### Conceito de Espalhamento (spread)

A sintaxe de espalhamento permite expandir elementos de um iterável (como arrays e strings) ou propriedades de objetos em um novo contexto. Isso facilita operações como criar cópias, concatenar arrays e objetos, e passar argumentos para funções.

**1. Espalhamento em Chamadas de Funções**
Objetivo: Passar elementos de um array como argumentos para uma função.

**Exemplo:**
```
function myFunction(x, y, z) {
  console.log(x, y, z);
}

var args = [0, 1, 2];
myFunction(...args); // Saída: 0 1 2

```
**Explicação:** myFunction(...args) expande o array args em argumentos individuais (0, 1, 2), que são passados para myFunction.

**2. Espalhamento em Arrays Literais**
Objetivo: Criar um novo array combinando elementos de arrays existentes.

**Exemplo:**
```
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
console.log(lyrics); // Saída: ["head", "shoulders", "knees", "and", "toes"]
```
- [...parts] expande o array parts dentro do novo array lyrics, criando uma nova lista com todos os elementos.

**3. Espalhamento em Objetos Literais**
Objetivo: Copiar ou mesclar propriedades de objetos.

**Exemplo de Cópia de Objeto:**
```
var obj1 = { foo: "bar", x: 42 };
var clonedObj = { ...obj1 };
console.log(clonedObj); // Saída: { foo: "bar", x: 42 }
```
- Explicação: { ...obj1 } cria um novo objeto que é uma cópia rasa de obj1.

**Exemplo de Mesclagem de Objetos:**
```
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Saída: { foo: "baz", x: 42, y: 13 }
```
Explicação: { ...obj1, ...obj2 } combina obj1 e obj2. Se houver propriedades com o mesmo nome, as propriedades de obj2 sobrescrevem as de obj1.

- Esses exemplos mostram como a sintaxe de espalhamento pode simplificar operações comuns em JavaScript, como manipulação de arrays e objetos. A sintaxe de espalhamento melhora a legibilidade e reduz a complexidade do código.

### :family: Integrantes do Projeto

| ![Yasmin Mendes](https://avatars.githubusercontent.com/u/178385852?v=4) <br> <sub> Yasmin Mendes </sub> | ![Bruna Zakaib](https://avatars.githubusercontent.com/u/130071892?v=4) <br> <sub> Bruna Zakaib </sub> | ![Isabela Realli](https://avatars.githubusercontent.com/u/180230011?v=4) <br> <sub> Isabela Realli </sub> | ![Beatriz Soares](https://avatars.githubusercontent.com/u/180229545?v=4) <br> <sub> Beatriz Soares </sub> |
| --- | --- | --- | --- |
| [Yasmin Mendes](https://github.com/YasminMSouza) | [Bruna Zakaib](https://github.com/brunazpessoa) | [Isabela Realli](https://github.com/IsabelaReali) | [Beatriz Soares](https://github.com/Beatriz-sol) |

Licença 📝
Esse projeto está autorizado pelo MIT
