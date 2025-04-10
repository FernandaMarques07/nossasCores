// Controle de quantidade e atualização do preço
let quantity = 1;
const price = 60;

function updatePrice() {
  const total = quantity * price;
  document.getElementById('total-price').textContent = total.toFixed(2).replace('.', ',');
}

function incrementQuantity() {
  quantity++;
  document.getElementById('quantity').textContent = quantity;
  updatePrice();
}

function decrementQuantity() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').textContent = quantity;
    updatePrice();
  }
}

// Função para exibir as opções de pagamento
function mostrarPagamento() {
  document.getElementById('opcoes-pagamento').style.display = 'block';
  
  // Opcional: esconder formulários já abertos
  document.getElementById("form-cartao").style.display = "none";
  document.getElementById("form-pix").style.display = "none";
  document.getElementById("form-boleto").style.display = "none";
}

// Lógica para tratar os botões das opções de pagamento
const botoesPagamento = document.querySelectorAll(".pagamento-btn");
botoesPagamento.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Esconde todos os formulários antes de exibir o selecionado
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

// Tratamento do envio do formulário de cartão
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
  } else {
    alert("Por favor, preencha todos os campos do cartão.");
  }
});

// Tratamento do pagamento via Pix
document.getElementById("confirmar-pix").addEventListener("click", () => {
  // Aqui você pode implementar validações adicionais, se necessário.
  alert("Pagamento realizado com sucesso via Pix! Pode ir à loja buscar a tinta.");
  document.getElementById("form-pix").style.display = "none";
  document.getElementById("opcoes-pagamento").style.display = "none";
});

// Tratamento do pagamento via Boleto
document.getElementById("pagar-boleto").addEventListener("click", () => {
  // Aqui simula-se a geração do boleto em um 'banco'.
  alert("Boleto gerado com sucesso! Após o pagamento, pode ir à loja buscar a tinta.");
  document.getElementById("form-boleto").style.display = "none";
  document.getElementById("opcoes-pagamento").style.display = "none";
});
