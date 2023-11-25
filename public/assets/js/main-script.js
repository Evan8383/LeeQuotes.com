// GLOBAL VARIABLES
const image = document.getElementById('shakingImage');
const quoteContainer = document.getElementById('quoteContainer');
const quoteList = document.getElementById('full-list-btn');
const goBackBtn = document.getElementById('go-back-btn');

const quotes = [
    {
        quote: `Banana`
    },
    {
        quote: `Meatloaf`
    },
    {
        quote: `Banana\nMeatloaf`
    },
    {
        quote: `For Funsies`
    },
    {
        quote: `Bueller… \nBueller… \nBueller…`
    },
    {
        quote: `That's just how\nfunctions\nwork`
    },
    {
        quote: `We put code in your\ncode so you can\ncode while\nyou code`
    },
    {
        quote: `DO NOT MIX \nPROMISES & \nCALLBACKS.\nIt is a source\nof pain`
    },
    {
        quote: `Vanilla css is\ngood practice`
    },
    {
        quote: `Questions, Concerns,\n Threats...\nCompliments?\nno? ok.`
    },
    {
        quote: `You guys look\nburnt out`
    },
    {
        quote: `Give yourself\na patented\nPOB`
    },
    {
        quote: `10 points for\ngryffindor`
    },
    {
        quote: `Code Smell`
    },
    {
        quote: `Clear as\nmud?`
    },
    {
        quote: `Don't panic`
    },
    {
        quote: `Objection!\nLeading the\nwitness`
    },
];

// Displays a random quote on top of the image
function showRandomQuote() {
    // Choose a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Create Quote
    const displayQuote = document.createElement('p');
    displayQuote.setAttribute('id', 'quote');
    displayQuote.innerHTML = randomQuote.quote.replace(/\n/g, '<br>');

    // Display Quote
    quoteContainer.style.opacity = '1';
    quoteContainer.style.display = 'block';
    displayQuote.setAttribute('class', 'fade');
    quoteContainer.appendChild(displayQuote);

    setTimeout(() => {
        displayQuote.classList.remove('fade');
    }, 750);
};

function clearQuote() {
    quoteContainer.textContent = '';
}

// Makes image shake when clicked
function shakeImage(event) {
    event.preventDefault();

    clearQuote();

    image.classList.add('shake');

    setTimeout(() => {
      image.classList.remove('shake');
    }, 700);

    showRandomQuote();
};

// Buttons to go between html's
function goToQuoteList() {
    window.location.href = './quote-list/quote-list.html';
}

// Event Listeners
image.addEventListener('click', shakeImage);
image.addEventListener('dblclick', (event) => {
    event.preventDefault();
});
quoteList.addEventListener('click', goToQuoteList);
