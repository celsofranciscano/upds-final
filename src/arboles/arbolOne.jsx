import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula
import { useState, useEffect } from "react";

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  // Método para insertar un nuevo nodo en el árbol
  insertar(valor) {
    const nuevoNodo = new Nodo(valor);

    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      this.insertarNodoPorRecursividad(this.raiz, nuevoNodo);
    }
  }

  // Método auxiliar para insertar un nuevo nodo de forma recursiva
  insertarNodoPorRecursividad(nodo, nuevoNodo) {
    if (nuevoNodo.valor < nodo.valor) {
      if (nodo.izquierda === null) {
        nodo.izquierda = nuevoNodo;
      } else {
        this.insertarNodoPorRecursividad(nodo.izquierda, nuevoNodo);
      }
    } else {
      if (nodo.derecha === null) {
        nodo.derecha = nuevoNodo;
      } else {
        this.insertarNodoPorRecursividad(nodo.derecha, nuevoNodo);
      }
    }
  }

  buscarNodoPorRecursividad(nodo, valor) {
    // Si el nodo es nulo o si encontramos el valor en el nodo actual, devolvemos el nodo
    if (nodo === null || nodo.valor === valor) {
      return nodo;
    }

    // Si el valor es menor que el valor del nodo actual, buscamos en el subárbol izquierdo
    if (valor < nodo.valor) {
      return this.buscarNodoPorRecursividad(nodo.izquierda, valor);
    }
    // Si el valor es mayor que el valor del nodo actual, buscamos en el subárbol derecho
    else {
      return this.buscarNodoPorRecursividad(nodo.derecha, valor);
    }
  }
}

function ArbolOne() {
  const [dataArbol, setDataArbol] = useState(null);
  useEffect(() => {
    const arbol = new ArbolBinario();
    arbol.insertar(50);
    arbol.insertar(17);
    arbol.insertar(72);
    arbol.insertar(12);
    arbol.insertar(23);
    arbol.insertar(54);
    arbol.insertar(76);
    arbol.insertar(9);
    arbol.insertar(14);
    arbol.insertar(19);
    arbol.insertar(67);
    setDataArbol(arbol);
    console.log(dataArbol);
  }, []);

  function imprimirArbolPorRecursividad(nodo) {
    if (nodo === null) return null;
    return (
      <div className="flex flex-col  items-center">
        <div className="border bg-blue-500  text-white rounded-full w-8 h-8 flex items-center justify-center ">
          {nodo.valor}
        </div>
        <div className="flex gap-8">
          {nodo.izquierda && (
            <svg className=" -mr-4" height="30" width="20">
              <line x1="0" y1="40" x2="20" y2="0" stroke="blue" strokeWidth="2" />
            </svg>
          )}
          {nodo.derecha && (
            <svg className="-ml-4" height="30" width="20">
              <line x1="0" y1="0" x2="20" y2="40" stroke="blue" strokeWidth="2" />
            </svg>
          )}
        </div>
        <div className="flex gap-4 ">
          {imprimirArbolPorRecursividad(nodo.izquierda)}
          
          {imprimirArbolPorRecursividad(nodo.derecha)}
        </div>
      </div>
    );
    

  }


  return (
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <p>
          Dado un árbol binario de números enteros ordenados, se desea un
          subalgoritmo que busque un elemento con un proceso recursivo.
        </p>

        <h1 className=" font-semibold">Realizar la busqueda:</h1>
        <div className="flex">
          <input
            type="number"
            placeholder="Ingrese un número"
            className=" border rounded-md bg-gray-200 px-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Buscar
          </button>
        </div>
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl text-center">Arbol Binario </h1>
        {dataArbol && imprimirArbolPorRecursividad(dataArbol.raiz)}
      </section>
      <section className="md:col-span-2 bg-zinc-950 border px-4 pb-4 text-white border-zinc-200 rounded-md shadow-md"></section>
    </div>
  );
}

export default ArbolOne;