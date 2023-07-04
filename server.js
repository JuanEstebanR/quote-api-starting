const express = require('express');
const app = express();

// Import Quotes router
const quotesRouter = require('./quotes')
app.use('/api/quotes', quotesRouter);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

