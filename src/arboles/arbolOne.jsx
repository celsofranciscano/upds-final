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

    if (valor < nodo.valor) {
      return this.buscarNodoPorRecursividad(nodo.izquierda, valor);
    }
    else {
      return this.buscarNodoPorRecursividad(nodo.derecha, valor);
    }
  }
}

function ArbolOne() {
  const [dataArbol, setDataArbol] = useState(null);
  const [search, setSearch] = useState(null);
  const [adds, setAdds] = useState(null);
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
  function add(e) {
    e.preventDefault();
    const valor = parseInt(e.target.adding.value);
    setAdds(valor);
    dataArbol.insertar(valor);
    setDataArbol(arbol);
    // Limpiar el input después de agregar el valor
    e.target.adding.value = "";
  }

  function onsubmit(e) {
    e.preventDefault();
    const valor = parseInt(e.target.search.value);
    setSearch(valor);
    const nodo = dataArbol.buscarNodoPorRecursividad(dataArbol.raiz, valor);
    if (nodo) {
      setExist(true);
    } else {
      setExist(false);
    }
    // Limpiar el input después de agregar el valor
    e.target.search.value = "";
  }

  function imprimirArbolPorRecursividad(nodo) {
    if (nodo === null) return null;
    return (
      <div className="flex flex-col  items-center">
        {search === nodo.valor || adds === nodo.valor ? (
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

        <h1 className=" font-semibold">
          Realizar la busqueda PROCESO DE RECURSIVIDAD
        </h1>
        <form onSubmit={onsubmit} className="flex">
          <input
            type="number"
            id="search"
            placeholder="Ingrese un número"
            className=" border rounded-md bg-gray-200 px-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Buscar
          </button>
        </form>
        <h1>Resultado de la busqueda</h1>
        {search !== null && (
          <span>
            {exist ? (
              <p className="bg-blue-500 px-4 rounded-full py-2 text-white font-bold">
                El elemento {search} fue encontrado
              </p>
            ) : (
              <p className="bg-red-500 px-4 rounded-full py-2 text-white font-bold">
                El elemento {search} no fue encontrado
              </p>
            )}
          </span>
        )}
        <form onSubmit={add} className="flex">
          <input
            type="number"
            id="adding"
            placeholder="Ingrese un número"
            className=" border rounded-md bg-gray-200 px-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Insertar
          </button>
        </form>
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
// Definimos una clase Nodo para representar los nodos del árbol binario
class Nodo {
  // Constructor que inicializa el valor del nodo y sus referencias a los hijos izquierdo y derecho
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null; // Referencia al hijo izquierdo
    this.derecha = null;   // Referencia al hijo derecho
  }
}

// Definimos una clase ArbolBinario para representar el árbol binario
class ArbolBinario {
  // Constructor que inicializa la raíz del árbol como nula
  constructor() {
    this.raiz = null; // La raíz del árbol
  }

  // Método para insertar un nuevo nodo en el árbol
  insertar(valor) {
    // Creamos un nuevo nodo con el valor dado
    const nuevoNodo = new Nodo(valor);

    // Si la raíz del árbol es nula, el nuevo nodo se convierte en la raíz
    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      // Si no es nula, llamamos al método insertarNodoPorRecursividad para insertar el nodo de forma recursiva
      this.insertarNodoPorRecursividad(this.raiz, nuevoNodo);
    }
  }

  // Método auxiliar para insertar un nuevo nodo de forma recursiva
  insertarNodoPorRecursividad(nodo, nuevoNodo) {
    // Si el valor del nuevo nodo es menor que el valor del nodo actual
    if (nuevoNodo.valor < nodo.valor) {
      // Si el hijo izquierdo del nodo actual es nulo, el nuevo nodo se convierte en el hijo izquierdo
      if (nodo.izquierda === null) {
        nodo.izquierda = nuevoNodo;
      } else {
        // Si no es nulo, llamamos recursivamente al método para insertar en el subárbol izquierdo
        this.insertarNodoPorRecursividad(nodo.izquierda, nuevoNodo);
      }
    } else {
      // Si el valor del nuevo nodo es mayor o igual al valor del nodo actual
      // Si el hijo derecho del nodo actual es nulo, el nuevo nodo se convierte en el hijo derecho
      if (nodo.derecha === null) {
        nodo.derecha = nuevoNodo;
      } else {
        // Si no es nulo, llamamos recursivamente al método para insertar en el subárbol derecho
        this.insertarNodoPorRecursividad(nodo.derecha, nuevoNodo);
      }
    }
  }

  // Método para buscar un nodo por valor de forma recursiva
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

// Definimos un componente funcional llamado ArbolOne
function ArbolOne() {
  // Definimos cuatro estados utilizando el hook useState
  const [dataArbol, setDataArbol] = useState(null); // Estado para almacenar el árbol de datos
  const [search, setSearch] = useState(null); // Estado para almacenar el valor de búsqueda
  const [adds, setAdds] = useState(null); // Estado para almacenar el valor añadido
  const [exist, setExist] = useState(false); // Estado para verificar si un nodo existe

  // Efecto secundario que se ejecuta solo una vez al montar el componente
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
    // Establecemos el árbol creado como estado
    setDataArbol(arbol);
    console.log(dataArbol); // Imprimimos el árbol en la consola
  }, []); // El arreglo vacío como segundo argumento indica que se ejecuta solo una vez

  // Función para manejar el evento de agregar un nuevo nodo al árbol
  function add(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const valor = parseInt(e.target.adding.value); // Obtener el valor ingresado
    setAdds(valor); // Actualizar el estado con el valor añadido
    dataArbol.insertar(valor); // Insertar el valor en el árbol
    setDataArbol(arbol); // Actualizar el estado del árbol
    // Limpiar el input después de agregar el valor
    e.target.adding.value = "";
  }

  // Función para manejar el evento de búsqueda de un nodo en el árbol
  function onsubmit(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const valor = parseInt(e.target.search.value); // Obtener el valor ingresado para buscar
    setSearch(valor); // Actualizar el estado con el valor de búsqueda
    // Buscar el nodo en el árbol utilizando el método de búsqueda recursiva
    const nodo = dataArbol.buscarNodoPorRecursividad(dataArbol.raiz, valor);
    // Verificar si se encontró el nodo y actualizar el estado exist correspondientemente
    if (nodo) {
      setExist(true); // Si el nodo existe, establecer exist como verdadero
    } else {
      setExist(false); // Si el nodo no existe, establecer exist como falso
    }
    // Limpiar el input después de realizar la búsqueda
    e.target.search.value = "";
  }

  // Función para imprimir el árbol binario recursivamente
  function imprimirArbolPorRecursividad(nodo) {
    // Si el nodo es nulo, retornar nulo y finalizar la recursión
    if (nodo === null) return null;
    // Si el nodo no es nulo, retornar un componente JSX que representa el nodo y sus hijos
    return (
      <div className="flex flex-col  items-center">
        {/* Renderizar el valor del nodo con diferentes estilos según si es el valor de búsqueda o el valor añadido */}
        {search === nodo.valor || adds === nodo.valor ? (
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
        {/* Renderizar líneas conectando con los hijos izquierdo y derecho del nodo */}
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
        {/* Renderizar recursivamente los hijos izquierdo y derecho del nodo */}
        <div className="flex gap-4 ">
          {imprimirArbolPorRecursividad(nodo.izquierda)}
          {imprimirArbolPorRecursividad(nodo.derecha)}
        </div>
      </div>
    );
  }
              
              
              
              `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </details>
      </section>{" "}
    </div>
  );
}

export default ArbolOne;
