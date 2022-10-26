//////////////////////////// koc ornek - setTimeout ///////////////////////////////////////////////

// console.log("WARNING! In exactly five seconds something will explode");
// function theExplosion() {
//   console.log("BOOM!");
// }
// setTimeout(theExplosion, 5000);

////////////////////////////// yusuf sezer aciklama /////////////////////////////////////

// setTimeout(fonksiyonAdi, msSure);
// 1 saniye = 1000ms
// setTimeout(merhaba, 1000);

//////////////////////////////// munis ornek 1 ///////////////////////////////////////////

// console.log("WARNING! In exactly five seconds something will explode");
// const theExplosion = () => {
//     console.log('bom');
// }
// setTimeout(theExplosion, 5000);

//////////////////////////////// koc ornek 2 ///////////////////////////////////////////

// function theExplosion() {
//     alert("BOOM!");
//   }

//   const button = document.createElement("button");
//   button.textContent = "WARNING";
//   button.addEventListener("click", () => {
//     // this will delay the event by 5 seconds
//     setTimeout(theExplosion, 1000);
//   });

//   document.body.appendChild(button);

  //////////////////////////////// munis ornek 2 ////////////////////////////////////////

  //1. func fonskyon yarattik
  //2. p elementi olusturduk
  //3. p icine text dugum elementi olusturduk
  //4. dugumu p elementinin icine ekledik. (appendchild)
  //5. bodynin icine p elementini ekledik.
  //6. func fonnks icinde patlama fonks parametrelerini ekledik ve 3000 ms sure atadik.
  //7. disarida patlama fonks yarattik ve alert ekledik.

  // const func = () => {
  //   const p = document.createElement('p');
  //   const node = document.createTextNode('bu munisenin olusturdugu paragraf');


  //   p.appendChild(node);
  //   document.body.appendChild(p);
  //   setTimeout(patlama,3000);
  // }

  // const patlama = () => {
  //   alert("munise'nin patlamasi");

  // }

  //////////////////////////////// koc ornek 3 - recursion - ozyineleme ////////////////////////////////////////

  //1. times adinda bir degisken yarattik ve icine 0 number'ini define ettik.
  //2. heyYou adinda bir fonks yarattik.
  //3. times adindaki degiskene yeni numaralar artarak atanacak ve bu console'da bize gosterilecek.
  //4. nexcall adinda bir fonks yarattik.Math.flor metodunu define ettik.
  //5. settimeout metodunda 1. param heyyou fonks 2. param nextcall metodu

//   let times = 0;
//   function heyYou() {
//     console.log("Hey! You! I called you " + times + " times!");
//     times++;

//     const nextCall = Math.floor(Math.random() * 2000); // Random delay until heyYou() is called again
//     setTimeout(heyYou, nextCall);
//   }

  //////////////////////////////// koc ornek - setInterval  ////////////////////////////////////////

//   let times = 0;
//   function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// setInterval(heyYou, 1000);

//////////////////////////////// koc ornek 2   ////////////////////////////////////////

// let interval;
// let times = 0;

// function heyYou() {
//   console.log("Hey! You! I called you " + times + " times!");
//   times++;
// }

// buttonThreeSeconds = document.createElement("button");
// buttonThreeSeconds.textContent = "say hey every 3 seconds";
// buttonThreeSeconds.addEventListener("click", () => {
//   interval = setInterval(heyYou, 3000);
// });

// buttonStop = document.createElement("button");
// buttonStop.textContent = "Stop saying hey";
// buttonStop.addEventListener("click", () => {

//   // We must first check if there is an interval

//   if (interval != undefined) {
//     clearInterval(interval);
//   }
// });

// document.body.appendChild(buttonThreeSeconds);
// document.body.appendChild(buttonStop);

//////////////////////////////// show array  ////////////////////////

// var kelimeler = ['after', 'again', 'all', 'always', 'another', 'before']
// var bttn_start = document.getElementById('bttn_start');
// var bttn_stop = document.getElementById('bttn_stop');
// var word = document.getElementById('word');
// var r = 0;

// let interval;
// let wordss = 0;

// const create_word=()=>{

//     r = Math.floor(Math.random()*kelimeler.length);
//     word.innerHTML = kelimeler[r];
//     };

// var bttn_start = document.getElementById('bttn_start');
// bttn_start.addEventListener('click', ()=>{
//     interval = setInterval(create_word,kelimeler)
// })

// var bttn_stop = document.getElementById('bttn_stop');
// bttn_stop.addEventListener('click', () =>{
//     if (interval!= undefined){
//         clearInterval(interval);
//     }
// });

// document.body.appendChild(bttn_start);
// document.body.appendChild(bttn_stop);


//////////////////////////////// show array-2  ////////////////////////

// let interval;
// var bttn_start = document.getElementById('bttn_start');
// var bttn_stop = document.getElementById('bttn_stop');
// const text = 'The quick brown fox jumps over the lazy dog.';
// var r = 0;

// const func = () => {

//   const chars = text.split('');
//   r = Math.floor(Math.random()*text.length);
//   word.innerHTML = chars[r];
//   };

// var bttn_start = document.getElementById('bttn_start');
//     bttn_start.addEventListener('click', ()=>{
//     interval = setInterval(func,text)
// })

// var bttn_stop = document.getElementById('bttn_stop');
//     bttn_stop.addEventListener('click', () =>{
//     if (interval!= undefined){
//         clearInterval(interval);
//     }
// });

// document.body.appendChild(bttn_start);
// document.body.appendChild(bttn_stop);

//////////////////////////////// String.padStart()  ////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

//////////////////////////////// example ////////////////////////
// Generating a date at the next hour and 1 minutes | Calculating the number of millisecond between the current date and the next date | Display the time remaining
//https://stackoverflow.com/questions/72558137/timer-every-hour-but-starting-from-1-minute

// const minutes = document.getElementById('minutes')
// const seconds = document.getElementById('seconds')

// setInterval(() => {
//   const now = new Date()
//   const nextHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 1)
//   const nbMilisec = (nextHours - now)

//   const nbMinutes = parseInt((nbMilisec / 1000 / 60) % 60)
//   const nbSeconds = parseInt((nbMilisec / 1000)  % 60)

//   minutes.innerHTML = String(nbMinutes).padStart(2, '0')
//   seconds.innerHTML = String(nbSeconds).padStart(2, '0')
// }, 1000)

//////////////////////////////// Exercise 2 - alternative ////////////////////////
// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

//https://zditect.com/guide/javascript/javascript-count-up-timer.html

// var timerVariable = setInterval(countUpTimer, 1000);
// var totalSeconds = 0;

// function countUpTimer() {
//   ++totalSeconds;
//   var hour = Math.floor(totalSeconds / 3600);
//   var minute = Math.floor((totalSeconds - hour * 3600) / 60);
//   var seconds = totalSeconds - (hour * 3600 + minute * 60);
//   document.getElementById("count_up_timer").innerHTML = hour + " hours has passed " + minute + " minutes has passed " + seconds + " seconds has passed " ;
// }
