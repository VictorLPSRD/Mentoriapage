// Função para abrir o item com o efeito de ampliação
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
      // Adiciona a classe 'active' para o item clicado
      item.classList.toggle('active');
  
      // Adiciona ou remove a sobreposição de fundo
      const overlay = document.querySelector('.overlay');
      overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
      overlay.style.pointerEvents = overlay.style.opacity === '1' ? 'auto' : 'none';
    });
  });
  
  // Adicionando um evento para fechar o item clicado
  document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelectorAll('.service-item.active').forEach(item => {
      item.classList.remove('active');
    });
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  });
  