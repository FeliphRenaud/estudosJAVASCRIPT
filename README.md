🧱 Branch: orientacaoObjetos

Esta branch explora os principais conceitos de Programação Orientada a Objetos (POO) com JavaScript, passando por object literals, herança, classes ES6, getters, setters, instâncias, uso de prototype, e muito mais.

🔍 Tópicos abordados

🧱 Object Literals e Métodos

Criação de objetos com métodos (animal, pessoa)

Uso de this para acessar propriedades internas

Getters e Setters manuais com funções getNome e setNome

🧬 Prototypes

Visualização do prototype de strings, booleans e arrays

Criação de objetos com Object.create() para herança

Comparações com Object.getPrototypeOf()

🐕 Classes com Object.create()

Exemplos com cachorro, pastorAlemao, bullDog

Compartilhamento de propriedades via herança

🛠 Funções Construtoras

Função criarCachorro() para criar instâncias

Função Gato() com uso de new

Adição de métodos com Gato.prototype

🧑‍🏫 Classes ES6

Criação de classes com constructor

Instanciamento com new

Definição de métodos diretamente na classe (descreverCaminhao, descricaoVertebrado)

🎯 Getters e Setters modernos

Classe PostBlog com get para título e set para adicionar tags

Conversão de string para array de tags via .split()

🧬 Herança com extends e super()

Classe Lobo herdando de Mamiferos

Uso de super() para inicializar a classe base

✅ instanceof

Verificação de instância entre classes e objetos

Demonstração de relações de herança e instanciamento

💻 Como executar

Clone o repositório:

    git clone <url-do-repo>
    cd <nome-do-projeto>

Acesse a branch:

    git checkout orientacaoObjetos

Execute com Node.js:

node orientacaoObjetos.js

🚀 Boas práticas destacadas

🧠 Utilização de this dentro de métodos para acessar propriedades do objeto.

🧰 Object.create()

como alternativa leve para herança antes do ES6.

📦 Preferência por classes ES6 para código moderno, limpo e reutilizável.

🧼 Separação de responsabilidade entre métodos (get, set, descrição, instância).

🔍 Uso de instanceof para validação de tipos em tempo de execução.

✍️ Autor

Material de estudo produzido por Feliph Renaud durante sua jornada de aprendizado em Programação Orientada a Objetos com JavaScript.
