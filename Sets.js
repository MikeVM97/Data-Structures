// CONJUNTOS - SETS

// Crear un conjunto (set)
const mySet = new Set();

// Agregar elementos al conjunto
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

mySet.add(2);
console.log(mySet.keys()); // [Set Iterator] { 1, 2, 3, 4, 5 }
console.log(mySet.values()); // [Set Iterator] { 1, 2, 3, 4, 5 }

console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

// Verificar si un elemento existe en el conjunto
console.log(mySet.has(3)); // Devuelve true
console.log(mySet.has(6)); // Devuelve false

// Eliminar un elemento del conjunto
mySet.delete(2);

// Mostrar el tamaño del conjunto
console.log(mySet.size); // Devuelve 4

// Borrar todos los elementos del conjunto
mySet.clear();

// Verificar si el conjunto está vacío
console.log(mySet.size); // Devuelve 0
