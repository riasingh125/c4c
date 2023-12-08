function postMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message.length > 0 && message.length <= 128) {
        const messageBoard = document.getElementById('message-board');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        messageBoard.insertBefore(newMessage, messageBoard.firstChild);

        // Clear the input field after posting
        messageInput.value = '';
    } else {
        alert('Message must be non-empty and at most 128 characters long.');
    }
}

// Periodically check for new messages (simulate real-time updates)
setInterval(function () {
    // You would normally make an AJAX request here to fetch new messages from the server
    // For simplicity, this example adds a dummy message every 5 seconds
    const messageBoard = document.getElementById('message-board');
    const dummyMessage = document.createElement('div');
    dummyMessage.textContent = 'New message!';
    messageBoard.insertBefore(dummyMessage, messageBoard.firstChild);
}, 5000);
