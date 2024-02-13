const startModelGame = document.querySelector('.model')
const startButton = document.querySelector('#start-button')

startButton.addEventListener('click', () => {
  startModelGame.style.display = 'none'
})
export {startModelGame, startButton}