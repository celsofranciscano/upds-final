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
  eliminarNodoPorRecursividad(nodo, valor) {
    if (nodo === null) {
      return nodo;
    }

    if (valor < nodo.valor) {
      nodo.izquierda = this.eliminarNodoPorRecursividad(nodo.izquierda, valor);
    } else if (valor > nodo.valor) {
      nodo.derecha = this.eliminarNodoPorRecursividad(nodo.derecha, valor);
    } else {
      if (nodo.izquierda === null) {
        return nodo.derecha;
      } else if (nodo.derecha === null) {
        return nodo.izquierda;
      }

      let sucesor = nodo.derecha;
      while (sucesor.izquierda !== null) {
        sucesor = sucesor.izquierda;
      }

      nodo.valor = sucesor.valor;
      nodo.derecha = this.eliminarNodoPorRecursividad(
        nodo.derecha,
        sucesor.valor
      );
    }

    return nodo;
  }
}

function ArbolSix() {
  const [dataArbol, setDataArbol] = useState(null);
  const [search, setSearch] = useState(null);
  const [exist, setExist] = useState(false);
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

  function onsubmit(e) {
    e.preventDefault();
    const valor = parseInt(e.target.search.value);
    setSearch(valor);
    const nuevoArbol = new ArbolBinario();
    nuevoArbol.raiz = dataArbol.eliminarNodoPorRecursividad(dataArbol.raiz, valor);
    setDataArbol(nuevoArbol);
  }

  function imprimirArbolPorRecursividad(nodo) {
    if (nodo === null) return null;
    return (
      <div className="flex flex-col  items-center">
      
          <div
            className=" bg-blue-500
             text-white rounded-full w-8 h-8 flex items-center justify-center "
          >
            {nodo.valor}
          </div>
      

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
          Escribir un subalgoritmo que elimine un nodo determinado de un árbol
          de enteros.
        </p>

        <h1 className=" font-semibold">
          Realizar la eliminacion PROCESO DE RECURSIVIDAD
        </h1>
        <form onSubmit={onsubmit} className="flex">
          <input
            type="number"
            id="search"
            placeholder="Ingrese un número"
            className=" border rounded-md bg-gray-200 px-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Eliminar
          </button>
        </form>
        <h1>Resultado de la eliminacion</h1>
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

  // Método para eliminar un nodo del árbol de forma recursiva
  eliminarNodoPorRecursividad(nodo, valor) {
    // Si el nodo es nulo, retornamos el mismo nodo
    if (nodo === null) {
      return nodo;
    }

    // Si el valor a eliminar es menor que el valor del nodo actual,
    // llamamos recursivamente al método para el subárbol izquierdo
    if (valor < nodo.valor) {
      nodo.izquierda = this.eliminarNodoPorRecursividad(nodo.izquierda, valor);
    }
    // Si el valor a eliminar es mayor que el valor del nodo actual,
    // llamamos recursivamente al método para el subárbol derecho
    else if (valor > nodo.valor) {
      nodo.derecha = this.eliminarNodoPorRecursividad(nodo.derecha, valor);
    } else {
      // Si encontramos el nodo a eliminar
      // Caso 1: El nodo no tiene hijos o tiene solo un hijo
      if (nodo.izquierda === null) {
        return nodo.derecha;
      } else if (nodo.derecha === null) {
        return nodo.izquierda;
      }

      // Caso 2: El nodo tiene dos hijos
      // Buscamos el sucesor en el subárbol derecho
      let sucesor = nodo.derecha;
      while (sucesor.izquierda !== null) {
        sucesor = sucesor.izquierda;
      }

      // Copiamos el valor del sucesor al nodo actual
      nodo.valor = sucesor.valor;
      // Eliminamos el sucesor del subárbol derecho
      nodo.derecha = this.eliminarNodoPorRecursividad(nodo.derecha, sucesor.valor);
    }

    return nodo;
  }
}

// Definimos un componente funcional llamado ArbolSix
function ArbolSix() {
  // Definimos estados utilizando el hook useState para almacenar el árbol, el valor a buscar y el estado de existencia
  const [dataArbol, setDataArbol] = useState(null);
  const [search, setSearch] = useState(null);
  const [exist, setExist] = useState(false);

  // Efecto secundario que se ejecuta solo una vez al montar el componente
  useEffect(() => {
    // Creamos un árbol binario y asignamos valores a él
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
    setDataArbol(arbol); // Establecemos el árbol creado como estado
    console.log(dataArbol); // Imprimimos el árbol en la consola
  }, []); // La dependencia es un arreglo vacío, por lo que este efecto se ejecuta solo una vez al montar el componente

  // Función para manejar el evento de envío del formulario
  function onsubmit(e) {
    e.preventDefault();
    // Obtenemos el valor a buscar del campo de entrada
    const valor = parseInt(e.target.search.value);
    setSearch(valor); // Establecemos el valor a buscar como estado
    // Creamos un nuevo árbol binario y eliminamos el nodo con el valor especificado de forma recursiva
    const nuevoArbol = new ArbolBinario();
    nuevoArbol.raiz = dataArbol.eliminarNodoPorRecursividad(dataArbol.raiz, valor);
    setDataArbol(nuevoArbol); // Establecemos el nuevo árbol como estado
  }
              
              
              
              
              `}
                  </SyntaxHighlighter>
                </code>
              </pre>
    
          </details>
        </section>    </div>
  );
}

export default ArbolSix;
