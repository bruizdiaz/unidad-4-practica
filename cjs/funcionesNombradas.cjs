const sumar = (num1, num2) => {
	return num1 + num2;
};

const restar = (num1, num2) => {
	return num1 - num2;
};

const multiplicar = (num1, num2) => {
	return num1 * num2;
};

const dividir = (num1, num2) => {
	if (num2 === 0) {
		console.log('No se puede dividir por cero');
		return null;
	}
	return num1 / num2;
};

module.exports = {
	sumar,
	restar,
	multiplicar,
	dividir,
};
