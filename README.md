🧩 Branch: eventos

Esta branch contém estudos aprofundados sobre o sistema de eventos do JavaScript, incluindo interação com cliques, teclado, mouse, scroll, carregamento de página, entre outros. Também são abordadas técnicas como preventDefault, propagação, remoção de eventos e debounce para melhor controle da performance e experiência do usuário.

🔍 Tópicos abordados

👆 Manipulação de Eventos com addEventListener
Adição de eventos por função anônima e função nomeada

Remoção de eventos com removeEventListener

Utilização do objeto Event e propriedades como target, offsetX, pointerType

🚫 Controle de Comportamento Padrão e Propagação

preventDefault() para cancelar ações padrão (ex: links)

stopPropagation() para evitar que eventos se propaguem entre elementos pais e filhos

⌨️ Eventos de Teclado

keydown: quando a tecla é pressionada

keyup: quando a tecla é solta

🖱️ Eventos de Mouse

mousedown, mouseup, dblclick

mousemove: captura a movimentação do cursor

Combinado com debounce para evitar excesso de chamadas

📜 Eventos de Scroll

scroll: escuta movimentações da barra de rolagem

📥 Eventos de Input

focus: quando um campo recebe foco

blur: quando perde o foco

🧱 Eventos de Carregamento da Página

load: quando a página termina de carregar

beforeunload: antes do usuário fechar ou recarregar a página

⏱️ Debounce

Técnica para limitar a frequência de execução de funções disparadas por eventos contínuos (como mousemove ou scroll)

Implementação manual com setTimeout e clearTimeout

🛠️ Tecnologias

JavaScript ES6+

HTML5 com elementos interativos (botões, links, inputs)

Navegador com console DevTools

🚀 Como testar

Crie um arquivo HTML com elementos com os seguintes ids:

    <button id="my-button">Botão 1</button>
    <button id="btn">Botão 2</button>
    <button id="other-btn">Botão 3</button>
    <h1 id="my-title">Título</h1>
    <div id="btn-container">
      <button id="div-btn">Botão Interno</button>
    </div>
    <a href="https://google.com">Google</a>
    <div id="mouse">Área do Mouse</div>
    <input type="text" id="my-input" />

Inclua o script JS no final do body ou com defer:

    <script src="eventos.js" defer></script>

Abra a página no navegador e acompanhe o console (F12) para observar os eventos sendo disparados.

🧠 Dicas práticas

Use removeEventListener com funções nomeadas para maior controle.

Utilize debounce em eventos de alta frequência como mousemove e scroll.

Lembre-se de prevenir o comportamento padrão de elementos interativos quando necessário (ex: links com preventDefault()).

Teste eventos de carregamento da página com ações como reload e fechamento de aba.

✍️ Autor

Estudos e exemplos desenvolvidos por Feliph Renaud, com o objetivo de dominar o modelo de eventos do JavaScript e seus usos práticos na construção de interfaces interativas.
