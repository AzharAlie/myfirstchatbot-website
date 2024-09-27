// Chatbot responses (example knowledge base)
const responses = {
    "how long does shipping take": "Shipping takes 3-5 business days for domestic orders and 7-15 business days for international orders.",
    "what is your return policy": "You can return most items within 30 days of receipt, provided the items are unused and in their original packaging.",
    "do your products come with a warranty": "Yes, most of our products come with a 1-year limited warranty against manufacturing defects.",
    "how do i contact customer support": "You can contact customer support via email at support@yourstore.com or by phone at +1-800-123-4567.",
    "what payment methods do you accept": "We accept credit cards, PayPal, Apple Pay, and Google Pay."
};

// Function to handle chatbot responses
function getBotResponse(userInput) {
    let lowerCaseInput = userInput.toLowerCase();
    return responses[lowerCaseInput] || "I'm sorry, I don't understand your question. Please try asking something else.";
}

// Handle sending message
document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    if (userInput) {
        let chatOutput = document.getElementById('chat-output');
        chatOutput.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
        
        let botResponse = getBotResponse(userInput);
        chatOutput.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
        
        // Clear the input field
        document.getElementById('user-input').value = '';
        
        // Scroll to the bottom of the chat
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
