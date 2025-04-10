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
