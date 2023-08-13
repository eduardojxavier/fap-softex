function calculadora(){
    var num1;
    var num2;
    var resultado;
    var operacao;
    operacao=parseInt(prompt("1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n\nDigite a opção:\n"))
    num1=parseInt(prompt("Digite o primeiro número: \n"))
    num2=parseInt(prompt("Digite o segundo número: \n"))
    
    while(operacao){
            
        if(operacao==1){
            resultado=num1+num2
            console.log("O resultado da operação é: "+resultado)
            }    
        else if(operacao==2){
            resultado=num1-num2
            console.log("O resultado da operação é: "+resultado)
            } 
        else if(operacao==3){
            resultado=num1*num2
            console.log("O resultado da operação é: "+resultado)
            } 
        else if(operacao==4){
            resultado=num1/num2
            console.log("O resultado da operação é: "+resultado)
            } 
        else{
            console.log("Opção inválida")
            }
        var pergunta=prompt("Deseja sair? Sim/Nao\n").toUpperCase();
        if(pergunta=="SIM"){
            console.log("Você saiu.")
            return;
        }else{
            calculadora()
        }
    
    }
}


calculadora()