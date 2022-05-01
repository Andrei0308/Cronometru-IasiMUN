var ok = true;

function setup() {
   noCanvas();

   function sleep(miliseconds) {
       var currentTime = new Date().getTime();

       while (currentTime + miliseconds >= new Date().getTime()) {}
   }
   var countTo = new Date("Nov 11, 2023 00:00:00").getTime(); //Setati momentul in care se termina countdown-ul sa fie cat mai aproape
   //ca sa vedeti ce se intampla in momentul in care se termina cronometrul

   function timeIt() {
       var current = new Date().getTime();
       var distance = countTo - current;
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       document.getElementById("timer").innerHTML = nf(days, 2) + " : " + nf(hours, 2) + " : " + nf(minutes, 2) + " : " + nf(seconds, 2);
       var parent = document.getElementById("parent");
       var child1 = document.getElementById("timer");
       var child2 = document.getElementById("units");

       if (distance <= 0) {
           clearInterval(x);
           document.getElementById("message").innerHTML = "Applications Are Closed!";
           days = hours = minutes = seconds = 0;
           document.getElementById("timer").remove();
           document.getElementById("units").remove();
       } else if (ok) {
           document.getElementById("message").innerHTML = "Application Period Ends In:";
           document.getElementById("units").innerHTML = "October 18<sup>th</sup> - November 11<sup>th</sup> 2021";
           ok = false;
       }
       distance -= 1;
   }
   x = setInterval(timeIt, 1000);
}
//Coded by Andrei Loghin -- Secretary-General of IasiMUN 2019