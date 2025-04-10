// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Preto Estrelado", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Pavão", imagem: "./assets/images/tinta.jpg" },
    { nome: "Verde Musgo Metálico", imagem: "./assets/images/tinta.jpg" },
    { nome: "Roxo Barroco", imagem: "./assets/images/tinta.jpg" },
    { nome: "Vermelho Vinho Cintilante", imagem: "./assets/images/tinta.jpg" },
    { nome: "Dourado Envelhecido", imagem: "./assets/images/tinta.jpg" },
    { nome: "Prata Nebulosa", imagem: "./assets/images/tinta.jpg" },
    { nome: "Rosa Quartzo", imagem: "./assets/images/tinta.jpg" },
    { nome: "Azul Gelo Fractal", imagem: "./assets/images/tinta.jpg" },
    { nome: "Bronze Solar", imagem: "./assets/images/tinta.jpg" },
    { nome: "Âmbar Líquido", imagem: "./assets/images/tinta.jpg" },
    { nome: "Jade Cintilante", imagem: "./assets/images/tinta.jpg" },
    { nome: "Lápis-Lazúli", imagem: "./assets/images/tinta.jpg" },
    { nome: "Opala Rosa", imagem: "./assets/images/tinta.jpg" },
    { nome: "Mármore Carmin", imagem: "./assets/images/tinta.jpg" },
    { nome: "Roxo Cyber", imagem: "./assets/images/tinta.jpg" },
    { nome: "Grafite Cintilante", imagem: "./assets/images/tinta.jpg" },
    { nome: "Branco Pérola", imagem: "./assets/images/tinta.jpg" },
    { nome: "Amarelo Enxofre", imagem: "./assets/images/tinta.jpg" },
    { nome: "Laranja Aço", imagem: "./assets/images/tinta.jpg" }
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
