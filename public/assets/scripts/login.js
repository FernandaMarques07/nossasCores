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

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Login bem-sucedido! Bem-vindo(a)!");
                    window.location.href = "/principal";
                } else {
                    alert("E-mail ou senha incorretos!");
                }
            })
            .catch(error => {
                console.error("Erro ao tentar login:", error);
                alert("Erro ao tentar login. Tente novamente mais tarde.");
            });
        });
    }
});
