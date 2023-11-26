// GLOBAL VARIABLES
const goBackBtn = document.getElementById('go-back-btn');
const listContainer = document.getElementById('listContainer');
const quoteForm = document.getElementById('quoteForm');
const quoteInput = document.querySelector('#quoteInput')

function handleSubmit(e) {
  e.preventDefault()
  const data = quoteInput.value

  fetch('http://localhost:3001/quote-form', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data })
  })

}
function goBackToMainPage() {
  window.location.href = '../';
}

goBackBtn.addEventListener('click', goBackToMainPage);
quoteForm.addEventListener('submit', handleSubmit);
