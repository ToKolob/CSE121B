//final-PromiseRejectionEvent.js

//imports
import { startButton, startModelGame } from './model.js';
import runGemini from './gemini.js';
import seeHistory from './history.js'

//global variables
const sendButton = document.getElementById('send-button');
const displayStory = document.querySelector('.story');
const path1Button = document.getElementById('path-1');
const path2Button = document.getElementById('path-2');
const path3Button = document.getElementById('path-3');
const userInputElement = document.getElementById('user-input').value;

//functions
const sendMessage = async (userInput) => {

    console.log(`sending: ${userInput}`);
    displayStory.innerHTML = `<pre>Creating an imersive story...</pre>`

    //disable buttons
    path1Button.disabled = true;
    path2Button.disabled = true;
    path3Button.disabled = true;
    

    await runGemini(userInput)
    .then(response => {

        //eneble buttons
        path1Button.disabled = false;
        path2Button.disabled = false;
        path3Button.disabled = false;

        //display in the main box
        displayStory.innerHTML = `<pre>${response}</pre>`

        //display in the history box
        const chatBox = document.getElementById('chat-box');

        chatBox.innerHTML += `<pre>

        <strong>User: </strong>${userInput}

        <strong>Gemini: </strong>${response}
        <hr>
        </pre>`            
    })
    .catch(error => {
        console.error(error);
    })
    if (displayStory.innerHTML == '<pre></pre>'){
        console.log('Gemini did not answer');
        sendMessage(`Try again: ${userInput}`)

    }
}

//add event listener
sendButton.addEventListener('click', () => {
    sendMessage(userInputElement)
});
startButton.addEventListener('click', () => {
    sendMessage("Start the game giving me 3 options of story, with diferent protagonists, that I will interpret")
})

//options interactions
path1Button.addEventListener('click', () => {
    sendMessage("I choose the fisrt path")    
})
path2Button.addEventListener('click', () => {
    sendMessage("I choose the second path")
})
path3Button.addEventListener('click', () => {
    sendMessage("I choose the third path")
})
