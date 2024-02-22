// used to convert a block of text, into an iterable chunk of html
function wrapText(text) {
  return text
    .split(" ")
    .map(function (word) {
      // Wrap each character of the word in a <span>, adding class="capital" if the character is uppercase
      var wrappedChars = word
        .split("")
        .map(function (char) {
          if (char === char.toUpperCase() && char.match(/[A-Z]/i)) {
            // It's an uppercase letter
            return '\t<span class="capital">' + char + "</span>\n";
          } else {
            // It's not an uppercase letter
            return "\t<span>" + char + "</span>\n";
          }
        })
        .join("");

      // Wrap the series of spans (the word) in a word-container div
      return '<div class="word-container">\n' + wrappedChars + "</div>\n";
      // }).join('<span class="space"></span>\n'); // Use a space span between words to maintain spacing
    })
    .join(""); // removed space, because it messed up nth-child and wasn't needed
}

// used to count words and max letters to be used in SCSS code
function countText(text) {
  let words = text.split(" ");
  let wordsCount = words.length;
  let maxLetters = Math.max(...words.map((word) => word.length));
  return { wordsCount, maxLetters };
}
