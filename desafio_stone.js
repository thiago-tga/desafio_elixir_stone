/*
- Para iniciar o programa crie uma lista de compras e uma lista de emails para serem adicionados a função
- inicie o terminal e digite node desafio_stone.js para rodar o programa
*/

var listaCompras = // uma lista de objetos (itens)
[
    {
        "item":"Arroz (kg)",
        "qnt":3,
        "preco": 490
    },
    {
        "item":"Leite (L)",
        "qnt":6 ,
        "preco": 355
    }
];
var listaEmails = 
[
    "email.teste0@stone.com",
    "email.teste1@stone.com",
    "email.teste2@stone.com",
    "email.teste3@stone.com",
    "email.teste4@stone.com",
    "email.teste5@stone.com",
    "email.teste6@stone.com"
];

function calculaeDivide(listaCompras,listaEmails)
{
    let totalLista = 0;
    let qntEmails = listaEmails.length;
    let qntItens = listaCompras.length;
    let mapa = new Map(); 

    if(qntEmails == 0 || qntItens == 0) // Caso a lista de compras ou lista de e-mails esteja vazia, retorna uma mensagem
    {
        return "Sua lista de compras ou sua lista de e-mails está vazia, preencha corretamente! "
    }
    else
    {
        for(i=0;i<qntItens;i++) //caso ambas estejam preenchidas calcule o valor total do item e adicione ao valor total da lista
        { 
            let vlrTotalItem = listaCompras[i].qnt * listaCompras[i].preco 
            totalLista+=vlrTotalItem 
        }
        // tratamos o valor total da lista para que o resto fique separado sempre para o ultimo email
        let resto = totalLista % qntEmails; 

        let vlrTotalInt = totalLista - resto;

        let valorPorEmail = vlrTotalInt / qntEmails;

        for(i=0;i<qntEmails-1;i++) // for colocando valores iguais até o penúltimo email
        {
            mapa.set(listaEmails[i],valorPorEmail)
        }
        mapa.set(listaEmails[qntEmails-1],valorPorEmail+resto) // adicionando o valor com o resto no ultimo email da lista
        
        return mapa
    }
        
}

console.log(calculaeDivide(listaCompras,listaEmails));