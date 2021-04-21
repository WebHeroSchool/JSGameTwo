const questions = [
   {
      question: 'Кто впервые сформулировал закон всемирного тяготения?',
      answers: {
         a: 'Аристотель',
         b: 'Галилей',
         c: 'Ньютон',
      },
      correctAnswer: 'c',
   },
   
   {
      question: 'При увеличении массы одного из взаимодействующих тел в 5 раз сила всемирного тяготения:',
      answers: {
         a: 'уменьшиться в 5 раз',
         b: 'увеличится в 5 раз',
         c: 'не изменится',
      },
      correctAnswer: 'b',
   },
   
   {
      question: 'Единица измерения силы в СИ -',
      answers: {
         a: 'F',
         b: 'Дж',
         c: 'H',
      },
      correctAnswer: 'c',
   },
   
   {
      question: 'От чего зависит громкость звука',
      answers: {
         a: 'от амплитуды колебаний',
         b: 'от частоты и амплитуды',
         c: 'от источника колебаний',
      },
      correctAnswer: 'a',
   },
];

let arrayAnswers = questions.map(item => {
   let answers = item.correctAnswer;
   
   return answers;
});

let correctAnswer = function correctAnswer() {
   let comparison = 0;

   for (let i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer === arrayAnswers[i]) {
         // console.log('The answer is correct');
         comparison++;
      } else {
         // console.log('The answer is incorrect. Try one more time!')
      }
   }

   return comparison;
};

let container = document.getElementById('container');

function buildQuiz() { 
   const output = [];

   questions.forEach((currentQuestion, questionNumber) => { 
      const answers = [];

      for (letter in currentQuestion.answers) { 
         answers.push(
            `<label>
            <input type='radio' name='question${questionNumber}' value='${letter}'>
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>`
         )      
      }

      output.push(
         `<div class='question'> ${currentQuestion.question} </div>
         <div class='answers'> ${answers.join('')} </div>`
      )
   })
   
   container.innerHTML = output.join('');
}

buildQuiz(questions);

let result = document.createElement('div');
result.classList.add('result');
result.innerHTML = `Количество правильных ответов: ${correctAnswer()}`;
container.appendChild(result);

// function showResults() { 
//    const answerContainers = container.querySelectorAll('.answers');

//    let score = 0;

//    questions.forEach((currentQuestion, questionNumber) => { 
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]: checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}.value);

//       if (userAnswer === currectQuestion.correctAnswer) {
//          score++;

//          answerContainers[questionNumber].getElementsByClassName.color = 'lightgreen';
//       } else { 
//          answerContainers[questionNumber].getElementsByClassName.color = 'red';
//       }
//    })

//    resultsContainer.innerHTML = `${score} out of ${questions.length}`;
// }
