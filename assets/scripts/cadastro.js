document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const endereco = document.getElementById("endereco").value;
            const telefone = document.getElementById("telefone").value;
            const senha = document.getElementById("senha").value;

            if ( nome === "" || email === "" || endereco === "" || telefone === "" || senha === "" ) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            alert("Cadastro realizado com sucesso! Faça seu Login novamente");
            window.location.href = "login.html"; 
        });
    }
});
