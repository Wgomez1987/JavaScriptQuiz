
 //get timer to work
 var timeLeft = 30
 var elem = document.getElementById('countdown-timer');
 var timerId = setInterval(countdown, 1000);
 function countdown() {
    if (elem == -1) {
      clearTimeout(timerId);
      doSomething();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }

  
  

 //make questions work, and switch pages

 //ensure timer loses time with every wrong answer

 //get this shit to work.

 