// A ESSAYER
// regader black jack game qui peut m'aider pour additioner les valeurs au total
// Mettre washCar mowLawn and pullWeed values in an object to use them
// totalSum est toujours égal à 0 même une fois additioner, trouver comment régler ce problème

// variable to get DOM for buttons
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');

// variable to get DOM for submit button
let submitBtn = document.getElementById('submit');

//variable to get ul dom
let ulEl = document.getElementById("ul-el")
let washCar = 10
let mowLawn = 20
let pullWeeds = 30
// let totalSum = 0
let totalSum = {
	addvalues: 0
}
let total = document.getElementById("total")







const li1 = document.createElement('li');
ulEl.appendChild(li1);
li1.textContent = "Wash Car";
li1.id = "li1Id";
li1.className = "liClass";
li1.style.cssText = "display: none"
const li1Btn = document.createElement('button');
li1.appendChild(li1Btn);
li1Btn.textContent = "remove";
li1Btn.id = "li1BtnId";
li1Btn.className = "liBtnClass";
const span1 = document.createElement('span');
li1.appendChild(span1);
span1.textContent = `${washCar}$`;
span1.id = "span1Id";
span1.className = "spanClass";


console.log(li1);

const li2 = document.createElement('li');
ulEl.appendChild(li2);
li2.textContent = "Mow Lawn";
li2.id = "li2Id";
li2.className = "liClass";
li2.style.cssText = "display: none"
const li2Btn = document.createElement('button');
li2.appendChild(li2Btn);
li2Btn.textContent = "remove";
li2Btn.id = "li2BtnId";
li2Btn.className = "liBtnClass";
const span2 = document.createElement('span');
li2.appendChild(span2);
span2.textContent = `${mowLawn}$`;
span2.id = "span2Id";
span2.className = "spanClass";

console.log(li2);

const li3 = document.createElement('li');
ulEl.appendChild(li3);
li3.textContent = "Pull Weeds";
li3.id = "li3Id";
li3.className = "liClass";
li3.style.cssText = "display: none"
const li3Btn = document.createElement('button');
li3.appendChild(li3Btn);
li3Btn.textContent = "remove";
li3Btn.id = "li3BtnId";
li3Btn.className = "liBtnClass";
const span3 = document.createElement('span');
li3.appendChild(span3);
span3.textContent = `${pullWeeds}$`;
span3.id = "span3Id";
span3.className = "spanClass";



btn1.addEventListener('click', function () {
	li1.style.cssText = "display: flex"
	totalSum.addvalues += washCar //add the value to the total first
	total.innerHTML = totalSum.addvalues + "$" // then declare the total in innherHTML
	btn1.disabled = true
	
	
	console.log(total.innerHTML)
})

li1Btn.addEventListener('click', function () {
	li1.style.cssText = "display: none"
	totalSum.addvalues -= washCar
	total.innerHTML = totalSum.addvalues + "$"
	btn1.disabled = false
})

btn2.addEventListener('click', function () {
	li2.style.cssText = "display: flex"
	totalSum.addvalues += mowLawn
	total.innerHTML = totalSum.addvalues + "$"
	btn2.disabled = true
})

li2Btn.addEventListener('click', function () {
	li2.style.cssText = "display: none"
	totalSum.addvalues -= mowLawn
	total.innerHTML = totalSum.addvalues + "$"
	btn2.disabled = false
})

btn3.addEventListener('click', function () {
	li3.style.cssText = "display: flex"
	totalSum.addvalues += pullWeeds
	total.innerHTML = totalSum.addvalues + "$"
	btn3.disabled = true
})

li3Btn.addEventListener('click', function () {
	li3.style.cssText = "display: none"
	totalSum.addvalues -= pullWeeds
	total.innerHTML = totalSum.addvalues + "$"
	btn3.disabled = false
})



// modal

// Modal to display a message when the use try to enter an unothorized number in input

const modalbg = document.querySelector(".bground"); //background
let modalTextId = document.getElementById("modalTextId")

// launch modal form
function launchModal() {
	modalbg.style.display = "flex";
	modalTextId.innerText = `Thank you 
	for your purchase! 
	Your total is 
	${totalSum.addvalues}$`
  }
  
 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that close the modal
 var thanksBtn = document.getElementById("thanksBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("closeMod")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
	modal.style.display = "none";
	window.location.reload();
  }

 //Close function button "fermer"
 thanksBtn.addEventListener('click', (event) => {
   event.preventDefault();
   modal.style.display = "none";
   window.location.reload(); // reload the page after closing the modal
   });

 
   //clicking outside of the modalbg will close it
  window.onclick = function(event) {
    if (event.target == modalbg) {
      modalbg.style.display = "none";
    }
  }

//addeventlistener for submit button
submitBtn.addEventListener('click', function() {
	ulEl.innerHTML = "";
	total.innerHTML = "";
	launchModal();
	// alert(`Thank you for your purchase! Your total is ${totalSum.addvalues}$`)
	btn1.disabled = false
	btn2.disabled = false
	btn3.disabled = false
})