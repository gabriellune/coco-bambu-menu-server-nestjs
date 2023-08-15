# coco-bambu-menu-server 🚀

Serviço responsável pela administração de usúarios e do cardápio do Coco Bambu.
(Resolução do teste técnico proposto pela Tagme Food Solutions)

## Tecnologias do Repositório 👨‍💻 

- NPM
- NestJS
- Swagger
- MongoDb
- Jest
- Cloudinary

## Instalção 👩‍💻

Para instalar as dependencias do projeto, rode o comando abaixo:

```bash
$ npm install
```
## Antes de rodar o projeto localmente, adicione valores as seguintes variaveis no arquivo .env

- DB_USERNAME (Username referente ao MongoDb) 
- DB_PASSWORD (Senha referente ao MongoDb)
- JWT_KEY (Adicione um valor para gerar o token de autorização para acessar os endpoints)
- CLOUD_NAME (Nome da cloud referente ao Cloudinary)
- API_KEY (Chave da api referente ao Cloudinary)
- API_SECRET ('Segredo' da api referente ao Cloudinary)

## Rodando o projeto localmente 🏠

Para rodar o projeto:

```bash
$ npm run start
```

Caso ocorra algum erro, para rodar o projeto, entre em contato comigo pelo email: gabriellune@outlook.com

## Para rodar os testes unitários 🧪

```bash
$ npm run test
```

## Para acessar a documentação Swagger Api📖

Com o projeto rodando, abra o link seguinte no seu navegador:

http://localhost:8000/documentation/

## Para tudo ocorrer bem...

Crie seu usúario em 'POST api/users' e obtenha o token de acesso em 'POST api/authentication/login'.
Agora voce pode utilizar todos os endpoints referentes as API's de usúarios (users) e pratos (dishes).

## Observações

Não esqueça de passar o token obtido na header das requisições com a chave 'Authorization' em seu postman/insomnia.
É necessário fazer o upload das imagens referente a cada prato para serem exibidas pelo frontend, no endpoint 'POST api/dishes/image/upload', e serão salvas no Cloudinary. Esse upload, pode ocorrer mesmo depois do prato ser cadastro, basta posteriomente ao upload, adicionar as urls referente pela rota 'PATCH api/dishes/:id/add-image-url'
