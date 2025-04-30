// Lista de produtos com categorias
const produtos = [
    // Brilhantes
    { nome: "Brilho Celeste", imagem: "./assets/images/tinta.jpg", preco: 68.90, categoria: "brilhantes" },
    { nome: "Aurora Boreal", imagem: "./assets/images/tinta.jpg", preco: 74.50, categoria: "brilhantes" },
    { nome: "Estrela Cadente", imagem: "./assets/images/tinta.jpg", preco: 59.90, categoria: "brilhantes" },
    { nome: "Luar Prateado", imagem: "./assets/images/tinta.jpg", preco: 79.90, categoria: "brilhantes" },
    { nome: "Chuva de Ouro", imagem: "./assets/images/tinta.jpg", preco: 82.00, categoria: "brilhantes" },
    { nome: "Raios de Sol", imagem: "./assets/images/tinta.jpg", preco: 53.40, categoria: "brilhantes" },
    { nome: "Reflexo Solar", imagem: "./assets/images/tinta.jpg", preco: 77.70, categoria: "brilhantes" },
    { nome: "Dourado Místico", imagem: "./assets/images/tinta.jpg", preco: 69.90, categoria: "brilhantes" },
    { nome: "Cintilante Lunar", imagem: "./assets/images/tinta.jpg", preco: 58.00, categoria: "brilhantes" },
    { nome: "Raio Dourado", imagem: "./assets/images/tinta.jpg", preco: 63.20, categoria: "brilhantes" },
    { nome: "Brilho Estelar", imagem: "./assets/images/tinta.jpg", preco: 85.50, categoria: "brilhantes" },
    { nome: "Sol de Verão", imagem: "./assets/images/tinta.jpg", preco: 49.90, categoria: "brilhantes" },
    { nome: "Chama Radiante", imagem: "./assets/images/tinta.jpg", preco: 87.10, categoria: "brilhantes" },
    { nome: "Pérola Solar", imagem: "./assets/images/tinta.jpg", preco: 66.60, categoria: "brilhantes" },
    { nome: "Aurora Dourada", imagem: "./assets/images/tinta.jpg", preco: 59.40, categoria: "brilhantes" },
    { nome: "Flash de Sol", imagem: "./assets/images/tinta.jpg", preco: 72.20, categoria: "brilhantes" },
    { nome: "Brilho Mágico", imagem: "./assets/images/tinta.jpg", preco: 55.50, categoria: "brilhantes" },
    { nome: "Reflexo do Amanhecer", imagem: "./assets/images/tinta.jpg", preco: 64.90, categoria: "brilhantes" },
    { nome: "Cintilação Solar", imagem: "./assets/images/tinta.jpg", preco: 79.30, categoria: "brilhantes" },
    { nome: "Fulgor Estelar", imagem: "./assets/images/tinta.jpg", preco: 84.90, categoria: "brilhantes" },
    { nome: "Luz do Entardecer", imagem: "./assets/images/tinta.jpg", preco: 51.60, categoria: "brilhantes" },
    { nome: "Toque de Ouro", imagem: "./assets/images/tinta.jpg", preco: 60.00, categoria: "brilhantes" },
    { nome: "Sol Brilhante", imagem: "./assets/images/tinta.jpg", preco: 71.00, categoria: "brilhantes" },
    { nome: "Ouro Estelar", imagem: "./assets/images/tinta.jpg", preco: 69.30, categoria: "brilhantes" },
    { nome: "Reluzente Aurora", imagem: "./assets/images/tinta.jpg", preco: 73.10, categoria: "brilhantes" },
    { nome: "Dourado Solar", imagem: "./assets/images/tinta.jpg", preco: 62.20, categoria: "brilhantes" },
    { nome: "Luz de Cristal", imagem: "./assets/images/tinta.jpg", preco: 55.80, categoria: "brilhantes" },
    { nome: "Olhar Solar", imagem: "./assets/images/tinta.jpg", preco: 68.40, categoria: "brilhantes" },
    { nome: "Brilho do Sol", imagem: "./assets/images/tinta.jpg", preco: 86.00, categoria: "brilhantes" },
    { nome: "Reflexo Estelar", imagem: "./assets/images/tinta.jpg", preco: 79.80, categoria: "brilhantes" },
    { nome: "Luz Cintilante", imagem: "./assets/images/tinta.jpg", preco: 54.40, categoria: "brilhantes" },
    { nome: "Pôr do Sol", imagem: "./assets/images/tinta.jpg", preco: 61.70, categoria: "brilhantes" },
   
    // Fosca
    { nome: "Neve Suave", imagem: "./assets/images/tinta.jpg", preco: 61.50, categoria: "fosca" },
    { nome: "Gelo Ártico", imagem: "./assets/images/tinta.jpg", preco: 52.90, categoria: "fosca" },
    { nome: "Branco Neve", imagem: "./assets/images/tinta.jpg", preco: 58.40, categoria: "fosca" },
    { nome: "Cinza Calmaria", imagem: "./assets/images/tinta.jpg", preco: 55.60, categoria: "fosca" },
    { nome: "Areia Fria", imagem: "./assets/images/tinta.jpg", preco: 62.30, categoria: "fosca" },
    { nome: "Branco Fosco", imagem: "./assets/images/tinta.jpg", preco: 49.90, categoria: "fosca" },
    { nome: "Céu Nublado", imagem: "./assets/images/tinta.jpg", preco: 63.80, categoria: "fosca" },
    { nome: "Algodão Seco", imagem: "./assets/images/tinta.jpg", preco: 57.10, categoria: "fosca" },
    { nome: "Gelo Polar", imagem: "./assets/images/tinta.jpg", preco: 59.90, categoria: "fosca" },
    { nome: "Cinza Neutro", imagem: "./assets/images/tinta.jpg", preco: 50.60, categoria: "fosca" },
    { nome: "Brisa Fosca", imagem: "./assets/images/tinta.jpg", preco: 54.40, categoria: "fosca" },
    { nome: "Nevoeiro", imagem: "./assets/images/tinta.jpg", preco: 66.70, categoria: "fosca" },
    { nome: "Pedra Clara", imagem: "./assets/images/tinta.jpg", preco: 60.00, categoria: "fosca" },
    { nome: "Gelo Urbano", imagem: "./assets/images/tinta.jpg", preco: 56.20, categoria: "fosca" },
    { nome: "Nuvem Fosca", imagem: "./assets/images/tinta.jpg", preco: 68.90, categoria: "fosca" },
    { nome: "Branco Ártico", imagem: "./assets/images/tinta.jpg", preco: 53.00, categoria: "fosca" },
    { nome: "Fosco Alpino", imagem: "./assets/images/tinta.jpg", preco: 65.40, categoria: "fosca" },
    { nome: "Gelo Nebuloso", imagem: "./assets/images/tinta.jpg", preco: 69.10, categoria: "fosca" },
    { nome: "Branco Pétala", imagem: "./assets/images/tinta.jpg", preco: 47.90, categoria: "fosca" },
    { nome: "Cimento Claro", imagem: "./assets/images/tinta.jpg", preco: 67.70, categoria: "fosca" },
    { nome: "Vento Suave", imagem: "./assets/images/tinta.jpg", preco: 71.90, categoria: "fosca" },
    { nome: "Areia Neve", imagem: "./assets/images/tinta.jpg", preco: 60.50, categoria: "fosca" },
    { nome: "Cinza Fosco", imagem: "./assets/images/tinta.jpg", preco: 58.30, categoria: "fosca" },
    { nome: "Sombra Clara", imagem: "./assets/images/tinta.jpg", preco: 63.90, categoria: "fosca" },
    { nome: "Gelo Acetinado", imagem: "./assets/images/tinta.jpg", preco: 74.20, categoria: "fosca" },
    { nome: "Lua Cheia", imagem: "./assets/images/tinta.jpg", preco: 55.00, categoria: "fosca" },
    { nome: "Gelo Inverno", imagem: "./assets/images/tinta.jpg", preco: 59.00, categoria: "fosca" },
    { nome: "Areia Nevada", imagem: "./assets/images/tinta.jpg", preco: 70.60, categoria: "fosca" },
    { nome: "Neve Clara", imagem: "./assets/images/tinta.jpg", preco: 73.90, categoria: "fosca" },
    { nome: "Cinza Sereno", imagem: "./assets/images/tinta.jpg", preco: 61.00, categoria: "fosca" },
    { nome: "Branco Pastel", imagem: "./assets/images/tinta.jpg", preco: 69.30, categoria: "fosca" },
    
    // Semibrilhosas
    { nome: "Azul Noturno", imagem: "./assets/images/tinta.jpg", preco: 66.50, categoria: "semibrilhosas" },
    { nome: "Verde Amazônia", imagem: "./assets/images/tinta.jpg", preco: 65.90, categoria: "semibrilhosas" },
    { nome: "Azul Estelar", imagem: "./assets/images/tinta.jpg", preco: 71.40, categoria: "semibrilhosas" },
    { nome: "Marinho Sereno", imagem: "./assets/images/tinta.jpg", preco: 68.20, categoria: "semibrilhosas" },
    { nome: "Azul Eclipse", imagem: "./assets/images/tinta.jpg", preco: 62.90, categoria: "semibrilhosas" },
    { nome: "Azul Crepúsculo", imagem: "./assets/images/tinta.jpg", preco: 73.10, categoria: "semibrilhosas" },
    { nome: "Noite Profunda", imagem: "./assets/images/tinta.jpg", preco: 67.70, categoria: "semibrilhosas" },
    { nome: "Cobalto Brando", imagem: "./assets/images/tinta.jpg", preco: 61.30, categoria: "semibrilhosas" },
    { nome: "Mar Azul", imagem: "./assets/images/tinta.jpg", preco: 69.50, categoria: "semibrilhosas" },
    { nome: "Tempestade Azul", imagem: "./assets/images/tinta.jpg", preco: 75.90, categoria: "semibrilhosas" },
    { nome: "Azul Oceano", imagem: "./assets/images/tinta.jpg", preco: 64.80, categoria: "semibrilhosas" },
    { nome: "Azul Abissal", imagem: "./assets/images/tinta.jpg", preco: 70.20, categoria: "semibrilhosas" },
    { nome: "Azul Céu Noturno", imagem: "./assets/images/tinta.jpg", preco: 65.40, categoria: "semibrilhosas" },
    { nome: "Anil Intenso", imagem: "./assets/images/tinta.jpg", preco: 66.10, categoria: "semibrilhosas" },
    { nome: "Azul Luar", imagem: "./assets/images/tinta.jpg", preco: 58.70, categoria: "semibrilhosas" },
    { nome: "Tons de Azul", imagem: "./assets/images/tinta.jpg", preco: 76.90, categoria: "semibrilhosas" },
    { nome: "Azul Calmo", imagem: "./assets/images/tinta.jpg", preco: 63.90, categoria: "semibrilhosas" },
    { nome: "Azul Galáxia", imagem: "./assets/images/tinta.jpg", preco: 68.60, categoria: "semibrilhosas" },
    { nome: "Azul Névoa", imagem: "./assets/images/tinta.jpg", preco: 59.40, categoria: "semibrilhosas" },
    { nome: "Azul Cosmo", imagem: "./assets/images/tinta.jpg", preco: 66.80, categoria: "semibrilhosas" },
    { nome: "Azul Tarde", imagem: "./assets/images/tinta.jpg", preco: 62.10, categoria: "semibrilhosas" },
    { nome: "Azul Cinzento", imagem: "./assets/images/tinta.jpg", preco: 54.90, categoria: "semibrilhosas" },
    { nome: "Azul Sereno", imagem: "./assets/images/tinta.jpg", preco: 60.90, categoria: "semibrilhosas" },
    { nome: "Azul Gelo Marinho", imagem: "./assets/images/tinta.jpg", preco: 61.70, categoria: "semibrilhosas"},

    // Emborrachadas
    { nome: "Paredão Pro", imagem: "./assets/images/tinta.jpg", preco: 72.00, categoria: "emborrachadas" },
    { nome: "Proteção Máxima", imagem: "./assets/images/tinta.jpg", preco: 73.20, categoria: "emborrachadas" },
    { nome: "Paredão Forte", imagem: "./assets/images/tinta.jpg", preco: 74.50, categoria: "emborrachadas" },
    { nome: "Muro Flex", imagem: "./assets/images/tinta.jpg", preco: 69.90, categoria: "emborrachadas" },
    { nome: "Vedação Total", imagem: "./assets/images/tinta.jpg", preco: 76.30, categoria: "emborrachadas" },
    { nome: "Protege Max", imagem: "./assets/images/tinta.jpg", preco: 70.80, categoria: "emborrachadas" },
    { nome: "Parede Segura", imagem: "./assets/images/tinta.jpg", preco: 68.00, categoria: "emborrachadas" },
    { nome: "Revest Plus", imagem: "./assets/images/tinta.jpg", preco: 71.20, categoria: "emborrachadas" },
    { nome: "Tinta UltraFlex", imagem: "./assets/images/tinta.jpg", preco: 75.60, categoria: "emborrachadas" },
    { nome: "Super Muro", imagem: "./assets/images/tinta.jpg", preco: 73.10, categoria: "emborrachadas" },
    { nome: "Barreira Azul", imagem: "./assets/images/tinta.jpg", preco: 67.90, categoria: "emborrachadas" },
    { nome: "ResistMax", imagem: "./assets/images/tinta.jpg", preco: 72.90, categoria: "emborrachadas" },
    { nome: "Muro de Aço", imagem: "./assets/images/tinta.jpg", preco: 74.10, categoria: "emborrachadas" },
    { nome: "Blindagem Pro", imagem: "./assets/images/tinta.jpg", preco: 70.40, categoria: "emborrachadas" },
    { nome: "Pintura Selante", imagem: "./assets/images/tinta.jpg", preco: 71.90, categoria: "emborrachadas" },
    { nome: "Revest Flex", imagem: "./assets/images/tinta.jpg", preco: 66.80, categoria: "emborrachadas" },
    { nome: "Paredão Turbo", imagem: "./assets/images/tinta.jpg", preco: 75.30, categoria: "emborrachadas" },
    { nome: "Vedação Extra", imagem: "./assets/images/tinta.jpg", preco: 69.70, categoria: "emborrachadas" },
    { nome: "Resina Pro", imagem: "./assets/images/tinta.jpg", preco: 72.20, categoria: "emborrachadas" },
    { nome: "Fixa Parede", imagem: "./assets/images/tinta.jpg", preco: 68.90, categoria: "emborrachadas" },
    { nome: "Selante Muro", imagem: "./assets/images/tinta.jpg", preco: 73.60, categoria: "emborrachadas" },
    { nome: "Tinta Barreiro", imagem: "./assets/images/tinta.jpg", preco: 71.10, categoria: "emborrachadas" },
    { nome: "Muro Power", imagem: "./assets/images/tinta.jpg", preco: 70.00, categoria: "emborrachadas" },
    { nome: "Barreira Pro", imagem: "./assets/images/tinta.jpg", preco: 69.10, categoria: "emborrachadas" },
    { nome: "Pintura Defensora", imagem: "./assets/images/tinta.jpg", preco: 76.90, categoria: "emborrachadas" },
    { nome: "Paredão Z", imagem: "./assets/images/tinta.jpg", preco: 72.60, categoria: "emborrachadas" },
    { nome: "DefendeTudo", imagem: "./assets/images/tinta.jpg", preco: 73.70, categoria: "emborrachadas" },
    { nome: "Protetora Premium", imagem: "./assets/images/tinta.jpg", preco: 75.00, categoria: "emborrachadas" },
    { nome: "Super Vedação", imagem: "./assets/images/tinta.jpg", preco: 74.40, categoria: "emborrachadas" },
    { nome: "Tinta Muralha", imagem: "./assets/images/tinta.jpg", preco: 70.90, categoria: "emborrachadas" },

    // Acetinadas
    { nome: "Toque Suave", imagem: "./assets/images/tinta.jpg", preco: 68.00, categoria: "acetinadas" },
    { nome: "Veludo Real", imagem: "./assets/images/tinta.jpg", preco: 69.90, categoria: "acetinadas" },
    { nome: "Toque Macio", imagem: "./assets/images/tinta.jpg", preco: 69.90, categoria: "acetinadas" },
    { nome: "Brilho Elegante", imagem: "./assets/images/tinta.jpg", preco: 67.50, categoria: "acetinadas" },
    { nome: "Seda Nobre", imagem: "./assets/images/tinta.jpg", preco: 72.40, categoria: "acetinadas" },
    { nome: "Veludo Luxo", imagem: "./assets/images/tinta.jpg", preco: 71.00, categoria: "acetinadas" },
    { nome: "Toque Leve", imagem: "./assets/images/tinta.jpg", preco: 68.30, categoria: "acetinadas" },
    { nome: "Tacto Premium", imagem: "./assets/images/tinta.jpg", preco: 70.80, categoria: "acetinadas" },
    { nome: "Seda Suave", imagem: "./assets/images/tinta.jpg", preco: 66.90, categoria: "acetinadas" },
    { nome: "Maciez Real", imagem: "./assets/images/tinta.jpg", preco: 69.10, categoria: "acetinadas" },
    { nome: "Aconchego", imagem: "./assets/images/tinta.jpg", preco: 67.20, categoria: "acetinadas" },
    { nome: "Toque de Seda", imagem: "./assets/images/tinta.jpg", preco: 70.50, categoria: "acetinadas" },
    { nome: "Acetinado Clássico", imagem: "./assets/images/tinta.jpg", preco: 73.10, categoria: "acetinadas" },
    { nome: "Liso Premium", imagem: "./assets/images/tinta.jpg", preco: 71.90, categoria: "acetinadas" },
    { nome: "Sedoso", imagem: "./assets/images/tinta.jpg", preco: 68.40, categoria: "acetinadas" },
    { nome: "Brilho Macio", imagem: "./assets/images/tinta.jpg", preco: 72.60, categoria: "acetinadas" },
    { nome: "Reflexo Suave", imagem: "./assets/images/tinta.jpg", preco: 69.70, categoria: "acetinadas" },
    { nome: "Sutil Brilho", imagem: "./assets/images/tinta.jpg", preco: 67.80, categoria: "acetinadas" },
    { nome: "Tinta Conforto", imagem: "./assets/images/tinta.jpg", preco: 70.00, categoria: "acetinadas" },
    { nome: "Toque Nobre", imagem: "./assets/images/tinta.jpg", preco: 73.30, categoria: "acetinadas" },
    { nome: "Maciez Intensa", imagem: "./assets/images/tinta.jpg", preco: 71.50, categoria: "acetinadas" },
    { nome: "Lustro Suave", imagem: "./assets/images/tinta.jpg", preco: 68.20, categoria: "acetinadas" },
    { nome: "Seda Delicada", imagem: "./assets/images/tinta.jpg", preco: 70.20, categoria: "acetinadas" },
    { nome: "Suavidade Total", imagem: "./assets/images/tinta.jpg", preco: 72.00, categoria: "acetinadas" },
    { nome: "Brilho Delicado", imagem: "./assets/images/tinta.jpg", preco: 69.30, categoria: "acetinadas" },
    { nome: "Toque Intenso", imagem: "./assets/images/tinta.jpg", preco: 70.60, categoria: "acetinadas" },
    { nome: "Acetinado Suave", imagem: "./assets/images/tinta.jpg", preco: 66.70, categoria: "acetinadas" },
    { nome: "Veludo Clássico", imagem: "./assets/images/tinta.jpg", preco: 71.70, categoria: "acetinadas" },  
];

// Carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(index) {
    const produto = produtos[index];
    const produtoNoCarrinho = carrinho.find(item => item.nome === produto.nome);

    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

function criarEstrelas(produtoIndex) {
    let estrelasHTML = '';
    for (let i = 1; i <= 5; i++) {
        estrelasHTML += `<span class="estrela" onclick="classificarProduto(${produtoIndex}, ${i})">&#9733;</span>`;
    }
    return estrelasHTML;
}

function classificarProduto(produtoIndex, classificacao) {
    alert(`Produto ${produtos[produtoIndex].nome} classificado com ${classificacao} estrelas.`);
}

function getCategoriaDaPagina() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("brilhantes")) return "brilhantes";
    if (path.includes("fosca")) return "fosca";
    if (path.includes("semibrilhosas")) return "semibrilhosas";
    if (path.includes("emborrachadas")) return "emborrachadas";
    if (path.includes("acetinadas")) return "acetinadas";
    return null;
}

function renderCatalogo() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = "";

    const categoriaAtual = getCategoriaDaPagina();
    const produtosFiltrados = categoriaAtual
        ? produtos.filter(produto => produto.categoria === categoriaAtual)
        : produtos;

    produtosFiltrados.forEach((produto) => {
        const indexGlobal = produtos.indexOf(produto);
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.nome}</p>
            <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
            <div class="estrelas">${criarEstrelas(indexGlobal)}</div>
            <button class="btn-carrinho" onclick="adicionarAoCarrinho(${indexGlobal})">Adicionar ao Carrinho</button>
        `;
        catalogo.appendChild(produtoDiv);
    });
}

renderCatalogo();
