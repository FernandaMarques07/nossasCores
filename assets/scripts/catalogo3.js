// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Azul França", imagem: "./assets/images/tinta.jpg" },
    { nome: "Branco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Chuva de Prata", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cogumelo Japonês", imagem: "./assets/images/tinta.jpg" },
    { nome: "Concreto", imagem: "./assets/images/tinta.jpg" },
    { nome: "Pavão", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cinza Médio", imagem: "./assets/images/tinta.jpg" },
    { nome: "Areia", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Cobalto", imagem: "./assets/images/tinta.jpg" },
    { nome: "Ocre Ouro", imagem: "./assets/images/tinta.jpg" },
    { nome: "Palha", imagem: "./assets/images/tinta.jpg" },
    { nome: "Telha", imagem: "./assets/images/tinta.jpg" },
    { nome: "Marrom-Luxo", imagem: "./assets/images/tinta.jpg" },
    { nome: "Marfim Nobre", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Turquesa", imagem: "./assets/images/tinta.jpg" },
    { nome: "Laranja Neon", imagem: "./assets/images/tinta.jpg" },
    { nome: "Dourado Brilhante", imagem: "./assets/images/tinta.jpg" },
    { nome: "Prata Metálico", imagem: "./assets/images/tinta.jpg" },
    { nome: "Grafite", imagem: "./assets/images/tinta.jpg" },
    { nome: "Pérola Iridescente", imagem: "./assets/images/tinta.jpg" }
];

// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(index) {
    const produto = produtos[index];
    const produtoNoCarrinho = carrinho.find(item => item.nome === produto.nome);
    
    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

// Função para criar as estrelas para cada produto
function criarEstrelas(produtoIndex) {
    let estrelasHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        estrelasHTML += `
            <span class="estrela" onclick="classificarProduto(${produtoIndex}, ${i})">&#9733;</span>
        `;
    }

    return estrelasHTML;
}

// Função para classificar um produto
function classificarProduto(produtoIndex, classificacao) {
    alert(`Produto ${produtos[produtoIndex].nome} classificado com ${classificacao} estrelas.`);
}

// Função para renderizar os produtos no catálogo
function renderCatalogo() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = "";

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.nome}</p>
            <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
            <div class="estrelas">
                ${criarEstrelas(index)}
            </div>
            <button class="btn-carrinho" onclick="adicionarAoCarrinho(${index})">
                Adicionar ao Carrinho
            </button>
        `;
        
        catalogo.appendChild(produtoDiv);
    });
}

// Inicializa o catálogo
renderCatalogo();
