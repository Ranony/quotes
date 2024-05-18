let quotes = [
    "<p> ' Be yourself; everyone else is already taken. ' </p><br> -- <span>Oscar Wilde</span>",
    "<p> ' So many books, so little time ' </p><br> -- <span>Frank Zappa</span>",
    "<p> ' Two things are infinite: the universe and human stupidity; and I'm not sure about the universe ' </p><br> -- <span>Albert Einstein</span>",
    "<p> ' A room without books is like a body without a soul ' </p><br> -- <span>Marcus Tullius Cicero</span>",
    "<p> ' Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind ' </p><br> -- <span>Bernard M Baruch</span>",
    "<p> ' You know you're in love when you can't fall asleep because reality is finally better than your dreams.' </p><br> -- <span>Dr. Seuss</span>",
    "<p> ' You only live once, but if you do it right, once is enough. ' </p><br> -- <span>Mae West</span>",
    "<p> ' Be the change that you wish to see in the world. ' </p><br> -- <span>Mahatma Gandhi</span>",
    "<p> ' In three words I can sum up everything I've learned about life: it goes on. ' </p><br> -- <span>Robert Frost</span>",
    "<p> ' If you tell the truth, you don't have to remember anything. ' </p><br> -- <span>Mark Twain</span>",
    "<p> ' Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .' ' </p><br> -- <span>C.S. Lewis, The Four Loves</span>",
    "<p> ' I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ' </p><br> -- <span>Maya Angelou</span>",
    "<p> ' To live is the rarest thing in the world. Most people exist, that is all. ' </p><br> -- <span>Oscar Wilde</span>",
    "<p> ' Live as if you were to die tomorrow. Learn as if you were to live forever. ' </p><br> -- <span>Mahatma Gandhi</span>",
    "<p> ' Without music, life would be a mistake. ' </p><br> -- <span>Friedrich Nietzsche</span>",
    "<p> ' I am so clever that sometimes I don't understand a single word of what I am saying. ' </p><br> -- <span>Oscar Wilde</span>",
    "<p> ' To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ' </p><br> -- <span>Ralph Waldo Emerson</span>",
    "<p> ' Insanity is doing the same thing, over and over again, but expecting different results. ' </p><br> -- <span>Narcotics Anonymous</span>",
    "<p> ' It is better to be hated for what you are than to be loved for what you are not. ' </p><br> -- <span>Andre Gide, Autumn Leaves</span>",
    "<p> ' It is our choices, Harry, that show what we truly are, far more than our abilities. ' </p><br> -- <span>J.K. Rowling, Harry Potter and the Chamber of Secrets</span>",
]

let currentQuote = "";

function generateRandomQuote() {
    let newQuote;
    for (; ;) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        newQuote = quotes[randomIndex];
        if (newQuote !== currentQuote) {
            break;
        }
    }
    currentQuote = newQuote;
    document.getElementById("quote-display").innerHTML = currentQuote;
}


