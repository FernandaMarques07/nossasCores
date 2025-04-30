const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const session = require('express-session');

app.use(session({
    secret: 'meusegredoseguro',  // Pode ser qualquer palavra secreta
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'aluno', // Se for para produção use uma forma para mascarar
    database: 'nossascores',
    port: 3302
});

// Conectar ao banco de dados
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco. ', err);
        return;
    }
    console.log('Conectado ao banco.');
});

// Configurar o body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Servir o formulário HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'cadastro.html'));
});

// Rota para cadastrar usuário
app.post('/cadastrarUser', (req, res) => {
    const { nome, email, telefone, endereco, senha } = req.body;

    // Verificar se o e-mail já existe no banco
    const checkEmailSql = 'SELECT * FROM usuarios WHERE email = ?';
    connection.query(checkEmailSql, [email], (err, results) => {
        if (err) {
            console.error('Erro ao verificar e-mail:', err);
            return res.status(500).json({ success: false, message: 'Erro ao verificar e-mail' });
        }

        if (results.length > 0) {
            return res.status(400).json({ success: false, message: 'Este e-mail já está cadastrado.' });
        }

        // Se não existir, cadastre o usuário
        const sql = 'CALL cadastrarUser(?, ?, ?, ?, ?)';
        connection.query(sql, [nome, email, telefone, endereco, senha], (err, results) => {
            if (err) {
                console.error('Erro ao cadastrar Usuário:', err);
                res.status(500).json({ success: false, message: 'Erro ao cadastrar Usuário' });
                return;
            }
            console.log('Usuário cadastrado com sucesso no banco!');
            res.status(200).json({ success: true, message: 'Cadastro realizado com sucesso!' });
        });
    });
});

// Rota para exibir página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Rota para fazer login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    connection.query(sql, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao verificar login:', err);
            return res.status(500).json({ success: false, message: 'Erro interno no servidor' });
        }

        if (results.length > 0) {
            // Salva o usuário logado na sessão
            req.session.usuario = {
                id: results[0].id,
                nome: results[0].nome,
                email: results[0].email,
                telefone: results[0].telefone,
                endereco: results[0].endereco
            };
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: 'E-mail ou senha incorretos' });
        }
    });
});

// Outras páginas
app.get('/principal', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para o perfil do usuário
app.get('/perfil', (req, res) => {
    if (!req.session.usuario) {
        return res.redirect('/login');
    }

    const usuario = req.session.usuario;
    res.render('perfil', { usuario });
});

app.get('/semibrilhosas', (req, res) => {
    res.sendFile(path.join(__dirname, 'semibrilhosas.html'));
});

app.get('/foscas', (req, res) => {
    res.sendFile(path.join(__dirname, 'foscas.html'));
});

app.get('/emborrachadas', (req, res) => {
    res.sendFile(path.join(__dirname, 'emborrachadas.html'));
});

app.get('/brilhantes', (req, res) => {
    res.sendFile(path.join(__dirname, 'brilhantes.html'));
});

app.get('/acetinadas', (req, res) => {
    res.sendFile(path.join(__dirname, 'acetinadas.html'));
});

app.get('/carrinho', (req, res) => {
    res.sendFile(path.join(__dirname, 'compras.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
