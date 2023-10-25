# Documentação da API
* abrir no terminal do gitbash
Definir local do computador para criar a pasta do projeto
***
mkdir Nome_do_Projeto
***
Acessar a pasta do projeto
***
cd Nome_Projeto
***
Abrir pasta no vscode
***
code .
***
Iniciar o gerenciador de pacotes Node
***
npm init -y
***
Criar arquivo .gitignore: arquivos e pastas que não vão para o github
***
touch .gitignore
***
Criar arquivo .env: armazenará as variáveis do ambiente
***
touch .env
***
instalar pacotes da API
***
npm i axpress nodemom dotenv mysql2
***
* express: será o servidor da api
* nodmon: atualizar os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente

informar arquivos e pastas no .gitignore
***
node_modules
.env
***
Criar pasta src para estrutura do projeto
***
mkdir src
***
Criar arquivo server.js na pasta src
***
touch src/server.js
***
Configurar o servidor
***
// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();
// Importar um pacote dotenv
const dotenv = require('dotenv').config();
// defnir a porta do servidor
const PORT = process.env.PORT || 3005;

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
***

Criar comando para o servidor
***
"start":"nodemon src/server.js"
***

Rodar o comando no terminal com GitBash
***
npm run star
***

## Criar estrutura para o projeto

Criar arquivo app.js na pasta src
```
touch src/app.js
```

## Rodar o comando 'npm i' sempre que fizer um clone do GitHub

## Criar o arquivo .env e o .env.example

```
touch .env
```
* Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
```
touch .env.example
```

* Criar pasta routes
```
mkdir routes
```
* Criar arquivo crudRouter.js dentro da pasta routes
```
nano crudRouter.js
```
### Ctrl + O: Salvar o arquivo
### Enter: Confirmar nome do arquivo
### Ctrl + X: Fechar o arquivo

* Digitar o código no arquivo criado
```
// Importar pacote do express
const express = require('express');

/// Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na variavel Router
const router = Router();
// Importar função do controller para acessar as funções
const { 
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
} = require('../controllers/controller')

router.get('/listar', listarDados);

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados)

module.exports = router;
```

function listarDados(request, response) {
    response.send('Retorno de lista de informações de banco de dados');
}

function gravarDados(request, response) {
    response.send('Metodo utilizado para salvar informações!');
}

function atualizarDados(request, response) {
    response.send('Metodo utilizado para salvar informações!');
}

function deletarDados(request, response) {
    response.send('Metodo utilizado para salvar informações!');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados,
}
```

<hr>

### Configurar estrutura de conexão com banco de dados

### Criar pasta 'config' dentro da pasta 'src'
```
mkdir src/config
```
### Criar arquivo 'db.js' dentro da pasta 'config'
```
touch src/config/db.js
```
### Colar o código no arquivo 'db.js'
```
// Importanto o pacote de conexão com banco de dados
const mysql = require('mysql2');
// Importar variaveis de conexão do banco
require('dotenv').config();

console.log(process.env.DB_HOST);

const connection = mysql.createConnection({
    host: process.env.DB_HOSt,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    datebase: process.env.DB_DATABASE
});

connection.connect( (err) => {
    if (err) {
        console.log('Erro de conexão: ' + err);
    } else {
        console.log('Mysql Connected!');
    }
});

module.exports = connection;
```