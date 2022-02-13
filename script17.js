var pessoa = {
    nome: 'André',
    idade: 24,
}
//console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado){
        //posso escrever também: area(lado), sem o function
        return lado * lado;
    },
    perimetro: function(lado){
        
        return this.lados * lado;
    }
}
console.log(quadrado.area(6));
console.log(quadrado.perimetro(4))