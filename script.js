
// ログインフォームのサブミットイベントリスナー
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('login-form').addEventListener('submit', function(event) {

        event.preventDefault();
        const username = document.getElementById('username-input').value;
        const password = document.getElementById('password-input').value;

        // DBがないので、一旦決め打ち
        if (username === 'admin' && password === 'password') {
            sessionStorage.setItem('username', username);
            window.location.href = 'index.html'; // ログイン成功時のページ遷移
        } else {
            window.alert('ログインに失敗しました。ユーザー名とパスワードを確認してください。');
        }
    });
}, false);

// 新規アカウント作成フォームのサブミットイベントリスナー
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username-input').value;
        const password = document.getElementById('password-input').value;
        
        // DBにusername,passwordを登録する想定
        
        alert('新規アカウントが作成されました。ログインしてください。');
        window.location.href = 'login.html'; // 新規アカウント作成後のページ遷移（ログイン画面へ）
    });
}, false);

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
