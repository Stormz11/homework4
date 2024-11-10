// Array of famous quotes
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Event listener for button click
document.getElementById("quoteButton").addEventListener("click", function () {
// get random quote
const randomQuote = getRandomQuote();
document.getElementById("quoteDisplay").textContent = randomQuote;
});