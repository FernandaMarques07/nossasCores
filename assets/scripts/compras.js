// Carrega o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza e exibe os produtos no carrinho
function renderCarrinho() {
  const tabela = document.querySelector("table");
  const linhas = tabela.querySelectorAll("tr");

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

  atualizarValorTotal();
  atualizarBotaoFinalizar(); // Habilita/desabilita o botão de finalizar
}

// Atualiza a barra de etapas
function mudarEtapa(index) {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, i) => {
    step.classList.toggle('active', i <= index);
  });
}

// Aumenta e diminui quantidade
function incrementar(index) {
  carrinho[index].quantidade++;
  salvarECriar();
}
function decrementar(index) {
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade--;
  } else {
    carrinho.splice(index, 1);
  }
  salvarECriar();
}
function remover(index) {
  carrinho.splice(index, 1);
  salvarECriar();
}
function salvarECriar() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderCarrinho();
}

// Atualiza o valor total do carrinho
function atualizarValorTotal() {
  let total = carrinho.reduce((soma, produto) => {
    return soma + (produto.preco * produto.quantidade);
  }, 0);

  document.getElementById("valor-total").textContent = total.toFixed(2).replace('.', ',');
}

// Habilita/desabilita botão de finalizar compra
function atualizarBotaoFinalizar() {
  const botaoFinalizar = document.querySelector(".finalizar-container .finalizar-btn");

  if (carrinho.length === 0) {
    botaoFinalizar.disabled = true;
    botaoFinalizar.style.opacity = 0.5;
    botaoFinalizar.style.cursor = "not-allowed";
  } else {
    botaoFinalizar.disabled = false;
    botaoFinalizar.style.opacity = 1;
    botaoFinalizar.style.cursor = "pointer";
  }
}

// Exibe opções de pagamento
function mostrarPagamento() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
    return;
  }

  mudarEtapa(1); // Etapa "Identificação"
  document.getElementById('opcoes-pagamento').style.display = 'block';
  document.getElementById("form-cartao").style.display = "none";
  document.getElementById("form-pix").style.display = "none";
  document.getElementById("form-boleto").style.display = "none";
}

// Botões das formas de pagamento
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

// Submissão do pagamento com cartão
const formCartao = document.getElementById("cartao-form");
formCartao.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome-cartao").value.trim();
  const numero = document.getElementById("numero-cartao").value.trim();
  const validade = document.getElementById("validade-cartao").value.trim();
  const cvv = document.getElementById("cvv-cartao").value.trim();

  if (nome && numero && validade && cvv) {
    mudarEtapa(2); // Vai pra "Pagamento"
    setTimeout(() => {
      mudarEtapa(3); // Vai pra "Concluído"
      alert("Pagamento realizado com sucesso! Pode ir à loja buscar a tinta.");
      formCartao.reset();
      document.getElementById("form-cartao").style.display = "none";
      document.getElementById("opcoes-pagamento").style.display = "none";
      localStorage.removeItem('carrinho');
      carrinho = [];
      renderCarrinho();
    }, 2000);
  } else {
    alert("Por favor, preencha todos os campos do cartão.");
  }
});

// Pagamento por boleto
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pagar-boleto").addEventListener("click", () => {
    mudarEtapa(2); // Vai pra "Pagamento"
    setTimeout(() => {
      mudarEtapa(3); // Vai pra "Concluído"
      alert("Boleto gerado com sucesso! Após o pagamento, pode ir à loja buscar a tinta.");
      document.getElementById("form-boleto").style.display = "none";
      document.getElementById("opcoes-pagamento").style.display = "none";
      localStorage.removeItem('carrinho');
      carrinho = [];
      renderCarrinho();
    }, 2000);
  });

  renderCarrinho();
});
