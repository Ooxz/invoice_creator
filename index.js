// A ESSAYER
// CREATEELEMENT A LA PLACE DE TEMPLATE STRING
// ADDEVENTLISTENER DANS ADDEVENTLISTENER POUR REMOVEBUTTON OU ETUDIER event delegation

// variable to get DOM for buttons
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');

// variable to get DOM for submit button
let submitBtn = document.getElementById('submit');

//variable to get ul dom
let ulEl = document.getElementById("ul-el")

let li1 = `<li id="li1">wash car<button type="button" class='button4' id='removeButton1'>remove</button>$10</li>`
let li2 = `<li>Mow Lawn<button type="button" class='button' id='removeButton2'>remove</button>$20</li>`
let li3 = `<li>Pull Weeds<button type="button" class="button" id='removeButton3'>remove</button>$30</li>`
console.log(li1)
let li1Id = document.getElementById('removeButton1');
const cp2 = document.getElementById('removeButton2');
const cp3 = document.getElementById('removeButton3');


//addeventlisteners for buttons
btn1.addEventListener('click', function() {
	ulEl.innerHTML += li1;
// ulEl.insertAdjacentHTML("afterbegin", li1);
})

btn2.addEventListener('click', function() {
	ulEl.innerHTML += li2;
// ulEl.insertAdjacentHTML("afterend", li2);
})

// cp2.addEventListener('click', function() {
// 	ulEl.removeChild(cp2);
// 	console.log(cp2);
// });

btn3.addEventListener('click', function() {
	ulEl.innerHTML += li3;
// ulEl.insertAdjacentHTML("afterend", li3);
});

//addeventlistener for submit button
submitBtn.addEventListener('click', function() {
	alert('You clicked submit');
});

//addeventlistener for remove buttons
li1Id.addEventListener('click', test, false)
	function test() {
		console.log('esesesee')
	  }