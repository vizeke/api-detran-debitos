#language: pt
Funcionalidade: Gerar GRU

Essa funcionalidade permite ao usuário escolher os debitos que esse deseja pagar por meio de uma GRU.

Cenário: Solicitando alguns debitos
Dado O usuario possui debitos
Quando o usuario escolher os debitos
E  solicita a geração da GRU
Então o sistema retorna a GRU com os debitos

Cenário: Solicitando um débito que possuem outros tipos de débitos obrigatorios
Dado O usuario possui debitos
Quando o usuario escolhe um debito que tem outros tipos de débitos obrigatorios
E  solicita a geração da GRU
Então o sistema retorna uma mensagem informando que é necessário selecionar os outros débitos obrigatórios

Cenário: Solicitando todos debitos
Dado o usuario informa a placa do veiculo
E informa o renavam do veiculo
Quando o usuario deseja pagar todos os debitos
E  solicita a geração da GRU
Então o sistema retorna a GRU com os debitos

Cenário: Nenhum debito solicitado
Dado O usuario possui debitos
Quando o usuario não escolhe nenhum debito
E  solicita a geração da GRU
Então o sistema retorna uma mensagem informando que é necessário selecionar pelo menos um debito

Cenário: Solicitando um tipo de debito que possui débitos anteriores
Dado O usuario possui débitos atrasados
Quando o usuario deseja pagar um débito de 2017-1
E possui débitos anteriores atrasados
Então o sistema retorna uma mensagem informando que é necessário selecionar também os débitos anteriores
