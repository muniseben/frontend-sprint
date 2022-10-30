//////////////////// Exercise 1 ///////////////////////////

// For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.
// Create a new directory (= folder), containing 3 files:
// index.html
// script.js
// becode.json
// Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), then dynamically generate a <ul> list containing each rule in a <li>.

// const body = document.querySelector('body')

// const button = document.createElement('button')
// body.appendChild(button)
// button.innerText= "click"

// const div = document.createElement("div");
// body.appendChild(div)

// const ul = document.createElement('ul');
// div.appendChild(ul)

// button.addEventListener('click',() => {
//   fetch('becode.json')
//   .then(response => response.json())
//   .then(json => {
//     for (let i = 0; i<json.length; i++ ){
//       var li = document.createElement('li');
//       li.innerHTML = json[i];
//       ul.appendChild(li)
//     }
//   })
//   .catch(error => {
//     console.log('Fetch gives error: ',error)
//   })
// });


//////////////////// Exercise 2 ///////////////////////////

// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

const body = document.querySelector('body')

const button = document.createElement('button')
body.appendChild(button)
button.innerText= "click"

let user_input = document.getElementById('user_input');

button.addEventListener('click',() => {
    const name = user_input.value
    if (name.length === 0){
        // string is empty
        throw "No user input!"
    }
    else{
        const div = document.createElement("div");
        body.appendChild(div)

        fetch('https://api.agify.io/?name='+name)
        .then(response => response.json())
        .then(json => {
            div.innerHTML = JSON.stringify(json)
            // console.log(json.name)
            // console.log(json.age)
        })
        .catch(error => {
        console.log('Fetch gives error: ',error)
        });
    }
});

