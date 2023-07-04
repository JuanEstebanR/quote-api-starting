const { quotes } = require("./data");

const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

//function that returns an array with all the quotes of an author 
const getQuotesByPerson = (arr, person) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  const personQuotes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].person === person) {
      personQuotes.push(arr[i]);
    }
  
  }
  return personQuotes;
}
//Find Quote by ID
const findQuoteById = (arr, id) => {
  const indexQuote = arr.findIndex(element =>  element.id === Number(id));
  return indexQuote;
};

//Update function
const updateQuote = (id, quote) => {
  
}

const deleteQuote = (id) => {
  const idQuote = id.slice(1)
  const indexQuote = findQuoteById(quotes, idQuote);
  return quotes.splice(indexQuote, 1);
}


module.exports = {
  getRandomElement,
  getQuotesByPerson,
  findQuoteById,
  updateQuote,
  deleteQuote
};
