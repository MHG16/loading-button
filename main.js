
//1. Target the element we're trying to listen for the event on
//2. Tell a function to run when that event happens
//3. Create the function 

var buttonEl = document.querySelector('.btnLoading');


buttonEl.addEventListener('click', submitButton);

function submitButton() {
	buttonEl.style.color = '#C3C0B8';
	buttonEl.innerHTML = 'Loading...';
	setTimeout(function(){
		buttonEl.style.color = '#000'
		buttonEl.innerHTML = "Submit";

	},700); 

}


















