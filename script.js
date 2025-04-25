const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  userInput.value = '';

  setTimeout(() => {
    addMessage(`Você disse: "${text}"`, 'bot');
  }, 750);
});

function addMessage(text, sender) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('d-flex', 'mb-2');
  wrapper.classList.add(sender === 'user' ? 'justify-content-end' : 'justify-content-start');
  
  // Criação da imagem do bot
  if (sender === 'bot') {
    const img = document.createElement('img');
    img.src = 'images/folen.webp'; // Caminho da imagem do bot
    img.alt = 'Bot';
    img.classList.add('rounded-circle');
    img.style.width = '45px';
    img.style.height = '45px';
    img.style.objectFit = 'cover';
    img.style.marginRight = '10px';

    wrapper.appendChild(img); // Adiciona a imagem do bot antes da mensagem
  }

  const bubble = document.createElement('div');
  bubble.classList.add('p-2', 'rounded', 'shadow-sm');
  bubble.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
  bubble.textContent = text;

  wrapper.appendChild(bubble);
  chatBody.appendChild(wrapper);

  // Scroll automático com leve atraso
  setTimeout(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 50);
}

document.querySelectorAll('.suggestion-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.getElementById('user-input').value = this.innerText;
    chatForm.dispatchEvent(new Event('submit'));
  });
});
