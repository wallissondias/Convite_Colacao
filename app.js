// ========== Convidados ==========
const GUESTS = {
    tamiris: {
    name: "Tamiris",
    password: "bff",
    message:
      "Tamiris, sério… se eu cheguei até aqui foi muito por causa de vc Kkkkk parece exagero, mas não é não. Eu lembro direitinho daquele momento em Física Geral 1 com Heveson, que a gente se olhou com desespero na hora da prova e pronto: começou nossa amizade. Desde então, tudo mudou.\n\n" +
      "Vc foi a pessoa que mais esteve comigo na faculdade, mais até do que minha própria família, porque eu ficava o dia inteiro lá e quem tava do meu lado? Vc!!! Os almoços (saudades almocinhe não binárie), as conversas, as risadas, as piadas que só a gente entende… hahahahaha. Eu não sei o que teria sido de mim sem isso.\n\n" +
      "Foi uma amizade que começou ali meio do nada, mas que virou essencial. Vc foi umas das pessoas mais incriveis q tive o prazer de conhecer na faculdade, a pessoa que me fez aguentar os dias puxados e que transformou a rotina cansativa em algo muito mais leve.\n\n" +
      "E é por tudo isso que eu quero muito que vc esteja comigo nesse dia tão especial, pq vc faz parte dessa conquista também. 💙"
  },

    fran: {
    name: "Fran",
    password: "biotec",
    message:
      "Fran, olha… desde o comecinho da facul a gente já tava no guaguaton, mas foi na pandemia que vc virou meu anjo kkkkk. Eu nunca vou esquecer de Cálculo 2 com Nara, aqueles infinitos exercícios que eu já não aguentava mais, e eu só mandava: ‘Fran, me manda as fotos aí, pelo amor de Deus’ hahahaha e vc sempre mandava, e sério, isso salvou minha vida.\n\n" +
      "Quando voltamos pro presencial, foi ainda mais incrível, pq aquela amizade que começou lá atrás ficou muito mais forte. A gente já tava mais íntimo, reclamando dos mesmos professores, sofrendo nas mesmas matérias, chorando junto quase todos os dias kkkkk Foi nesse perrengue que eu vi o quanto vc era importante pra mim.\n\n" +
      "Vc é uma das pessoas mais inteligentes que eu conheço, e isso me inspira demais. Eu admiro muito a forma como vc encara as coisas, e quero levar essa amizade pra vida toda, pq sei que vc já é incrível agora e vai ser ainda mais no futuro.\n\n" +
      "Fora os almoços, o almocinhe não-binárie, as conversas jogadas fora e até o nosso Uno hahahaha… tudo isso me marcou demais. Se não fosse vc, não sei se eu teria conseguido continuar até aqui.\n\n" +
      "E é por tudo isso que eu quero muito que vc esteja comigo nesse dia tão especial, pq vc faz parte dessa conquista também. 💙"
  },

    ana: {
    name: "Ana",
    password: "estagio",
    message:
      "Anaaaa, desde o comecinho da facul a gente já entrou junto, mas foi do meio pro final que nossa amizade ficou ainda mais forte. E sério, foi incrível conhecer mais de vc, pq eu te acho uma pessoa simplesmente incrível. 💙\n\n" +
      "No UPT a gente se aproximou muito, mas foi no estágio na Bunge que vc virou minha irmã de estágio kkkkk Eu tava super nervoso, parecia meu primeiro emprego de verdade (pq o anterior nem conta kkkkk), e ter vc lá comigo foi meu porto seguro!!! Deixou tudo muito mais leve e especial.\n\n" +
      "Eu amo conversar com vc, ouvir seus comentários inteligentes, e saber que posso contar sempre com sua amizade. Vc é uma pessoa incrível, e eu quero muito manter isso. O que vc precisar, pode me chamar sempre, pq eu vou estar aqui. 💙\n\n" +
      "E é por tudo isso que eu quero muito que vc esteja comigo nesse dia tão especial pra mim (sei q a Cris tbm vai chamar, mas eu tbm quero chamar)."
  },

    raony: {
    name: "Raony",
    password: "doido",
    message:
      "Raony, a gente só se conheceu depois da pandemia e do nada viramos amigos por causa da chapa do DACEP hahahaha e foi uma das melhores coisas que aconteceu. Vc é uma pessoa muito engraçada, que me fez dar muita risada nesses anos de facu, e também me ensinou coisas que eu nem imaginava.\n\n" +
      "Eu nunca vou esquecer dos seus comentários sarcásticos e completamente sem filtro kkkkk que sempre deixavam os dias mais leves, mesmo nos momentos mais tensos. Foi uma amizade que chegou meio do nada, mas que eu quero levar comigo pra vida.\n\n" +
      "E é por tudo isso que eu quero que vc esteja lá comigo, compartilhando mais esse momento junto, pq vc também faz parte dessa conquista. 💙"
  },

    natalia: {
    name: "Natália",
    password: "gymbro",
    message:
      "Natália, eu nem lembro direito como começou nossa amizade, mas sei que foi depois da pandemia e que a Tamiris teve uma mãozinha nisso kkkkk Só sei que desde então vc foi super importante pra mim. Vc virou minha gymbro, parceira de treino por um tempão, e isso me ajudou demais.\n\n" +
      "Sem falar nas caronas que vc me dava pra facu, pq sério… eu já não aguentava mais ir andando ou de busão todo dia. Se não fossem aqueles momentos, a chance de eu ter trancado era enorme, pq eu já tava no limite. Vc fez parte disso comigo de um jeito que talvez nem imagine.\n\n" +
      "E não é só isso… vc é uma pessoa tranquila, leve, e tem uma ótima energia. Por isso eu quero muito que nossa amizade continue ainda mais forte, pq vc é especial demais pra mim.\n\n" +
      "Então, é claro que eu quero vc lá na minha colação, dividindo comigo esse marco da minha vida. 💙"
  },

    diego: {
    name: "Diego",
    password: "parceiro",
    message:
      "Diegooo, desde o Ensino Médio a gente já se conhecia, mas foi no 3º ano que ficamos mais próximos e aí, quando nos reencontramos na facu, foi incrível já começar isso tendo alguém conhecido por perto. Isso fez toda a diferença!!\n\n" +
      "2019 foi um ano péssimo pra mim, eu só queria desistir, odiava ir pra faculdade kkkkk, mas vc tava sempre na garra, e isso me inspirava demais. Ver vc se esforçando me motivava a continuar, mesmo quando eu já não queria mais. Durante a pandemia também, sempre parceiros nos trabalhos, e depois, em 2022, quando voltamos pro presencial, tivemos momentos incríveis juntos.\n\n" +
      "Vc sempre foi uma inspiração pra mim, me motivou muito nesses quase 7 anos de jornada. Apesar de ter me abandonado e ido pra outra faculdade kkkkkkkkkkk, vc continua sendo uma das pessoas mais importantes dessa caminhada.\n\n" +
      "Então claro que quero vc lá comigo, pq sua amizade marcou demais essa história. 💙"
  },

    cris: {
    name: "Cris",
    password: "inspiracao",
    message:
      "Cris, eu já falei isso depois que vc apresentou  seu TCC, mas quero deixar registrado aqui também: vc foi uma das pessoas que mais me inspiraram durante a graduação. Sei que às vezes vc duvida de si mesma, mas eu sempre vi a força e a capacidade absurda que vc tem... Te ver trabalhando, estudando, fazendo as mesmas disciplinas que eu e ainda tirando notas incríveis (e entendendo tudo de verdade) me motivava demais.\n\n" +
      "Eu sabia que se eu tivesse dúvida, podia perguntar pra vc e teria uma explicação clara. E no estágio, então… vc foi um dos meus pilares. Foi quem me apresentou a fábrica, quem me deu dicas que só quem já passou por ali entenderia, e isso fez toda a diferença pra mim.\n\n" +
      "Tanto como colega de faculdade quanto de trabalho, vc sempre se mostrou incrível. Agora que a gente vai ser engenheiro de produção junto, quero que saiba que pode contar comigo pro que precisar, assim como eu contei com vc. Eu acredito muito no seu potencial e sei que, em qualquer área que escolher, vc vai ser uma das melhores. 💙"
  },

    vitor: {
    name: "Vitor",
    password: "dados",
    message:
      "Vitor, a gente só foi se conhecer melhor depois da pandemia, e acho que foi naquela optativa do Pedro que despertou em nós dois o interesse pela área de dados. Vc seguiu pra pesquisa, eu fiquei à toa kkkkk, mas desde então eu sempre admirei demais sua inteligência. Até hoje fico em choque como vc entendeu eletrotécnica, pq aquilo nunca fez sentido pra mim hahahaha.\n\n" +
      "Além de parceiro de faculdade, ainda teve a residência em ciência de dados, que fez a gente se aproximar mais ainda. Sem falar da viagem pra Salvador pro Hackathon, que foi hilária kkkkkkkkkk \n\n" +
      "Agora a gente tá se formando junto e eu não tenho dúvida: vamos ser ótimos profissionais. Pode contar comigo pro que precisar. Tenho muita torcida pelo seu futuro e certeza de que vc vai ser um professor e profissional incrível."
  },

    gabriel: {
    name: "Gabriel",
    password: "best",
    message:
      "Gabriel… vc acompanhou de perto a loucura que foi a faculdade pra mim. Quantas vezes eu não apareci no seu Whats reclamando, desabafando, falando que não aguentava mais… e vc sempre estava lá, me acalmando, me ouvindo, me fazendo rir, me lembrando que eu podia continuar. Pode até não parecer, mas cada palavra, cada áudio, cada motivação que vc me mandou fez toda a diferença.\n\n" +
      "Se não fosse vc, eu duvido que teria conseguido chegar até aqui. Essa conquista também é sua, pq vc fez parte de cada etapa, mesmo de longe. Eu te amo muito, e sei que essa amizade é pra vida inteira. Ainda vamos comemorar muito — do Rio a Ibiza e Mykonos kkkkk — e eu quero vc comigo nesse momento pra celebrar não só a minha formatura, mas tudo o que a gente construiu juntos até aqui. Compre logo essas passagens!!💙"
  },

    gisele: {
    name: "Gisele",
    password: "amizade",
    message:
      "Gi, a gente já tinha vivido o Ensino Médio juntos, mas foi na pandemia que a amizade voltou com força total. Lembro até hoje daquele dia aleatório que vc me chamou pra sua casa, depois a gente foi pro Choppão, e desde então parecia que a gente não se desgrudava mais.\n\n" +
      "Mesmo quando a vida tava difícil e eu sem vontade pra nada, lá vinha vc com uma mensagem, um convite, me puxando pra cima e me fazendo sentir vivo. As suas loucuras me tiravam da rotina e me lembravam que tinha muito mais pra viver. Vc sempre me incluiu, me tratou bem, e me fez sentir parte de algo e isso não tem preço.\n\n" +
      "Depois que voltaram as aulas presenciais, eu precisei focar mais na faculdade (tava super atrasado lkkkkkkk) e agora a vida adulta também não ajuda muito na frequência dos nossos encontros. Mas nada disso muda o quanto vc foi e é importante pra mim.\n\n" +
      "Quero muito que vc esteja comigo nessa comemoração, porque essa vitória também tem um pedacinho seu. E quero que saiba que, assim como vc fez por mim, pode contar comigo sempre. 💙"
  },

    mateus: {
    name: "Mateus",
    password: "faculdade",
    message:
      "Matheus, foi muito bom dividir esses anos de faculdade com vc. Sempre parceiro, sempre de bom humor, e contribuindo pra deixar essa caminhada mais leve. Quero que vc esteja lá comigo nessa comemoração, pq de um jeito ou de outro, vc também fez parte dessa história. 💙"
  },

    ste: {
    name: "Ste",
    password: "ufob",
    message:
      "Ste, ter vc como colega de faculdade foi ótimo! Obrigado pela parceria, pelas conversas e pelos momentos compartilhados nessa jornada. Vou ficar muito feliz de te ver lá comemorando junto comigo essa conquista. 💙"
  },

    eva: {
    name: "Eva",
    password: "gym",
    message:
      "Eva, foi muito bom ter vc comigo. Obrigado pela parceria, pelas conversas e pela presença nos momentos que tornaram tudo mais leve. Quero muito te ver lá comemorando junto essa conquista. 💙"
  },

    nai: {
    name: "Nai",
    password: "parceria",
    message:
      "Nai, todos esses anos de parceria, tantos trabalhos feitos juntos, tanta dor de cabeça (e que dor de cabeça kkkkk), mas no fim deu certo e a gente conseguiu! 🎓\n\n" +
      "Ter vc ao meu lado nessa caminhada fez toda a diferença. Foram muitos desafios, mas também muitas risadas e momentos que vou levar pra vida. Agora a gente chega junto nessa conquista e eu não poderia estar mais feliz de dividir isso com vc.\n\n" +
      "Tenho um carinho enorme por vc e sei que vamos ser profissionais incríveis. Pode contar comigo sempre, assim como eu contei com vc ao longo de todo esse tempo. 💙"
  },
    
};

// ====== CONFIG: WhatsApp ======
const WHATSAPP_NUMBER = "5577998343145"; // 👈 TROQUE PELO SEU NÚMERO (ex: 5588999999999)

// ========== Page switch ==========
const PAGE = document.body.dataset.page;

// ========== LOGIN refs ==========
const loginWrapperEl = document.getElementById("login-wrapper");
const loginSection   = document.getElementById("login-section");
const loginForm      = document.getElementById("login-form");
const guestInput     = document.getElementById("guestId");
const passInput      = document.getElementById("password");
const errorBox       = document.getElementById("login-error");

// ========== CONVITE refs ==========
const inviteSection  = document.getElementById("invite-section");
const titleEl        = document.getElementById("invite-title");
const msgEl          = document.getElementById("invite-message");
const backBtn        = document.getElementById("back-home"); // em convite.html é um <a href="login.html">
const hostPhoto      = document.getElementById("host-photo");

// Topbar / Drawer
const navToggle      = document.getElementById("nav-toggle");
const sidedrawer     = document.getElementById("sidedrawer");
const backdrop       = document.getElementById("backdrop");

// Carrossel
const carouselEl     = document.getElementById("info-carousel");
const slidesEl       = document.getElementById("info-slides");
const dotsEl         = document.getElementById("info-dots");

// ====== Confete (FUNDO do LOGIN) ======
let bgConfettiCanvas, bgCtx, bgAnimId = null, bgParts = [];
let bgW = 0, bgH = 0, bgDPR = Math.max(1, window.devicePixelRatio || 1);

// ====== Brilhinhos (sparkles) na tela do CONVITE ======
let spCanvas, spCtx, spDPR = Math.max(1, window.devicePixelRatio || 1);
let spW = 0, spH = 0, spAnimId = null;
let sparks = [];
let pointerDown = false;



function initBgConfetti(){
  bgConfettiCanvas = document.getElementById("bg-confetti");
  if(!bgConfettiCanvas) return;
  bgCtx = bgConfettiCanvas.getContext("2d");

  function resize(){
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    bgW = vw; bgH = vh;
    bgConfettiCanvas.style.width = "100%";
    bgConfettiCanvas.style.height = "100%";
    const w = Math.floor(bgW * bgDPR);
    const h = Math.floor(bgH * bgDPR);
    if(bgConfettiCanvas.width !== w || bgConfettiCanvas.height !== h){
      bgConfettiCanvas.width  = w;
      bgConfettiCanvas.height = h;
    }
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("orientationchange", resize, { passive: true });

  const N = 110;
  bgParts = Array.from({length:N}, () => ({
    x: Math.random()*bgW,
    y: Math.random()*bgH,
    r: 2 + Math.random()*3,
    vx: -0.6 + Math.random()*1.2,
    vy: 0.9 + Math.random()*1.7,
    hueBase: Math.random()*360
  }));
}
function drawBgConfetti(){
  if(!bgCtx) return;
  bgCtx.setTransform(bgDPR, 0, 0, bgDPR, 0, 0);
  bgCtx.clearRect(0,0,bgW,bgH);
  for(const p of bgParts){
    p.x += p.vx + Math.sin(p.y/40)*0.15;
    p.y += p.vy;
    if(p.y > bgH + 8){ p.y = -8; p.x = Math.random()*bgW; }
    if(p.x < -10) p.x = bgW + 10;
    if(p.x > bgW + 10) p.x = -10;
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    const hue = (p.hueBase + p.y/4) % 360;
    bgCtx.fillStyle = `hsl(${hue}, 80%, 60%)`;
    bgCtx.fill();
  }
}
function animateBgConfetti(){ drawBgConfetti(); bgAnimId = requestAnimationFrame(animateBgConfetti); }
function startLoginBackgroundConfetti(){
  if(bgAnimId !== null) return;
  if(!bgCtx) initBgConfetti();
  animateBgConfetti();
}
function stopLoginBackgroundConfetti(){
  if(bgAnimId !== null){ cancelAnimationFrame(bgAnimId); bgAnimId = null; }
  if(bgCtx){ bgCtx.setTransform(bgDPR,0,0,bgDPR,0,0); bgCtx.clearRect(0,0,bgW,bgH); }
}

// ========== Utils ==========
function normalizeId(v){
  return (v || "").toString().trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

// ========== Fluxo LOGIN ==========
function mountLogin(){
  // confete de fundo no login
  startLoginBackgroundConfetti();

  // atalhos de teclado
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter" && document.activeElement === guestInput && !e.shiftKey){
      passInput?.focus();
    }
  });

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    errorBox.textContent = "";

    const guestId = normalizeId(guestInput.value);
    const pass = (passInput.value || "").trim();

    if(!guestId || !pass){ errorBox.textContent = "Preencha usuário e senha."; return; }
    const g = GUESTS[guestId];
    if(!g){ errorBox.textContent = "Usuário não encontrado. Verifique o que você recebeu."; return; }
    if(pass !== g.password){ errorBox.textContent = "Senha incorreta."; return; }

    // sucesso: vai para a página do convite com ?g=...
    stopLoginBackgroundConfetti();
    location.assign(`convite.html?g=${encodeURIComponent(guestId)}`);
  });
}

// ========== Fluxo CONVITE ==========
function mountInvite(){
  // Sem confete aqui
  const params = new URLSearchParams(location.search);
  const guestId = normalizeId(params.get("g"));
  const g = GUESTS[guestId];

  if(!g){
    location.replace("login.html");
    return;
  }

  // Título + mensagem (com quebra de linha)
  titleEl.textContent = `Olá, ${g.name}!`;
  const raw = g.message || "";
  msgEl.innerHTML = raw.replace(/\n/g, "<br>");
  msgEl.classList.remove("invite-message--lg","invite-message--xl");
  if (g.messageSize === "lg") msgEl.classList.add("invite-message--lg");
  if (g.messageSize === "xl") msgEl.classList.add("invite-message--xl");

  // Foto do Alisson (troque o src quando tiver)
  if (hostPhoto) {
    const src = ""; // coloque seu caminho, ex: "img/alisson.jpg"
    if (src) {
      hostPhoto.src = src;
      hostPhoto.style.display = "block";
      const placeholder = hostPhoto.nextElementSibling;
      if (placeholder) placeholder.style.display = "none";
    }
  }

  // Menu hambúrguer / drawer
  if (navToggle && sidedrawer && backdrop) {
    const openDrawer = () => {
      sidedrawer.classList.add("open");
      backdrop.hidden = false;
      navToggle.setAttribute("aria-expanded", "true");
      sidedrawer.setAttribute("aria-hidden", "false");
    };
    const closeDrawer = () => {
      sidedrawer.classList.remove("open");
      backdrop.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
      sidedrawer.setAttribute("aria-hidden", "true");
    };
    navToggle.onclick = () => (sidedrawer.classList.contains("open") ? closeDrawer() : openDrawer());
    backdrop.onclick = closeDrawer;
    sidedrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", closeDrawer);
    });
  }

  // Carrossel: dots ativos + auto-avanço + clique nas bolinhas
  if (slidesEl && dotsEl) {
    const slides = Array.from(slidesEl.children);
    const dots = Array.from(dotsEl.querySelectorAll(".dot"));
    let current = 0;
    let autoTimer = null;

    const setActive = (idx) => {
      dots.forEach((d,i)=>d.classList.toggle("is-active", i===idx));
      current = idx;
    };

    const goTo = (idx) => {
      const width = slidesEl.clientWidth + 12 /* gap */;
      slidesEl.scrollTo({ left: idx * width, behavior: 'smooth' });
      setActive(idx);
    };

    // Dots -> navegação
    dots.forEach((dot,i)=> dot.addEventListener("click", ()=> goTo(i)));

    // Ao rolar (toque), calcula slide ativo
    slidesEl.addEventListener("scroll", ()=>{
      const width = slidesEl.clientWidth + 12;
      const idx = Math.round(slidesEl.scrollLeft / width);
      setActive(Math.max(0, Math.min(idx, slides.length-1)));
    }, { passive: true });

    // Auto-avanço
    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(()=>{
        const next = (current + 1) % slides.length;
        goTo(next);
      }, 3500);
    };
    const stopAuto = () => { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } };

    // Pausa auto ao tocar; retoma depois
    ["touchstart","pointerdown","mousedown","focusin"].forEach(ev=> slidesEl.addEventListener(ev, stopAuto, {passive:true}));
    ["touchend","pointerup","mouseup","focusout"].forEach(ev=> slidesEl.addEventListener(ev, startAuto, {passive:true}));

    // Inicia
    setActive(0);
    startAuto();
  }

  // Botão WhatsApp: cria link usando o nome da pessoa
  const waBtn = document.getElementById("btn-whatsapp");
  if (waBtn && WHATSAPP_NUMBER && g?.name) {
    const text = `Olá, sou ${g.name}. Confirmo presença na colação.`;
    const url  = `https://wa.me/${encodeURIComponent(WHATSAPP_NUMBER)}?text=${encodeURIComponent(text)}`;
    waBtn.href = url;
  }
}

// ========== Boot ==========
(function init(){
  if(PAGE === "login")  mountLogin();
  if(PAGE === "invite") mountInvite();
})();
