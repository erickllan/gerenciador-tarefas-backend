const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/tasks', controller.listar);
router.post('/tasks', controller.cadastrar);
router.put('/tasks/:id', controller.editar);
router.delete('/tasks/:id', controller.excluir);

module.exports = router;