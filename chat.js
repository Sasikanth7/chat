function sendMessage() {
    var userInput = document.getElementById('user-input');
    var message = userInput.value;
    
    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }
    
    var chatBox = document.getElementById('chat-box');
    var newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    
    // Clear input after sending message
    userInput.value = '';
    
    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
