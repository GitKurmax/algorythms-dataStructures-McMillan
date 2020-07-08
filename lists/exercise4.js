const fs = require('fs');
const filename = 'movies.txt';
const list = require('./list');

const data = fs.readFileSync(filename, 'utf8');

const dataArray = data.split('\n').map(movie => movie.replace(/\d+.\s+/, ''));
const moviesList = new list.List();
const customersList = new list.List();

function checkout(name, movie, customersList, moviesList) {
    if (!moviesList.contains(movie)) {
        console.log('Movie \'' + movie + '\' not available');
    } else {
        customersList.append(new Customer(name, movie));
        moviesList.remove(movie);
    }
}

function checkIn(movie, customersList, moviesList) {
    customersList.dataStore.forEach(customer => {
        if(customer.movie == movie) customersList.remove(customer);
    });
    moviesList.append(movie);
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

dataArray.forEach(movie => {
    moviesList.append(movie);
});

checkout('John Doe', 'Inception', customersList, moviesList);
checkout('John Smith', 'Fight Club', customersList, moviesList);
checkout('John Smith', 'Fight Club', customersList, moviesList);

// console.log(moviesList.toString());
// console.log(customersList.toString());

checkIn('Fight Club', customersList, moviesList);

console.log(moviesList.toString());
console.log(customersList.toString());
