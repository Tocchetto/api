# API

Esse repositório contém uma api que pode servir como base para qualquer aplicação, foi criado no intuito de explorar algumas tecnologias e também compreender alguns conceitos de nodejs.

## Começando

As instruções a seguir irão auxiliar a gerar uma cópia deste projeto em um ambiente local, para fins de desenvolvimento e teste.

## Pré-requisitos

O [docker CE](https://docs.docker.com/install/linux/docker-ce/debian/) (Community Edition) foi utilizado para fazer o gerenciamento dos serviços da aplicação, mas nada impede que a instalação do banco de dados, por exemplo, seja feita no host.

Após a intalação do docker CE, uma instancia do postgres é criada como descrito no site do [docker hub](https://hub.docker.com/_/postgres) através do comando `docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`.

###### Obs.: A flag -p vai fazer um redirecionamento da porta 5432 do host para o container

###### Obs. 2: Durante a criação da instância do postgres pode ser que o container do docker não permaneça rodando após ter sido criado, caso isso aconteça, desabilitar o _apparmor_ deve resolver o problema. [Descrição + Solução do problema](https://stackoverflow.com/questions/57873532/unable-to-start-docker-container-docker-ps-a-status-exited-1)

O seguinte projeto foi todo desenvolvido utilizando nodejs e o gerenciador de pacotes [yarn](https://yarnpkg.com/lang/en/) foi utilizado para gerenciar as dependências do projeto.

Com yarn instalado, basta clonar o repositório localmente `git clone https://github.com/Tocchetto/api.git`, entrar na pasta **api** `cd api` e utilizar o _yarn_ `yarn install` para instalar as dependências do projeto.

Para rodar o servidor basta executar o comando `yarn dev`.

## Dependências

- Express
- Nodemon
- Sucrase
- Sequelize
- Eslint
- Prettier
- Bcryptsjs
