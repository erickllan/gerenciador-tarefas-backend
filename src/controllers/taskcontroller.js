let tarefas = require('../models/taskModel');

// Envia todas as tarefas da lista para o aplicativo
exports.listar = (req, res) => res.json(tarefas);

// Cria uma tarefa nova com ID e o título enviado pelo app
exports.cadastrar = (req, res) => {
  const nova = { id: Date.now().toString(), title: req.body.title };
  tarefas.push(nova); // Coloca a nova tarefa na lista
  res.json(nova); // Devolve a tarefa criada para o app
};

//  Procura a tarefa pelo ID e muda o título dela
exports.editar = (req, res) => {
  const t = tarefas.find(item => item.id === req.params.id);
  if (t) t.title = req.body.title; // Se achou, atualiza o texto
  res.json(t);
};

//  Procura a posição da tarefa na lista e remove ela
exports.excluir = (req, res) => {
  const index = tarefas.findIndex(item => item.id === req.params.id);
  if (index !== -1) tarefas.splice(index, 1); // Se achou, apaga da lista
  res.json({ mensagem: "Ok" });
};