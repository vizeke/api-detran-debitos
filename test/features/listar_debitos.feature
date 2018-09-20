        #language:pt
        Funcionalidade: Listar Débitos

        Essa funcionalidade permite que o usuario liste todos os seus debitos

        Cenário: Listando uma prévia dos tipos de debitos do usuario
        Dado o usuario informa a placa do veiculo
        And informa o CPF do proprietario
        And informa o renavam
        Quando o usuario solicitar uma previa da lista de debitos
        Então o sistema retorna uma lista com a previa de todos os tipos de debitos

        Cenário: Listando todos os debitos do usuario
        Dado o usuario informa a placa do veiculo
        And informa o CPF do proprietario
        And informa o renavam
        Quando o usuario solicitar uma lista com todos debitos
        Então o sistema retorna uma lista com todos os debitos

        Cenario: Listando todos os debitos por tipo de debito
        Dado o usuario informa a placa do veiculo
        And informa o CPF do proprietario
        And informa o renavam
        And o tipo de debito
Quando o usuario solicitar uma lista de debitos do tipo selecionado
Então o sistema retorna uma lista com o tipo de debito selecionado