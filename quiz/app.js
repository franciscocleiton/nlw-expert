const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
        respostas: [
            '// Este é um comentário de uma linha',
            '/* Este é um comentário de uma linha */',
            '<!-- Este é um comentário de uma linha -->'
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            'vari myVar = 5;',
            'let myVar = 5;',
            'myVar = 5;'
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            'Atribuição',
            'Comparação de valores e tipos',
            'Comparação de valores apenas'
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão 10 + '5' em JavaScript?",
        respostas: [
            '15',
            '105',
            'Erro'
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'document.querySelector()' faz em JavaScript?",
        respostas: [
            'Seleciona todos os elementos com uma determinada classe',
            'Seleciona o primeiro elemento que corresponde a um seletor CSS especificado',
            'Seleciona um elemento pelo seu ID'
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
        respostas: [
            'Adiciona um evento de clique a um elemento',
            'Remove um evento de clique de um elemento',
            'Define um evento de clique em um elemento'
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'JSON.stringify()' faz em JavaScript?",
        respostas: [
            'Analisa uma string JSON',
            'Converte um objeto JavaScript em uma string JSON',
            'Converte uma string JSON em um objeto JavaScript'
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão Boolean('false') em JavaScript?",
        respostas: [
            'true',
            'false',
            'Erro'
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o significado do operador '&&' em JavaScript?",
        respostas: [
            'OU lógico',
            'E lógico',
            'Negação lógica'
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            'array.remove()',
            'array.pop()',
            'array.deleteLast()'
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal  = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;
            corretas.delete(item);
            if (estaCorreta) {
                corretas.add(item);
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
            
         };
    
        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quizItem.querySelector('dl dt').remove();
    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem);
}

