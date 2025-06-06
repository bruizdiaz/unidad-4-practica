export const sumar = (num1, num2) => {
	return num1 + num2;
};
export const restar = (num1, num2) => {
	return num1 - num2;
};
export const multiplicar = (num1, num2) => {
	return num1 * num2;
};
export const dividir = (num1, num2) => {
	if (num2 === 0) {
		console.log('No se puede dividir por cero');
		return null;
	}
	return num1 / num2;
};
