// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Azul Turquesa", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Limão", imagem: "./assets/images/tinta.jpg" },
    { nome: "Amarelo Ouro", imagem: "./assets/images/tinta.jpg" },
    { nome: "Rosa Choque", imagem: "./assets/images/tinta.jpg" },
    { nome: "Laranja Coral", imagem: "./assets/images/tinta.jpg" },
    { nome: "Roxo Lavanda", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vermelho Framboesa", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Menta", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Celeste", imagem: "./assets/images/tinta.jpg" },
    { nome: "Amarelo Mostarda", imagem: "./assets/images/tinta.jpg" },
    { nome: "Salmão", imagem: "./assets/images/tinta.jpg" },
    { nome: "Pêssego", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Água", imagem: "./assets/images/tinta.jpg" },
    { nome: "Lilás", imagem: "./assets/images/tinta.jpg" },
    { nome: "Magenta", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Piscina", imagem: "./assets/images/tinta.jpg" },
    { nome: "Rosa Papoula", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cobre", imagem: "./assets/images/tinta.jpg" },
    { nome: "Violeta", imagem: "./assets/images/tinta.jpg" },
    { nome: "Borgonha Brilhante", imagem: "./assets/images/tinta.jpg" }
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

