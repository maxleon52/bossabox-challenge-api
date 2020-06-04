# Desafio BossaBox - API

## 💬 Sobre

A API tem como objetivo cadastrar ferramentas utilizadas no dia-a-dia de um desenvolvedor de softwares ou intusiastas de TI.

## 🚀 Online

A API está hospedada no Heroku na seguinte URL:
https://bossabox-challenge-api.herokuapp.com/

## ✔ Funcionalidades

- CRUD de ferramentas
  <img src="./img/b4.png" alt="POST-TOOLS-2"/>
  <img src="./img/b3.png" alt="POST-TOOLS-1"/>

- Criação de um usuário
  <img src="./img/b1.png"/>

- Autenticação simples com o e-mail
  <img src="./img/b2.png"/>

## 🛠 Ferramentas utilizadas

1. Express - Para a criação e utilização do servidor
2. Mongoose - ODM (objeto Document Mapper), utilizado para fazer as querys no BD.
3. Multer - Permiter trabalhar com multipart-formdata, possibilitando o envio de arquivos.
4. Cors - Cross-origin resource sharing, tem como principal objetivo restringir a utilização da API somente a Clients front-ends autorizados.
5. Nodemon - Fica monitorando as alteraçãoes no código e aplicando as mesmas em tempo real. Utilizado apenas como dependencia de desenvolvimento.
6. MongoBD - Banco de dados não-relacional, onde o mesmo encontra-se online no AtlasDB.
7. Swagger - Ferramenta para a criação da documentação mais detalhada sobre a API, expondo como utilizar as rotas e etc.

## 📝 Outros

Toda a documentação de como utilizar a API encontra-se aqui:

## 🚩 Rotas

Essas são as rotas da API e quais dados devem ser repassados, utilize algum serviço/programa para envio de dados JSON, tais como, POSTMAN ou INSOMNIA.

| METODO | ROTA          | JSON                                                                                             | HEADERS | QUERY                                                             | DESCRIÇÃO                                                    |
| ------ | ------------- | ------------------------------------------------------------------------------------------------ | ------- | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| POST   | /signin       | { "email" : "nome_do_email@teste.com"}                                                           | user_id | none                                                              | Faz login no sistema                                         |
| POST   | /signup       | { "name": "nome_usuario", "email" : "nome_do_email@teste.com" }                                  | none    | none                                                              |
| GET    | /tools        | none                                                                                             | user_id | none                                                              | Busca ferramentas baseado no "id" do usuário                 |
| GET    | /tools-search | none                                                                                             | user_id | tag e seu valor (ex: http://localhost:3333/tools-search?tag=node) | Filtra uma ou mais ferramentas de acordo com q query enviada |
| POST   | /tools        | { "title": "node","link": "www.node.com","description": "Node é bom", "tags": ["node", nodeJs] } | user_id | none                                                              | Cadastra uma nova ferramenta                                 |
| PUT    | /tools/:\_id  | { "title": "node","link": "www.node.com","description": "Node é bom", "tags": ["node", nodeJs] } | user_id | none                                                              | Atualiza uma nova ferramenta baseado no ID                   |
| DELETE | /tools/:\_id  | nome                                                                                             | user_id | none                                                              | Deleta uma nova ferramenta baseado no ID                     |
