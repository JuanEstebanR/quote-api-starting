
const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');


submitButton.addEventListener('click', () => {
    const id = document.getElementById('id').value;

    fetch(`/api/quotes/:${id}`,{
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(({ quote }) => {
            newQuoteContainer.innerHTML = '';
            const newQuote = document.createElement('div');
            newQuote.innerHTML = `
    <h3>Congrats, quote with id ${quote.id} was Delete!</h3>
    <div class="quote-text">${quote.quote}</div>
    <div class="attribution">- ${quote.person}</div>
    <div class="attribution">- ${quote.year}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>`

            newQuoteContainer.appendChild(newQuote);
        });
});
