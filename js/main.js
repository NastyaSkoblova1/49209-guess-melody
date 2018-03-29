const arrOfDisplays = [];
const template = document.querySelector('#templates');
const mainDisplay = document.querySelector('section.main');
const displays = template.content.querySelectorAll('.main');

displays.forEach(function(element) {
	arrOfDisplays.push(element);
});

const showDisplay = (number) => {
	mainDisplay.appendChild(arrOfDisplays[number]);
}

const hideDisplay = (number) => {
	mainDisplay.removeChild(arrOfDisplays[number]);
}


let numberOfDisplay = 0;

document.onkeydown = function(e) {

	if (e.altKey && e.keyCode == 39) {
		if (numberOfDisplay < arrOfDisplays.length - 1) {
			hideDisplay(numberOfDisplay);
			numberOfDisplay++;
			showDisplay(numberOfDisplay);
		}

		e.preventDefault();
	}

	if (e.altKey && e.keyCode == 37) {
		if (numberOfDisplay > 0) {
			hideDisplay(numberOfDisplay);
			numberOfDisplay--;
			showDisplay(numberOfDisplay);
		}

		e.preventDefault;
	}

}

showDisplay(0);