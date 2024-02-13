const seeHistory = document.getElementById('seeHistoric');
const chatContainer = document.getElementById('chat-container');

chatContainer.classList.add('hide')


seeHistory.addEventListener('click', () => {
  chatContainer.classList.toggle('hide')
  if (chatContainer.classList.contains('hide')){
    seeHistory.innerHTML = 'See History'
  }else {
    seeHistory.innerHTML = 'Hide History'
  }
})

export default seeHistory