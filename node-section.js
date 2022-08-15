

//* Main Section...
const  main = document.getElementById('id-of-main');

console.log(main.childNodes[19].childNodes[1].previousSibling)




// *Creating An Elements.  must need Const....
const liCreate = document.createElement('h1')
liCreate.innerText = "New Created Append Element";
console.log(liCreate)


// *Adding Child node inside main div section. 
main.appendChild(liCreate)
main.childNodes[9].appendChild(liCreate)


// *Checking Nodes. TOR Father key.
lastElement = document.getElementById('qua-id')
console.log(lastElement.parentNode.parentNode.parentNode.parentNode)



// *Adding Section Where to add.
ulList = document.getElementById('ul-id')



//* what to be add.
const lime = document.createElement('li')
lime.innerText = "This NEW added li"


// * Add the Child list li into UL
ulList.appendChild(lime)




