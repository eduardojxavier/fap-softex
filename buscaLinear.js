array=[15, 8, 10, 25, 12, 30, 5, 20, 18, 7]


/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.
*/
function buscaLinear(numeroBuscado){
    //O -1 indica que o array foi percorrido e não foi encontrado nenhum elemento procurado.
    if(array.indexOf(numeroBuscado)!=-1){
        console.log("Elemento encontrado na posição "+array.indexOf(numeroBuscado))
    }else{
        console.log("Número não encontrado.")
    }

    
}

buscaLinear(20)
buscaLinear(15)
buscaLinear(200)
buscaLinear(7)