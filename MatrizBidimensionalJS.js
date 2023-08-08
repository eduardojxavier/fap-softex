/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.
*/

var animais=[
    ['Gato', 'Patas=4'],
    ['Cachorro', 'Patas=4'],
    ['Cavalo', 'Patas=4'],
    ['Peixe', 'Patas=0'],
    ['Pássaro', 'Patas=2'],
    ]

    
for (let i=0;i<animais.length;i++){
    for(let j=0;j<animais[i].length;j++){
        console.log(animais[i][j])
        //console.log("Patas: "+animais[][]+"\n")
        
    }
}
    
