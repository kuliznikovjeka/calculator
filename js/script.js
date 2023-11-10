const firstInput = document.getElementById('first-input-value');
const secondInput = document.getElementById('second-input-value');
const selectedAction = document.getElementById('selected-action');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const btn = document.getElementById('btn');
const titleCaclResult = document.querySelector('.calculation__results');

const OPERATION = {
	ADDITION: 'сложить +',
	SUBSTRACTION: 'вычесть -',
	MULTIPLICATION: 'умножить *',
	DIVISION: 'разделить /',
}

const getParagraf = () => {
	const p = document.createElement('p');
	p.classList.add('calculation__total-value');
	return p;
}

const deleteParagraph = (e) => e.target.remove();

const additionNumbers = () => {
	const result = getParagraf();
	titleCaclResult.after(result);

	const operation = `${+firstInput.value} + ${+secondInput.value}`

	result.addEventListener('click', deleteParagraph);
	return result.textContent = `${operation} = ${(+firstInput.value * 100 + +secondInput.value * 100) / 100}`;
}

const substractNumbers = () => {
	const result = getParagraf();
	titleCaclResult.after(result);

	const operation = `${+firstInput.value} - ${+secondInput.value}`

	result.addEventListener('click', deleteParagraph);
	return result.textContent = `${operation} = ${(+firstInput.value * 100 - +secondInput.value * 100) / 100}`;
}

const multiplyNumbers = () => {
	const result = getParagraf();
	titleCaclResult.after(result);

	const operation = `${+firstInput.value} * ${+secondInput.value}`

	result.addEventListener('click', deleteParagraph);
	return result.textContent = `${operation} = ${+firstInput.value * +secondInput.value}`;
}

const divideNumbers = () => {
	if (+secondInput.value === 0) return result.textContent = 'ОШИБКА! На ноль делить нельзя';

	const result = getParagraf();
	titleCaclResult.after(result);

	const operation = `${+firstInput.value} / ${+secondInput.value}`

	result.addEventListener('click', deleteParagraph);
	return result.textContent = `${operation} = ${+firstInput.value / +secondInput.value}`;
}

const renderValues = () => {
	firstInput.value = '';
	secondInput.value = '';
}

btn.addEventListener('click', () => {
	if (firstInput.value.length === 0 || secondInput.value.length === 0) return;

	switch (selectedAction.textContent) {

		case OPERATION.ADDITION:
			additionNumbers();
			break;

		case OPERATION.SUBSTRACTION:
			substractNumbers();
			break;

		case OPERATION.MULTIPLICATION:
			multiplyNumbers();
			break;

		case OPERATION.DIVISION:
			divideNumbers();
			break;

		default:
			additionNumbers();
	}

	renderValues();
});

