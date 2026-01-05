const chatDisplay = document.getElementById('chat-display');
const msgInput = document.getElementById('msg-input');
const sendBtn = document.getElementById('send-btn');




function createMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('msg', type);
    msgDiv.textContent = text;
    chatDisplay.appendChild(msgDiv);
    
    // Auto-scroll to bottom
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function handleSend() {
    const val = msgInput.value.trim();
    if (!val) return;


    createMessage(val, 'sent');
    
   

    msgInput.value = '';


    setTimeout(() => {
        createMessage("Hey there how are you doing!", "received");
    }, 600);

    setTimeout(() => {
        createMessage("dont go to school okay !", "received");
    }, 600);
    setTimeout(() => {
        createMessage("stay home!", "received");
    }, 600);
    setTimeout(() => {
        createMessage("dont do the assignment!🙂‍↕️🙂‍↕️", "received");
    }, 600);
}

sendBtn.addEventListener('click', handleSend);
msgInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});