const buttons = document.querySelectorAll("button");

// button.onclick = function() {

// };

const buttonClickHandler = (e) => {
	// e.target.disabled = true;
	console.log(e);
};

// button.onclick = buttonClickHandler;

// buttons[0].addEventListener("click", buttonClickHandler);

// setTimeout(() => {
// 	button.removeEventListener("click", buttonClickHandler);
// }, 20000);

buttons.forEach((btn) => {
	btn.addEventListener("click", buttonClickHandler);
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e);
});

const div = document.querySelector("div");

div.addEventListener("click", (e) => {
	console.log("CLICKED DIV");
	console.log(e);
});

buttons[0].addEventListener("click", function (e) {
	e.stopPropagation();
	console.log("CLICKED BUTTON");
	console.log(e);
	console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
	//e.target.classList.toggle("highlight");
	e.target.closest("li").classList.toggle("highlight");
	form.submit();
});

// One way of adding event listeners but inefficient
// listItems.forEach((listItem) => {
// 	listItem.addEventListener("click", (e) => {
// 		e.target.classList.toggle("highlight");
// 	});
// });

// infinite scroll example
// let curElementNumber = 0;

// function scrollHandler() {
// 	const distanceToBottom = document.body.getBoundingClientRect().bottom;

// 	if (distanceToBottom < document.documentElement.clientHeight + 150) {
// 		const newDataElement = document.createElement("div");
// 		curElementNumber++;
// 		newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
// 		document.body.append(newDataElement);
// 	}
// }

// window.addEventListener("scroll", scrollHandler);
