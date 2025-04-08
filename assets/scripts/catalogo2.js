// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Branco Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Preto Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vermelho Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Amarelo Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Bebê", imagem: "./assets/images/tinta.jpg" },
    { nome: "Violeta Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Laranja Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Escuro Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Claro Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Escuro", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cinza Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Lilás Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Bordô Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Royal Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Bebê Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Escuro Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Violeta Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Rosa Opaco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Bege Fosco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Branco Fosco", imagem: "./assets/images/tinta.jpg" }
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

