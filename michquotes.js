

var quotes = [
           "A man paints with his brains and not with his hands.",
            "Every beauty which is seen here by persons of perception resembles more than anything else that celestial source from which we all are come.",
            "Genius is eternal patience.",
            "I am still learning.",
            "Every block of stone has a statue inside it and it is the task of the sculptor to discover it.",
            "I hope that I may always desire more than I can accomplish.",
            "If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful at all."
        ];

        function getRandomQuote() {
            var randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }

        function displayQuote() {
            var quoteElement = document.getElementById("quote");
            quoteElement.textContent = getRandomQuote();
        }

        displayQuote();

        var refreshButton = document.getElementById("refresh");
        refreshButton.addEventListener("click", displayQuote);


