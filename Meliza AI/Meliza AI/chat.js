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
  // Greetings
  hi: "Hi, how can I help you?",
  hello: "Hello! How can I assist you today?",
  "good morning": "Good morning! How can I make your day better?",
  "good night": "Good night! Sleep well.",
  bye: "Goodbye! Take care!",
  thanks: "You're welcome! Let me know if you need anything else.",
  "thank you": "No problem! I'm happy to help.",

  // Personal Questions
  "how are you?": "I'm just a chatbot, but I'm here to assist you anytime!",
  "what is your name?": "I'm Meliza AI, your virtual assistant.",
  "where are you from?": "I live in the cloud, ready to assist you!",
  "what's your purpose?": "To help you with information and make your tasks easier.",
  "are you a human?": "No, I'm just a virtual assistant powered by code and AI.",

  // Information
  "what is the weather today?": "I can't check the weather right now, but you can use a weather app for accurate updates.",
  "what time is it?": "I can't check the time, but you can look at your device clock.",
  "what is 2 + 2?": "The answer is 4. Easy math, isn't it?",
  "what's the capital of France?": "The capital of France is Paris.",
  "who is the president of the United States?": "It depends on the current year. Let me know if you need updated info.",

  // Fun & Entertainment
  "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
  "tell me a fun fact": "Did you know honey never spoils? Archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
  "can you sing?": "I can't sing, but I can hum a little... hmm hmm hmm!",
  "do you like pizza?": "I don't eat, but pizza sounds amazing!",
  "tell me a riddle": "What has keys but can't open locks? A piano!",

  // Chatbot Abilities
  "what can you do?": "I can answer questions, provide information, and help you with tasks.",
  "can you solve math problems?": "Yes! Just type the problem, and I'll try to solve it for you.",
  "can you translate?": "I can help translate simple phrases. Tell me what you need!",
  "can you write code?": "I can help write simple code snippets. Let me know what you need!",
  "can you help with homework?": "Absolutely! Ask me a question, and I'll try to help.",

  // Help & Support
  "how do I reset my password?": "To reset your password, click on 'Forgot Password' on the login page and follow the instructions.",
  "how do I contact support?": "You can contact support through email or the help section on the website.",
  "how do I install software?": "Visit the official website, download the installer, and follow the on-screen instructions.",
  "how do I delete my account?": "Deleting accounts depends on the service. Check their settings or support page for instructions.",

  // Random
  "do you believe in aliens?": "I don't have beliefs, but the universe is vast—anything is possible!",
  "what's your favorite color?": "I don't have eyes, but I think all colors are amazing!",
  "what's your favorite movie?": "I'm more into data streams than movies, but sci-fi seems fascinating!",
  "can you dance?": "I can imagine dancing, but I'm not very good at it in real life!",
};


// Function to handle sending messages
function handleSendMessage() {
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
}

// Event listener for the Enter key
messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSendMessage();
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

// Create Chat History Popup
const historyPopup = document.createElement("div");
historyPopup.setAttribute("id", "history-popup");
historyPopup.innerHTML = `
  <h3>Chat History</h3>
  <button id="close-history">Close</button>
  <div id="history-content"></div>
`;
document.body.appendChild(historyPopup);

const historyButton = document.getElementById("history-button");
const closeHistory = document.getElementById("close-history");
const historyContent = document.getElementById("history-content");

// Event listener for opening the history popup
historyButton.addEventListener("click", () => {
  const messages = chatArea.querySelectorAll(".message");
  historyContent.innerHTML = ""; // Clear previous content

  // Loop through chat messages and display them
  messages.forEach((message) => {
    const messageClone = message.cloneNode(true);
    historyContent.appendChild(messageClone);
  });

  historyPopup.style.display = "block"; // Show popup
});

// Event listener for closing the history popup
closeHistory.addEventListener("click", () => {
  historyPopup.style.display = "none"; // Hide popup
});



