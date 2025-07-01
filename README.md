🌐 Branch: Dom

Esta branch é dedicada ao estudo da manipulação do DOM (Document Object Model) com JavaScript. Nela, você explora métodos para acessar, modificar, criar e estilizar elementos HTML diretamente com código JS.

🔍 Tópicos abordados

📥 Seleção de Elementos

getElementsByTagName(), getElementById(), getElementsByClassName()

querySelector() e querySelectorAll() para seleções com estilo CSS

🏗️ Criação e Inserção de Elementos

createElement() – cria elementos HTML dinamicamente

appendChild() – adiciona elementos ao DOM

insertBefore() – insere um elemento antes de outro

replaceChild() – substitui um elemento existente

createTextNode() – cria nós de texto (comentários e conteúdo textual)

🧪 Atributos HTML

setAttribute() – define novos atributos ou modifica existentes

getAttribute() – lê atributos de um elemento

📐 Medições de Elementos

offsetWidth, offsetHeight, clientWidth, clientHeight

getBoundingClientRect() – fornece dimensões e posição no viewport

🎨 Estilização com JS

Estilização direta via .style

Aplicação de estilos a múltiplos elementos com for...of

🛠️ Tecnologias

JavaScript ES6+

HTML5 (para estrutura do DOM)

Navegador moderno com console de desenvolvedor

🔧 Como testar

Crie um arquivo HTML com estrutura básica contendo elementos como:

    <body>
      <header>
        <h1 id="title">
          Título original
        </h1>
      </header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contato</li>
          </ul>
        </nav>
      <main id="main-container">
        <div class="product">Produto 1</div>
        <div class="product">Produto 2</div>
      </main>
      <footer>Rodapé</footer>
    </body>

Inclua o script JS ao final do body ou usando defer:

    <script src="dom.js" defer></script>

Abra o arquivo no navegador e observe os resultados no console (F12 → Console).

🧠 Dicas práticas

Use o console.log() para acompanhar o DOM em tempo real.

Teste diferentes seletores (class, id, tag) para ver o comportamento.

Cuidado ao usar replaceChild() — o elemento antigo será perdido.

Combine estilos JS com classes CSS para maior controle e organização.

✍️ Autor

Estudos desenvolvidos por Feliph Renaud, como parte de sua jornada para dominar manipulação do DOM com JavaScript puro.
