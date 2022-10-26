//////////////////////////////// Exercise 1 ////////////////////////
// Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.

    // var text = "The quick brown fox jumps over the lazy dog.";
    // var i = 0;
    // var x = "";

    // const type = () => {
    //   x += text[i];
    //   document.write(x[i]);
    //   i++;
    //   if (i == text.length) {
    //     clearInterval(interval);
    //   }
    // }

    // var interval = window.setInterval(type, 1000);

//////////////////////////////// Exercise 2 ////////////////////////
// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

//1.dakika ve saniyenin gozukecegi elementleri cekiyoruz.
//2.setinterval metodunu aliyoruz. 1.degiskeni fonksyon(settime), 2. degiskeni ms cinsinden zaman
//3.total secondsu 0 dan baslatiyoruz. daha sonra arttiricaz birer birer.
//4.settime() fonks yazalim.
//5.pad() ogren

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
//////////////////////////////// Exercise 3 - Whack-A-Mole ////////////////////////
//Let's create a simple Whack-A-Mole clone

