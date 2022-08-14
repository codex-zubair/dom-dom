console.log("is it working? yes")

const book = document.getElementById("hello");

book.style.color = "green";


// Checking body section.
const main = document.body;

console.log(document.body);


// Checking all h1 tags
// And changing the properties
const h1tags = document.getElementsByTagName('h1');

for (h1 of h1tags) {
    console.log(h1.innerTe);

    h1.style.color = 'red'
}

// Getting access to documents...by getElementId... 
console.log(document.getElementById('middle-h1'))



// Getting access to documents model... by documentElementById..
const middleOne = document.getElementById('middle-h1');
middleOne.style.color = 'blue';


// Changing inner text by ID
document.getElementById('middle-h1').innerText = 'Me Not Only DOM'





// Changing Class wise... Class can work as a array.
const h1ClassChecking = document.getElementsByClassName('apple');

for (h1 of h1ClassChecking) {
    console.log(h1.innerText);
    h1.style.color = 'blue'

    h1.innerText = "Let's go Maria!"

    // Changing CSS properties.
    h1.style.textAlign = 'center'
    h1.style.fontSize = '50px'

}


// get elements by tag names.
const tag = document.getElementsByTagName('h1')
console.log(tag)


// Query Selector using...
// it provide also as like an array
// Query Selector Benefits are access in css as like css sheet.
const queryUse = document.querySelectorAll('.qua');

for (q of queryUse) {
    q.innerText = "Query Selector Working"
    q.style.textAlign = 'center'
    q.style.backgroundColor = 'red'

}




// Adding Class list inside html Tag
console.log(h1.classList.add('book'));


// Getting tag attribute styles class id and many more for the element.
console.log(h1.getAttribute('class'));


// Removing class from h1...
console.log(h1.classList.remove('apple'))
console.log(h1.getAttribute('class'));

// Set an attributes...
console.log(h1.setAttribute('title', 'this is attribute Example'))
console.log(h1.getAttribute('title'));




// Modifying HTML Elements by class name.
const domChange = document.getElementsByClassName('apple')
domChange[1].innerHTML = "Hello I'm Working"
domChange[3].innerHTML = "Hello I'm Working"





y 





