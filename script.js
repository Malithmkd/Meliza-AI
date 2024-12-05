// script.js
const chatBox = document.getElementById("chatbox");
const chatArea = document.createElement("div");
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const mainContent = document.getElementById("content");

// Attach the chat area dynamically and make it hidden initially
chatArea.setAttribute("id", "chat-area");
chatArea.style.flex = "1";
chatArea.style.display = "none";
chatBox.before(chatArea);

// Predefined Q&A pairs
const responses = {
  hi: "Hi, how can I help you?",
  hello: "Hello Christine! How can I assist you today?",
  "how are you?": "I'm just a chatbot, but I'm here to help you!",
  "what is your name?": "I'm Meliza AI, your virtual assistant.",
  "what can you do?": "I can answer your questions, assist with tasks, and provide helpful information.",
  bye: "Goodbye! Have a great day!",
  thanks: "You're welcome! Let me know if you need anything else.",
};

// Event listener for the send button
sendButton.addEventListener("click", () => {
  const userMessage = messageInput.value.trim().toLowerCase();

  if (userMessage !== "") {
    // Add user message
    addMessage(messageInput.value.trim(), "user");

    // Clear input field
    messageInput.value = "";

    // Hide main content and show chat area
    mainContent.style.display = "none";
    chatArea.style.display = "flex";

    // Simulate chatbot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      addMessage(botResponse, "bot");
    }, 1000);
  }
});

// Function to add a message to the chat area
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;

  chatArea.appendChild(messageDiv);
  chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the latest message
}

// Function to get the chatbot response
function getBotResponse(userMessage) {
  // Check if the user's message matches any predefined response
  if (responses[userMessage]) {
    return responses[userMessage];
  }
  // Default response for unknown messages
  return "I'm sorry, I didn't understand that. Could you please rephrase?";
}
