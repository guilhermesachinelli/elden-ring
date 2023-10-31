# <div align="center">API – ELDEN RING</div>


## 💻 Seja muito bem-vindo!
#### Esta documentação fornecerá informações abrangentes sobre como usar a nossa API e apresentará o nosso projeto em detalhes.

### O que é?

Essa é uma API de código aberto que fornece informações sobre o jogo “Elden Ring” lançado pela FromSoftware em 2022. Nesta seção, você será guiado pelas etapas básicas sobre como usar esta API corretamente. Esta API é aberta, portanto não requer uma chave de API para usá-la.

### Começando
Para começar a utilizar essa API e entender melhor o projeto, siga os passos abaixo:

1. Em seu projeto, utilize o comando "npm install axios" no terminal para fazer a instalação da parte mais importante do nosso projeto, pois sem ele, a URL da API utilizada não se torna útil. 


2. Ainda em seu projeto, crie uma pasta nomeada como "data" e dentro dela, adicione um arquivo em JavaScript (.js) com um nome coerente à página do site. No exemplo abaixo, nomeamos nosso arquivo como "armas" já que nossa página foca nisso:

<center>
<img src="./public/arquivo data ex.png" width="200" height="130">
</center>


3. Agora precisamos fazer a importação da biblioteca Axios, definir a URL da API sendo utilizada e declarar uma função assíncrona, que em nosso exemplo, seria "armas".

<center>
<img src="./public/pagina axios ex.png" width="290" height="160">
</center>

Dentro do bloco try, a função faz uma solicitação GET à URL da API usando o Axios e armazena a resposta na variável resposta. O await é usado para aguardar que a solicitação seja concluída antes de continuar a execução, depois a função retorna os dados da resposta da API. Presumivelmente, a API retorna dados sobre armas em formato JSON, e resposta.data contém esses dados.

O "catch (error) serve para caso ocorra um erro durante a solicitação à API, o código captura o erro e o lança novamente, tornando-o acessível para tratamento posterior.

## Recursos da API:

Link do site oficial: https://docs.eldenring.fanapis.com/docs/bosses


## Rota dos Chefes:

### #Introdução
Esta rota busca uma lista de todos os chefes que podem ser encontrados em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| id            | string   | ID do chefe                               |
| name          | string   | Nome do chefe                             |
| image         | string   | Imagem do chefe                           |
| description   | string   | Breve descrição do chefe                  |
| location      | string   | Onde está localizado o chefe              |
| drops         | string[] | Lista de itens e espólios que esse chefe derruba |
| healthPoints  | string   | Quanto HP esse chefe tem                  |

### #Rotas
| MÉTODO | URL                                      | DESCRIÇÃO                                     |
|--------|------------------------------------------|-----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/bosses | Recupera uma lista de todos os chefes de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/bosses/:boss_id | Recupera um chefe de Elden Ring usando seu ID |

### #Parâmetros
Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                        | DESCRIÇÃO                                      |
|-----------|--------------|------------------------------------------------------|------------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/bosses?limit=100  | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/bosses?limit=20&page=3 | Navega entre páginas de resultados             |
| name      | Nenhum       | https://eldenring.fanapis.com/api/bosses?name=Ancestor%20Spirit | Pesquisa campos por seus nomes               |

## Rota das Armaduras:

### #Introdução
Esta rota busca uma lista de todas as peças de armadura que podem ser encontradas em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| id            | string   | ID da peça da armadura                   |
| name          | string   | Nome da peça da armadura                 |
| Image         | string   | URL da imagem da peça da armadura        |
| description   | string   | Breve descrição da peça da armadura      |
| category      | string   | Categoria da peça de armadura            |
| weight        | number   | Quanto essa armadura pesa em seu inventário |
| dmgNegation   | {name: string, amount: number} | Quanto dano esta peça de armadura anula |
| resistance    | {name: string, amount: number} | Quanta resistência o uso desta peça de armadura oferece |

### #Rotas
| MÉTODO | URL                                      | DESCRIÇÃO                                     |
|--------|------------------------------------------|-----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/armors | Recupera uma lista de todas as peças da armadura de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/armors/:ammo_id | Recupera uma peça de armadura Elden Ring usando seu ID |

### #Parâmetros
Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                        | DESCRIÇÃO                                      |
|-----------|--------------|------------------------------------------------------|------------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/armors?limit=100  | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/armors?limit=20&page=3 | Navega entre páginas de resultados             |
| name      | Nenhum       | https://eldenring.fanapis.com/api/armors?name=All-knowing%20Armor | Pesquisa campos por seus nomes               |

## Rota das Cinzas da Guerra:

### #Introdução
Esta rota busca uma lista de todas as cinzas de guerra que podem ser encontradas em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| id            | string   | ID da Cinza da Guerra                    |
| name          | string   | Nome da Cinza da Guerra                  |
| Image         | string   | URL da imagem da Cinza da Guerra         |
| description   | string   | Breve descrição da Cinza da Guerra       |
| affinity      | string   | Afinidade de uma Cinza de Guerra         |
| skills        | string   | Habilidade ativada quando a Cinza da Guerra está equipada em uma arma |

### #Rotas
| MÉTODO | URL                                      | DESCRIÇÃO                                     |
|--------|------------------------------------------|-----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/ashes  | Recupera uma lista de todas as Cinzas de Guerra presentes em Elden Ring |
| GET    | https://eldenring(fanapis.com/api/ashes/:ash_of_war_id | Recupera uma Cinza de Guerra usando seu ID |

### #Parâmetros
Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                        | DESCRIÇÃO                                      |
|-----------|--------------|------------------------------------------------------|------------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/ashes?limit=100  | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/ashes?limit=20&page=3 | Navega entre páginas de resultados             |
| name      | Nenhum       | https://eldenring.fanapis.com/api/ashes?name=Ash%20Of%20War:%20Prelate's%20Charge | Pesquisa campos por seus nomes               |


## Rota das Classes:

### #Introdução
Esta rota busca uma lista de todas as classes que podem ser encontradas em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| id            | string   | ID da Classe                              |
| name          | string   | Nome da Classe                            |
| Image         | string   | URL da imagem do personagem de Classe usando o equipamento inicial fornecido |
| description   | string   | Breve descrição da Classe                |
| stats         | {level: string, vigor: string, mind: string, endurance: string, strength: string, dexterity: string, intelligence: string, faith: string} | Estatísticas iniciais da classe |

### #Rotas
| MÉTODO | URL                                      | DESCRIÇÃO                                     |
|--------|------------------------------------------|-----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/classes | Recupera uma lista de todas as Classes presentes em Elden Ring |
| GET    | https://eldenring.fanapis.com/api/classes/:class_id | Recupera uma Classe presente em Elden Ring usando seu ID |

### #Parâmetros
Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                        | DESCRIÇÃO                                      |
|-----------|--------------|------------------------------------------------------|------------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/classes?limit=100  | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/classes?limit=20&page=3 | Navega entre páginas de resultados             |
| name      | Nenhum       | https://eldenring.fanapis.com/api/classes?name=Hero | Pesquisa campos por seus nomes               |

## Rota das Criaturas:

### #Introdução
Esta rota busca uma lista de todas as criaturas que podem ser encontradas em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema
| ATRIBUTO      | TIPO     | DESCRIÇÃO                                |
|---------------|----------|------------------------------------------|
| id            | string   | ID da criatura                            |
| name          | string   | Nome da criatura                          |
| Image         | string   | URL da imagem da criatura                 |
| description   | string   | Breve descrição da criatura               |
| location      | string   | Onde essa criatura pode ser encontrada    |
| drops         | string[] | Quais itens e recursos essa criatura deixa cair |

### #Rotas
| MÉTODO | URL                                      | DESCRIÇÃO                                     |
|--------|------------------------------------------|-----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/creatures | Recupera uma lista de todas as criaturas de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/creatures/:creature_id | Recupera uma criatura presente em Elden Ring usando seu ID |

### #Parâmetros
Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                        | DESCRIÇÃO                                      |
|-----------|--------------|------------------------------------------------------|------------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/creatures?limit=100  | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/creatures?limit=20&page=3 | Navega entre páginas de resultados             |
| name      | Nenhum       | https://eldenring.fanapis.com/api/creatures?name=Giant%20Bat | Pesquisa campos por seus nomes               |


## Rota de Locais

### #Introdução

Esta rota busca uma lista de todos os locais que podem ser visitados em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema

| ATRIBUTO  | TIPO    | DESCRIÇÃO                                 |
|-----------|---------|-------------------------------------------|
| id        | string  | ID do local                              |
| name      | string  | Nome do local                            |
| image    | string  | URL da imagem da captura de tela do local |
| description | string  | Breve descrição do local                 |

### #Rotas

| MÉTODO | URL                                      | DESCRIÇÃO                                    |
|--------|------------------------------------------|----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/locations | Recupera uma lista de todos os locais de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/locations/:location_id | Recupera um local de Elden Ring usando seu ID |

### #Parâmetros

Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                     | DESCRIÇÃO                                  |
|-----------|--------------|---------------------------------------------------|--------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/locations?limit=100 | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/locations?limit=20&page=3 | Navega entre páginas de resultados         |
| name      | Nenhum       | https://eldenring.fanapis.com/api/locations?name=Church%20Of%20Elleh | Pesquisa campos por seus nomes            |


## Rota de NPCs

### #Introdução

Esta rota busca uma lista de todos os NPCs que podem ser encontrados em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema

| ATRIBUTO    | TIPO    | DESCRIÇÃO                             |
|-------------|---------|---------------------------------------|
| id          | string  | ID do NPC                             |
| name        | string  | Nome do NPC                           |
| image      | string  | URL da imagem do NPC                  |
| description   | string  | Breve descrição do NPC                |
| location | string  | Onde o NPC pode ser encontrado        |
| quote     | string  | Citação icônica daquele NPC           |

### #Rotas

| MÉTODO | URL                                      | DESCRIÇÃO                                    |
|--------|------------------------------------------|----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/npcs  | Recupera uma lista de todos os NPCs de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/npcs/:npc_id | Recupera um NPC Elden Ring usando seu ID |

### #Parâmetros

Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                     | DESCRIÇÃO                                  |
|-----------|--------------|---------------------------------------------------|--------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/npcs?limit=100 | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/npcs?limit=20&page=3 | Navega entre páginas de resultados         |
| name      | Nenhum       | https://eldenring.fanapis.com/api/npcs?name=Enia | Pesquisa campos por seus nomes            |


## Rota de Espíritos

### #Introdução

Esta rota busca uma lista de todos os espíritos que podem ser obtidos e convocados em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema

| ATRIBUTO   | TIPO    | DESCRIÇÃO                                 |
|------------|---------|-------------------------------------------|
| id         | string  | ID do espírito                            |
| name       | string  | Nome do espírito                          |
| image     | string  | URL da imagem do ícone do espírito        |
| description  | string  | Breve descrição do espírito               |
| fpCost     | number  | Custo em FP para invocar este espírito uma vez |
| HPCost    | number  | Custo em HP para invocar este espírito uma vez |
| effects    | string  | O que acontece quando invocamos esse espírito |

### #Rotas

| MÉTODO | URL                                      | DESCRIÇÃO                                     |
|--------|------------------------------------------|-----------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/spirits | Recupera uma lista de todos os espíritos de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/spirits/:spirit_id | Recupera um espírito Elden Ring usando seu ID |

### #Parâmetros

Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                     | DESCRIÇÃO                                  |
|-----------|--------------|---------------------------------------------------|--------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/spirits?limit=100 | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/spirits?limit=20&page=3 | Navega entre páginas de resultados         |
| name      | Nenhum       | https://eldenring.fanapis.com/api/spirits?name=Demi-human%20Ashes | Pesquisa campos por seus nomes            |


## Rota dos Talismãs

### #Introdução

Esta rota busca uma lista de todos os talismãs que podem ser obtidos em Elden Ring e gera isso no formato JSON. O usuário pode definir sua própria paginação e também utilizar consultas de pesquisa para encontrar a saída desejada.

### #Esquema

| ATRIBUTO  | TIPO    | DESCRIÇÃO                                   |
|-----------|---------|---------------------------------------------|
| id     | string  | Id do Talismã                               |
| name      | string  | Nome do Talismã                             |
| image    | string  | URL da imagem do ícone Talismã             |
| description | string  | Breve descrição do Talismã                 |
| effects   | string  | O que acontece quando equipamos este Talismã |

### #Rotas

| MÉTODO | URL                                              | DESCRIÇÃO                                          |
|--------|--------------------------------------------------|----------------------------------------------------|
| GET    | https://eldenring.fanapis.com/api/talismans       | Recupera uma lista de todos os talismãs de Elden Ring |
| GET    | https://eldenring.fanapis.com/api/talismans/:talisman_id | Recupera um talismã Elden Ring usando seu ID |

### #Parâmetros

Esta rota suporta os seguintes parâmetros:

| Parâmetro | Valor Padrão | URL de Exemplo                                     | DESCRIÇÃO                                  |
|-----------|--------------|---------------------------------------------------|--------------------------------------------|
| limit     | 20           | https://eldenring.fanapis.com/api/talismans?limit=100 | Define a quantidade máxima de itens na resposta |
| page      | 0            | https://eldenring.fanapis.com/api/talismans?limit=20&page=3 | Navega entre páginas de resultados         |
| name      | Nenhum       | https://eldenring.fanapis.com/api/talismans?name=Axe%20Talisman | Pesquisa campos por seus nomes            |


## Documentação de cores oficiais do site

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor Cinza escuro       | ![#222222B0](https://via.placeholder.com/10/222222B0?text=+) #222222B0 |
| Cor  Preta      | ![#0B2123](https://via.placeholder.com/10/0B2123?text=+) #0B2123 |
| Cor Cappuccino       | ![#AB966F](https://via.placeholder.com/10/AB966F?text=+) #AB966F |
| Cor Branca      | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff |


# Equipe
### Entre em contato conosco pelo GitHub!

#### - Amanda Silva
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/Amandamoonchild)
                                                    
#### - Andrey Castro 
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/andreyfdecastro)                         


#### - Guilherme Lima
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/GuiLimaSeila)


#### - Guilherme Sachinelli
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/guilhermesachinelli)

#### - Nicolly Santos
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/santni)


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio deste email amandasilva@aluno.senai.br.