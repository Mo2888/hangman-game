// set the Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
let arrayLetters=Array.from(letters);
let lettersContainer=document.querySelector(".letters");

//create the Letters spans

arrayLetters.forEach((letter)=>{
    let spanLetter=document.createElement("span");
    spanLetter.className="letter-box";
    spanLetter.appendChild(document.createTextNode(letter));
    lettersContainer.appendChild(spanLetter);
})
// create object of categorys

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "mysql", "python", "java", "c#", "ruby", "swift"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up", "Avatar", "The Godfather", "Blade Runner", "Jurassic Park"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Gandhi", "Marie Curie", "Nelson Mandela", "Leonardo da Vinci"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar", "Canada", "Australia", "Brazil", "Japan", "Russia", "South Africa"],
    animals: ["Lion", "Elephant", "Giraffe", "Tiger", "Penguin", "Kangaroo", "Panda", "Dolphin", "Sloth", "Koala"],
    fruits: ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Pineapple", "Watermelon", "Mango", "Peach", "Kiwi", "Blueberry"],
    colors: ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White", "Gray"],
    professions: ["Doctor", "Teacher", "Engineer", "Artist", "Chef", "Pilot", "Lawyer", "Architect", "Musician", "Scientist", "Writer"],
    hobbies: ["Reading", "Painting", "Gardening", "Cooking", "Photography", "Hiking", "Dancing", "Singing", "Yoga", "Fishing", "Gaming"],
    vehicles: ["Car", "Bicycle", "Motorcycle", "Bus", "Train", "Airplane", "Boat", "Subway", "Helicopter", "Truck", "Scooter"],
    landmarks: ["Eiffel Tower", "Great Wall of China", "Statue of Liberty", "Taj Mahal", "Machu Picchu", "Pyramids of Giza", "Colosseum", "Mount Rushmore"]
  };
  
/// chosen word

let arrayOfCategores= Object.keys(words);
let randomCategoryNumber= Math.floor(Math.random()*arrayOfCategores.length);
let randomCategory=arrayOfCategores[randomCategoryNumber];
let intoCategory=words[randomCategory];
let randomValue = Math.floor(Math.random()*intoCategory.length);
//_______________________
let chosenWord=intoCategory[randomValue];
//_______________________

 // span of the name of Category
 
 document.querySelector(".category span").innerHTML=randomCategory;

// set the spans of thr chosen word

let letterGuse = document.querySelector(".letters-guess");

//convert the chosen word to an array 
let chosenWordArray = Array.from(chosenWord);

// craete spans deppend of numbre letters in the chosen word

chosenWordArray.forEach((letter)=>{
    let emptySpan = document.createElement("span");
  if(letter===""){
    emptySpan.classList.add("with-space")
  }
  letterGuse.appendChild(emptySpan);
});
//select the guse span
let guseSpan=document.querySelectorAll(".letters-guess span");
// select the drow div
let theDrow=document.querySelector(".hangman-draw");
//count the wrong ansuer
let wrongAttempts=0;
//set the status
let theStatuse=false;
// Add a variable to track the number of correct guesses
let correctGuesses = 0;

//// Handle Clicking On Letters__________________________________________________
document.addEventListener("click",function(e){
    theStatuse=false;

// check the click
if (e.target.className==="letter-box"){
    e.target.classList.add("clicked");

    let chosenLetter = e.target.innerHTML.toLowerCase();
    let theChosenWordArray=Array.from(chosenWord.toLowerCase());

    // loop on this array 
    theChosenWordArray.forEach((letter,indexLetter)=>{
        
        if(chosenLetter===letter){
            theStatuse=true;
            // Increase the count of correct guesses
        correctGuesses++;

        if (correctGuesses === chosenWordArray.length) {
            // Call the winGame function
            winGame();
          }
         // loop through the spans guse
         guseSpan.forEach((span,indexSpan)=>{
            if(indexLetter===indexSpan){
                span.innerHTML=chosenLetter;
            }
         })
        }
    })
    ///check the status 
    if(theStatuse !==true){
        wrongAttempts++;
        theDrow.classList.add(`wrong-${wrongAttempts}`);
        if(wrongAttempts===8){
            //call the endagme function 
            endGame();
            //add calss fisihed to 
            lettersContainer.classList.add("finished");
              
        }
    }
}
})

//create end Game function
function endGame(){
    let div = document.createElement("div");
    div.className="popup";
    let button =document.createElement("span")
    button.className="try-again";
    button.appendChild(document.createTextNode("Try Again"))
    div.appendChild(button)
    div.appendChild(document.createTextNode("you lost"));
    document.body.appendChild(div);
// try again handel click
    let popup=document.querySelector(".popup")
    button.addEventListener("click", function tryAgain(){
     popup.classList.remove("popup");

     div.remove();

     location.reload();
                         })
}
// Create the winGame function
function winGame() {
    let div = document.createElement("div");
    div.className = "won";
    let span = document.createElement("span");
    span.className = "complete";
    span.appendChild(document.createTextNode("Complete"));
    div.appendChild(span);
    div.appendChild(document.createTextNode("Congratulations! You won!"));
    document.body.appendChild(div);
  
    //  handle click complete
    let won = document.querySelector(".won");
    span.addEventListener("click", function tryAgain() {
      won.classList.remove("won");
      div.remove();
      location.reload();
    
    });
  }