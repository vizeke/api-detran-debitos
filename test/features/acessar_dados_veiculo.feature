#language: pt
Funcionalidade: Acessar os dados do motorista

Essa funcionalidade permite ao usuario acessar os dados do veículo.

Cenário: Exibindo os dados do veículo
Dado O usuario possui um veiculo
Quando o usuario seleciona exibir informações do veiculo
Então o sistema retorna os dados do veículo

Cenário: Exibindo os dados de veículo inexistente
Dado O usuario não possui um veiculo
Quando o usuario seleciona exibir informações do veiculo
Então o sistema retorna uma mensagem informando que o veículo não existe

Cenário: Exibindo as infrações do veículo
Dado O usuario possui um veículo com infrações
Quando o usuario seleciona exibir as infrações do veiculo
Então o sistema retorna as infrações do veiculo

Cenário: Veiculo nao possui infrações
Dado O usuario não possui um veículo com infrações
Quando o usuario seleciona exibir as infrações do veiculo
Então o sistema retorna uma mensagem informando que o veiculo não possui infrações

