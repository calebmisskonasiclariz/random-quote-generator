const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The hardest choices require the strongest wills.",
        author: "Unknown"
    },
    {
        quote: "Sometimes the hardest thing and the right thing are the same.",
        author: "Unknown"
    },
    {
        quote: "Life is tough, but so are you.",
        author: "Unknown"
    },
    {
        quote: "Out of difficulties grow miracles.",
        author: "Jean de La Bruyère"
    },
    {
        quote: "The struggle you're in today is developing the strength you need for tomorrow.",
        author: "Robert Tew"
    },
    {
        quote: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami"
    },
    {
        quote: "The darkest hour has only sixty minutes.",
        author: "Morris Mandel"
    },
    {
        quote: "Difficulties in life are intended to make us better, not bitter.",
        author: "Dan Reeves"
    },
    {
        quote: "The greatest test of courage on earth is to bear defeat without losing heart.",
        author: "Robert Green Ingersoll"
    },
    {
        quote: "When you come out of the storm, you won’t be the same person who walked in. That’s what the storm is all about.",
        author: "Haruki Murakami"
    }
];

document.getElementById('new-quote').addEventListener('click', generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = randomQuote.quote;
    document.getElementById('author').innerText = randomQuote.author;
}

// Generate a quote when the page loads
generateQuote();
