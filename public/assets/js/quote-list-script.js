// GLOBAL VARIABLES
const goBackBtn = document.getElementById('go-back-btn');

function goBackToMainPage() {
    window.location.href = '../index.html';
}

goBackBtn.addEventListener('click', goBackToMainPage);
console.log("goBackBtn:", goBackBtn);