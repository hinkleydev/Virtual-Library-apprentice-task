// import the Media class:

const Media = require("./Media.js");

// create your Book class:

class Book extends Media {
    constructor(title, year, category, author, numPages, rating) {
        super(title, year, category);
        this.author = author; this.numPages = numPages;
        this.rating = rating; // Basic init
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.category}, Rating: ${this.rating}`
    }
}

// don't change below
module.exports = Book;
