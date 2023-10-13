// LISTAS ENLAZADAS - LINKED LISTS

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Agregar un nuevo nodo al final de la lista
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Eliminar un nodo con un valor específico
  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Mostrar la lista enlazada
  display() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // Búsqueda de un número en la lista enlazada
  search(target) {
    let current = this.head;
    while (current) {
      if (current.data === target) {
        return current; // Devuelve el nodo si se encuentra
      }
      current = current.next;
    }
    return null; // Devuelve null si no se encuentra
  }
}

// Ejemplo de uso
const myList = new LinkedList();
myList.append(10);
myList.append(20);
myList.append(30);

myList.display(); // 10 -> 20 -> 30

myList.delete(20);
myList.display(); // 10 -> 30
console.log(myList.search(30)) // Node { data: 30, next: null }
console.log(myList.search(20)) // null
console.log(myList.head) // Node { data: 10, next: Node { data: 30, next: null } }

// --------------------------------------------------------------------------------

const createNode = (data) => {
  return {
    data,
    next: null,
  };
};

const createLinkedList = () => {
  return {
    head: null,

    append(data) {
      const newNode = createNode(data);
      if (!this.head) {
        this.head = newNode;
        return this;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      return this;
    },

    delete(data) {
      if (!this.head) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    },

    display() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(' -> '));
    },
  };
};