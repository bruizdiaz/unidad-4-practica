let funcionesAvanzadas = {};

funcionesAvanzadas.potencia = (base, exponente) => {
	return base ** exponente;
};

funcionesAvanzadas.porcentaje = (numero, porcentaje) => {
	return (numero * porcentaje) / 100;
};

module.exports = funcionesAvanzadas;
