// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.rating = rating;
    this.duration = duration;
    if (this.rating < 1 || this.rating > 5) {
      throw new Error("Rating should be a number between 1 and 5");
    }
  }
  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static sortByDuration(arr) {
    return arr.sort((a, b) => {
      return b.duration - a.duration; // Sort in descending order
      // Use `a.duration - b.duration` for ascending order
    });
  }

  static longestMovie(movies) {
    const sortedMovies = Movie.sortByDuration(movies);
    return sortedMovies[0];
  }
}

// don't change below
module.exports = Movie;
