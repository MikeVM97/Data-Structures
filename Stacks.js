// PILAS - STACKS

class Stack {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento a la pila (push)
  push(element) {
    this.items.push(element);
  }

  // Eliminar y devolver el elemento en la cima de la pila (pop)
  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  // Verificar si la pila está vacía
  isEmpty() {
    return this.items.length === 0;
  }
  
  front() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items[0];
  }

  // Devolver el elemento en la cima de la pila sin eliminarlo (peek)
  peek() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items[this.items.length - 1];
  }

  // Devolver el tamaño de la pila
  size() {
    return this.items.length;
  }
}

// Ejemplo de uso
const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(9);

console.log("Inicio de la pila:", myStack.front()); // Salida: 10
console.log("Cima de la pila:", myStack.peek()); // Salida: 9
console.log("Tamaño de la pila:", myStack.size()); // Salida: 3

console.log("Elemento eliminado de la cima:", myStack.pop()); // Salida: 9
console.log("Tamaño de la pila después de pop:", myStack.size()); // Salida: 2

console.log(myStack); // Stack { items: [ 10, 20 ] }