import React, { useState, useEffect } from 'react';
import ArbolOne from './arboles/arbolOne';

// Clase para representar un nodo del árbol binario
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Clase para representar el árbol binario
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
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

  // Recorrido in-orden: izquierda, raíz, derecha
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }
}

function App() {
  // Estado para almacenar el árbol binario
  const [tree, setTree] = useState(null);
  // Estado para almacenar los nodos en orden
  const [nodes, setNodes] = useState([]);

  // Efecto para configurar el árbol binario al montar el componente
  useEffect(() => {
    // Crear y configurar el árbol binario
    const newTree = new BinarySearchTree();
    newTree.insert(50);
    newTree.insert(17);
    newTree.insert(72);
    newTree.insert(12);
    newTree.insert(23);
    newTree.insert(54);
    newTree.insert(76);


    // Almacenar el árbol binario en el estado
    setTree(newTree);
    consolelog(tree)
  }, []);

  // Efecto para recorrer el árbol y actualizar los nodos en orden
  useEffect(() => {
    if (tree) {
      const newNodes = [];
      // Recorrer el árbol y agregar los nodos al array
      tree.inOrderTraversal(tree.root, (value) => newNodes.push(value));
      // Almacenar los nodos en el estado
      setNodes(newNodes);
    }
  }, [tree]);

  // Función para representar visualmente el árbol binario
// Función para representar visualmente el árbol binario con líneas de conexión utilizando SVG
const renderTree = (node) => {
  if (node === null) return null;

  return (
    <div className="flex flex-col  items-center">
      <div className="border bg-blue-500  text-white rounded-full w-8 h-8 flex items-center justify-center ">
        {node.value}
      </div>
      <div className="flex gap-8">
        {node.left && (
          <svg className=" -mr-4" height="30" width="20">
            <line x1="0" y1="40" x2="20" y2="0" stroke="white" strokeWidth="2" />
          </svg>
        )}
        {node.right && (
          <svg className="-ml-4" height="30" width="20">
            <line x1="0" y1="0" x2="20" y2="40" stroke="white" strokeWidth="2" />
          </svg>
        )}
      </div>
      <div className="flex gap-4 ">
        {renderTree(node.left)}
        
        {renderTree(node.right)}
      </div>
    </div>
  );
};


  return (
    <div className="flex flex-col items-center">
      <ArbolOne />
      <h1 className="text-2xl font-bold mb-4">Árbol Binario de Búsqueda</h1>
      <div className="flex flex-col items-center">
        {tree && renderTree(tree.root)}
        
      </div>
      <div>Recorrido in-orden: {nodes.join(', ')}</div>
    </div>
  );
}

export default App;
