// Importar a conexão com o banco de dados
const connection = require('../config/db');

// Função async: realiza uma requisição des forma paralela ao sistema
// request: nesta variável recuperamos os dados enviados na requisição
// response: tem a responsabilidade de retornar as informações para quem requisitou
async function listarUsuarios(request, response) {
    // Variável para executar a consulta no banco

const params = Array(
    request.body.nome,
    request.body.dt_nascimento,
    request.body.time_do_coracao
);

const query = 'SELECT * FROM alunos;';

// err: retorna erros na execução
// results: retorna a ação realizada com sucesso
    connection.query(query, (err, results) => {
        if(results) {
            response
            .status(200)
            .json({
                sucess: true,
                message: "Sucesso! Lista de alunos",
                data: results
            });
        }else {
            response
            .status(200)
            .json({
                sucess: true,
                message: "Ooops! Não foi pussível listar as informações solicitadas!",
                data: err
            });
        }
    });
}

async function cadastrarAluno(request, response) {
// 1° passo: recuperar varáveis
// 2° passo: montar query para inserir os dados
// 3° passo: tentar executar a ação no banco
// 4° passo: definir retornos da requisição

// Recuperando dados da requisição
const params = Array(
    request.body.nome,
    request.body.dt_nascimente,
    request.body.time_do_coracao
);


const query = 'INSERT INTO alunos(nome, dt_nascimento, time_do_coracao) values(?, ?, ?);';

connection.query(query, params, (err, results) => {
    if (results) {
        response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso! Auno cadastrado",
                data: results
            })
    }
})
}

async function updateAlunos(request, response) {
    // Comando Sql
    const query = "UPDATE alunos = ?, dt_nascimento = ?, time_do_coracao = ? WHERE id = ?";

    const params = Array(
        request.body.nome,
        request.body.dt_nascimente,
        request.body.time_do_coracao,
        request.params.id
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno atualizado com sucesso",
                    data: results
                })
        }
    })
}

async function deleteAlunos(request, response) {
    // Comando Sql
    const query = "UPDATE alunos = ?, dt_nascimento = ?, time_do_coracao = ? WHERE id = ?";

    const params = Array(
        request.body.nome,
        request.body.dt_nascimente,
        request.body.time_do_coracao,
        request.params.id
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno atualizado com sucesso",
                    data: results
                })
        }
    })
}

async function  selecionarAlunosId(request, response) {
    // Comando Sql
    const query = "UPDATE alunos = ?, dt_nascimento = ?, time_do_coracao = ? WHERE id = ?";

    const params = Array(
        request.body.nome,
        request.body.dt_nascimente,
        request.body.time_do_coracao,
        request.params.id
    )

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Aluno atualizado com sucesso",
                    data: results
                })
        }
    })
}

module.exports = {
    listarUsuarios,
    cadastrarAluno,
    updateAlunos,
    deleteAlunos,
    selecionarAlunosId
};

///terminar código