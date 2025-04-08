// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Branco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Preto", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vermelho Vinho", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Royal", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Esmeralda", imagem: "./assets/images/tinta.jpg" },
    { nome: "Amarelo Ouro", imagem: "./assets/images/tinta.jpg" },
    { nome: "Rosa Pó", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cinza Pérola", imagem: "./assets/images/tinta.jpg" },
    { nome: "Lilás Suave", imagem: "./assets/images/tinta.jpg" },
    { nome: "Laranja Coral", imagem: "./assets/images/tinta.jpg" },
    { nome: "Prata", imagem: "./assets/images/tinta.jpg" },
    { nome: "Ouro Velho", imagem: "./assets/images/tinta.jpg" },
    { nome: "Bronze", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cobre Rosado", imagem: "./assets/images/tinta.jpg" },
    { nome: "Grafite", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Bebê", imagem: "./assets/images/tinta.jpg" },
    { nome: "Lavanda", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Menta", imagem: "./assets/images/tinta.jpg" },
    { nome: "Bege Nuvem", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vermelho Rubi", imagem: "./assets/images/tinta.jpg" }
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

