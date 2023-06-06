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
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `
        <div class="message-content">
            <strong>${name}:</strong> ${message}<br>
            <small>${timestamp}</small>
        </div>
        <div class="message-actions">
            <button onclick="addLike(this)">グッド</button>
        </div>
    `;
    messageContainer.appendChild(messageElement);

    nameInput.value = '';
    messageInput.value = '';
});

function addLike(button) {
    const likeCount = button.dataset.likes ? parseInt(button.dataset.likes) : 0;
    button.dataset.likes = likeCount + 1;
    button.innerText = `グッド (${likeCount + 1})`;
}
