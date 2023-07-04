const express = require('express');
const quotesRouter = express.Router();

const { quotes } = require('./data');
const { getRandomElement, getQuotesByPerson, updateQuote, findQuoteById, deleteQuote } = require('./utils');


quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    if (randomQuote) {
        res.send({ quote: randomQuote });
    } else {
        res.status(404).send()
    }
});

quotesRouter.get('', (req, res, next) => {
    if (!req.query.person) {
        res.send({ quotes: quotes });
    } else if (req.query.person) {
        const personQuotes = getQuotesByPerson(quotes, req.query.person);
        res.send({ quotes: personQuotes });
    }
})

quotesRouter.post('', (req, res, next) => {
    if (req.query.id && req.query.quote && req.query.person) {
        const lastQuote = quotes[quotes.length - 1];
        const newQuote = {
            id: lastQuote.id + 1,
            quote: req.query.quote,
            person: req.query.person
        }
        quotes.push(newQuote);
        res.send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
})

quotesRouter.put('', (req, res, next) => {
    let index = findQuoteById(quotes, req.query.id);
    if (index !== -1) {
        quotes[index].quote = req.query.quote;
        quotes[index].person = req.query.person;
        res.send({ quote: quotes[index] });
    }else{
        res.status(404).send();
    }
})

quotesRouter.delete('/:id', (req, res, next) => {
    if (req.params && quotes.length > 0) {
        const quoteDelete = deleteQuote(req.params.id)
        if (quoteDelete) {
            res.send({quote: quoteDelete[0]});   
        }
    }else{
        res.status(404).send();
    }
})

module.exports = quotesRouter;