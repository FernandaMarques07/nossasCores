-- Criar banco de dados
CREATE DATABASE nossascores;
USE nossascores;
-- Tabela de Categorias (para tipos de acabamento e cores)
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);
INSERT INTO categorias (nome) VALUES 
("brilhantes"),
("foscas"),
("acetinadas"),
("semibrilhosas"),
("emborrachadas");
-- Tabela de Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    imagem_url VARCHAR(255),
    preco DECIMAL(10, 2) NOT NULL,
    categoria_nome VARCHAR(100),
    FOREIGN KEY (categoria_nome) REFERENCES categorias(nome)
);
INSERT INTO produtos (nome, imagem_url, preco, categoria_nome) VALUES
	("Brilho Celeste", "./assets/images/tinta.jpg", 68.90, "brilhantes"),
    ("Aurora Boreal", "./assets/images/tinta.jpg", 74.50, "brilhantes"),
    ("Estrela Cadente", "./assets/images/tinta.jpg", 59.90, "brilhantes"),
    ("Luar Prateado", "./assets/images/tinta.jpg", 79.90, "brilhantes"),
    ("Chuva de Ouro", "./assets/images/tinta.jpg", 82.00, "brilhantes"),
    ("Raios de Sol", "./assets/images/tinta.jpg", 53.40, "brilhantes"),
    ("Reflexo Solar", "./assets/images/tinta.jpg", 77.70, "brilhantes"),
    ("Dourado Místico", "./assets/images/tinta.jpg", 69.90, "brilhantes"),
    ("Cintilante Lunar", "./assets/images/tinta.jpg", 58.00, "brilhantes"),
    ("Raio Dourado", "./assets/images/tinta.jpg", 63.20, "brilhantes"),
    ("Brilho Estelar", "./assets/images/tinta.jpg", 85.50, "brilhantes"),
    ("Sol de Verão", "./assets/images/tinta.jpg", 49.90, "brilhantes"),
    ("Chama Radiante", "./assets/images/tinta.jpg", 87.10, "brilhantes"),
    ("Pérola Solar", "./assets/images/tinta.jpg", 66.60, "brilhantes"),
    ("Aurora Dourada", "./assets/images/tinta.jpg", 59.40, "brilhantes"),
    ("Flash de Sol", "./assets/images/tinta.jpg", 72.20, "brilhantes"),
    ("Brilho Mágico", "./assets/images/tinta.jpg", 55.50, "brilhantes"),
    ("Reflexo do Amanhecer", "./assets/images/tinta.jpg", 64.90, "brilhantes"),
    ("Cintilação Solar", "./assets/images/tinta.jpg", 79.30, "brilhantes"),
    ("Fulgor Estelar", "./assets/images/tinta.jpg", 84.90, "brilhantes"),
    ("Luz do Entardecer", "./assets/images/tinta.jpg", 51.60, "brilhantes"),
    ("Toque de Ouro", "./assets/images/tinta.jpg", 60.00, "brilhantes"),
    ("Sol Brilhante", "./assets/images/tinta.jpg", 71.00, "brilhantes"),
    ("Ouro Estelar", "./assets/images/tinta.jpg", 69.30, "brilhantes"),
    ("Reluzente Aurora", "./assets/images/tinta.jpg", 73.10, "brilhantes"),
    ("Dourado Solar", "./assets/images/tinta.jpg", 62.20, "brilhantes"),
    ("Luz de Cristal", "./assets/images/tinta.jpg", 55.80, "brilhantes"),
    ("Olhar Solar", "./assets/images/tinta.jpg", 68.40, "brilhantes"),
    ("Brilho do Sol", "./assets/images/tinta.jpg", 86.00, "brilhantes"),
    ("Reflexo Estelar", "./assets/images/tinta.jpg", 79.80, "brilhantes"),
    ("Luz Cintilante", "./assets/images/tinta.jpg", 54.40, "brilhantes"),
    ("Pôr do Sol", "./assets/images/tinta.jpg", 61.70, "brilhantes"),
    ("Neve Suave", "./assets/images/tinta.jpg", 61.50, "fosca"),
    ("Gelo Ártico", "./assets/images/tinta.jpg", 52.90, "fosca"),
    ("Branco Neve", "./assets/images/tinta.jpg", 58.40, "fosca"),
    ("Cinza Calmaria", "./assets/images/tinta.jpg", 55.60, "fosca"),
    ("Areia Fria", "./assets/images/tinta.jpg", 62.30, "fosca"),
    ("Branco Fosco", "./assets/images/tinta.jpg", 49.90, "fosca"),
    ("Céu Nublado", "./assets/images/tinta.jpg", 63.80, "fosca"),
    ("Algodão Seco", "./assets/images/tinta.jpg", 57.10, "fosca"),
    ("Gelo Polar", "./assets/images/tinta.jpg", 59.90, "fosca"),
    ("Cinza Neutro", "./assets/images/tinta.jpg", 50.60, "fosca"),
    ("Brisa Fosca", "./assets/images/tinta.jpg", 54.40, "fosca"),
    ("Nevoeiro", "./assets/images/tinta.jpg", 66.70, "fosca"),
    ("Pedra Clara", "./assets/images/tinta.jpg", 60.00, "fosca"),
    ("Gelo Urbano", "./assets/images/tinta.jpg", 56.20, "fosca"),
    ("Nuvem Fosca", "./assets/images/tinta.jpg", 68.90, "fosca"),
    ("Branco Ártico", "./assets/images/tinta.jpg", 53.00, "fosca"),
    ("Fosco Alpino", "./assets/images/tinta.jpg", 65.40, "fosca"),
    ("Gelo Nebuloso", "./assets/images/tinta.jpg", 69.10, "fosca"),
    ("Branco Pétala", "./assets/images/tinta.jpg", 47.90, "fosca"),
    ("Cimento Claro", "./assets/images/tinta.jpg", 67.70, "fosca"),
    ("Vento Suave", "./assets/images/tinta.jpg", 71.90, "fosca"),
    ("Areia Neve", "./assets/images/tinta.jpg", 60.50, "fosca"),
    ("Cinza Fosco", "./assets/images/tinta.jpg", 58.30, "fosca"),
    ("Sombra Clara", "./assets/images/tinta.jpg", 63.90, "fosca"),
    ("Gelo Acetinado", "./assets/images/tinta.jpg", 74.20, "fosca"),
    ("Lua Cheia", "./assets/images/tinta.jpg", 55.00, "fosca"),
    ("Gelo Inverno", "./assets/images/tinta.jpg", 59.00, "fosca"),
    ("Areia Nevada", "./assets/images/tinta.jpg", 70.60, "fosca"),
    ("Neve Clara", "./assets/images/tinta.jpg", 73.90, "fosca"),
    ("Cinza Sereno", "./assets/images/tinta.jpg", 61.00, "fosca"),
    ("Branco Pastel", "./assets/images/tinta.jpg", 69.30, "fosca"),
    ("Azul Noturno", "./assets/images/tinta.jpg", 66.50, "semibrilhosas"),
    ("Verde Amazônia", "./assets/images/tinta.jpg", 65.90, "semibrilhosas"),
    ("Azul Estelar", "./assets/images/tinta.jpg", 71.40, "semibrilhosas"),
    ("Marinho Sereno", "./assets/images/tinta.jpg", 68.20, "semibrilhosas"),
    ("Azul Eclipse", "./assets/images/tinta.jpg", 62.90, "semibrilhosas"),
    ("Azul Crepúsculo", "./assets/images/tinta.jpg", 73.10, "semibrilhosas"),
    ("Noite Profunda", "./assets/images/tinta.jpg", 67.70, "semibrilhosas"),
    ("Cobalto Brando", "./assets/images/tinta.jpg", 61.30, "semibrilhosas"),
    ("Mar Azul", "./assets/images/tinta.jpg", 69.50, "semibrilhosas"),
    ("Tempestade Azul", "./assets/images/tinta.jpg", 75.90, "semibrilhosas"),
    ("Azul Oceano", "./assets/images/tinta.jpg", 64.80, "semibrilhosas"),
    ("Azul Abissal", "./assets/images/tinta.jpg", 70.20, "semibrilhosas"),
    ("Azul Céu Noturno", "./assets/images/tinta.jpg", 65.40, "semibrilhosas"),
    ("Anil Intenso", "./assets/images/tinta.jpg", 66.10, "semibrilhosas"),
    ("Azul Luar", "./assets/images/tinta.jpg", 58.70, "semibrilhosas"),
    ("Tons de Azul", "./assets/images/tinta.jpg", 76.90, "semibrilhosas"),
    ("Azul Calmo", "./assets/images/tinta.jpg", 63.90, "semibrilhosas"),
    ("Azul Galáxia", "./assets/images/tinta.jpg", 68.60, "semibrilhosas"),
    ("Azul Névoa", "./assets/images/tinta.jpg", 59.40, "semibrilhosas"),
    ("Azul Cosmo", "./assets/images/tinta.jpg", 66.80, "semibrilhosas"),
    ("Azul Tarde", "./assets/images/tinta.jpg", 62.10, "semibrilhosas"),
    ("Azul Cinzento", "./assets/images/tinta.jpg", 54.90, "semibrilhosas"),
    ("Azul Sereno", "./assets/images/tinta.jpg", 60.90, "semibrilhosas"),
    ("Azul Gelo Marinho", "./assets/images/tinta.jpg", 61.70, "semibrilhosas"),
    ("Paredão Pro", "./assets/images/tinta.jpg", 72.00, "emborrachadas"),
    ("Proteção Máxima", "./assets/images/tinta.jpg", 73.20, "emborrachadas"),
    ("Paredão Forte", "./assets/images/tinta.jpg", 74.50, "emborrachadas"),
    ("Muro Flex", "./assets/images/tinta.jpg", 69.90, "emborrachadas"),
    ("Vedação Total", "./assets/images/tinta.jpg", 76.30, "emborrachadas"),
    ("Protege Max", "./assets/images/tinta.jpg", 70.80, "emborrachadas"),
    ("Parede Segura", "./assets/images/tinta.jpg", 68.00, "emborrachadas"),
    ("Revest Plus", "./assets/images/tinta.jpg", 71.20, "emborrachadas"),
    ("Tinta UltraFlex", "./assets/images/tinta.jpg", 75.60, "emborrachadas"),
    ("Super Muro", "./assets/images/tinta.jpg", 73.10, "emborrachadas"),
    ("Barreira Azul", "./assets/images/tinta.jpg", 67.90, "emborrachadas"),
    ("ResistMax", "./assets/images/tinta.jpg", 72.90, "emborrachadas"),
    ("Muro de Aço", "./assets/images/tinta.jpg", 74.10, "emborrachadas"),
    ("Blindagem Pro", "./assets/images/tinta.jpg", 70.40, "emborrachadas"),
    ("Pintura Selante", "./assets/images/tinta.jpg", 71.90, "emborrachadas"),
    ("Revest Flex", "./assets/images/tinta.jpg", 66.80, "emborrachadas"),
    ("Paredão Turbo", "./assets/images/tinta.jpg", 75.30, "emborrachadas"),
    ("Vedação Extra", "./assets/images/tinta.jpg", 69.70, "emborrachadas"),
    ("Resina Pro", "./assets/images/tinta.jpg", 72.20, "emborrachadas"),
    ("Fixa Parede", "./assets/images/tinta.jpg", 68.90, "emborrachadas"),
    ("Selante Muro", "./assets/images/tinta.jpg", 73.60, "emborrachadas"),
    ("Tinta Barreiro", "./assets/images/tinta.jpg", 71.10, "emborrachadas"),
    ("Muro Power", "./assets/images/tinta.jpg", 70.00, "emborrachadas"),
    ("Barreira Pro", "./assets/images/tinta.jpg", 69.10, "emborrachadas"),
    ("Pintura Defensora", "./assets/images/tinta.jpg", 76.90, "emborrachadas"),
    ("Paredão Z", "./assets/images/tinta.jpg", 72.60, "emborrachadas"),
    ("DefendeTudo", "./assets/images/tinta.jpg", 73.70, "emborrachadas"),
    ("Protetora Premium", "./assets/images/tinta.jpg", 75.00, "emborrachadas"),
    ("Super Vedação", "./assets/images/tinta.jpg", 74.40, "emborrachadas"),
    ("Tinta Muralha", "./assets/images/tinta.jpg", 70.90, "emborrachadas"),
     ("Toque Suave", "./assets/images/tinta.jpg", 68.00, "acetinadas"),
    ("Veludo Real", "./assets/images/tinta.jpg", 69.90, "acetinadas"),
    ("Toque Macio", "./assets/images/tinta.jpg", 69.90, "acetinadas"),
    ("Brilho Elegante", "./assets/images/tinta.jpg", 67.50, "acetinadas"),
    ("Seda Nobre", "./assets/images/tinta.jpg", 72.40, "acetinadas"),
    ("Veludo Luxo", "./assets/images/tinta.jpg", 71.00, "acetinadas"),
    ("Toque Leve", "./assets/images/tinta.jpg", 68.30, "acetinadas"),
    ("Tacto Premium", "./assets/images/tinta.jpg", 70.80, "acetinadas"),
    ("Seda Suave", "./assets/images/tinta.jpg", 66.90, "acetinadas"),
    ("Maciez Real", "./assets/images/tinta.jpg", 69.10, "acetinadas"),
    ("Aconchego", "./assets/images/tinta.jpg", 67.20, "acetinadas"),
    ("Toque de Seda", "./assets/images/tinta.jpg", 70.50, "acetinadas"),
    ("Acetinado Clássico", "./assets/images/tinta.jpg", 73.10, "acetinadas"),
    ("Liso Premium", "./assets/images/tinta.jpg", 71.90, "acetinadas"),
    ("Sedoso", "./assets/images/tinta.jpg", 68.40, "acetinadas"),
    ("Brilho Macio", "./assets/images/tinta.jpg", 72.60, "acetinadas"),
    ("Reflexo Suave", "./assets/images/tinta.jpg", 69.70, "acetinadas"),
    ("Sutil Brilho", "./assets/images/tinta.jpg", 67.80, "acetinadas"),
    ("Tinta Conforto", "./assets/images/tinta.jpg", 70.00, "acetinadas"),
    ("Toque Nobre", "./assets/images/tinta.jpg", 73.30, "acetinadas"),
    ("Maciez Intensa", "./assets/images/tinta.jpg", 71.50, "acetinadas"),
    ("Lustro Suave", "./assets/images/tinta.jpg", 68.20, "acetinadas"),
    ("Seda Delicada", "./assets/images/tinta.jpg", 70.20, "acetinadas"),
    ("Suavidade Total", "./assets/images/tinta.jpg", 72.00, "acetinadas"),
    ("Brilho Delicado", "./assets/images/tinta.jpg", 69.30, "acetinadas"),
    ("Toque Intenso", "./assets/images/tinta.jpg", 70.60, "acetinadas"),
    ("Acetinado Suave", "./assets/images/tinta.jpg", 66.70, "acetinadas"),
    ("Veludo Clássico", "./assets/images/tinta.jpg", 71.70, "acetinadas");
    

-- Tabela de Usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    senha VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE PROCEDURE cadastrarUser(
    IN p_nome VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_telefone VARCHAR(20),
    IN p_endereco VARCHAR(255),
    IN p_senha VARCHAR(255)
)
BEGIN
    INSERT INTO usuarios (nome, email, telefone, endereco, senha)
    VALUES (p_nome, p_email, p_telefone, p_endereco, p_senha);
END //

DELIMITER ;

-- Tabela de Carrinho de Compras
CREATE TABLE carrinho_compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    produto_id INT,
    quantidade INT DEFAULT 1,
    preco DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Tabela de Pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Em Andamento', -- Status: 'Em Andamento', 'Concluído', 'Cancelado'
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela de Pagamentos
CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    metodo_pagamento VARCHAR(50) NOT NULL, -- Métodos de pagamento: 'Cartão de Crédito', 'Cartão de Débito', 'Pix', 'Boleto Bancário'
    status VARCHAR(20) DEFAULT 'Pendente', -- Status do pagamento: 'Pendente', 'Pago', 'Falhou'
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
);
