🐞 Branch: debugsEerros

Esta branch contém estudos voltados à identificação e correção de erros, além de práticas para debugging, validação de dados e uso correto de estruturas de tratamento de exceções em JavaScript.

🔍 Tópicos abordados

🚨 Strict Mode

Ativa verificações rigorosas do JavaScript com "use strict"

Impede:
Uso de variáveis globais sem declaração (let, const, var)

Uso de palavras reservadas como variáveis

Exclusão de propriedades não deletáveis

🧩 Console para Debug

Uso estratégico de console.log() para acompanhar valores e identificar comportamentos inesperados

Monitoramento passo a passo da lógica de código

🛠️ Debugger

Comando debugger para pausas em tempo real na execução, ideal para uso em navegadores

Permite inspeção minuciosa de valores e execução linha por linha

✅ Validação e Sanitização de Dados

Criação de funções que validam se os dados recebidos podem ser convertidos corretamente para o tipo esperado

Exemplos com Number.isNaN(), arrays e objetos

💥 Exceptions

Geração de erros com throw new Error()

Proteção de regras de negócio e integridade da aplicação

🧪 Try...Catch...Finally

Bloco try: tenta executar um trecho de código

Bloco catch: captura e trata qualquer erro que ocorrer

Bloco finally: executa sempre ao fim, com ou sem erro

🧱 Assertions

Verificações manuais para garantir condições obrigatórias (como tamanho de array, presença de valores etc.)

Utiliza throw para lançar erro caso o dado não atenda à regra

🛠️ Tecnologias
JavaScript ES6+

Ambiente: Node.js ou navegador com console de desenvolvedor

🧪 Como executar
Clone o repositório:

    git clone <url-do-repo>
    cd <nome-do-projeto>

Acesse a branch:

    git checkout debugsEerros

Execute o arquivo com Node.js:

    node <nome-do-arquivo>.js

Atenção: Alguns trechos estão comentados para evitar que erros bloqueiem a execução dos estudos.

🙋 Dicas práticas

Utilize o debugger em conjunto com ferramentas do navegador como o DevTools (F12).

Valide sempre os dados que vêm do usuário, mesmo que pareçam corretos.

Lembre-se que o finally sempre será executado, mesmo que ocorra erro.

Prefira tratar erros de forma clara para facilitar o entendimento durante o desenvolvimento.

✍️ Autor

Anotações e exemplos de estudo desenvolvidos por Feliph Renaud para aprofundar seu entendimento sobre tratamento de erros e práticas de depuração em JavaScript.
