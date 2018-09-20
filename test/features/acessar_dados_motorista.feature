#language:pt
Funcionalidade: Acessar os dados do motorista

Essa funcionalidade permite que o usuario tenha acesso aos seus dados.

Cenário: Exibindo os dados na CNH
Dado O usuário possui uma CNH
Quando o usuario seleciona situação da CNH
Então o sistema retorna as informações da CNH

Cenário: Nenhuma CNH cadastrada
Dado O usuário não possui uma CNH
Quando o usuario seleciona situação da CNH
Então o sistema retorna uma mensagem informando que é necessário cadastrar uma CNH

Cenário: Exibindo as infrações
Dado O usuário possui infrações
Quando o usuario seleciona exbir infrações
Então o sistema retorna todas as infrações do usuario

Cenário: Não existe infrações
Dado O usuário não possui infrações
Quando o usuario seleciona exbir infrações
Então o sistema retorna uma mensagem informando que é não existe nenhuma infração no nome do usuario

Cenário: Exibir os dados do condutor
Dado O usuario possui dados do condutor
Quando o usuario seleciona exibir os dados do condutor
Então o sistema retorna todos os dados do condutor