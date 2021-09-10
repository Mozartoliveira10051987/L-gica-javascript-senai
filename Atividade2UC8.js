// Aula 01

// Comentário de uma linha 

/*
Comentario 
comentario
comentario
*/

/* 3 tippos de variáveis
var >>>>>> pode alterar em qualquer parte do programa
const >>>> não pode ser alterado com outra const
let >>>>>> só existe dentro de uma parte do programa como por exemplo dentro de uma função
})
*/


/*
var anoNascimento =1999
const dataAtual =2021
if(dataAtual-anoNascimento>= 18){
    console.log("A data é válida!")

}
console.log("Fim")

//2021-18=2003
const dataValida = 2003

if(anoNascimento < dataValida)

*/

/*
console.log("Cadastro de animais do petshop")
const animais = ["cachorro","gato","coelho","peixe","pardal","cobra","vaca"]
*/

//console.log(animais) // < mostra todo conteudo do vetor
//console.log(animais[3]) // < mostra conteudo na posição 3 
//console.log(animais.length) // < mostra o tamanho do vetor (quantos tem dentro)

let pesoPeca = 1000

if (pesoPeca >= 100){
    console.log("Pode cadastrar ")
}else{
    console.log("o peso é menor que 100 gramas e por isso não pode ser cadastrado")
    }

// ____________________________________________________________________________________-

var quantidadePecas = 70
;

if (quantidadePecas <10){
    console.log("quantidade máxima é 10, sua quantidade foi: " + quantidadePecas + " então o cadastro foi feito!");
}else{
    console.log("Capacidade insuficiente")
}


//______________________________________________________________________________________________________
  

var pecas = ["parafuso", "fio", "br"]

for (let i = 0; i < pecas.length; i++){
    console.log(" peça "  + [i] +  "  é  " + pecas[i])
    
    var textoVetor = pecas[i]

    if (textoVetor.length <3){
        console.log(pecas[i] + ": nome invalido, a peça precisa ter no mínimo 3 caracteres")
    }else{
        console.log(pecas[i] + "  cadastrado")
    }
}
