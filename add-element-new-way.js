// Create a Section.
const section = document.createElement('section')



//* inside section.
section.innerHTML = `
<h1> This is My world</h1>
<h1> I Added This by my new adding way</h1>

<div> <h2> this is h2 inside a Div</h2>

`


// * Get tag name comes by  element.


// * Adding The section into selected place main

const selectMain = 
document.getElementsByTagName('main')


for(i of selectMain)
{
    i.appendChild(section)
}




