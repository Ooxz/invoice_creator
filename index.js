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
let totalSum = 0
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
// let li1 = `<li id="li1">wash car<button type="button" class='button' id='removeButton1'>remove</button>$10</li>`
// let li2 = `<li>Mow Lawn<button type="button" class='button' id='removeButton2'>remove</button>$20</li>`
// let li3 = `<li>Pull Weeds<button type="button" class="button" id='removeButton3'>remove</button>$30</li>`


btn1.addEventListener('click', function () {
	li1.style.cssText = "display: flex"
	
	total.innerHTML += `${washCar}$`
	
	console.log(total.innerHTML)
})

li1Btn.addEventListener('click', function () {
	li1.style.cssText = "display: none"
	total.innerHTML -= `${washCar}$`
	total.innerHTML = `${totalSum}`
	// total.innerHTML -= `${washCar}$`
	// total.innerHTML = `$${totalSum}`
	// console.log(total.innerHTML)
})

btn2.addEventListener('click', function () {
	li2.style.cssText = "display: flex"
	let result = mowLawn + totalSum
	total.innerHTML = `${result}$`
	console.log(totalSum)
})

li2Btn.addEventListener('click', function () {
	li2.style.cssText = "display: none"
	let result =  totalSum - mowLawn 
	total.innerHTML = `${result}$`
})

btn3.addEventListener('click', function () {
	li3.style.cssText = "display: flex"
})

li3Btn.addEventListener('click', function () {
	li3.style.cssText = "display: none"
})

//addeventlisteners for buttons
// btn1.addEventListener('click', function() {
	
// 	ulEl.innerHTML += li1;
// 	li1 = `<li id="li1">wash car<button type="button" class='button' id='removeButton1'>remove</button>$10</li>`
// 	let li1Id = document.getElementById('removeButton1');
// 	li1Id.addEventListener('click', function() {
// 		console.log('esesesee')
// 		li1Id.parentElement.remove();
// 	})
// // ulEl.insertAdjacentHTML("afterbegin", li1);
// })

// btn2.addEventListener('click', function() {
// 	ulEl.innerHTML += li2;
// 	li2 = `<li>Mow Lawn<button type="button" class='button' id='removeButton2'>remove</button>$20</li>`
// 	let li2Id = document.getElementById('removeButton2');
// li2Id.addEventListener('click', function() {
// 	console.log('esesesee')
// 	li2Id.parentElement.remove();
// })
// // ulEl.insertAdjacentHTML("afterend", li2);
// })


// // cp2.addEventListener('click', function() {
// // 	ulEl.removeChild(cp2);
// // 	console.log(cp2);
// // });

// btn3.addEventListener('click', function() {
// 	ulEl.innerHTML += li3;
// 	li3 = `<li>Pull Weeds<button type="button" class="button" id='removeButton3'>remove</button>$30</li>`
// 	let li3Id = document.getElementById('removeButton3');
// 	li3Id.addEventListener('click', function() {
// 		console.log('esesesee')
// 		li3Id.parentElement.remove();
// 	})
// // ulEl.insertAdjacentHTML("afterend", li3);
// })

// //addeventlistener for submit button
// submitBtn.addEventListener('click', function() {
// 	alert('You clicked submit');
// })

// //addeventlistener for remove buttons
// // li1Id.addEventListener('click', test, false)
// // 	function test() {
// // 		console.log('esesesee')
// // 	  }