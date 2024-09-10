var turma = [
    {
        nome: "Marina",
        ra: 123345,
        email: "Marina@gmail.com"
    },
    {
        nome: "Isa",
        ra: 10439161,
        email: "Isa@gmail.com"
    },
    {
        nome: "Amanda",
        ra: 10439162,
        email: "Amanda@gmail.com"
    },
    {
        nome: "Alice",
        ra: 10439163,
        email: "Alice@gmail.com"
    },
    {
        nome: "Zebra",
        ra: 10439165,
        email: "zebra@gmail.com"
    }
]


console.log(turma)

window.onload = function(){     //quando carregar a janela/pagina  === TRABLAHANDO COM SCRIPT NO HEAD QUE ACESSA O DOM 
    var conteudoTAG = document.getElementById("sort") //escrevendo o html com o JS
    for(var i=0; i<turma.length; i++){  //variavel contador/incremento ; até aonde ela vai; de quanto em quanto ele vai aumentar (i = i +1)
        
    conteudoTAG.innerHTML += `<article>
                                <h1>Nome: ${turma[i].nome}</h1> 
                                <h2>RA: ${turma[i].ra}</h2>
                                <p>Email: ${turma[i].email}</p>
                            </article>`   // $ só funciona usando crase 
    }
    conteudoTAG.style.backgroundColor = "#f0f0f0"  //no js, toda a propriedade com hifen do css vem como camelcase 
    conteudoTAG.style.padding = "20px"
} 

const ordenado = turma.sort((a, b) => a.nome.localeCompare(b.nome));  //utilizando o sort dentro da minha lista "turma" para que ele leia a lista e siga as instruções desejadas. Nesse caso, utilizei como parametro a variavel "Nome" da lista "turma". Comparei o a com o b, nome com nome, para que seja colocado em ordem alfabética. Uttiliza-se localeCompare para comparar a propriedade local e fazer um "calculo de comparação". Para buscar outras formas de comparação basta mudar o parametro de a e b, colocando outras variáveis presentes em sua lista. 
console.log(ordenado);


// Definindo um array de números
const numeros = [1, 2, 3, 4, 5];

// Usando o método map() para multiplicar cada número por 2
const numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});

// Exibindo o array resultante no console
console.log(numerosMultiplicados);

// Mostrando o resultado no HTML
document.getElementById('map').innerHTML = `Array original: [${numeros}] <br> Array multiplicado: [${numerosMultiplicados}]`;


const num1234 = [1, 2, 3, 4];
const produto = num1234.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
console.log(produto); // 24

// Mostrando o resultado no HTML
document.getElementById('reduce').innerHTML = `Array original: [${num1234}] <br> Array reduzido a um número (= produto entre os números do array original): [${produto}]`;


