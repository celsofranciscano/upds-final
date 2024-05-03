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

function ArbolThree() {
  const [dataArbol1, setDataArbol1] = useState(null);
  const [dataArbol2, setDataArbol2] = useState(null);
  const [dataArbol3, setDataArbol3] = useState(null);
  const [dataArbol4, setDataArbol4] = useState(null);


  const [search, setSearch] = useState(null);
  const [exist, setExist] = useState(false);
  useEffect(() => {
    const arbol1 = new ArbolBinario();
    arbol1.insertar(20);
    arbol1.insertar(5);
    arbol1.insertar(16);
    arbol1.insertar(10);
    arbol1.insertar(12);
    setDataArbol1(arbol1);
    arbol1.preOrden(arbol1.raiz);
    const arbol2 = new ArbolBinario();
    arbol2.insertar(5);
    arbol2.insertar(18);
    arbol2.insertar(13);
    arbol2.insertar(16);
    arbol2.insertar(15);
    setDataArbol2(arbol2);
    arbol2.inOrden(arbol2.raiz);

    const arbol3 = new ArbolBinario();
    arbol3.insertar(10);
    arbol3.insertar(150);
    arbol3.insertar(180);
    arbol3.insertar(140);
    arbol3.insertar(145);
    arbol3.insertar(130);
    arbol3.insertar(135);
    arbol3.insertar(120);
    setDataArbol3(arbol3);
    arbol3.postOrden(arbol3.raiz);

    const arbol4 = new ArbolBinario();
    arbol4.insertar(100);
    arbol4.insertar(150);
    arbol4.insertar(200);
    arbol4.insertar(250);
    arbol4.insertar(140);
    arbol4.insertar(190);
    arbol4.insertar(90);
    arbol4.insertar(80);
    arbol4.insertar(85);
    setDataArbol4(arbol4);
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
      <section className="border col-span-3 grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <p>
          Dado un árbol binario de números enteros ordenados, se desea un
          subalgoritmo que busque un elemento con un proceso recursivo.
        </p>

      
      </section>
      <section className="borde col-span-3 gap-20 border-zinc-200 rounded-md shadow-md p-4">
        <div className="grid grid-cols-4">
          <h1 className="text-xl col-span-4 text-center">Arbol Binario </h1>
          {dataArbol1 && imprimirArbolPorRecursividad(dataArbol1.raiz)}
          {dataArbol2 && imprimirArbolPorRecursividad(dataArbol2.raiz)}
          {dataArbol3 && imprimirArbolPorRecursividad(dataArbol3.raiz)}
          {dataArbol4 && imprimirArbolPorRecursividad(dataArbol4.raiz)}
        </div>
        <div className="grid grid-cols-4">
          <span>a)</span>
          <span>b)</span>
          <span>c)</span>
          <span>d)</span>
        </div>
        <div className="grid grid-cols-4">
          <div>
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
          </div>

          <div>
            <h2 className="font-bold">Recorrido pre-orden: </h2>
            <ul className="flex">
              {dataArbol2 &&
                dataArbol2
                  .preOrden(dataArbol2.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>
            <h2 className="font-bold">Recorrido in-orden:</h2>
            <ul className="flex">
              {dataArbol2 &&
                dataArbol2
                  .inOrden(dataArbol2.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>

            <h2 className="font-bold">Recorrido post-orden:</h2>
            <ul className="flex">
              {dataArbol2 &&
                dataArbol2
                  .postOrden(dataArbol2.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Recorrido pre-orden: </h2>
            <ul className="flex">
              {dataArbol3 &&
                dataArbol3
                  .preOrden(dataArbol3.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>
            <h2 className="font-bold">Recorrido in-orden: </h2>
            <ul className="flex">
              {dataArbol3 &&
                dataArbol3
                  .inOrden(dataArbol3.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>

            <h2 className="font-bold">Recorrido post-orden: </h2>
            <ul className="flex">
              {dataArbol3 &&
                dataArbol3
                  .postOrden(dataArbol3.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Recorrido pre-orden: </h2>
            <ul className="flex">
              {dataArbol4 &&
                dataArbol4
                  .preOrden(dataArbol4.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>
            <h2 className="font-bold">Recorrido in-orden: </h2>
            <ul className="flex">
              {dataArbol4 &&
                dataArbol4
                  .inOrden(dataArbol4.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>

            <h2 className="font-bold">Recorrido post-orden: </h2>
            <ul className="flex">
              {dataArbol4 &&
                dataArbol4
                  .postOrden(dataArbol4.raiz)
                  .map((valor, index) => <li key={index}>{valor},</li>)}
            </ul>
          </div>
        </div>
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
                  let valores = []; // Inicializamos un arreglo para almacenar los valores
                  if (nodo !== null) {
                    valores.push(nodo.valor); // Agregamos el valor del nodo actual al arreglo
                    // Concatenamos los valores del subárbol izquierdo y derecho en el mismo arreglo
                    valores = valores.concat(this.preOrden(nodo.izquierda), this.preOrden(nodo.derecha));
                  }
                  return valores; // Devolvemos el arreglo con los valores en pre-orden
                }
              
                // Recorrido in-orden: izquierda, raíz, derecha
                inOrden(nodo) {
                  let valores = []; // Inicializamos un arreglo para almacenar los valores
                  if (nodo !== null) {
                    // Concatenamos los valores del subárbol izquierdo, el valor del nodo actual
                    // y los valores del subárbol derecho en el mismo arreglo
                    valores = valores.concat(this.inOrden(nodo.izquierda), nodo.valor, this.inOrden(nodo.derecha));
                  }
                  return valores; // Devolvemos el arreglo con los valores en in-orden
                }
              
                // Recorrido post-orden: izquierda, derecha, raíz
                postOrden(nodo) {
                  let valores = []; // Inicializamos un arreglo para almacenar los valores
                  if (nodo !== null) {
                    // Concatenamos los valores del subárbol izquierdo, los valores del subárbol derecho
                    // y el valor del nodo actual en el mismo arreglo
                    valores = valores.concat(this.postOrden(nodo.izquierda), this.postOrden(nodo.derecha), nodo.valor);
                  }
                  return valores; // Devolvemos el arreglo con los valores en post-orden
                }
              }
              
              // Definimos un componente funcional llamado ArbolThree
              function ArbolThree() {
                // Definimos cuatro estados utilizando el hook useState para almacenar diferentes árboles
                const [dataArbol1, setDataArbol1] = useState(null); // Estado para almacenar el primer árbol
                const [dataArbol2, setDataArbol2] = useState(null); // Estado para almacenar el segundo árbol
                const [dataArbol3, setDataArbol3] = useState(null); // Estado para almacenar el tercer árbol
                const [dataArbol4, setDataArbol4] = useState(null); // Estado para almacenar el cuarto árbol
              
                const [search, setSearch] = useState(null); // Estado para almacenar el valor de búsqueda
                const [exist, setExist] = useState(false); // Estado para verificar si un nodo existe
              
                // Efecto secundario que se ejecuta solo una vez al montar el componente
                useEffect(() => {
                  // Creamos cuatro árboles binarios diferentes y asignamos diferentes valores a cada uno
                  const arbol1 = new ArbolBinario();
                  arbol1.insertar(20);
                  arbol1.insertar(5);
                  arbol1.insertar(16);
                  arbol1.insertar(10);
                  arbol1.insertar(12);
                  setDataArbol1(arbol1); // Establecemos el primer árbol creado como estado
                  arbol1.preOrden(arbol1.raiz); // Realizamos un recorrido pre-orden en el primer árbol
              
                  const arbol2 = new ArbolBinario();
                  arbol2.insertar(5);
                  arbol2.insertar(18);
                  arbol2.insertar(13);
                  arbol2.insertar(16);
                  arbol2.insertar(15);
                  setDataArbol2(arbol2); // Establecemos el segundo árbol creado como estado
                  arbol2.inOrden(arbol2.raiz); // Realizamos un recorrido in-orden en el segundo árbol
              
                  const arbol3 = new ArbolBinario();
                  arbol3.insertar(10);
                  arbol3.insertar(150);
                  arbol3.insertar(180);
                  arbol3.insertar(140);
                  arbol3.insertar(145);
                  arbol3.insertar(130);
                  arbol3.insertar(135);
                  arbol3.insertar(120);
                  setDataArbol3(arbol3); // Establecemos el tercer árbol creado como estado
                  arbol3.postOrden(arbol3.raiz); // Realizamos un recorrido post-orden en el tercer árbol
              
                  const arbol4 = new ArbolBinario();
                  arbol4.insertar(100);
                  arbol4.insertar(150);
                  arbol4.insertar(200);
                  arbol4.insertar(250);
                  arbol4.insertar(140);
                  arbol4.insertar(190);
                  arbol4.insertar(90);
                  arbol4.insertar(80);
                  arbol4.insertar(85);
                  setDataArbol4(arbol4); // Establecemos el cuarto árbol creado como estado
                }, []); // La dependencia es un arreglo vacío, por lo que este efecto se ejecuta solo una vez al montar el componente
                
              
              
              `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </details>
      </section>{" "}
    </div>
  );
}

export default ArbolThree;
