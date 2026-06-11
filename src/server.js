const express = require('express');
const cors = require('cors');
const rotas = require('./routes/taskRoutes');

const app = express();

app.use(cors()); // Permite que o app de celular se conecte aqui
app.use(express.json()); // Permite que o servidor entenda textos em formato JSON

app.use('/api', rotas); // Coloca o prefixo /api antes de todas as rotas

// O servidor vai rodar e ficar esperando conexões na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando com sucesso na porta 3000!");
});