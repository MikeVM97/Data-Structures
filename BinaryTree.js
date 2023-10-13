// ÁRBOL BINARIO - BINARY TREE

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Agregar un valor al árbol
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Realizar un recorrido inorden (in-order traversal)
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }

  // Buscar un valor en el árbol
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  // Eliminar un valor del árbol
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minValue = this.findMinValue(node.right);
      node.value = minValue;
      node.right = this.removeNode(node.right, minValue);
      return node;
    }
  }

  findMinValue(node) {
    if (node.left === null) {
      return node.value;
    }
    return this.findMinValue(node.left);
  }
}

// Ejemplo de uso
const myTree = new BinaryTree();

myTree.insert(50);
myTree.insert(30);
myTree.insert(70);
// myTree.insert(20);
// myTree.insert(40);
// myTree.insert(60);
// myTree.insert(80);

function printValue(value) {
  console.log(value);
}

// myTree.inOrderTraversal(myTree.root, printValue);

console.log(myTree.search(85)); // null
console.log(myTree.search(70)); // TreeNode { value: 70, left: null, right: null }

console.log(myTree);

/* 
BinaryTree {      
  root: TreeNode {
    value: 50,    
    left: TreeNode { value: 30, left: null, right: null },
    right: TreeNode { value: 70, left: null, right: null }
  }
}
*/

myTree.remove(70);

console.log(myTree);
/* 
BinaryTree {      
  root: TreeNode {
    value: 50,    
    left: TreeNode { value: 30, left: null, right: null },
    right: null,
  }
}
*/