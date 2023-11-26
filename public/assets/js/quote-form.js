// GLOBAL VARIABLES
const goBackBtn = document.getElementById('go-back-btn');
const listContainer = document.getElementById('listContainer');

function goBackToMainPage() {
  window.location.href = '../';
}

goBackBtn.addEventListener('click', goBackToMainPage);
