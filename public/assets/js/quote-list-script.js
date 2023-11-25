// GLOBAL VARIABLES
const goBackBtn = document.getElementById('go-back-btn');
const listContainer = document.getElementById('listContainer');

async function init() {
  const response = await fetch('/db/quotes.json')
  const data = await response.json()

  data.quotes.forEach(quote => {
    const paragraphEl = document.createElement('p')
    paragraphEl.textContent = quote
    listContainer.appendChild(paragraphEl)
  })
}

function goBackToMainPage() {
  window.location.href = '../';
}

goBackBtn.addEventListener('click', goBackToMainPage);
console.log("goBackBtn:", goBackBtn);
init()