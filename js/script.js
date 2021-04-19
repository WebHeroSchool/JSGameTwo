let num = '0';
let score;

const questions = [
   {
      question: 'Кто впервые сформулировал закон всемирного тяготения?',
      answer: {
         a: 'Аристотель',
         b: 'Галилей',
         c: 'Ньютон',
      },
      currentAnswer: 'b',
      correctAnswer: 'c',
   },
   
   {
      question: 'При увеличении массы одного из взаимодействующих тел в 5 раз сила всемирного тяготения:',
      answer: {
         a: 'уменьшиться в 5 раз',
         b: 'увеличится в 5 раз',
         c: 'не изменится',
      },
      currentAnswer: 'a',
      correctAnswer: 'b',
   },
   
   {
      question: 'Единица измерения силы в СИ -',
      answer: {
         a: 'F',
         b: 'Дж',
         c: 'H',
      },
      currentAnswer: 'c',
      correctAnswer: 'c',
   },
   
   {
      question: 'От чего зависит громкость звука',
      answer: {
         a: 'от амплитуды колебаний',
         b: 'от частоты и амплитуды',
         c: 'от источника колебаний',
      },
      currentAnswer: 'c',
      correctAnswer: 'a',
   },
]

let correctAnswer = questions.forEach(function(item) {
   if (item.correctAnswer === 'c') {
      console.log(questions.indexOf(item) + ': ' + item.correctAnswer)
   }
});


