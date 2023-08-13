function soma(numero1,numero2){
    resultado=numero1+numero2;
    console.log("Resultado: "+resultado)
}

function subtracao(numero1,numero2){
    resultado=numero1-numero2;
    console.log("Resultado: "+resultado)
}

function multiplicacao(numero1,numero2){
    resultado=numero1*numero2;
    console.log("Resultado: "+resultado)
}

function divisao(numero1,numero2){
    resultado=numero1/numero2;
    console.log("Resultado: "+resultado)
    
}



    function calculadora(){
        var opcao;
        var numero1;
        var numero2;
        var resultado;
        
        console.log("CALCULADORA");
        console.log("1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n");
        opcao=parseInt(prompt("Digite a opção: \n"));
        
        
        if (opcao==1){
            console.log("\nSOMA\n");
            numero1=parseInt(prompt("Digite o primeiro número: "));
            numero2=parseInt(prompt("Digite o segundo número: "));
            soma(numero1,numero2);
            
            
        }
        
        if (opcao==2){
            console.log("\nSUBTRAÇÃO\n");
            numero1=parseInt(prompt("Digite o primeiro número: "));
            numero2=parseInt(prompt("Digite o segundo número: "));
            subtracao(numero1,numero2);
            
            
        }
        
        if (opcao==3){
            console.log("\nMULTIPLICAÇÃO\n");
            numero1=parseInt(prompt("Digite o primeiro número: "));
            numero2=parseInt(prompt("Digite o segundo número: "));
            multiplicacao(numero1,numero2);
            
        }
        
        if (opcao==4){
            console.log("\nDIVISÃO\n")
            numero1=parseInt(prompt("Digite o primeiro número: "));
            numero2=parseInt(prompt("Digite o segundo número: "));
            divisao(numero1,numero2);
            
        }
        
        
    }

calculadora()
