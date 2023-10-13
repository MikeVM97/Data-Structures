// COLAS - QUEUE

class Queue {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento al final de la cola
  enqueue(element) {
    this.items.push(element);
  }

  // Eliminar y devolver el elemento en el frente de la cola
  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items.shift();
  }

  // Verificar si la cola está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Devolver el elemento en el frente de la cola sin eliminarlo
  front() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items[0];
  }

  // Devolver el elemento en el final de la cola sin eliminarlo
  back() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items[this.items.length - 1];
  }

  // Devolver el tamaño de la cola
  size() {
    return this.items.length;
  }
}

// Ejemplo de uso
const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(8);

console.log("Frente de la cola:", myQueue.front()); // Salida: 10
console.log("Último de la cola:", myQueue.back()); // Salida: 8
console.log("Tamaño de la cola:", myQueue.size()); // Salida: 3

console.log("Elemento eliminado del frente:", myQueue.dequeue()); // Salida: 10
console.log("Tamaño de la cola después de dequeue:", myQueue.size()); // Salida: 2

console.log(myQueue); // Queue { items: [ 20, 8 ] }
