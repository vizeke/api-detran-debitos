#language:pt
Funcionalidade: Acessar os dados do motorista

Essa funcionalidade permite que o usuario tenha acesso as suas infrações.

Cenário: Exibindo as infrações
Dado O usuário informou uma CNH
E informou o CPF
E informou o numero da cedula da CNH
Quando o usuario solicitar exibir as infrações
Então o sistema retorna todas as infrações do usuario

Cenário: Não existe infrações
Dado O usuário informou uma CNH
E informou o CPF
E informou o numero da cedula da CNH
Quando o usuario solicitar exibir as infrações
Então o sistema retorna uma mensagem informando que é não existe nenhuma infração para aquela CNH