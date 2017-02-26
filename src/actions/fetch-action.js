import axios from 'axios'

var authorURL = 'https://quotable-api.herokuapp.com/quotes/author/';
//var authorURL = 'http://localhost:8888/quotes/author/';

export function searchByAuthor(val) {
    var request = axios.get(authorURL + val)
    return {type: 'FETCH_AUTHOR', payload: request}
}

var quoteURL = 'https://quotable-api.herokuapp.com/quotes/quote/';
//var quoteURL = 'http://localhost:8888/quotes/quote/';

export function searchByQuote(val) {
    var request = axios.get(quoteURL + val)
    return {type: 'FETCH_QUOTE', payload: request}
}

var bookURL = 'https://quotable-api.herokuapp.com/quotes/book/';
//var bookURL = 'http://localhost:8888/quotes/book/';

export function searchByBook(val) {
    var request = axios.get(bookURL + val)
    return {type: 'FETCH_BOOK', payload: request}
}

var randomURL = 'https://quotable-api.herokuapp.com/quotes/random/';
//var randomURL = 'http://localhost:8888/quotes/random/';

export function getRandomQuote() {
    var request = axios.get(randomURL)
    return {type: 'FETCH_RANDOM', payload: request}
}

export function createQuote(quote) {
    var request = axios.post('https://quotable-api.herokuapp.com/quotes/create', quote)
    return {type: 'ADD_QUOTE', payload: request}
}