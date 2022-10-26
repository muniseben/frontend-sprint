///////////////////////////// Exercise 1 ///////////////////////////////////////
// Find the timezones of : Anchorage (USA), Reykjavik (Iceland), Saint-Petersburg (Russia) And display the date and time of these cities along with the time and date of Brussels.

var getAnchorageTime = function(){
    document.getElementById('Anchorage').innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/Anchorage',timeStyle:"medium",hourCycle:'h24'});
}

getAnchorageTime()
setInterval(getAnchorageTime,1000);


var getReykjavikTime =function(){
    document.getElementById('Reykjavik').innerHTML = new Date().toLocaleString('en-US',{timeZone:'Atlantic/Reykjavik',timeStyle:"medium",hourCycle:'h24'})
}

getReykjavikTime()
setInterval(getReykjavikTime,1000);


var getSPTime =function(){
    document.getElementById('Saint-Petersburg').innerHTML = new Date().toLocaleString('RU',{timeZone:'Europe/Moscow',timeStyle:"medium",hourCycle:'h24'})
}

getSPTime()
setInterval(getSPTime,1000);

var getBrusselsTime =function(){
    document.getElementById('Brussels').innerHTML = new Date().toLocaleString('BE',{timeZone:'Europe/Brussels',timeStyle:"medium",hourCycle:'h24'})
}

getBrusselsTime()
setInterval(getBrusselsTime,1000);


///////////////////////////// Exercise 2 //////////////////////////////////////

// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?



let date_1 = new Date('07/04/1993');
let date_2 = new Date();

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
document.getElementById("Birth").innerHTML = (days(date_1, date_2) +" days passed");


// Write a function to find how many days have passed since any point in time (after 1970).

function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


document.getElementById("Passed").innerHTML = (getNumberOfDays("2/1/2013", "3/1/2021"))+' days have passed';

///////////////////////////// TIMESTAMP EXAMPLE  ///////////////////////////////////////

// var myDate = "26-02-2012";
// myDate = myDate.split("-");
// var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
// console.log(newDate.getTime());

// https://stackoverflow.com/questions/9873197/how-to-convert-date-to-timestamp
