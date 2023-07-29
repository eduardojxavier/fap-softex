var executar=true;
var nome;
var anoNascimento;
var idade;

nome=prompt("Digite seu nome: \n");

while(executar){
    
    try{
        anoNascimento=parseInt(prompt("Digite o ano do seu nascimento: \n"))
        if(anoNascimento > 1922 && anoNascimento < 2021){
            idade=2022-anoNascimento;
            console.log("Você tem "+idade+" anos.");
            executar=false;
            
        }else{
            throw new Error("Revise o ano de nascimento.");
        }
        }catch(error){
        console.log("Ocorreu um erro: " +error.message);
    } 
}
