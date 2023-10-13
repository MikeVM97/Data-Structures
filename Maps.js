// MAPS - MAPAS

// Crear un mapa (map)
const myMap = new Map();

// Agregar pares clave-valor al mapa
myMap.set('nombre', 'Juan');
myMap.set('edad', 30);
myMap.set('ciudad', 'México');

console.log(myMap); // Map(3) { 'nombre' => 'Juan', 'edad' => 30, 'ciudad' => 'México' }

// Verificar si una clave existe en el mapa
console.log(myMap.has('nombre')); // Devuelve true
console.log(myMap.has('email')); // Devuelve false

// Obtener el valor asociado a una clave
console.log(myMap.get('edad')); // Devuelve 30

// Mostrar todas las claves del mapa
console.log([...myMap.keys()]); // Devuelve ['nombre', 'edad', 'ciudad']

// Mostrar todas los valores del mapa
console.log([...myMap.values()]); // Devuelve ['Juan', 30, 'México']

// Mostrar todas las entradas (pares clave-valor) del mapa
console.log([...myMap.entries()]); // Devuelve [['nombre', 'Juan'], ['edad', 30], ['ciudad', 'México']]

// Borrar una clave y su valor asociado
myMap.delete('ciudad');

// Mostrar el tamaño del mapa
console.log(myMap.size); // Devuelve 2

// Borrar todas las claves y valores del mapa
myMap.clear();

// Verificar si el mapa está vacío
console.log(myMap.size); // Devuelve 0
