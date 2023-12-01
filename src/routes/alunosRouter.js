//
const { Router } = require('express')
const router    = Router();

// Importar funções para as rotas
const {
    listarUsuarios,
    cadastrarAluno,
    updateAlunos,
    deleteAlunos, 
    
} = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);
router.post('/aluno/create', cadastrarAluno);
router.put('/aluno/apdate/:id', updateAlunos);
router.delete('/aluno/apdate/:id', deleteAlunos);

module.exports = router;
