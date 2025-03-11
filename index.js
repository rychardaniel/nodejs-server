import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota de exemplo
app.get("/api", (req, res) => {
    res.json({ mensagem: "Bem-vindo à minha API!" });
});

// Rota com parâmetro
app.get("/api/usuario/:id", (req, res) => {
    const { id } = req.params;
    res.json({ id, nome: `Usuário ${id}` });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
