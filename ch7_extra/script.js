//Gana Sehaki

const sendBtn = document.getElementById("send-button");
const clearBtn = document.getElementById("clear-button");
const messageInput = document.getElementById("message-input");
const chatArea = document.getElementById("chat-area")

// event listener for send button
sendBtn.addEventListener("click", () => {
    const messageText = messageInput.value.trim();
    if(messageText !== ''){

        //create p in chat area
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = messageText;
        chatArea.appendChild(messageParagraph);
        messageInput.value = "";
        messageInput.focus();
    } 
    
    clearBtn.addEventListener("click", () => {
        chatArea.innerHTML="";
    })
});
