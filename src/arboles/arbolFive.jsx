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
  // Recorrido pre-orden: raíz, izquierda, derecha
  preOrden(nodo) {
    let valores = [];
    if (nodo !== null) {
      valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
      valores = valores.concat(this.preOrden(nodo.izquierda)); // Concatenamos los valores del subárbol izquierdo
      valores = valores.concat(this.preOrden(nodo.derecha)); // Concatenamos los valores del subárbol derecho
    }
    return valores;
  }

  // Recorrido in-orden: izquierda, raíz, derecha
  inOrden(nodo) {
    let valores = [];
    if (nodo !== null) {
      valores = valores.concat(this.inOrden(nodo.izquierda)); // Concatenamos los valores del subárbol izquierdo
      valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
      valores = valores.concat(this.inOrden(nodo.derecha)); // Concatenamos los valores del subárbol derecho
    }
    return valores;
  }

  // Recorrido post-orden: izquierda, derecha, raíz
  postOrden(nodo) {
    let valores = [];
    if (nodo !== null) {
      valores = valores.concat(this.postOrden(nodo.izquierda)); // Concatenamos los valores del subárbol izquierdo
      valores = valores.concat(this.postOrden(nodo.derecha)); // Concatenamos los valores del subárbol derecho
      valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
    }
    return valores;
  }
}

function ArbolFive() {
  const [dataArbol1, setDataArbol1] = useState(null);

  useEffect(() => {
    const arbol1 = new ArbolBinario();
    arbol1.insertar(20);
    arbol1.insertar(5);
    arbol1.insertar(10);
    arbol1.insertar(26);
    arbol1.insertar(1);
    arbol1.insertar(30);
    arbol1.insertar(22);
    setDataArbol1(arbol1);
    arbol1.preOrden(arbol1.raiz);
  }, []);

  function imprimirArbolPorRecursividad(nodo) {
    if (nodo === null) return null;
    return (
      <div className="flex flex-col  items-center">
        {search === nodo.valor ? (
          <div
            className=" bg-red-500
             text-white rounded-full w-8 h-8 flex items-center justify-center "
          >
            {nodo.valor}
          </div>
        ) : (
          <div
            className=" bg-blue-500
             text-white rounded-full w-8 h-8 flex items-center justify-center "
          >
            {nodo.valor}
          </div>
        )}

        <div className="flex gap-8">
          {nodo.izquierda && (
            <svg className=" -mr-4" height="30" width="20">
              <line
                x1="0"
                y1="40"
                x2="20"
                y2="0"
                stroke="blue"
                strokeWidth="2"
              />
            </svg>
          )}
          {nodo.derecha && (
            <svg className="-ml-4" height="30" width="20">
              <line
                x1="0"
                y1="0"
                x2="20"
                y2="40"
                stroke="blue"
                strokeWidth="2"
              />
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
    <div className="grid md:grid-cols-3 gap-2  bg-white rounded-md ">
      <section className="border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <p>
          Escribir un subalgoritmo recursivo que liste los nodos de un árbol
          binario en pre-orden.
        </p>

        <h2 className="font-bold">Recorrido pre-orden:</h2>
        <ul className="flex">
          {dataArbol1 &&
            dataArbol1
              .preOrden(dataArbol1.raiz)
              .map((valor, index) => <li key={index}>{valor},</li>)}
        </ul>
      </section>
      <section className="border grid grid-cols-3 col-span-2 gap-20 border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl col-span-3 text-center">Arbol Binario </h1>
        {dataArbol1 && imprimirArbolPorRecursividad(dataArbol1.raiz)}
      </section>
      <section className="md:col-span-2 bg-zinc-950 border px-4 pb-4 text-white border-zinc-200 rounded-md shadow-md"></section>
    </div>
  );
}

export default ArbolFive;
