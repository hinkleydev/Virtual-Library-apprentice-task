// import the Media class:
const Media = require("./Media");
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }
  static sortByLength(arr) {
    return arr.sort((a, b) => {
      return a.length - b.length; // Sort in descending order
      // Use `a.duration - b.duration` for ascending order
    });
  }

  static shortestAlbum(musics) {
    const sortedMusics = Music.sortByLength(musics);
    return sortedMusics[0];
  }
}

// don't change below
module.exports = Music;
