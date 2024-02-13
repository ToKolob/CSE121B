//final-PromiseRejectionEvent.js

//imports
import startModelGame from './model.js';
import runGemini from './gemini.js';

//global variables
const sendButton = document.getElementById('send-button');
const displayStory = document.querySelector('.story');

//functions
const sendMessage = async () => {
    const userInput = document.getElementById('user-input').value;
    await runGemini(userInput)
    .then(response => {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += `<p>Gemini: ${response}
        </p>`
        displayStory.textContent = response
    })
    .catch(error => {
        
        console.error(error);
    })
}

//add event listener
sendButton.addEventListener('click', sendMessage);
