// scripts/join-button.js

document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-button');

    joinButton.addEventListener('click', () => {
        window.location.href = 'join.html';
    });
});
