const socket = io();

const form = document.getElementById('chat-form');
const msgBox = document.getElementById('msgBox');
const chatHistory = document.getElementById('chat-history');

const appendMsg = (msgObj) => {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('col-md-12');
    msgDiv.classList.add('border');
    msgDiv.classList.add('px-3');
    msgDiv.classList.add('py-1');
    msgDiv.classList.add('mb-3');
    msgDiv.classList.add('msg');

    const timeSpan = document.createElement('span');
    timeSpan.classList.add('timeSpan');
    timeSpan.innerText = msgObj.time;


    const usernameSpan = document.createElement('span');
    usernameSpan.classList.add('usernameSpan');
    usernameSpan.innerText = msgObj.id + ' : ';


    const msgSpan = document.createElement('span');
    msgSpan.classList.add('msgSpan');
    msgSpan.innerText = msgObj.msg;

    msgDiv.appendChild(timeSpan);
    msgDiv.appendChild(usernameSpan);
    msgDiv.appendChild(msgSpan);


    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
};

socket.on('message', (msgObj) => {
    appendMsg(msgObj);
});

socket.on('prevMsg', msgQueue => {
    for (const msgObj of msgQueue) {
        appendMsg(msgObj);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('msgEvent', {
        id: username,
        msg: msgBox.value
    });
    msgBox.value = '';
    msgBox.focus();
});