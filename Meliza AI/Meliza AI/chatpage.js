function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Do nothing if the input is empty

    // Add the user's message to the chat
    addMessage(userInput, 'user');

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Generate chatbot's response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot');
    }, 1000);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');

    // Create the avatar for the sender (you can replace with actual images if desired)
    const avatarDiv = document.createElement('div');
    avatarDiv.classList.add('avatar');
    avatarDiv.style.backgroundColor = sender === 'user' ? 'cyan' : 'gray'; // Color based on sender

    const messageText = document.createElement('p');
    messageText.textContent = message;

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(messageText);
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    // For now, return a static response
    return "This is a bot response to: " + userInput;
}




