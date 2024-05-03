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
  contarNodosRecursivo(nodo) {
    if (nodo === null) {
      return 0;
    }

    return 1 + this.contarNodosRecursivo(nodo.izquierda) + this.contarNodosRecursivo(nodo.derecha);
  }
  


}

function ArbolEight() {
  const [dataArbol, setDataArbol] = useState(null);
  const [search, setSearch] = useState(null);
  const [total, setTotal] = useState(0);
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
    
  }, []);


  function onsubmit(e) {
    e.preventDefault();
    const valor = parseInt(e.target.search.value);
    setSearch(valor);
     dataArbol.insertar( valor);
    setDataArbol(arbol);

   
  }
  function handleClick() {
    setTotal(dataArbol.contarNodosRecursivo(dataArbol.raiz));

  }

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

        <h1 className=" font-semibold">Realizar la insercion PROCESO DE RECURSIVIDAD</h1>
        <form onSubmit={onsubmit} className="flex">
          <input
            type="number"
            id="search"
            placeholder="Ingrese un número"
            className=" border rounded-md bg-gray-200 px-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Insertar
          </button>
        </form>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={handleClick}>Calcular la cantidad de nodos</button>
        <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-full ">Total nodos: {total}</button>
      
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl text-center">Arbol Binario </h1>
        {dataArbol && imprimirArbolPorRecursividad(dataArbol.raiz)}
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
                
                // Método para contar los nodos del árbol de forma recursiva
                contarNodosRecursivo(nodo) {
                  // Si el nodo es nulo, devolvemos 0 (caso base de la recursión)
                  if (nodo === null) {
                    return 0;
                  }
              
                  // Devolvemos 1 (por el nodo actual) más el resultado de la recursión
                  // aplicada a los hijos izquierdo y derecho del nodo actual
                  return 1 + this.contarNodosRecursivo(nodo.izquierda) + this.contarNodosRecursivo(nodo.derecha);
                }
              }
              
              // Definimos un componente funcional ArbolEight utilizando useState y useEffect de React
              function ArbolEight() {
                // Definimos estados para almacenar el árbol, el valor de búsqueda y el total de nodos
                const [dataArbol, setDataArbol] = useState(null);
                const [search, setSearch] = useState(null);
                const [total, setTotal] = useState(0);
              
                // Efecto que se ejecuta solo al montar el componente
                useEffect(() => {
                  // Creamos un nuevo árbol binario
                  const arbol = new ArbolBinario();
                  // Insertamos una serie de valores en el árbol
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
                  // Guardamos el árbol en el estado
                  setDataArbol(arbol);
                }, []); // El efecto se ejecuta solo una vez al montar el componente
              
                // Función que maneja el envío del formulario
                function onsubmit(e) {
                  e.preventDefault();
                  // Obtenemos el valor ingresado en el campo de búsqueda
                  const valor = parseInt(e.target.search.value);
                  // Actualizamos el estado de búsqueda
                  setSearch(valor);
                  // Insertamos el valor en el árbol
                  dataArbol.insertar(valor);
                  // Actualizamos el estado del árbol
                  setDataArbol(arbol);
                }
              
                // Función que maneja el evento de clic en un botón
                function handleClick() {
                  // Calculamos el total de nodos en el árbol y lo almacenamos en el estado
                  setTotal(dataArbol.contarNodosRecursivo(dataArbol.raiz));
                }
              }
                            
              
              
              `}
                  </SyntaxHighlighter>
                </code>
              </pre>
    
          </details>
        </section>    </div>
  );
}

export default ArbolEight;
