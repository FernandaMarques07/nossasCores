// Lista de produtos com imagens, nomes e preços
const produtos = [
    { nome: "Coral Elegance", imagem: "./assets/images/tinta.jpg", preco: 60.00 },
    { nome: "Branco Neve", imagem: "./assets/images/tinta.jpg", preco: 55.00 },
    { nome: "Azul Céu Claro", imagem: "./assets/images/tinta.jpg", preco: 65.00 },
    { nome: "Verde Floresta", imagem: "./assets/images/tinta.jpg", preco: 70.00 },
    { nome: "Amarelo Sol", imagem: "./assets/images/tinta.jpg", preco: 58.00 },
    { nome: "Cinza Urbano", imagem: "./assets/images/tinta.jpg", preco: 62.00 },
    { nome: "Vermelho Paixão", imagem: "./assets/images/tinta.jpg", preco: 67.00 },
    { nome: "Bege Areia", imagem: "./assets/images/tinta.jpg", preco: 59.00 },
    { nome: "Rosa Chic", imagem: "./assets/images/tinta.jpg", preco: 63.00 },
    { nome: "Preto Intenso", imagem: "./assets/images/tinta.jpg", preco: 64.00 },
    { nome: "Lilás Sereno", imagem: "./assets/images/tinta.jpg", preco: 61.00 },
    { nome: "Laranja Tropical", imagem: "./assets/images/tinta.jpg", preco: 66.00 },
    { nome: "Pêssego Doce", imagem: "./assets/images/tinta.jpg", preco: 57.00 },
    { nome: "Azul Royal", imagem: "./assets/images/tinta.jpg", preco: 68.00 },
    { nome: "Branco Perolado", imagem: "./assets/images/tinta.jpg", preco: 72.00 },
    { nome: "Verde Menta", imagem: "./assets/images/tinta.jpg", preco: 63.00 },
    { nome: "Ambar Dourado", imagem: "./assets/images/tinta.jpg", preco: 69.00 },
    { nome: "Caramelo Doce", imagem: "./assets/images/tinta.jpg", preco: 64.00 },
    { nome: "Cinza Prata", imagem: "./assets/images/tinta.jpg", preco: 65.00 },
    { nome: "Vinho Royale", imagem: "./assets/images/tinta.jpg", preco: 70.00 }
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
