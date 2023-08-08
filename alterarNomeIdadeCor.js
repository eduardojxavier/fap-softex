
/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

 
Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.*/

var nomes=[];
var idades=[];
var corFavorita=[];

function main(nomes,idades,corFavorita){
    while(true){
        opcaoMenu=parseInt(prompt("\n1-Inserir novo usuário\n2-Imprimir lista de usuários\n3-Editar nome\n4-Editar Idade\n5-Editar cor\nDigite a opção desejada: \n"))
        if(opcaoMenu===1){
            inserirListas(nomes,idades,corFavorita);
        }else if(opcaoMenu===2){
            imprimirListas(nomes,idades,corFavorita)
        }else if(opcaoMenu===3){
            alterarNome(nomes)
        }else if(opcaoMenu===4){
            alterarIdade(nomes,idades)
        }else if(opcaoMenu===5){
            alterarCor(nomes,cor)
        }else{
            console.log("Opção inválida.")
        }
    }
}


function inserirListas(nomes,idades,corFavorita){
    console.log("CADASTRO")
    nome=prompt("Digite o nome: \n").toUpperCase();
    idade=prompt("Digite a idade: \n").toUpperCase();
    cor=prompt("Digite a cor favorita: \n").toUpperCase();
    nomes.push(nome);
    idades.push(idade);
    corFavorita.push(cor);
    console.log(nomes)
       
}
   


function imprimirListas(nomes,idades,corFavorita){
    
    console.log("Lista de nomes:")
    for(i=0;i<nomes.length;i++){
        console.log(i+ "|" +nomes[i])
    }

    console.log("\nLista de idades:")
    for(j=0;j<idades.length;j++){
        console.log(j + "|" +idades[j])
    }

    console.log("\nLista de cores:")
    for(k=0;k<corFavorita.length;k++){
        console.log(k + "|" +corFavorita[k])
    }
    
}

function alterarNome(nomes){
       
    let nome=prompt("Digite o nome que quer alterar: \n").toUpperCase()
    let index=nomes.indexOf(nome)
    
    if(index!=-1){
        novoNome=prompt("Digite o novo nome: \n").toUpperCase()
        nomes[index]=novoNome
        console.log("Alteração feita com sucesso.")
    }else{
        console.log("Nome não encontrado.")
        
    }
    return nomes 
}

function alterarIdade(nomes,idades){
    
    let nome=prompt("Digite o nome de quem quer alterar a idade: \n").toUpperCase()
    let index=nomes.indexOf(nome)
    
    if(index!=-1){
        novaIdade=prompt("Digite a nova idade: \n").toUpperCase()
        idades[index]=novaIdade
        console.log("Alteração feita com sucesso.")
    }else{
        console.log("Nome não encontrado.")
        
    }
    return idades 
}

function alterarCor(nomes,cor){

    let index=nomes.indexOf(nome)    
    
    if(index!=-1){
        novaCor=prompt("Digite a nova cor: \n").toUpperCase()
        corFavorita[index]=novaCor
        console.log("Alteração feita com sucesso.")
    }else{
        console.log("Nome não encontrado.")
        
    }
    return corFavorita 
}
        

main(nomes,idades,corFavorita)