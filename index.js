class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Static method to sanitize a string
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  // Static method to titleize a string
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return titleizedWords.join(' ');
  }
}

module.exports = Formatter; // Exporting the Formatter class for testing
