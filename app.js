function postMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message.length > 0 && message.length <= 128) {
        const messageBoard = document.getElementById('message-board');
        
        // Create a new message div
        const newMessage = document.createElement('div');

        // Get the current date and time
        const timestamp = new Date();
        const formattedTimestamp = timestamp.toLocaleString();

        // Set the text content of the new message div to include the message and timestamp
        newMessage.textContent = `${formattedTimestamp}: ${message}`;

        // Insert the new message at the top of the message board
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

    // Get the current date and time for the dummy message
    const timestamp = new Date();
    const formattedTimestamp = timestamp.toLocaleString();

    // Set the text content of the dummy message div to include the timestamp
    dummyMessage.textContent = `${formattedTimestamp}: New message!`;

    // Insert the dummy message at the top of the message board
    messageBoard.insertBefore(dummyMessage, messageBoard.firstChild);
}, 5000);
