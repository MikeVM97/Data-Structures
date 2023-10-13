// Crear una matriz bidimensional de 3x3
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Acceder a un elemento en la matriz (por ejemplo, fila 2, columna 1)
const element = matrix[1][0];
console.log("Elemento en fila 2, columna 1:", element); // Salida: 4

// Modificar un elemento en la matriz (por ejemplo, cambiar el valor en fila 3, columna 2 a 10)
// matrix[2][1] = 10;

function showColumn(array, column) {
  if (column >= array.length || column < 0) {
    throw new Error(`La columna ${column} no existe en la matriz.`);
  }
  return array.map((el) => el[column]);
}

const x = showColumn(matrix, 2);
console.log(x);