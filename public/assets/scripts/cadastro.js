document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");
    const nomeInput = document.getElementById("nome");

    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;

    // Validação em tempo real do campo "nome"
    nomeInput.addEventListener("input", function () {
        const nome = nomeInput.value.trim();
        const errorSpan = document.getElementById("nome-erro");

        if (!nomeRegex.test(nome) || nome.length < 2) {
            errorSpan.textContent = "Nome inválido. Use apenas letras e pelo menos 2 caracteres.";
            errorSpan.style.display = "block";
        } else {
            errorSpan.textContent = "";
            errorSpan.style.display = "none";
        }
    });

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = nomeInput.value;
            const email = document.getElementById("email").value;
            const endereco = document.getElementById("endereco").value;
            const telefone = document.getElementById("telefone").value;
            const senha = document.getElementById("senha").value;

            const telefoneRegex = /^\d{10,11}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

            if (!nomeRegex.test(nome) || nome.trim().length < 2) {
                alert("Nome inválido. Use apenas letras e pelo menos 2 caracteres.");
                return;
            }

            if (!telefoneRegex.test(telefone)) {
                alert("Telefone inválido. Use apenas números com 10 ou 11 dígitos.");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("E-mail inválido.");
                return;
            }

            if (!endereco || endereco.trim().length < 5) {
                alert("Endereço inválido. Digite pelo menos 5 caracteres.");
                return;
            }

            if (!senhaRegex.test(senha)) {
                alert("Senha inválida. Mínimo 6 caracteres, contendo letras e números.");
                return;
            }

            fetch('/cadastrarUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `nome=${nome}&email=${email}&telefone=${telefone}&endereco=${endereco}&senha=${senha}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Cadastro realizado com sucesso!");
                    window.location.href = "/login";
                } else {
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error("Erro ao enviar dados:", error);
                alert("Houve um erro ao enviar seus dados. Tente novamente.");
            });
        });
    }
});
