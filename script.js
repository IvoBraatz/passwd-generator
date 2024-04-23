// Adicione um evento de escuta nos elementos relevantes
document.getElementById('length').addEventListener('input', generatePassword);
document.getElementById('uppercase').addEventListener('change', generatePassword);
document.getElementById('lowercase').addEventListener('change', generatePassword);
document.getElementById('numbers').addEventListener('change', generatePassword);
document.getElementById('special').addEventListener('change', generatePassword);

// Função para gerar a senha
function generatePassword() {
    var length = parseInt(document.getElementById('length').value);
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var special = document.getElementById('special').checked;

    var charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (special) charset += '!@#$%^&*()_+{}[]|;:,.<>?';

    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
}

// Chame a função inicialmente para gerar a senha ao carregar a página
generatePassword();
