function votacao(){
    var numCandidato_X=0;
    var numCandidato_Y=0;
    var numCandidato_Z=0;
    var votoBranco=0;
    var qtdVotos=0
    var numVoto;
    const encerraEleicao=9999;
    
    while(numVoto!=encerraEleicao){
        
        
        console.log("\nATENÇÃO: *****Para encerrar a votação, digite 9999.*****\n");
        numVoto=parseInt(prompt("Digite o número correspondente ao seu candidato:\nCandidato_X=889\nCandidato_Y=847\nCandidato_Z=515\nVoto Branco=0\nSeu voto: \n"));
        
        if(numVoto===encerraEleicao){
            vencedor=Math.max(numCandidato_X,numCandidato_Y,numCandidato_Z,votoBranco);
            relatorioEleicao(vencedor, numCandidato_X,numCandidato_Y,numCandidato_Z,votoBranco,qtdVotos);
        }else if(numVoto===889){
            numCandidato_X=numCandidato_X+1;
            qtdVotos=qtdVotos+1;
        }else if(numVoto===847){
            numCandidato_Y=numCandidato_Y+1;
            qtdVotos=qtdVotos+1;
        }else if(numVoto===515){
            numCandidato_Z=numCandidato_Z+1;
            qtdVotos=qtdVotos+1;
        }else if(numVoto===0){
            votoBranco=votoBranco+1;
            qtdVotos=qtdVotos+1;
        }else{
            console.log("Reinicie a votação.");
            return;
        }
            
    }
}
        

function relatorioEleicao(vencedor, numCandidato_X, numCandidato_Y, numCandidato_Z, votoBranco, qtdVotos){
    console.log("*****Relatório de Urna*****");
    if(numCandidato_X==vencedor){
        console.log("Candidato X venceu a eleição.")
        console.log("Quantidade de votos do Candidato X:" +numCandidato_X);
        console.log("Quantidade de votos do Candidato Y:" +numCandidato_Y);
        console.log("Quantidade de votos do Candidato Z:" +numCandidato_Z);
        console.log("Quantidade de votos em branco: "+votoBranco);
        console.log("Quantidade de votos nesta seção: "+qtdVotos);
    } else if(numCandidato_Y==vencedor){
        console.log("Candidato Y venceu a eleição.")
        console.log("Quantidade de votos do Candidato X:" +numCandidato_X);
        console.log("Quantidade de votos do Candidato Y:" +numCandidato_Y);
        console.log("Quantidade de votos do Candidato Z:" +numCandidato_Z);
        console.log("Quantidade de votos em branco: "+votoBranco);
        console.log("Quantidade de votos nesta seção: "+qtdVotos);
    }else if(numCandidato_Z==vencedor){
        console.log("Candidato Z venceu a eleição.")
        console.log("Quantidade de votos do Candidato X:" +numCandidato_X);
        console.log("Quantidade de votos do Candidato Y:" +numCandidato_Y);
        console.log("Quantidade de votos do Candidato Z:" +numCandidato_Z);
        console.log("Quantidade de votos em branco: "+votoBranco);
        console.log("Quantidade de votos nesta seção: "+qtdVotos);
    }else{
        console.log("Quantidade de votos do Candidato X:" +numCandidato_X);
        console.log("Quantidade de votos do Candidato Y:" +numCandidato_Y);
        console.log("Quantidade de votos do Candidato Z:" +numCandidato_Z);
        console.log("Quantidade de votos em branco: "+votoBranco);
        console.log("Quantidade de votos nesta seção: "+qtdVotos);
        
    }
    
}

votacao()
        
