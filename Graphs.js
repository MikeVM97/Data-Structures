// GRAFOS - GRAPHS

class Graph {
  constructor() {
    this.vertices = new Map();
  }

  // Agregar un vértice al grafo
  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    }
  }

  // Agregar una arista (conexión) entre dos vértices
  addEdge(vertex1, vertex2) {
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
      throw new Error("Los vértices deben existir en el grafo.");
    }

    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  // Mostrar el grafo
  printGraph() {
    for (const [vertex, edges] of this.vertices) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

// Ejemplo de uso
const myGraph = new Graph();

myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'D');
myGraph.addEdge('C', 'D');

myGraph.printGraph();
