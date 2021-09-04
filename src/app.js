const form = document.querySelector('.quiz-form')
const correctAnswers = ['B','B','B','B']
/* um array q vai armazenar todas as respostas corretas do quiz */
form.addEventListener('submit', event => {
  event.preventDefault()
  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })
})
// form.inputQuestion1 -> retorna um RadioNodeList que é uma interface que representa
/* uma lista de elementos com type radio dentro de um form ou de um fieldSet  */