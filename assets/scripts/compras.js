// Carrega o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza e exibe os produtos no carrinho
function renderCarrinho() {
  const tabela = document.querySelector("table");
  const linhas = tabela.querySelectorAll("tr");

  // Remove todas as linhas de produtos, mantendo o cabeçalho
  linhas.forEach((linha, index) => {
    if (index > 0) linha.remove();
  });

  carrinho.forEach((produto, index) => {
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
      <td>
        <div class="produto-img">
          <img src="${produto.imagem}" alt="${produto.nome}">
        </div>
        <span>${produto.nome}</span>
      </td>
      <td>
        <div class="quantidade">
          <button onclick="decrementar(${index})">-</button>
          <span>${produto.quantidade}</span>
          <button onclick="incrementar(${index})">+</button>
        </div>
      </td>
      <td class="valor">R$ ${(produto.preco * produto.quantidade).toFixed(2).replace('.', ',')}</td>
      <td><button onclick="remover(${index})">🗑️</button></td>
    `;

    tabela.appendChild(novaLinha);
  });

  atualizarValorTotal(); // <<< atualiza o valor total sempre que renderiza
}

// Aumenta a quantidade
function incrementar(index) {
  carrinho[index].quantidade++;
  salvarECriar();
}

// Diminui a quantidade ou remove se for 1
function decrementar(index) {
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade--;
  } else {
    carrinho.splice(index, 1);
  }
  salvarECriar();
}

// Remove o produto do carrinho
function remover(index) {
  carrinho.splice(index, 1);
  salvarECriar();
}

// Salva no localStorage e renderiza
function salvarECriar() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderCarrinho();
}

// Exibe opções de pagamento
function mostrarPagamento() {
  document.getElementById('opcoes-pagamento').style.display = 'block';
  document.getElementById("form-cartao").style.display = "none";
  document.getElementById("form-pix").style.display = "none";
  document.getElementById("form-boleto").style.display = "none";
}

// Pagamento
const botoesPagamento = document.querySelectorAll(".pagamento-btn");
botoesPagamento.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("form-cartao").style.display = "none";
    document.getElementById("form-pix").style.display = "none";
    document.getElementById("form-boleto").style.display = "none";

    if (btn.textContent === "Cartão de Crédito") {
      document.getElementById("form-cartao").style.display = "block";
    } else if (btn.textContent === "Pix") {
      document.getElementById("form-pix").style.display = "block";
    } else if (btn.textContent === "Boleto") {
      document.getElementById("form-boleto").style.display = "block";
    }
  });
});

// Submissão do cartão
const formCartao = document.getElementById("cartao-form");
formCartao.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome-cartao").value.trim();
  const numero = document.getElementById("numero-cartao").value.trim();
  const validade = document.getElementById("validade-cartao").value.trim();
  const cvv = document.getElementById("cvv-cartao").value.trim();

  if (nome && numero && validade && cvv) {
    alert("Pagamento realizado com sucesso! Pode ir à loja buscar a tinta.");
    formCartao.reset();
    document.getElementById("form-cartao").style.display = "none";
    document.getElementById("opcoes-pagamento").style.display = "none";
    localStorage.removeItem('carrinho');
    carrinho = [];
    renderCarrinho();
  } else {
    alert("Por favor, preencha todos os campos do cartão.");
  }
});

// Clique no botão de boleto
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pagar-boleto").addEventListener("click", () => {
    alert("Boleto gerado com sucesso! Após o pagamento, pode ir à loja buscar a tinta.");
    document.getElementById("form-boleto").style.display = "none";
    document.getElementById("opcoes-pagamento").style.display = "none";
    localStorage.removeItem('carrinho');
    carrinho = [];
    renderCarrinho();
  });

  // Renderiza os produtos ao carregar
  renderCarrinho();
});

// Atualiza o valor total na tela
function atualizarValorTotal() {
  let total = carrinho.reduce((soma, produto) => {
    return soma + (produto.preco * produto.quantidade);
  }, 0);

  document.getElementById("valor-total").textContent = total.toFixed(2).replace('.', ',');
}
