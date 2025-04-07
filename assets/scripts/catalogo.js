// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Coral Elegance", imagem: "./assets/images/tinta.jpg" },
    { nome: "Branco Neve", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Céu Claro", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Floresta", imagem: "./assets/images/tinta.jpg" },
    { nome: "Amarelo Sol", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cinza Urbano", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vermelho Paixão", imagem: "./assets/images/tinta.jpg" },
    { nome: "Bege Areia", imagem: "./assets/images/tinta.jpg" },
    { nome: "Rosa Chic", imagem: "./assets/images/tinta.jpg" },
    { nome: "Preto Intenso", imagem: "./assets/images/tinta.jpg" },
    { nome: "Lilás Sereno", imagem: "./assets/images/tinta.jpg" },
    { nome: "Laranja Tropical", imagem: "./assets/images/tinta.jpg" },
    { nome: "Pêssego Doce", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Royal", imagem: "./assets/images/tinta.jpg" },
    { nome: "Branco Perolado", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Menta", imagem: "./assets/images/tinta.jpg" },
    { nome: "Ambar Dourado", imagem: "./assets/images/tinta.jpg" },
    { nome: "Caramelo Doce", imagem: "./assets/images/tinta.jpg" },
    { nome: "Cinza Prata", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vinho Royale", imagem: "./assets/images/tinta.jpg" }
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
