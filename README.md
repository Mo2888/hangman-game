#  https://github.com/Mo2888/hangman-game

#This JavaScript code is used to create a Hangman game. It handles various game functionalities, such as selecting a random word, checking user guesses, and managing the game's state. Here's a breakdown of the key functionality:

Setting Up Letters: The code initializes an array of letters and creates letter spans to display them on the screen.

Categories and Words: It defines a set of categories and associated words in an object format. A random category and word are chosen for each game session.

Display Category: It displays the selected category on the screen.

Creating Guess Spans: Spans are created based on the chosen word's length to represent the letters to be guessed.

Handling User Guesses: The code listens for clicks on letter spans and checks if the clicked letter matches any letter in the chosen word. It updates the displayed word accordingly and tracks incorrect guesses.

Game Over: If the player reaches a certain number of incorrect guesses (8 in this case), the game ends. A "Try Again" button is displayed, allowing the player to restart the game.

Winning the Game: If the player successfully guesses all the letters in the word, a "Congratulations" message is displayed, and the player can restart the game by clicking the "Complete" button.

