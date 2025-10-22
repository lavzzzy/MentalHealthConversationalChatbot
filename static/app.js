class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'), // Removed 'selectors' from document.querySelector
            Chatbox: document.querySelector('.chatbox__support'), // Removed 'selectors' from document.querySelector
            sendButton: document.querySelector('.send__button') // Removed 'selectors' from document.querySelector
        };

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, Chatbox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(Chatbox));
        sendButton.addEventListener('click', () => this.onSendButton(Chatbox));

        const node = Chatbox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(Chatbox);
            }
        });
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // Show or hide the box
        if (this.state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active'); // Fixed the syntax here
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value;
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 };
        this.messages.push(msg1);

        fetch($SCRIPT_ROOT + '/predict', { // Fixed the syntax here
            method: 'POST',
            body: JSON.stringify({ message: text1 }), // Fixed the syntax here
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { name: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox);
            textField.value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox);
            textField.value = '';
        });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();



