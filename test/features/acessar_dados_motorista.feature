#language:pt
Funcionalidade: Acessar os dados do motorista

Essa funcionalidade permite que o usuario tenha acesso aos seus dados da CNH.

Cenário: Exibindo os dados na CNH
Dado O usuário informou uma CNH
E informou o CPF
E informou o numero da cedula da CNH
Quando o usuario solicitar a situação da CNH
Então o sistema retorna as seguintes informações da CNH: situação da CNH, motivo do bloqueio, data de expiração, pontos de infrações, existe processo de habilitacao, existe processo administrativo

Cenário: Nenhuma CNH cadastrada
Dado O usuário informou uma CNH
E informou o CPF
E informou o numero da cedula da CNH
Quando o usuario solicitar a situação da CNH
Então o sistema retorna uma mensagem informando que não há CNH cadastrada para aquela CNH

Cenário: Exibir os dados do condutor
Dado O usuario informa o CPF
Quando o usuario solicitar exibir os dados do condutor
Então o sistema retorna os dados do condutor