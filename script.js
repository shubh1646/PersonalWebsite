const texts = ['Student', 'Thinker', 'Hacker', "Developer", "Problem Solver"];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';





//Self invoked function for typewriter effect
(function typeEffect() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    // console.log(letter)
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(typeEffect, 400)
})();




function bgChanger() {
    if (window.scrollY > this.innerHeight / 2) {
        document.body.classList.add('bg-active');
    }
    else {
        document.body.classList.remove('bg-active');
    }
}


window.addEventListener('scroll', bgChanger);








function smoothScroll(target, duration) {

  
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;

   

    var startPosition = window.pageYOffset;
    // console.log("initial start position",startPosition);
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animationScroll(currentTime) {
        if (startTime == null) {
            startTime = currentTime;
        }

        var timeElapsed = currentTime - startTime;
        // console.log('time elapsed',timeElapsed);
        // console.log("start position ",startPosition);
        // console.log('distance is' , distance);
        // console.log('duration is',duration )
        var run = ease(timeElapsed, startPosition, distance, duration);
        // console.log('run is ',run)
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animationScroll);
        }
    }

    function ease(t, b, c, d) {
       t/=d/2;
       if(t<1) return c/2*t*t+b;
       t--;
       return -c/2*(t*(t-2)-1)+b;
    }



    requestAnimationFrame(animationScroll);

}







var projBtn = document.querySelector('.projBtn');

var expBtn = document.querySelector('.expBtn');

projBtn.addEventListener('click',function(){
    smoothScroll('#proj',2500);
})




expBtn.addEventListener('click',function(){
    smoothScroll('#exp',2500);
})