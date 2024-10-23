// import the Media class:

const Media = require("./Media.js");

// create your Book class:

class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author; this.numPages = numPages;
        this.rating = rating; // Basic init
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static sortByRating(arr) {
        return arr.sort((a, b) => {
            return b.rating - a.rating; // Sort in descending order
            // Use `a.rating - b.rating` for ascending order
        });
    }

    static highestRating(books) {
        const sortedBooks = Book.sortByRating(books)
        return sortedBooks[0];
    }
}

// don't change below
module.exports = Book;
