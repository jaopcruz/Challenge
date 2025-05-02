const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

function suggestion1() {
  addMessage("Qual a atual line de CS da FURIA?", "user");
  setTimeout(() => {
    addMessage(
      'A atual line de CS2 da FURIA consiste em: Gabriel "FalleN" Toledo, Yuri "yuurih" Santos, Kaike "KSCERATO" Cerato, Mareks "YEKINDAR" Gaļinskis, Danil "molodoy" Golubenko e nosso COACH Sid "sidde" Macedo.',
      "bot"
    );
  }, 500);
}

function suggestion2() {
  addMessage("Quais as redes sociais dos jogadores?", "user");
  setTimeout(() => {
    addMessage("Olá\nfodase", "bot");
  }, 500);
}

function suggestion3() {
  addMessage("Qual o atual rank da FURIA no HLTV?", "user");
  setTimeout(() => {
    addMessage(
      "Atualmente a FURIA se encontra no top 17 mundial pelo rank da HLTV e top 19 no rank da Valve.",
      "bot"
    );
  }, 500);
}

function suggestion4() {
  addMessage("Quando vai ser o próximo jogo da FURIA?", "user");
  setTimeout(() => {
    addMessage(
      "O próximo jogo da FURIA será no dia 10 de maio pelo campeonato PGL Astana 2025, o adversário ainda será definido.",
      "bot"
    );
  }, 500);
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(`Você disse: "${text}"`, "bot");
  }, 750);
});

function addMessage(text, sender) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("d-flex", "mb-2");
  wrapper.classList.add(
    sender === "user" ? "justify-content-end" : "justify-content-start"
  );

  // Criação da imagem do bot
  if (sender === "bot") {
    const img = document.createElement("img");
    img.src = "images/folen.webp"; // Caminho da imagem do bot
    img.alt = "Bot";
    img.classList.add("rounded-circle");
    img.style.width = "45px";
    img.style.height = "45px";
    img.style.objectFit = "cover";
    img.style.marginRight = "10px";

    wrapper.appendChild(img); // Adiciona a imagem do bot antes da mensagem
  }

  const bubble = document.createElement("div");
  bubble.classList.add("p-2", "rounded", "shadow-sm");
  bubble.classList.add(
    sender === "user" ? "user-msg" : ("bot-msg", "bg-light")
  );
  bubble.style.maxWidth = "60%"; // Limita a largura da mensagem
  bubble.textContent = text;

  wrapper.appendChild(bubble);
  chatBody.appendChild(wrapper);

  // Scroll automático com leve atraso
  setTimeout(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 50);
}

