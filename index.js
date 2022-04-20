// variable to get DOM for buttons
let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');

// variable to get DOM for submit button
let submitBtn = document.getElementById('submit');

//variable to get ul dom
let ulEl = document.getElementById("ul-el")

//addeventlisteners for buttons
btn1.addEventListener('click', function() {
	ulEl.innerHTML =  `<li>wash car</li>`
})

btn2.addEventListener('click', function() {
	alert('You clicked button 2');
});

btn3.addEventListener('click', function() {
	alert('You clicked button 3');
});

//addeventlistener for submit button
submitBtn.addEventListener('click', function() {
	alert('You clicked submit');
});