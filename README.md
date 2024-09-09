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
  
#### Parâmetros
**funcaoDeComparacao:**
**Recebe dois parâmetros, primeiroElemento e segundoElemento, e deve retornar:** Um valor negativo se o primeiro elemento deve vir antes do segundo.
   * Zero se ambos elementos são iguais em termos de ordenação.
   * Um valor positivo se o primeiro elemento deve vir após o segundo.
     
**Valor de Retorno**
   * O array ordenado. Importante notar que o método sort() modifica o array original e não retorna uma cópia.


### :family: Integrantes do Projeto


| ![Yasmin Mendes](https://avatars.githubusercontent.com/u/178385852?v=4) <br> <sub> Yasmin Mendes </sub> | ![Bruna Zakaib](https://avatars.githubusercontent.com/u/130071892?v=4) <br> <sub> Bruna Zakaib </sub> | ![Isabela Realli](https://avatars.githubusercontent.com/u/180230011?v=4) <br> <sub> Isabela Realli </sub> | ![Beatriz Soares](https://avatars.githubusercontent.com/u/180229545?v=4) <br> <sub> Beatriz Soares </sub> |
| --- | --- | --- | --- |
| [Yasmin Mendes](https://github.com/YasminMSouza) | [Bruna Zakaib](https://github.com/brunazpessoa) | [Isabela Realli](https://github.com/IsabelaReali) | [Beatriz Soares](https://github.com/Beatriz-sol) |

Licença 📝
Esse projeto está autorizado pelo MIT
