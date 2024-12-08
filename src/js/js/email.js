(function() {
    emailjs.init('zzTlB2D9DWJw8ZHJ1'); // Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública do EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var formData = new FormData(event.target); // Pega os dados do formulário

    emailjs.sendForm('service_yb016j3', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!', response);
        }, function(error) {
            alert('Erro ao enviar mensagem', error);
        });
});
