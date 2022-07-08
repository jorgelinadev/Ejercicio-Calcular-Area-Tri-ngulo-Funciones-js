//alert('Mi archivo está bien linkeado');

//calcularAreaTriangulo(base, altura)
//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

//calcularAreaTriangulo(3, 4) // 6
//calcularAreaTriangulo(5, 6) // 15

const base = Number(prompt('Ingresar base del triángulo'));
const altura = Number(prompt('Ingresar altura del triángulo'));

const calcularAreaTriangulo = (base, altura) => {
    return base * altura / 2;
};

console.log(calcularAreaTriangulo(base, altura));

