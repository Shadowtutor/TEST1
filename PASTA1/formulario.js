// Captura o formulário pelo ID
const form = document.getElementById("feedbackForm");

// Verifica se o formulário existe
if (form) {
    // Adiciona um evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

        // Captura os valores preenchidos nos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Exibe os dados no console (apenas para testes)
        console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
        console.log("O formulário foi enviado");

        // Validação simples para garantir que os campos não estejam vazios
        if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Aqui você pode adicionar a lógica para enviar os dados ao servidor
        alert("Obrigado pelo feedback!");
        form.reset(); // Limpa o formulário após o envio
    });
} else {
    console.log("Formulário não encontrado.");
}