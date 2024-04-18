document.getElementById('generate').addEventListener('click', function() {
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
  });
  

  const range = document.getElementById('length');
  const rangeValue = document.getElementById('rangeValue');

  range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
  });
