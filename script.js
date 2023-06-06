function navigateToPage(page) {
    window.location.href = page;
}

function showAlert(message) {
    window.alert(message);
}

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('message-form');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const message = messageInput.value;

    if (name.trim() === '' || message.trim() === '') {
        alert('名前とメッセージを入力してください');
        return;
    }

    const timestamp = new Date().toLocaleString();
    const formattedMessage = `<div><strong>${name}:</strong> ${message}<br><small>${timestamp}</small></div>`;
    messageContainer.innerHTML += formattedMessage;

    nameInput.value = '';
    messageInput.value = '';
});
