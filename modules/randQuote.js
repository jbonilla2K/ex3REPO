export function randomQuote() {
  let quotes = [
    "If you no longer go for a gap that exists, you're no longer a racing driver.",
    "I have no idols. I admire work, dedication, and competence.",
    "Being second is to be the first of the ones who lose.",
  ];
  let quoteNum = Math.floor(Math.random() * quotes.length);
  console.log(quotes[quoteNum]);
}
