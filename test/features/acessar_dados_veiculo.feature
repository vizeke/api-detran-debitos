#language: pt
Funcionalidade: Acessar os dados do veículo

Essa funcionalidade permite ao usuario acessar os dados do veículo.

Cenário: Exibindo os dados do veículo
Dado O usuario informa a placa do veiculo
E informa o renavam do veiculo
Quando o usuario solicitar os dados do veiculo
Então o sistema retorna os dados do veiculo

Cenário: Exibindo os dados de veículo inexistente
Dado O usuario informa a placa do veiculo
E informa o renavam do veiculo
Quando o usuario solicitar os dados do veiculo
Então o sistema retorna uma mensagem informando que o veículo não existe

Cenário: Exibindo os dados de veículo com registro de furto/roubo ativo
Dado O usuario informa a placa do veiculo
E informa o renavam do veiculo
Quando o usuario solicitar os dados do veiculo
Então o sistema retorna uma mensagem informando que a consulta não é permitida para esse tipo de resgitro ativo
