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

// Função para renderizar os produtos no catálogo
function renderCatalogo() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ""; // Limpa o conteúdo do catálogo antes de adicionar os itens

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        // Monta o HTML para o produto
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.nome}</p>
            <div class="estrelas">
                ${criarEstrelas(index)} <!-- Adiciona as estrelas para o produto -->
            </div>
        `;
        
        catalogo.appendChild(produtoDiv);
    });
}

// Função para criar as estrelas para cada produto
function criarEstrelas(produtoIndex) {
    let estrelasHTML = '';
    
    // Adiciona 5 estrelas, sendo que a estrela "ativa" é baseada no índice do produto
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

// Inicializa o catálogo
renderCatalogo();

// Função para renderizar os produtos no catálogo
function renderCatalogo() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ""; // Limpa o conteúdo do catálogo antes de adicionar os itens

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        
        // Monta o HTML para o produto
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.nome}</p>
            <div class="estrelas">
                ${criarEstrelas(index)} <!-- Adiciona as estrelas para o produto -->
            </div>
            <button class="btn-carrinho" onclick="adicionarAoCarrinho(${index})">
                Adicionar ao Carrinho
            </button>
        `;
        
        catalogo.appendChild(produtoDiv);
    });
}

