const texts = ['Asshole',"boba","lola"];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';



//a self invoked function

(function typeEffect(){
    if(count === texts.length){
        count  = 0 ;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    console.log(letter)
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(typeEffect,400)
})();