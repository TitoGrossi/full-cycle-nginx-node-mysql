## Esse projeto é um Desafio do curso full cycle 3.0
### Subir uma aplicação node conectada ao nginx e a uma db MySql com docker-compose

#### Testando aplicação
Para ver a aplicação rodando basta digitar na pasta root deste diretório o seguinte comando:
```bash
sudo docker-compose up -d
```
Daí, acessando [http://localhost:8080](http://localhost:8080), a aplicação deve estar visível.

#### O que esperar
Cada vez que o usuário acessar a página, um novo usuário será criado no banco de dados.

Por outro lado, a respota será uma página html com o texto "Full Cycle rocks!" e a lista de pessoas cadastradas no sistema.

Como o nome da pessoa inserida está hard-coded para "person", a única diferença entre elas serão os ids
