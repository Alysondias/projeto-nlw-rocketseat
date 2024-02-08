const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação de texto",
      "Uma linguagem de programação",
      "Um banco de dados",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Para definir o tipo de uma variável",
      "Para criar loops",
      "Para realizar operações matemáticas",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var x = 5;",
      "int x = 5;",
      "const x = 5;",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
    respostas: [
      "33",
      "6",
      "Erro",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "push()",
      "add()",
      "append()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
    respostas: [
      "Selecionar um elemento HTML por sua classe",
      "Selecionar um elemento HTML por seu ID",
      "Selecionar um elemento HTML por sua tag",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador usado para comparar o valor e o tipo em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado da expressão '5 == '5' em JavaScript?",
    respostas: [
      "true",
      "false",
      "Erro",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que chama outra função",
      "Uma função que é passada como argumento para outra função",
      "Uma função que retorna um valor booleano",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o método utilizado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "remove()",
      "delete()",
    ],
    correta: 0
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set  ()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas




// loop ou laço de repedição

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  

  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => { 
      const estaCorreta = event.target.value == item.correta  

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }

    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}


