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

function ArbolNine() {
  const [dataArbol1, setDataArbol1] = useState(null);

  const [search, setSearch] = useState(null);

  useEffect(() => {
    const arbol1 = new ArbolBinario();
    arbol1.insertar(20);
    arbol1.insertar(50);
    arbol1.insertar(30);
    arbol1.insertar(40);
    arbol1.insertar(25);
    arbol1.insertar(5);
    arbol1.insertar(4);
    arbol1.insertar(3);
    arbol1.insertar(2);
    arbol1.insertar(15);
    arbol1.insertar(18);
    arbol1.insertar(10);
    arbol1.insertar(12);
    arbol1.insertar(11);
    arbol1.insertar(45);
    arbol1.insertar(39);

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
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <p>
          Dado un árbol binario de números enteros ordenados, se desea un
          subalgoritmo que busque un elemento con un proceso recursivo.
        </p>

        <h2 className="font-bold">Recorrido pre-orden:</h2>
        <ul className="flex">
          {dataArbol1 &&
            dataArbol1
              .preOrden(dataArbol1.raiz)
              .map((valor, index) => <li key={index}>{valor},</li>)}
        </ul>
        <h2 className="font-bold">Recorrido in-orden:</h2>
        <ul className="flex">
          {dataArbol1 &&
            dataArbol1
              .inOrden(dataArbol1.raiz)
              .map((valor, index) => <li key={index}>{valor},</li>)}
        </ul>

        <h2 className="font-bold">Recorrido post-orden:</h2>
        <ul className="flex">
          {dataArbol1 &&
            dataArbol1
              .postOrden(dataArbol1.raiz)
              .map((valor, index) => <li key={index}>{valor},</li>)}
        </ul>
      </section>
      <section className="border  gap-20 border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl col-span-3 text-center">Arbol Binario </h1>
        {dataArbol1 && imprimirArbolPorRecursividad(dataArbol1.raiz)}

      </section>
      <section className="md:col-span-2 bg-gray-800 border px-4 pb-4 text-white border-zinc-200 rounded-md shadow-md">
        <details>
          <summary className="text-lg font-bold mt-4">
            Ver el codigo fuente en JavaScript
          </summary>
              <pre>
                <code>
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {`
// Definimos una clase Nodo para representar un nodo en el árbol binario
class Nodo {
  // Constructor de la clase Nodo que recibe un valor
  constructor(valor) {
    // Asignamos el valor al nodo
    this.valor = valor;
    // Inicializamos los punteros izquierda y derecha como nulos
    this.izquierda = null;
    this.derecha = null;
  }
}

// Definimos una clase ArbolBinario para representar un árbol binario
class ArbolBinario {
  // Constructor de la clase ArbolBinario
  constructor() {
    // Inicializamos la raíz del árbol como nula
    this.raiz = null;
  }

  // Método para insertar un nuevo nodo en el árbol
  insertar(valor) {
    // Creamos un nuevo nodo con el valor dado
    const nuevoNodo = new Nodo(valor);

    // Si la raíz del árbol es nula, asignamos el nuevo nodo como raíz
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      // Si la raíz no es nula, llamamos al método auxiliar insertarNodoPorRecursividad
      // para insertar el nuevo nodo de forma recursiva
      this.insertarNodoPorRecursividad(this.raiz, nuevoNodo);
    }
  }

  // Método auxiliar para insertar un nuevo nodo de forma recursiva
  insertarNodoPorRecursividad(nodo, nuevoNodo) {
    // Si el valor del nuevo nodo es menor que el valor del nodo actual
    if (nuevoNodo.valor < nodo.valor) {
      // Si el puntero izquierdo del nodo actual es nulo, asignamos el nuevo nodo como hijo izquierdo
      if (nodo.izquierda === null) {
        nodo.izquierda = nuevoNodo;
      } else {
        // Si el puntero izquierdo del nodo actual no es nulo, llamamos recursivamente al método
        // insertarNodoPorRecursividad con el hijo izquierdo del nodo actual como nuevo nodo
        this.insertarNodoPorRecursividad(nodo.izquierda, nuevoNodo);
      }
    } else {
      // Si el valor del nuevo nodo es mayor o igual que el valor del nodo actual
      // (asumimos que no se permiten valores duplicados en el árbol)
      // Si el puntero derecho del nodo actual es nulo, asignamos el nuevo nodo como hijo derecho
      if (nodo.derecha === null) {
        nodo.derecha = nuevoNodo;
      } else {
        // Si el puntero derecho del nodo actual no es nulo, llamamos recursivamente al método
        // insertarNodoPorRecursividad con el hijo derecho del nodo actual como nuevo nodo
        this.insertarNodoPorRecursividad(nodo.derecha, nuevoNodo);
      }
    }
  }
  
  // Recorrido pre-orden: raíz, izquierda, derecha
  preOrden(nodo) {
    let valores = [];
    // Verificamos si el nodo no es nulo
    if (nodo !== null) {
      valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
      valores = valores.concat(this.preOrden(nodo.izquierda)); // Concatenamos los valores del subárbol izquierdo
      valores = valores.concat(this.preOrden(nodo.derecha)); // Concatenamos los valores del subárbol derecho
    }
    return valores; // Devolvemos el arreglo de valores en pre-orden
  }

  // Recorrido in-orden: izquierda, raíz, derecha
  inOrden(nodo) {
    let valores = [];
    // Verificamos si el nodo no es nulo
    if (nodo !== null) {
      valores = valores.concat(this.inOrden(nodo.izquierda)); // Concatenamos los valores del subárbol izquierdo
      valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
      valores = valores.concat(this.inOrden(nodo.derecha)); // Concatenamos los valores del subárbol derecho
    }
    return valores; // Devolvemos el arreglo de valores en in-orden
  }

  // Recorrido post-orden: izquierda, derecha, raíz
  postOrden(nodo) {
    let valores = [];
    // Verificamos si el nodo no es nulo
    if (nodo !== null) {
      valores = valores.concat(this.postOrden(nodo.izquierda)); // Concatenamos los valores del subárbol izquierdo
      valores = valores.concat(this.postOrden(nodo.derecha)); // Concatenamos los valores del subárbol derecho
      valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
    }
    return valores; // Devolvemos el arreglo de valores en post-orden
  }
}

// Definimos un componente funcional ArbolNine utilizando useState y useEffect de React
function ArbolNine() {
  // Definimos estados para almacenar el árbol y el valor de búsqueda
  const [dataArbol1, setDataArbol1] = useState(null);
  const [search, setSearch] = useState(null);

  // Efecto que se ejecuta solo al montar el componente
  useEffect(() => {
    // Creamos un nuevo árbol binario
    const arbol1 = new ArbolBinario();
    // Insertamos una serie de valores en el árbol
    arbol1.insertar(20);
    arbol1.insertar(50);
    arbol1.insertar(30);
    arbol1.insertar(40);
    arbol1.insertar(25);
    arbol1.insertar(5);
    arbol1.insertar(4);
    arbol1.insertar(3);
    arbol1.insertar(2);
    arbol1.insertar(15);
    arbol1.insertar(18);
    arbol1.insertar(10);
    arbol1.insertar(12);
    arbol1.insertar(11);
    arbol1.insertar(45);
    arbol1.insertar(39);

    // Guardamos el árbol en el estado
    setDataArbol1(arbol1);
    // Realizamos un recorrido pre-orden del árbol y mostramos el resultado en la consola
    arbol1.preOrden(arbol1.raiz);
  }, []); // El efecto se ejecuta solo una vez al montar el componente
}
              
              
              
              
              `}
                  </SyntaxHighlighter>
                </code>
              </pre>
    
          </details>
        </section>    </div>
  );
}

export default ArbolNine;
