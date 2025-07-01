⚙️ Branch: assincronismo

Esta branch documenta estudos sobre programação assíncrona em JavaScript, incluindo timers, Promises, async/await e generators. Todos os exemplos são práticos, com comentários explicativos, ideais para fixar os fundamentos.

🔍 Tópicos abordados

🕓 Timers
setTimeout() – executa código após determinado tempo

setInterval() – executa código repetidamente em intervalos regulares

📦 Promises

Criação de promessas com Promise.resolve()

Encadeamento com .then() e tratamento com .catch()

Rejeição manual de promessas com reject()

Execução paralela com Promise.all()

⚡ Async/Await

Criação de funções async

Uso do await para esperar resolução de promessas

Simulação de atrasos com setTimeout

🔁 Generators

Definição com function\*

Uso do método .next() para obter valores sob demanda

💻 Tecnologias

JavaScript moderno (ES6+)

Ambiente de execução: Node.js ou navegador

🧪 Como executar

Clone o repositório:

    git clone <url-do-repo>
    cd <nome-do-projeto>
    Acesse a branch:


    git checkout assincronismo

Execute o arquivo com Node.js:

    node <nome-do-arquivo>.js

Nota: Para evitar loops infinitos durante os testes, o setInterval() foi comentado.

🤓 Dicas

Use debugger ou console.log() para entender a ordem de execução.

Modifique os tempos de setTimeout() e setInterval() para visualizar melhor os comportamentos.

Pratique criando suas próprias promessas com condições de erro e sucesso.

✍️ Autor

Material de estudo criado por Feliph Renaud, como parte de sua jornada de aprofundamento em JavaScript.
