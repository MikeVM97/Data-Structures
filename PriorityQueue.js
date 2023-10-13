class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Agregar un elemento con prioridad a la cola
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(queueElement);
    }
  }

  // Eliminar y devolver el elemento de mayor prioridad
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift().element;
  }

  // Verificar si la cola de prioridad está vacía
  isEmpty() {
    return this.items.length === 0;
  }

  // Mostrar el elemento de mayor prioridad sin eliminarlo
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0].element;
  }

  // Mostrar el elemento con menor prioridad sin eliminarlo
  back() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items[this.items.length - 1];
  }

  // Mostrar el tamaño de la cola de prioridad
  size() {
    return this.items.length;
  }
}

// Ejemplo de uso
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Tarea 1", 3);
priorityQueue.enqueue("Tarea 2", 1);
priorityQueue.enqueue("Tarea 3", 2);

console.log("Elemento de mayor prioridad:", priorityQueue.front()); // Salida: "Tarea 2"

priorityQueue.dequeue();

console.log("Tamaño de la cola de prioridad:", priorityQueue.size()); // Salida: 2

console.log(priorityQueue);
/* 
PriorityQueue {
  items: [
    { element: 'Tarea 3', priority: 2 },       
    { element: 'Tarea 1', priority: 3 }        
  ]
}
*/
