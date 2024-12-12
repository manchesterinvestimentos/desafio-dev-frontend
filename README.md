# Manchester Weather App  
  
Essa é uma página de previsão do tempo, fiz utilizando React e Next.js e utilizando a API pública do OpenWeatherMap. Nessa página, os usuários poderão pesquisar por cidades e visualizar o clima atual. Ele fornece sugestões de cidades conforme o usuário digita.  
  
## Funcionalidades  
  
• Pesquisa de cidades com sugestões de preenchimento automático  
  
• Exibição das condições climáticas atuais (temperatura, descrição do clima, temperaturas mínimas/máximas)  
  
• Ícones representando as condições climáticas  
  
• Tratamento de erros para nomes de cidades inválidos ou não encontrados  
  
## Estrutura do Projeto  
  
### WeatherApp.js:  
  
Aqui é onde trabalhei nas requisições e nos retornos da API.  
  
• fetchWeather: Busca os dados climáticos para determinada cidade.  
  
1. Recebe a cidade como parâmetro.  
2. Armazena a chave da API do OpenWeatherMap em uma constante.  
3. Realiza um fetch com o nome da cidade passada pelo parâmetro e com a chave da API.  
4. Verifica se a resposta é válida (status `ok`).  
   • Se sim, converte a resposta para JSON e retorna os dados.  
   • Se não, lança um erro indicando que a cidade não foi encontrada.  
5. Lança um erro se ocorrer algum erro durante a requisição.  
  
  
• fetchCitySuggestions: Busca sugestões de cidades com base no que o usuário inserir.  
  
1. Recebe uma `query` como parâmetro.  
2. Armazena a chave da API do OpenWeatherMap em uma constante.  
3. Faz uma requisição com a `query` passada por parâmetro e com a chave da API.  
4. Verifica se a resposta é válida (status `200`).  
5. Mapeia a lista de cidades retornadas e cria uma lista de objetos que contém o nome da cidade e país (para que haja diferenciação em cidades com nomes iguais).  
6. Para garantir que não seja salva nenhuma cidade repitida, é feito um filtro no array de objetos.  
7. Retorna a lista de cidades para o usuário selecionar  
8. Lança um erro se ocorrer algum erro durante a requisição.  
  
### app.js  
  
É aqui onde fiz as funções e a estruturação do meu FrontEnd  
  
1. Realizei os imports principais:  
     
   • React, useState  
   • `fetchWeather` e `fetchCitySuggestions`  
   • Estilos CSS  
  
2. Defini os estados de cada variável.  
     
   • `city`: Armazena a cidade digitada pelo usuário.  
   • `weather`: Armazena os dados do clima retornados pela API.  
   • `error`: Armazena mensagens de erro.  
   • `citySuggestions`: Armazena sugestões de cidades baseadas no que o usuário digitou.  
   • `selectedCity`: Armazena a cidade que o usuário selecionou.  
  
3. Funções:  
     
    ### handleFetchCitySuggestions  
       • Faz uma chamada para a API para obter sugestões de cidades com base na string que o usuário digitou.  
       • Atualiza `citySuggestions` com o retorno das sugestões.  
  
    ### handleFetchWeather  
       • Verifica se uma cidade válida foi selecionada.  
       • Faz uma chamada à API para buscar o clima para a cidade selecionada.  
       • Atualiza `weather` com os dados retornados ou define uma mensagem de erro caso nenhuma cidade seja encontrada.  
      
    ### getTranslatedWeather  
      
       • Como os dados da API são retornados em inglês, nessa função realizo a tradução para o português.  
       • Defino os ícones com base em cada retorno da API.  
  
    ### handleInputChange  
  
       • Atualiza `city` com o valor digitado pelo usuário.  
       • Chama `handleFetchCitySuggestions` para obter a sugestão das cidades.  
  
    ### handleCitySelect  
  
       • Atualiza `city` e `selectedCity` com a cidade selecionada.    
       • Chama `fetchWeather` para obter os dados do clima para a cidade selecionada  
  
4. Estrutura HTML  
      
No geral, o componente é centralizado horizontalmente e verticalmente. Possui um título chamado **Manchester Weather** e um campo de entrada do usuário com um ícone de pesquisa importado do Material UI. Quando o usuário está digitando, aparece uma lista de sugestões de cidades para o usuário selecionar (isso exclui a possibilidade do usuário inserir uma cidade incorretamente). Assim que o usuário seleciona a cidade, exibe na tela o ícone referente ao clima atual (SVGs importados do [SVG Repo](https://www.svgrepo.com/)), a descrição do clima, a temperatura atual, o nome da cidade selecionada juntamente com o código do país, e logo abaixo as máximas e mínimas para aquela cidade com os ícones de seta também importados do Material UI.
    

