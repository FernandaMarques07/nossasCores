document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (email === "" || senha === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // Aqui você pode adicionar lógica real de autenticação futuramente
            alert("Login bem-sucedido! Bem vindo");
            window.location.href = "index.html"; // ajuste conforme a estrutura do seu projeto
        });
    }
});
