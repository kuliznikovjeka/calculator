const firstInput = document.getElementById('first-input-value');
const secondInput = document.getElementById('second-input-value');
const selectedAction = document.getElementById('selected-action');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const btn = document.getElementById('btn');
let result = document.getElementById('result');

const additionNumbers = () => {
	return result.textContent = `Итого: ${+firstInput.value + +secondInput.value}`;
}

const substractNumbers = () => {
	return result.textContent = `Итого: ${firstInput.value - +secondInput.value}`;
}

const multiplyNumbers = () => {
	return result.textContent = `Итого: ${+firstInput.value * +secondInput.value}`;
}

const divideNumbers = () => {
	if (+secondInput.value === 0) {
		return result.textContent = 'ОШИБКА! На ноль делить нельзя'
	} else {
		return result.textContent = `Итого: ${+firstInput.value / +secondInput.value}`;
	}
}

const renderValues = () => {
	firstInput.value = '';
	secondInput.value = '';
}

btn.addEventListener('click', () => {
	if (firstInput.value.length === 0 || secondInput.value.length === 0) return;

	switch (selectedAction.textContent) {

		case 'сложить +':
			additionNumbers();
			break;

		case 'вычесть -':
			substractNumbers();
			break;

		case 'умножить *':
			multiplyNumbers();
			break;

		case 'разделить /':
			divideNumbers();
			break;

		default:
			additionNumbers();

	}

	renderValues();
});