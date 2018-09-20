#language:pt
Funcionalidade: Listar Débitos

Essa funcionalidade permite que o usuario liste todos os seus debitos

Cenário: Listando uma prévia dos tipos de debitos do usuario
Dado o usuario possui debitos
Quando o usuario escolhe listar uma previa dos tipos de débitos
Então o sistema retorna uma lista com a previa de todos os tipos de debitos

Cenário: Listando todos os debitos do usuario
Dado o usuario possui debitos
Quando o usuario escolhe listar os tipos de débitos
Então o sistema retorna uma lista com todos os tipos de debitos

Cenario: Listando todos os debitos por tipo de debito
Dado o usuario possui debitos
Quando o usuario escolhe listar debito por um tipo de debito
Então o sistema retorna uma lista com o tipo de debito selecionado