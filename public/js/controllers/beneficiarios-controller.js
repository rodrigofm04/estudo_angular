angular.module('alurapic')
.controller('BeneficiariosController', function($scope) {

    $scope.beneficiarios = [];
    $scope.filtro = '';
        
    for (var j = 0; j < 50; j++) {
        $scope.beneficiarios.push(criarBeneficiario());
    }
    
    function criarBeneficiario() {
        const nomes = ['Osmar', 'Doralice', 'Ana', 'Roberto', 'Elisa'];
        const sobrenomes = ['Silva', 'Soares', 'Menezes', 'Sa', 'Oliveira'];
        const emails = ['@gmail.com', '@tst.jus.br', '@yahoo.com', '@uol.com.br'];
    
        var nome = nomes[Math.floor(Math.random() * 4)];
        var sobrenome = sobrenomes[Math.floor(Math.random() * 4)];
        var idade = Math.floor(Math.random() * 100);
        var email = nome.toLowerCase() + "." + sobrenome.toLowerCase() + emails[Math.floor(Math.random() * 4)];
        var saldo = Math.random() * 3000;

        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            email: email,
            saldo: saldo
        };
    };
});

