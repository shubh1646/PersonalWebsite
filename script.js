const texts = ['Student','Thinker','Hacker',"Developer","Problem Solver"]; 

let count = 0;
let index = 0;
let currentText = '';
let letter = '';





//Self invoked function for typewriter effect
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




function bgChanger(){
    if(window.scrollY > this.innerHeight/2){
        document.body.classList.add('bg-active');
    }
    else{
     document.body.classList.remove('bg-active');
    }
 }
 
 
 window.addEventListener('scroll',bgChanger);