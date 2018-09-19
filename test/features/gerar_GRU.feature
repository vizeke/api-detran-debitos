                #language: pt
                Funcionalidade: Gerar GRU

                Essa funcionalidade permite ao usuário escolher os debitos que esse deseja pagar por meio de uma GRU.

                Cenário: Selecionando alguns debitos
                Dado O usuario possui debitos
                Quando o usuario escolher os debitos
                And  solicita a geração da GRU
                Então o sistema retorna a GRU com os debitos

                Cenário: Selecionando todos  debitos
                Dado O usuario possui debitos
                Quando o usuario deseja pagar todos osdebitos
                And  solicita a geração da GRU
                Então o sistema retorna a GRU com os debitos

                Cenário: Nenhum debito selecionado
                Dado O usuario possui debitos
                Quando o usuario não escolhe nenhum debito
                And  solicita a geração da GRU
Então o sistema retorna uma mensagem informando que é necessário selecionar pelo menos um debito

Cenário: Selecionando alguns debitos

####Reler regra de negocios  para possiveis novos cenarios.

