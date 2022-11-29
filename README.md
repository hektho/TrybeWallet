# TrybeWallet

Aqui conterá os arquivos do meu projeto 'TrybeWallet'

# Objetivo

- Simular uma carteira digital de controle de gastos com conversor de moedas.

# Tecnologias utilizdas
- ReactJs
- React Router
- Componentes de classe
- Redux
- CSS
- Async Functions

# Visão geral

O projeto possui duas rotas:
 - Login
 - Carteira

Na rota (página) de login, o usuário precisa fazer o login digitando um e-mail e uma senha, após isso será redirecionado para a página da carteira.
Na página de carteira, será possível:
- Visualizar uma tabela com os gastos;
- Adicionar, remover ou editar um gasto;
- Visualizar o total de gastos convertidos para uma moeda de escolha;

# Login
 O botão só será habilitado caso satisfaça as seguintes condições:
  - O campo e-mail precisa ter um e-mail no formato 'usuario@usuario.com';
  - O campo de senha precisa ter no mínimo 6 caracteres;
  
# Carteira

## Header (cabeçalho)
  Contém algumas informações como:
  - O e-mail que o usuário cadastrou na rota anterior;
  - O valor total das despesas do usuário;

## Formulário
  É composto por 5 campos e 2 botões:
  - O campo 'Valor' se refere ao valor total de cada despesa;
  - o campo 'Moeda' contém várias opções de moedas que aquela despesa utilizou;
  - o campo 'Método de pagamento' se refere a forma de pagamento daquela despesa;
  - o campo 'Categoria' se refere a categoria daquela despesa;
  - o campo 'Descrição' permite ao usuário incluir uma breve descrição sobre a despesa;
  - o botão 'Adicionar despesa' permite adicionar uma nova despesa à carteira (tabela);
  - o botão 'Atualizar despesa' permite atualizar uma despesa selecionada;
  
  ## Tabela
   É composta por 9 células onde ficarão armazenados as informações de cada despesa:
    - Descrição;
    - Tag, a categoria da despesa;
    - Método de pagamento;
    - Valor;
    - Moeda;
    - Câmbio atual utilizado;
    - Valor convertido;
    - Moeda de converção (BRL);
    - Botões de editar/excluir;
    
   ### Botões editar/excluir
   - O botão de editar, selecionará a despesa, habilitará o botão de 'atualizar despesa' e desabilitará o botão de 'adicionar despesa';
   - Atualizar a despesa utiliza o mesmo formulário que adicionar a despesa;
   - Substituirá as informações da despesa selecionada pelo do formulário;
   - O botão de 'excluir' excluirá a despesa;
      
   # API
   Algumas informações como o câmbio utilizado e as moedas vêm de uma API de cotações de moedas cujo endpoint é: https://economia.awesomeapi.com.br/json/all;
     
   # LocalStorage
   Além do Redux utilizado na aplicação, também utilizo o localStorage do navegador possibilitando que as informações das despesas e o e-mail do usuário permaneçam salvas mesmo após a página ter sido recarregada.
  
